# 59 张能力卡索引

按问题类型分组；★ critical　○ high　· medium

## 这本书覆盖不覆盖我的问题

- ★ [`ch1-book-map-and-promises`](capabilities/ch1-book-map-and-promises.md)　导论只报了五项、书实为八章：结构动力学基础、刚性路面、钢桥面铺装三章零预告，车路相互作用一项无专章，合计 81 页占 195 页的 42%；更麻烦的是四章章名与它实际讲的东西不是一回事，所以这份地图能用，前提是先把三章、一项与四例不符补齐。
- ★ [`ch1-citation-numbers-discipline`](capabilities/ch1-citation-numbers-discipline.md)　本章的角标有七处错位、牵涉九条文献，引 1.5 段之前必须先过纠正表，区间号拆开一看见越界就整句作废；数字那一侧更硬——六个可复现数没有一个能当量值，四十个百分点无出处、七个百分点归属错，所以凡引数字一律带条件缺失，且不出比值、不出趋势、不做内插。

## 模型该怎么摆、方程该怎么立

- ○ [`ch2-dof-caliber`](capabilities/ch2-dof-caliber.md)　本章的自由度是一个计数口径（完整约束下 N = 3n − s，且等于广义坐标个数），不是建模规模的选择；审一份动力分析时先看约束方程里有没有速度，再看对方有没有把坐标总数说成自由度。
- ○ [`ch2-stiffness-flexibility-swap`](capabilities/ch2-stiffness-flexibility-swap.md)　刚度阵与柔度阵互为逆矩阵，但这条关系只在同一系统同一组坐标下成立，且要先过两道门槛——系统静定、刚度阵行列式不为零；本章对「奇异之后怎么判因」只有一句「柔度阵不存在」，没有判因步骤。
- · [`ch2-three-principles`](capabilities/ch2-three-principles.md)　达朗贝尔把运动改写成平衡、虚功用理想约束判据把约束力整块删掉、拉格朗日再把两者合成 N 个方程；三条原理各有前提（理想约束、完整约束、原点取静平衡），前提破了方程就白立。
- ○ [`ch2-two-dof-modes`](capabilities/ch2-two-dof-modes.md)　两自由度系统走「齐次组 → 同频同相解 → 行列式为零 → ω² 的二次式 → 两个正根 → 代回只取比值」这一条链，输出的振型比是形状不是位移，绝对幅值与稳态响应本章都给不了。
- ○ [`ch4-fe-entry-five-steps`](capabilities/ch4-fe-entry-five-steps.md)　三维动力有限元的入口只有五步、能走通，但十块最要紧的式子一个号都没有，只能按「第四章第三节，p85–p86」引，且弱形式里的阻尼项要自己补。
- ○ [`ch4-wave-speeds-three`](capabilities/ch4-wave-speeds-three.md)　给定弹性模量、泊松比与密度可以算出两个体波速度，给定泊松比可以解出表面波速度，但这三个速度必须一符一速，且表面波那一条只对均匀半空间的远场近表面成立。
- ○ [`ch5-plate-theory-and-forces`](capabilities/ch5-plate-theory-and-forces.md)　薄板只剩挠度一个未知量、厚板把两个转角解放出来，二者的硬分界是转角是否独立而不是板有多厚；弯矩、扭矩与剪力可以由挠度场按二阶导与拉普拉斯量取出来，正应力却因三个符号版本并存而拿不到，本章唯一能给方向的图也只剩图注。

## 材料参数怎么取、能不能互比

