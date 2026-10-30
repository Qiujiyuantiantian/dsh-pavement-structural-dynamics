---
name: pavement-structural-dynamics
description: |
  当用户处理路面**结构动力学**问题——动载下路面响应、材料动态参数（动态模量/主曲线/阻尼）、板与弹性地基、FWD 检测与模量反演、疲劳与断裂、钢桥面铺装动力响应——或需要判断该用哪套判据、哪条链能不能走通、一份分析报告该怎么审时调用。特点：这是一个**判据手册而非计算器**——它明确告诉你哪章名不副实、哪些式子抄走就错、哪些数不能互引，以及在缺什么的时候必须停下。不适用于：直接给公式或代码；替用户算弯沉、模量、寿命、脱空尺寸；温度场与季节修正；层间界面建模；按规范做设计验算。本 skill 派生自《路面结构动力学》（人民交通出版社），是转述与结构化，不是原书替代品；全部公式未与原版面图核对，数值须回原书页码。Triggers: 路面动力学/动态响应/车路耦合/移动荷载/动态模量/复数模量/主曲线/移位因子/阻尼比/固有频率/共振/板与地基/基床系数/弯沉/弯沉盆/FWD/模量反演/脱空/疲劳/断裂/应力强度因子/Paris/裂缝/钢桥面/正交异性/铺装/有限元/层状体系
metadata:
  source-book: 路面结构动力学（8 章 / 204 页）
  capability-count: 59
  chapters: 8
  gate-status: 8/8 章四守门全过
  blind-test: 12 题，0 处编造，7 道该拒绝的题全部拒绝成功
---

# 路面结构动力学 — 判据与边界手册

## 触发与不触发

**适用**：与本书八章能力域相关的咨询与判断（见下方路由表）。
**不适用**：
- 需要代值求结果的定量问题（全书式子未核对，唯一算例复现不出来）
- 直接给出某条实际道路的弯沉、模量、阻尼比或疲劳寿命
- 温度场与季节修正、层间界面建模、按规范做设计验算
- 把卡里的式子当成可运行代码

## 核心原则（常驻速览）

1. **章名不等于内容。** 四章名不副实：ch2「结构动力学基础」里「路面」只出现 2 次；
   ch5「刚性路面」里接缝/传荷/脱空各 0 次、正文一个物理单位都没有；
   ch7「疲劳与断裂」没有 S-N、没有寿命式、没有损伤变量；ch8 钢桥面与 ch4 是两套体系。
   按章名去查会得到「书上写了」的错误印象——先查 `references/overview.md` 的对照表。

2. **三条红线不可互引。** ch3 的 |E*| ≠ ch6 的反演模量（后者无温度修正）；
   ch4 的 4 m 底面 ≠ 半空间；ch8 的铺装 ≠ ch4 的路面结构。详见 `references/cheatsheet.md`。

3. **阻尼与模量的频段不重叠。** 阻尼实测在梁基频（7.3–103.3 Hz），模量扫 0.1–25 Hz，
   两套频率轴不相交——同一频率下配不出 (|E*|, ζ) 一对值。凡「同时取模量与阻尼」的诉求，
   等于替作者补数据。

4. **反演六件全无。** ch6 的 FWD 模量反演缺层数、厚度、初值、目标函数、收敛阈值、唯一性
   六件，全章连「唯一/多解」都没出现过。严格算，全章只有 FWD 现场操作规程一条能照做。

5. **数值一律不能当量值。** ch1 的六个可复现数字全部缺条件（40% 无角标、7% 归属错），
   ch4 的唯一算例缺六个实施参数，ch8 的 1.73 是力之比不是响应放大。

## 路由表

| 问题 | 去哪 |
|---|---|
| 这本书覆盖不覆盖我要的问题 / 全书怎么读 | `references/overview.md` + `references/capabilities/ch1-book-map-and-promises.md` |
| 引哪个文献号、哪个数能不能用 | `references/capabilities/ch1-citation-numbers-discipline.md` |
| 该不该转动力分析 / 车路怎么拆 | `references/capabilities/ch1-dynamics-entry-review.md`、`references/capabilities/ch1-vehicle-road-tripartite.md` |
| 方程怎么立、自由度怎么数、阻尼怎么反算 | ch2 × 7：`ch2-three-principles`、`ch2-dof-caliber`、`ch2-damping-identification`、`ch2-sdof-frequency-resonance`、`ch2-two-dof-modes`、`ch2-stiffness-flexibility-swap`、`ch2-distributed-mass-rayleigh` |
| 材料参数怎么定、主曲线怎么用、阻尼从哪来 | ch3 × 10：先读 `ch3-model-param-completeness`、`ch3-damping-from-decay` |
| 响应怎么算、报告怎么审 | ch4 × 10：先读 `ch4-audit-moving-load-report`、`ch4-before-citing-five-redlines` |
| 板与地基、地基四档怎么选 | ch5 × 5：先读 `ch5-foundation-tier-choice`、`ch5-citation-redlines` |
| 检测与反演 | ch6 × 8：先读 `ch6-inversion-redlines`、`ch6-fwd-field-record` |
| 疲劳、断裂、光纤能不能测 | ch7 × 7：先读 `ch7-no-lifetime-scope`、`ch7-fiber-detectability` |
| 钢桥面铺装 | ch8 × 8：先读 `ch8-scenario-triage`、`ch8-k-absolute` |

全 59 张按问题类型分组见 `references/capability-index.md`。

## 引用纪律

- 卡内公式一律带〔公式待核〕——**未与原版面图核对**，不可直接代值；
- 数值一律带〔数值待核原图〕，且须连条件一起引（温度／频率／单位制／荷载口径）；
- 看到卡的 E 段「停判点」就照它停——那不是免责声明，是这本书实际给不出的东西。

## 来源

《路面结构动力学》（人民交通出版社），8 章 204 页。逐章拆分与蒸馏流程见 `README.md`。
本书转述而成，**不替代原书**；所有页码为 PDF 页序，印刷页 = PDF − 9。
