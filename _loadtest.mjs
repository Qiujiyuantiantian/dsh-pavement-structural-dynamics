// Load-test the plugin the way DSH would: import startup.js, hand it a mock ctx.skills,
// and confirm the skill registers with a usable name/description/content and that every
// references/ path mentioned in SKILL.md actually exists on disk.
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG = HERE;  // 本脚本就在包根目录
const SKILL_DIR = join(PKG, 'skills', 'pavement-structural-dynamics');

const registered = [];
const ctx = { skills: { register: (s) => registered.push(s) } };

// Windows 绝对路径不能直接交给 ESM 的 import()，须转 file:// URL
const mod = await import(pathToFileURL(join(PKG, 'lib', 'startup.js')).href);
mod.default(ctx);

let fail = 0;
const say = (ok, msg) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`); if (!ok) fail++; };

say(registered.length === 1, `注册了 ${registered.length} 个 skill（应为 1）`);
if (registered.length === 1) {
  const s = registered[0];
  say(s.name === 'pavement-structural-dynamics', `name = ${s.name}`);
  say(typeof s.description === 'string' && s.description.length > 200,
      `description 长度 ${s.description?.length}（应 >200）`);
  say(!s.description.startsWith('|') && !s.description.startsWith('>'),
      'description 不是未被解析的块标量标记');
  say(typeof s.content === 'string' && s.content.includes('路由表'),
      `content 含路由表（${s.content?.length} 字符）`);
  say(s.resourceBase?.kind === 'directory' && existsSync(s.resourceBase.path),
      `resourceBase 指向真实目录`);

  // SKILL.md 里提到的 references/... 必须都存在
  const paths = [...s.content.matchAll(/`?(references\/[A-Za-z0-9._\/-]+)`?/g)].map((m) => m[1]);
  const uniq = [...new Set(paths)];
  const missing = uniq.filter((p) => !existsSync(join(SKILL_DIR, p)));
  say(missing.length === 0, `SKILL.md 引用的 references 路径 ${uniq.length} 个，缺失 ${missing.length}`);
  for (const m of missing) console.log(`       缺: ${m}`);
}

console.log(fail === 0 ? '\nRESULT: PASS' : `\nRESULT: FAIL (${fail})`);
process.exit(fail === 0 ? 0 : 1);