- ○ [`ch1-dynamics-entry-review`](capabilities/ch1-dynamics-entry-review.md)　这一章给的是判断力不是算法：静力为什么不够有一条三步链，能不能退回静力有四条件却没有门槛，动力输入要过三类矩阵与阻尼两分三栏，算不动时先归到无限域、边界反射折射、波形转换三类数学困难，然后只剩梁板初等理论与数值两条路——此后全章不再给任何判据。
- ★ [`ch2-damping-identification`](capabilities/ch2-damping-identification.md)　阻尼在本章只有黏性一类能写成线性 c，判档只看 ζ 与 1 的大小；从实测自由衰减波形回到阻尼比要走「相邻峰比 → 取自然对数 → 对数减缩」，峰比本身不是 ζ，且整条链上带着两处未标门槛的近似。
- ★ [`ch2-distributed-mass-rayleigh`](capabilities/ch2-distributed-mass-rayleigh.md)　瑞利法先假定一条满足边界的挠曲形状，把分布质量按形状积分折成端部或跨中的附加质量，再用能量等式求频；指定形状等于加约束，所以估计值只可能偏高，偏低就说明形状或积分错了。
- ○ [`ch2-sdof-frequency-resonance`](capabilities/ch2-sdof-frequency-resonance.md)　单自由度系统由刚度与质量开方即得固有角频率、周期取二π 除之；共振的判据只有一条——激振频率与固有频率重合，此时原振幅分式失去意义、必须改用幅值随时间线性增长的特解，而放大几倍本章给不出。
- · [`ch3-constant-or-not`](capabilities/ch3-constant-or-not.md)　判一个材料参数能不能取常数，就看四条现象有没有命中——蠕变、应力松弛、迟滞回线、应变率敏感；命中任一条就必须给它带自变量，而本章这四条在本材料上一条都没有实测。
- ★ [`ch3-damping-from-decay`](capabilities/ch3-damping-from-decay.md)　三条测阻尼的路子里只有自由衰减能在混合料上做，峰比要先取对数得 Λ 才谈得上 ζ，而表 3-2 那一列「阻尼系数」装的其实是无量纲的 Λ——照列名套 ζ=η/ω，得到的阻尼比会比表值小 7~103 倍。
- ○ [`ch3-damping-test-layout`](capabilities/ch3-damping-test-layout.md)　长梁阻尼试验的布置由试件几何、夹具、温控与四只传感器定下来，四个温度乘两种支承排出来只有七格有数——高温简支那一格是做不出来而不是漏做；同一温度两支承的阻尼差在 4% 到 22% 之间，「差不多」这句话并没有误差门槛撑着。
- ★ [`ch3-dynamic-modulus-caliber`](capabilities/ch3-dynamic-modulus-caliber.md)　「动态模量」在文献里是宽口径，本书把它收窄成正弦稳态下的幅值比并配一个相位角；审一份模量报告就查五件——温度、频率、围压、控制模式、应变上限，而控制模式这一项本章自己两页之内就给了两个相反的答案。
- ○ [`ch3-model-param-completeness`](capabilities/ch3-model-param-completeness.md)　进动力模型要四件——模量随温度与频率、同条件下的相位角、泊松比、阻尼随频率；本章四件缺三件，泊松比这个词出现过一次，符号与数值却都是零次。
- ○ [`ch3-number-quoting-redlines`](capabilities/ch3-number-quoting-redlines.md)　本章三个最容易被搬走的数各缺三件条件：125 με 只是声称上限、判它超不超限还得先有模量，8% 与 31% 只在 25 Hz 的一个截面上成立，3~6 倍缺围压与曲线身份；三处都没有误差门槛。
- ○ [`ch3-phase-angle-and-index`](capabilities/ch3-phase-angle-and-index.md)　相位角量的是黏性成分、模量量的是硬度，两者拼成 |E*|/sinφ 之后只能对同一条件下的材料排序——全章零阈值零分级，两端还分别发散与退化；相位角本身的温度方向两节未调和，只能分温段写。
- ○ [`ch3-speed-to-frequency-10hz`](capabilities/ch3-speed-to-frequency-10hz.md)　频率与加载时长之间只差一条 1/(2πf) 的式子，但时长折成车速有九家互不一致的经验式，10 Hz 与 60~65 km/h 的重合只在 10 Hz 那一点成立，换到 5 Hz 就立刻分成两个答案。
- · [`ch3-spt-specimen-prep`](capabilities/ch3-spt-specimen-prep.md)　SPT 圆柱试件走压实、钻芯、切割三步，几何验收看直径、高度、端面与轴线正交、空隙率四项；三步顺序不能换，因为端面斜一点不会以「试件不合格」报出来，只会以「模量偏低」出现。
- · [`ch3-theoretical-baseline-frequency`](capabilities/ch3-theoretical-baseline-frequency.md)　理论基频与实测并排只为判「测到的是不是这根梁、这一阶」，判据是两个支承的频率之比 2.79 而不是绝对值；本卡那四个频率与这个比值是用 0.6366 与 3.516 算出来的，照印出的 0.632 与 3.567 代值会得 97.1 与 34.9。
- ○ [`ch4-audit-moving-load-report`](capabilities/ch4-audit-moving-load-report.md)　审一份移动荷载路面报告可以按七查逐项打勾——模量、界面、计算域与底面、时间推进、阻尼、荷载与车速、结论范围，其中三项是硬门槛，但七项都没有合格阈值。
- ★ [`ch4-damping-rayleigh`](capabilities/ch4-damping-rayleigh.md)　把阻尼阵写成质量阵与刚度阵的线性组合这一步没问题，第一个系数可算可复核，第二个系数印出来的分子把下标写反、取等阻尼比会得负值，照抄会让时程发散。
- ★ [`ch4-time-integration`](capabilities/ch4-time-integration.md)　中心差分与 Newmark 的主体式、振型叠加整套都能抄，但递推、起步、位移解这三条不能抄——它们分别丢掉了下一步的未知量、给了负一个步长的值、把荷载取到前一时刻。
- ○ [`ch4-worked-example-six-gaps`](capabilities/ch4-worked-example-six-gaps.md)　这个算例够建一个同类模型、够不上复现答案：时间步、两个积分参数、网格尺寸、荷载起始坐标、前两阶频率的数值、阻尼比的口径六项全缺，七个结果值只能当某次计算的输出。
- ○ [`ch6-impedance-route-selection`](capabilities/ch6-impedance-route-selection.md)　被测材料有没有明显黏弹性，决定能不能上共振法——黏弹材料只能走力阻抗法，这一步不需要阈值；而力阻抗能给到的绝对值只到量级，因为设备标定、传感器标定、与钻芯的对照三项一项没有，力那一列还是电压读数，两张数据表又各有错行与异类。
- · [`ch6-non-mechanical-limits`](capabilities/ch6-non-mechanical-limits.md)　雷达、超声、激光三节各只有一段原理，落点都不是「怎么测」而是「给不出值」——雷达的走时换厚度缺该层电磁波速与标定，超声的波速换强度缺测强曲线，激光的读数与真值之间缺一条对齐线，而全章唯一叫「标定」的东西只是某一台传感器的光电流与位移关系。
- ★ [`ch6-surface-wave-modulus`](capabilities/ch6-surface-wave-modulus.md)　单一土层上，模量只由三个量换出来——表面波速、泊松比、密度；而换算要用的那个比值零点五七在表 6-1 的六档里查不到、内插对应泊松比约零点三四，表 6-4 六行只有代它才逐行对上、换零点五八七就整列低六个点上下，所以能算、能自证，却始终缺一句出处。
- ○ [`ch7-cn-table-lock`](capabilities/ch7-cn-table-lock.md)　一张 C、n 表能不能用，取决于三件事同时在场：六项锁定齐不齐、C 后面有没有 (MPa·m^{1/2})^{−n} 这半截量纲、排序有没有指定同一个 ΔK 窗口——而本章的表六项里最多齐三项、量纲全缺后半截、原始 da/dN–ΔK 点一个没有，所以只能同条件比快慢，不能代算、不能跨表比大小。
- ○ [`ch7-load-history-and-dynamics`](capabilities/ch7-load-history-and-dynamics.md)　荷载时程是本章唯一能复算的一段——峰值、周期、九个点齐备，复算偏差在万分之四以内；但它服务的两样东西都不能用：缝端场强的峰值只到量级（末点差十三点九倍、零阻尼那档基本拟静态），敏感频率更不可判（响应峰与模态差约四十五倍，含缝结构频率还反升一倍半而作者未解释）。
- ★ [`ch7-no-lifetime-scope`](capabilities/ch7-no-lifetime-scope.md)　本章只有断裂这一条线，没有寿命那一条：S-N 曲线、N_f 表达式、K 随缝长的变化、损伤变量、Miner 与当量轴载换算五样一样都没有，所以凡问「多少次循环、多少年、损伤几成」，本章一律答不了，只能当场报出缺的是哪几样。
- ○ [`ch8-rayleigh-coefficients`](capabilities/ch8-rayleigh-coefficients.md)　两个 Rayleigh 系数可以自己复算到四位——把两个模态频率按 rad/s 代入化简式、阻尼比取 0.1，就得到 6.8236 与 0.00144，与正文吻合；但这两个频率正文没印单位、也不能由本章车辆参数反推，按赫兹代会整体差 2π 倍，所以它们只能当给定输入。
- ○ [`ch8-single-factor-sweep`](capabilities/ch8-single-factor-sweep.md)　同一个因素只动一次、位移与应力分报，本章给出的对照是位移 2–3.5%、应力 15–20%，差一个量级；但门槛是定性的、两档平整度没有 IRI、模量有 680／700／600 三个基准，所以能交付的只有方向与量级，不能跨档连线、也不能把应力变大读成更易开裂。

## 响应与荷载：审报告、判方法

- ○ [`ch1-vehicle-road-tripartite`](capabilities/ch1-vehicle-road-tripartite.md)　作者把车与路的动力作用系统拆成三块并给了三条研究路线，章内只接通两条接口（平整度进车辆模型、车辆动载进响应核），五节之间的接口一处都没有；而全章唯一的图只覆盖这一节内部三块、图内容还不可核，所以它只能当概念框图，不能当方法图或全书路线图。
- ★ [`ch4-before-citing-five-redlines`](capabilities/ch4-before-citing-five-redlines.md)　引本章之前先过五条排除：表面波速不能反算模量、单点位移不是弯沉盆、没有材料函数就不叫黏弹性、移动荷载不等于车辆振动、见到 Hankel 先确认荷载是单个圆。
- ★ [`ch4-dynamic-static-four-metrics`](capabilities/ch4-dynamic-static-four-metrics.md)　能动/静成对比较的只有路表位移、两个压应力与最大剪应力四项，两个拉应力没有对照；那个 88% 是两个深度的位移相除、随截断深度变，既不是按层分解的份额，也不能反推处治效果。
- ★ [`ch4-layered-halfspace-setup`](capabilities/ch4-layered-halfspace-setup.md)　本章主干是两条互不兼容的解析链加一句自我否定，能不能用取决于三条隐含前提写没写全、走的是哪一条、口径是稳态还是变换域。
- ○ [`ch4-three-transforms-and-load-series`](capabilities/ch4-three-transforms-and-load-series.md)　沿路方向走 Fourier、时间走 Laplace、径向走 k 阶 Hankel，把方程压成只对深度求导的常微分方程；轮载则先截成半正弦再周期化取系数，但脉冲多宽这一步本章没给。
- ○ [`ch5-moving-load-premises`](capabilities/ch5-moving-load-premises.md)　移动车轮能写进代码的只是「两对跃阶框住矩形、中心按速度前移」这个形式，而它能成立要先过三道前提：板在行进方向无限长、横向两条对边都简支、荷载是单块矩形匀速；三条本章都没在题设里写全，闭式解又断在系数定义上。
- ○ [`ch6-fwd-field-record`](capabilities/ch6-fwd-field-record.md)　FWD 的现场规程是本章唯一能照做的一节，四件事是硬的——一个点不少于三锤、取末两锤的算术平均、两锤之间留一到两分钟、一个盆不少于六个读数；但这四条只保证两家打的是同一套程序，判不了谁的数对，而「打完了怎么反算」根本不在这一节里。
- ○ [`ch6-linear-elasticity-and-deflection`](capabilities/ch6-linear-elasticity-and-deflection.md)　多级荷载下弯沉与荷载成不成比例，这一步能判方向却判不了程度，因为「成比例」的容差全章没有；弯沉只是厚度、刚度、温湿度、交通与龄期的综合反映，拿它单独代表承载力会被作者本人否掉，而他给出的替代路线（先定各层模量）在本章是空的。
- ○ [`ch6-phase-velocity-premises`](capabilities/ch6-phase-velocity-premises.md)　相速法的波长有三种测法，选哪一条只看波长相对测线多长，而无论走哪一条都要先过两道门——波长要短于被测那一层的厚度，相位与距离要成一条直线；第二道门作者只描述了现象没给处置办法，所以遇到驻波只能停，穿透深度与等效厚度在本章也都只剩定性。
- ○ [`ch6-slab-void-identification`](capabilities/ch6-slab-void-identification.md)　板底脱空三条判法里只有第二条带数值门槛，而那个门槛只有在三级荷载、板角测点、NCHRP 来源三条件同时在场时才算数；另外两条一条只到「疑似」，一条因为缺诺谟图与单位连「小于一」都带不上量纲，所以三种判法一起也只能回答有没有，回答不了多大。
- ★ [`ch8-amplification-caliber`](capabilities/ch8-amplification-caliber.md)　1.73 是轮载峰值与标准轴载的力比，1.34 与 1.24 才是位移与应力的响应比，把前者乘到响应上会得到 1.081 mm、比随机动载的 0.836 高 29%；而表 8-16 中间那一栏的两行还分别来自两个阻尼比，整栏都不能照抄。
- ★ [`ch8-scenario-triage`](capabilities/ch8-scenario-triage.md)　拿来一份钢桥面铺装的动力分析，先问三件事：车是怎么进模型的（只当力／当质量／当质量-弹簧-阻尼）、这份结果比同条件静力多出多少（只多百分之几就是恒载伪装）、这些数能不能与第 4 章并排（支承、模量口径、控制指标三样全不同）；三问答完，才谈得上引不引这一章。

## 刚性路面 / 板与地基

- ★ [`ch5-citation-redlines`](capabilities/ch5-citation-redlines.md)　审一份板—地基动力分析时先问三件事——板是不是无限长条带、界面会不会脱开、有没有耗能；再记住三件事本章根本不能问——接缝传荷、板底脱空、算例对表；最后记住全章一个工程取值都没有，凡挂在本章名下的数都必须另找出处。
- ○ [`ch5-foundation-tier-choice`](capabilities/ch5-foundation-tier-choice.md)　四种线性地基是四种彼此并列的假设而不是四档精度，选哪一档只看邻点要不要互牵、要不要算基底以外沉降、以及手头资料能不能给出处；选弹簧档会把板外沉降抹平，选连续介质档会把扩散范围与沉降都算大，而照 5-45 那句反算则会把压缩与剪切整个对调。
- · [`ch5-halfspace-flexibility`](capabilities/ch5-halfspace-flexibility.md)　半空间这一路用一根链杆把一个板节点接到地基、把每个矩形单元面积的四分之一摊给相邻四杆，再用本点多边形积分与两点距离负一次方建柔度阵，求逆后与板刚度相加解一次方程组；链条闭合，但结果依赖网格、非对角元是近似、角隅区因反力与转角解耦而不可信。
- · [`ch7-criteria-selection`](capabilities/ch7-criteria-selection.md)　能量、场强、J 积分三套判据在弹性范围内说的是同一件事，能互推不能互代；本章给得出的是选取的理由与一条纯比例（应力翻倍则容许缝长降到四分之一），给不出任何毫米数，因为三个临界值一个都没有、表面能没有取值、缝端场那串式子还坏在 7-38 与 7-41 上。

## 检测与反演

- ★ [`ch6-inversion-redlines`](capabilities/ch6-inversion-redlines.md)　本章的重心号称是弯沉盆反演各层模量，实际只交代了一句「迭代到差值满足精度」，层数、厚度、初值、目标函数、收敛阈值、唯一性六件一件没有，所以凡在这章名下谈反演，先要过三条红线：等效自由层是作者自陈的让步且误差未量化、层数与厚度得由使用者给定而本章无规则、反演值是等效线弹性而非第 3 章那个复模量。

## 疲劳、断裂、光纤监测

- · [`ch7-botda-field-reading`](capabilities/ch7-botda-field-reading.md)　BOTDA 在路面上能照着埋一遍、也能读出三条曲线，但读不出量值：频移被应变与温度同时推动而两个系数都没有数值，温度那一侧只是假定线性，残余应变由两次相减得来而温度项没有扣掉，缝宽只能报量级并带零点一毫米的误差，图上那条曲线还只许取符号与位置。
- ★ [`ch7-fiber-detectability`](capabilities/ch7-fiber-detectability.md)　一条缝能不能被光纤抓到，由三道串联的阈值决定——感知精度、滑移起点、断纤上限，裸纤与紧套各一套数；而精度这一道必须两个口径并列，因为作者声明的零点零三与零点一毫米，按他自己给的仪器精度反推只相当于零点零零五与零点零二二毫米，前者是测过的最小缝宽而不是能测的最小缝宽。

## 钢桥面铺装

- ○ [`ch8-baseline-peak`](capabilities/ch8-baseline-peak.md)　基准工况是一整套条件——表 8-1 的几何与材料、四条假定、横向荷位压侧肋正上方、步长 0.1 m、60 km/h、ζ=0.1——六件齐了才谈得上那两个峰值（−0.625 mm 与 0.125 MPa）；峰值从 E 点与 C 点代理读出，代理要先自定门槛验证，而四条假定里隔板底全约束与界面完全连续各有代价。
- ○ [`ch8-interface-caliber`](capabilities/ch8-interface-caliber.md)　本章对铺装与钢板的界面给了两套相反的做法——8.2 当它完全连续、黏结层并进铺装根本不建，8.4 又用 τ=Kτ_c 把它当主变量——而那个 0 到 1 的系数没有定义、没有标定、中间档没有值，承载结论的两张图也无注无数，所以层间只能写方向，写不出幅度。
- · [`ch8-iri-to-spectrum`](capabilities/ch8-iri-to-spectrum.md)　从一个 IRI 数出发，本章能把谱值与高程时程造出来（谱值正比于 IRI 的平方，级数条数 400、路段长 200 m 都给了），但再往后的加速度与轮载两步都断了——求二阶导的式子印坏、车辆方程的刚度项印成负号，所以这条链只能走到高程为止。
- ★ [`ch8-k-absolute`](capabilities/ch8-k-absolute.md)　裂尖 K 的绝对值要先改分母（8-48 印 2k+1，按 8-47b 取 θ=180° 应为 2(k+1)，K 乘 1.1852、偏大 18.5%）、再与 8-46 的 0.6267E 对账，然后还得承认它是准静态反算的；比值与排序免疫于这个公因子（IRI 2→12 的 44.2% 可用），绝对值不免疫。

## 其他

- ○ [`ch7-crack-length-calibers`](capabilities/ch7-crack-length-calibers.md)　本章的缝长有三个互不相通的来路：由柔量反算的当量初缝、别人为分段定的切口、有限元里那条贯穿基层的几何缝深，三者从未换算过一句；而 K 随缝长的平方根走，毫米级与厘米级之间 K 就差七到十倍，所以任何一处缝长不贴标签，后面所有 K 都不可比。
