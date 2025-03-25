// 定义全局变量
let currentSubject = 'chinese'; // 默认选中语文
let isMobileDevice = false; // 是否为移动设备

// 知识点数据库
const knowledgeData = {
    chinese: [
        "文言文常见实词：举（推举、提出）、谓（说、称为）、徙（迁移、改变）、致（送、招致）、却（退、离开）等。",
        "现代文阅读技巧：分析人物形象时要注意人物的语言、行动、心理、外貌描写，把握作者情感倾向。",
        "记叙文常见表达方式：叙述（交代事情经过）、描写（刻画人物、景物特征）、议论（发表看法和评论）、抒情（抒发感情）、说明（解释事物）。",
        "诗歌三要素详解：诗眼（点睛之笔）、诗脉（情感脉络）、诗魂（核心思想）。正确把握这三点是理解古诗的关键。",
        "说明文常用说明方法：举例说明（用具体事例）、分类说明（按类别介绍）、下定义（解释概念）、作比较（通过对比突出特点）。",
        "修辞手法及效果：比喻（使表达形象生动）、拟人（赋予生命力）、夸张（强调特点）、对比（突出差异）、排比（加强气势）、设问（引人思考）、反问（强化语气）。",
        "议论文三要素详解：论点（中心观点，要明确、具体）、论据（支持论点的事实和道理）、论证（证明论点的推理过程，包括归纳、演绎、类比等方法）。",
        "病句类型及修改方法：语序不当（调整语序）、搭配不当（改正搭配）、成分残缺（补充缺失成分）、结构混乱（调整句子结构）。",
        "古诗文中常见的通假字（一字代替另一字）和古今异义词（古代意义与现代不同的词）辨析及例子。",
        "作文素材积累方法：收集名言名句（古今中外经典语录）、典型事例（历史和现实生活中的典型事件）、时事热点（社会关注的热点问题及评论）。"
    ],
    math: [
        "一元二次方程求根公式详解：x = [-b ± √(b² - 4ac)]/2a，其中a、b、c是方程ax² + bx + c = 0的系数，△=b²-4ac为判别式。",
        "二次函数y = ax² + bx + c的顶点坐标计算：(-b/2a, c - b²/4a)，顶点是函数图像的最高点或最低点，取决于a的正负。",
        "圆的标准方程详解：(x - a)² + (y - b)² = r²，其中(a,b)是圆心坐标，r是半径。扩展形式x² + y² + Dx + Ey + F = 0的圆心为(-D/2, -E/2)。",
        "相似三角形的判定方法：1)三边成比例；2)两角相等；3)两边成比例且夹角相等。相似三角形的面积比等于相似比的平方。",
        "勾股定理及其应用：a² + b² = c²，其中c为直角三角形斜边长，a和b为两直角边长。可用于计算距离、高度和各种实际问题。",
        "平行四边形的面积公式及证明：S = ah，a为底边长，h为高。可以推导出其他四边形（如梯形、三角形）的面积公式。",
        "概率的基本公式与应用：P(A) = 事件A发生的次数/总试验次数，包括加法公式P(A∪B) = P(A) + P(B) - P(A∩B)和乘法公式P(A∩B) = P(A)P(B|A)。",
        "一次函数y = kx + b的斜率k与截距b的几何意义：k表示函数图像的倾斜程度，b表示函数图像与y轴的交点。两点式：y - y₁ = k(x - x₁)。",
        "等比数列的通项公式与前n项和：an = a₁ · rⁿ⁻¹，Sn = a₁(1-rⁿ)/(1-r) (r≠1)，其中r为公比。可用于复利计算、人口增长等问题。",
        "正弦定理及其应用：sin A/a = sin B/b = sin C/c = 2R（R为外接圆半径），可用于求解三角形中的未知边长和角度。"
    ],
    english: [
        "九年级重点时态用法与区别：一般现在时（表示习惯、事实），一般过去时（过去发生的事），现在完成时（过去发生且与现在有联系），过去进行时（过去某时正在进行）。",
        "初中常用连词及用法：and（连接并列成分），but（表转折），or（表选择），so（表结果），because（表原因），if（表条件），when（表时间），while（表同时或对比）。",
        "被动语态的完整结构与时态变化：be + 过去分词。不同时态对应的被动语态形式，如is/are done（一般现在时），was/were done（一般过去时），will be done（一般将来时）等。",
        "情态动词详解：must（表必须、推测），should（表建议、义务），can（表能力、可能性、许可），may（表许可、可能性），might（表更小的可能性）等，及其否定形式和过去式。",
        "定语从句中关系词的选择规则：who（指人，作主语或宾语），which（指物，作主语或宾语），that（指人或物，作主语或宾语），whose（表所属关系），where（指地点），when（指时间）。",
        "形容词和副词的比较级和最高级构成规则与特殊形式：规则变化（如clean-cleaner-cleanest），不规则变化（如good-better-best），及其在句中的正确使用方法。",
        "间接引语的转换规则详解：时态后退（如现在时变为过去时），人称变化，时间和地点状语的变化（如now→then，here→there），以及疑问句变为陈述句的语序调整。",
        "常见介词短语及其用法：look for（寻找），get up（起床），take part in（参加），go on（继续），depend on（依靠），consist of（由...组成），according to（根据）等。",
        "复合句连接词详解：not only...but also...（不仅...而且...），either...or...（或者...或者...），neither...nor...（既不...也不...），both...and...（既...又...），as soon as（一...就...）。",
        "中考常见话题及核心词汇：学校生活（education, classroom, assignment），环境保护（environment, pollution, recycle），健康饮食（healthy, nutrition, balanced），科技发展（technology, innovation, device），文化交流（culture, tradition, exchange）。"
    ],
    physics: [
        "牛顿三大定律完整表述：惯性定律（静止或匀速直线运动的物体会保持这种状态，直到受到外力）、F=ma（加速度与所受合外力成正比，与质量成反比）、作用力与反作用力（两个物体间的作用力与反作用力大小相等，方向相反，作用在不同物体上）。",
        "功的计算公式及应用：W = Fs·cosα，其中F为力，s为位移，α为力与位移方向的夹角。当α=0°时，W=Fs；当α=90°时，W=0；当α=180°时，W=-Fs。",
        "功率的计算公式与单位：P = W/t（瞬时功率为P = Fv），单位为瓦特(W)。1千瓦(kW)=1000瓦特，常用于计算电器的能量消耗和效率分析。",
        "杠杆平衡条件详解：F₁·L₁ = F₂·L₂，即动力矩等于阻力矩。杠杆可分为三类：第一类（支点在中间），第二类（阻力在中间），第三类（动力在中间）。",
        "密度计算公式与物理意义：ρ = m/V，表示单位体积物质的质量，单位为kg/m³。不同状态（固、液、气）的物质密度差异及其应用（如浮力、沉浮现象）。",
        "压强计算公式与单位：p = F/S，单位为帕斯卡(Pa)，1Pa=1N/m²。压强与受力面积成反比，这解释了为什么锋利的刀具更容易切割物体。",
        "液体压强公式的推导与应用：p = ρgh，其中ρ为液体密度，g为重力加速度，h为液面至该点的深度。可用于计算水坝受力、潜水深度对应的压强等问题。",
        "电功率公式及其变形：P = UI（功率等于电压乘以电流），P = I²R（串联电路），P = U²/R（并联电路）。常用于计算电器的能耗和电路设计。",
        "欧姆定律完整表述：I = U/R，电流强度与电压成正比，与电阻成反比。适用条件：恒温下的金属导体。串联电路总电阻R = R₁ + R₂ + ...，并联电路总电阻1/R = 1/R₁ + 1/R₂ + ...。",
        "焦耳定律及应用：Q = I²Rt，电流通过导体产生的热量与电流的平方、电阻和时间成正比。应用于电热器的设计，如电水壶、电暖气等。"
    ],
    chemistry: [
        "化学式的多重意义详解：代表一种物质（如H₂O代表水），表示分子组成（如H₂O表示由2个H原子和1个O原子组成），表示质量比（如H₂O中H:O=1:8）。相对分子质量的计算方法。",
        "化学方程式的严格定义：表示反应前后的物质种类、物质的化学计量数（反应物和生成物的物质的量之比）。配平方法及质量守恒、元素守恒的应用。",
        "常见酸的化学式、性质与应用：盐酸(HCl：无色刺激性气味，强酸)、硫酸(H₂SO₄：油状液体，强酸，脱水性)、硝酸(HNO₃：无色液体，强氧化性)。它们与金属、碱、碳酸盐的反应规律。",
        "金属活动性顺序表完整解读：K, Ca, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Hg, Ag, Pt, Au，活动性越强的金属越容易失去电子。应用：预测金属与酸、盐溶液反应的发生，金属置换反应。",
        "氧化还原反应的本质与判断：元素化合价的升高为氧化（失电子过程），降低为还原（得电子过程）。氧化剂与还原剂的识别方法，以及氧化还原反应的配平技巧。",
        "溶液的质量分数计算与应用：w = m溶质/m溶液 × 100%。溶解度曲线的理解与使用，溶液的稀释和混合计算，以及溶液浓度的相互转换。",
        "基本实验操作的原理与步骤：过滤（分离不溶性固体与液体）、蒸发（获得溶质）、结晶（纯化物质）、蒸馏（分离挥发性不同的液体）。实验中的注意事项和安全防护。",
        "物质的三态变化过程与能量关系：熔化（固→液，吸热）、凝固（液→固，放热）、汽化（液→气，吸热）、液化（气→液，放热）、升华（固→气，吸热）、凝华（气→固，放热）。相变温度和潜热的概念。",
        "常见碱的化学式、性质与应用：氢氧化钠(NaOH：白色固体，强碱，具腐蚀性)、氢氧化钙(Ca(OH)₂：白色粉末，微溶于水)。它们与酸、某些金属氧化物和盐的反应规律。",
        "中和反应的本质与应用：酸+碱=盐+水，如HCl + NaOH = NaCl + H₂O。酸碱中和滴定、PH指示剂的变色原理及选择，生活中常见的中和反应例子（如胃酸过多服用碱性药物）。"
    ],
    politics: [
        "青少年的正确价值观四大支柱：爱国主义（热爱祖国，忠于人民）、集体主义（顾全大局，合作共赢）、社会主义（共同富裕，公平正义）、辩证唯物主义（实事求是，与时俱进）。具体表现与实践要求。",
        "公民的基本权利和义务全面解析：选举权与被选举权（参与国家政治生活的基本方式）、受教育权（国家保障的基本文化权利）、服兵役的义务（保卫祖国的神圣职责）等。权利与义务的辩证关系。",
        "我国的根本政治制度-人民代表大会制度：本质是人民当家作主，组织形式是民主集中制。全国人大是最高国家权力机关，有立法权、决定权、任免权、监督权。与西方政治制度的本质区别。",
        "我国的基本经济制度详解：公有制为主体（国有经济、集体经济），多种所有制经济共同发展（非公有制经济）。坚持和完善这一制度的意义，以及在社会主义市场经济中的具体实践。",
        "社会主义核心价值观的24字真言深度解读：国家层面（富强、民主、文明、和谐）、社会层面（自由、平等、公正、法治）、个人层面（爱国、敬业、诚信、友善）。在日常生活中的践行方式。",
        "义务教育的三大特点与意义：强制性（法律强制实施）、普遍性（面向所有适龄儿童少年）、免费性（国家财政保障）。义务教育对个人发展和国家发展的重要性，以及当前我国义务教育的成就与挑战。",
        "民族团结的意义和重要性全面分析：是国家统一的基础，是社会稳定的保障，是共同发展的条件。我国56个民族的大家庭，民族区域自治制度的实施，以及铸牢中华民族共同体意识的具体举措。",
        "可持续发展观的内涵与实践：经济发展与环境保护和谐统一，追求人与自然和谐相处。节约资源、保护环境的重要性，绿色发展、循环经济的具体措施，以及生态文明建设的最新成果。",
        "法治意识与法律在现代社会中的重要地位：法律是社会规范的重要形式，维护社会秩序，保障公民权益。法治思维的培养方法，学法、懂法、守法、用法的具体实践，以及我国全面依法治国的进程。",
        "热爱中华文化，增强文化自信的现实意义：中华优秀传统文化是中华民族的精神命脉，是文化自信的重要源泉。弘扬传统文化与创新发展的关系，文化传承与文化交流的互动，建设社会主义文化强国的路径。"
    ],
    history: [
        "鸦片战争(1840年)详解：英国发动侵略战争，清政府战败，被迫签订不平等条约《南京条约》，割让香港岛，赔款2100万银元，开放五个通商口岸。中国开始沦为半殖民地半封建社会，近代中国社会性质的转变。",
        "戊戌变法(1898年)始末：康有为、梁启超等人发起的改良主义运动，主张学习西方，推行君主立宪制。历时103天，慈禧太后发动政变，囚禁光绪帝，六君子被杀。改革失败原因及历史教训分析。",
        "辛亥革命(1911年)历程：武昌起义爆发，各省响应，推翻清朝统治，建立中华民国。孙中山被推举为临时大总统，颁布《临时约法》。革命成果被袁世凯窃取，民主共和制度未能巩固。革命的历史意义及局限性。",
        "五四运动(1919年)背景与影响：巴黎和会中国外交失败，北京学生游行示威，反对帝国主义、封建主义，工人阶级加入。是中国新民主主义革命的开端，促进了马克思主义在中国的传播，推动了中国人民的思想解放。",
        "中国共产党成立(1921年)的历史条件：第一次世界大战后中国社会矛盾激化，俄国十月革命的影响，五四运动促进马克思主义传播。中共一大在上海召开，确定党的奋斗目标。中国革命从此有了坚强的领导核心，是中国历史的转折点。",
        "抗日战争(1937-1945年)的全面历程：从卢沟桥事变到日本投降，中国人民在中国共产党领导下，实行全民族抗战。正面战场与敌后战场配合，最终取得胜利。抗战的世界意义及对中华民族精神的锤炼。",
        "中华人民共和国成立(1949年)的伟大意义：毛泽东在天安门城楼上宣告中华人民共和国成立，中国人民站起来了。新中国成立是中国历史的新纪元，实现了中国从半殖民地半封建社会到人民民主社会的转变。",
        "改革开放(1978年)的历史背景与成就：十一届三中全会作出实行改革开放的重大决策，确立社会主义现代化建设的正确道路。40多年来的巨大变化，中国特色社会主义道路的形成与发展，中国国际地位的提升。",
        "香港回归(1997年)与澳门回归(1999年)的历史过程：中英、中葡谈判，《中英联合声明》与《中葡联合声明》的签署，'一国两制'方针的确立与实践。回归标志着结束中国近代以来蒙受的屈辱历史，维护了国家主权和领土完整。",
        "中华优秀传统文化的传承与创新机制：儒家思想、道家思想、法家思想等多种思想的精华及其当代价值。传统文化中的仁爱、诚信、和谐等理念对现代社会的指导意义。创造性转化、创新性发展的具体途径与方法。"
    ]
};

// 励志名言数据库
const motivationalQuotes = [
    "天道酬勤",
    "厚积薄发",
    "行百里者半九十",
    "不经一番寒彻骨",
    "世上无难事",
    "书山有路勤为径",
    "滴水穿石",
    "业精于勤",
    "一分耕耘，一分收获",
    "知识改变命运",
    "天行健",
    "志当存高远",
    "路漫漫其修远兮",
    "不积跬步，无以至千里",
    "宝剑锋从磨砺出"
];

// 获取DOM元素
const daysElement = document.getElementById('days');
const currentDateElement = document.getElementById('current-date');
const quoteElement = document.getElementById('motivational-quote');
const chineseKnowledgeElement = document.getElementById('chinese-knowledge');
const mathKnowledgeElement = document.getElementById('math-knowledge');
const englishKnowledgeElement = document.getElementById('english-knowledge');
const physicsKnowledgeElement = document.getElementById('physics-knowledge');
const chemistryKnowledgeElement = document.getElementById('chemistry-knowledge');
const politicsKnowledgeElement = document.getElementById('politics-knowledge');
const historyKnowledgeElement = document.getElementById('history-knowledge');

// 获取学科选择相关元素
const subjectCheckboxes = document.querySelectorAll('input[name="subject"]');
const selectAllBtn = document.getElementById('select-all');
const deselectAllBtn = document.getElementById('deselect-all');
const knowledgeItems = document.querySelectorAll('.knowledge-item');

// 获取日期选择器相关元素
const editDateButton = document.getElementById('edit-date-button');
const datePickerContainer = document.getElementById('date-picker-container');
const examYearSelect = document.getElementById('exam-year');
const examMonthSelect = document.getElementById('exam-month');
const examDaySelect = document.getElementById('exam-day');
const dateSaveButton = document.getElementById('date-picker-save');
const dateCancelButton = document.getElementById('date-picker-cancel');

// 检测是否在浏览器中作为壁纸运行
function isBrowserWallpaper() {
    return window.location.protocol === 'file:' || window.location.hostname === 'localhost';
}

// 初始化浏览器壁纸模式
function initBrowserWallpaper() {
    if (isBrowserWallpaper()) {
        document.body.classList.add('browser-wallpaper');
        
        // 确保所有内容可见
        const container = document.querySelector('.container');
        if (container) {
            container.style.opacity = '1';
            container.style.visibility = 'visible';
            container.style.display = 'flex';
        }
        
        // 从本地存储恢复选中的学科
        restoreSelectedSubjects();
        
        // 更新显示
        updateSubjectVisibility();
        loadAllKnowledgePoints();
        
        // 立即更新倒计时
        updateCountdown(new Date());
        
        // 添加自动刷新功能
        setInterval(() => {
            updateCountdown(new Date());
            updateCurrentDate();
            updateKnowledge();
        }, 1000);
        
        // 调整布局
        adjustKnowledgeSectionHeight();
        
        // 隐藏不需要的元素
        const addToHome = document.getElementById('add-to-home');
        if (addToHome) addToHome.style.display = 'none';
        
        // 确保日期选择器可见
        const editDateButton = document.getElementById('edit-date-button');
        if (editDateButton) {
            editDateButton.style.display = 'inline-block';
            editDateButton.style.visibility = 'visible';
        }
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 检测设备类型
    detectDevice();
    
    // 初始化日期选择器
    initDatePicker();
    
    // 尝试获取当前日期并立即显示（即使是本地日期）
    const localDate = new Date();
    updateCountdown(localDate);
    
    // 获取网络时间和更新倒计时
    updateTimeAndCountdown();
    
    // 加载励志名言
    loadMotivationalQuote();
    
    // 加载所有学科知识点
    loadAllKnowledgePoints();
    
    // 初始化学科选择功能
    initSubjectSelector();
    
    // 调整知识点容器高度
    adjustKnowledgeSectionHeight();
    
    // 为移动设备添加额外的触摸优化
    if (isMobileDevice) {
        optimizeForMobile();
    }
    
    // 监听窗口大小改变事件，调整知识点区域高度
    window.addEventListener('resize', adjustKnowledgeSectionHeight);
    
    // 初始化浏览器壁纸模式
    initBrowserWallpaper();
});

// 检测设备类型
function detectDevice() {
    // 检测是否为移动设备
    isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768);
    
    // 如果是移动设备，给body添加一个类
    if (isMobileDevice) {
        document.body.classList.add('mobile-device');
    }
}

// 初始化日期选择器
function initDatePicker() {
    // 填充年份选择器 - 当前年份和未来3年
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year <= currentYear + 3; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year + '年';
        examYearSelect.appendChild(option);
    }
    
    // 默认选中今年
    examYearSelect.value = currentYear;
    
    // 默认选中6月（初始是中考常见月份）
    examMonthSelect.value = 5; // 6月，JavaScript中月份从0开始
    
    // 填充日期选择器
    updateDaysInMonth();
    
    // 当月份或年份变化时，更新日期选择器
    examYearSelect.addEventListener('change', updateDaysInMonth);
    examMonthSelect.addEventListener('change', updateDaysInMonth);
    
    // 显示日期选择器
    editDateButton.addEventListener('click', showDatePicker);
    
    // 保存日期
    dateSaveButton.addEventListener('click', saveExamDate);
    
    // 取消选择
    dateCancelButton.addEventListener('click', hideDatePicker);
}

// 更新日期选择器中的天数，根据所选年月
function updateDaysInMonth() {
    const year = parseInt(examYearSelect.value);
    const month = parseInt(examMonthSelect.value);
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // 获取所选月份的天数
    
    // 清空现有选项
    examDaySelect.innerHTML = '';
    
    // 添加新的日期选项
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day + '日';
        examDaySelect.appendChild(option);
    }
    
    // 如果是6月，默认选中20日（常见中考日期）
    if (month === 5) {
        const defaultDay = Math.min(20, daysInMonth);
        examDaySelect.value = defaultDay;
    } else {
        // 否则选择中间日期
        examDaySelect.value = Math.min(15, daysInMonth);
    }
}

// 显示日期选择器
function showDatePicker() {
    // 从localStorage加载已保存的日期（如果有）
    const savedDate = getSavedExamDate();
    if (savedDate) {
        examYearSelect.value = savedDate.getFullYear();
        examMonthSelect.value = savedDate.getMonth();
        updateDaysInMonth();
        examDaySelect.value = savedDate.getDate();
    }
    
    datePickerContainer.style.display = 'flex';
}

// 隐藏日期选择器
function hideDatePicker() {
    datePickerContainer.style.display = 'none';
}

// 保存考试日期
function saveExamDate() {
    const year = parseInt(examYearSelect.value);
    const month = parseInt(examMonthSelect.value);
    const day = parseInt(examDaySelect.value);
    
    // 创建日期对象并保存到localStorage
    const examDate = new Date(year, month, day);
    localStorage.setItem('customExamDate', examDate.toISOString());
    
    // 更新倒计时显示
    updateCountdown(new Date());
    
    // 隐藏选择器
    hideDatePicker();
}

// 获取保存的考试日期
function getSavedExamDate() {
    const savedDateString = localStorage.getItem('customExamDate');
    if (savedDateString) {
        return new Date(savedDateString);
    }
    return null;
}

// 为移动设备优化
function optimizeForMobile() {
    // 优化触摸反馈
    const allButtons = document.querySelectorAll('button');
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const allKnowledgeItems = document.querySelectorAll('.knowledge-item');
    
    // 为按钮添加触摸反馈
    allButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, { passive: true });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, { passive: true });
    });
    
    // 为知识点项添加点击展开/折叠功能
    allKnowledgeItems.forEach(item => {
        const heading = item.querySelector('h3');
        
        if (heading) {
            heading.addEventListener('click', function(e) {
                // 防止事件冒泡
                e.stopPropagation();
                
                // 获取知识点容器
                const knowledgeContainer = item.querySelector('.knowledge-container');
                if (!knowledgeContainer) return;
                
                // 切换内容的可见性
                const isCollapsed = item.classList.contains('collapsed');
                
                if (isCollapsed) {
                    // 展开内容 - 显示所有知识点块
                    knowledgeContainer.style.display = 'flex';
                    item.classList.remove('collapsed');
                    item.classList.add('expanded');
                } else {
                    // 折叠内容 - 隐藏知识点容器
                    knowledgeContainer.style.display = 'none';
                    item.classList.add('collapsed');
                    item.classList.remove('expanded');
                }
            }, { passive: false });
            
            // 初始状态设为折叠状态
            setTimeout(() => {
                const knowledgeContainer = item.querySelector('.knowledge-container');
                if (knowledgeContainer && knowledgeContainer.children.length > 1) {
                    knowledgeContainer.style.display = 'none';
                    item.classList.add('collapsed');
                }
            }, 100);
        }
    });
    
    // 为知识点块添加点击高亮效果
    document.addEventListener('click', function(e) {
        const knowledgeBlock = e.target.closest('.knowledge-block');
        if (knowledgeBlock) {
            // 移除所有知识点块的高亮
            document.querySelectorAll('.knowledge-block').forEach(block => {
                block.classList.remove('active');
            });
            
            // 给当前点击的知识点块添加高亮
            knowledgeBlock.classList.add('active');
        }
    }, { passive: true });
    
    // 添加滑动刷新功能
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipeGesture();
    }, { passive: true });
    
    function handleSwipeGesture() {
        const swipeDistance = touchEndY - touchStartY;
        // 下拉刷新 - 只在页面顶部触发
        if (swipeDistance > 100 && window.scrollY < 50) {
            // 显示刷新提示
            showRefreshIndicator();
            // 重新加载内容
            setTimeout(() => {
                loadMotivationalQuote();
                // 更新时间
                updateTimeAndCountdown();
                // 隐藏刷新提示
                hideRefreshIndicator();
            }, 500);
        }
    }
    
    // 显示刷新指示器
    function showRefreshIndicator() {
        let indicator = document.getElementById('refresh-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'refresh-indicator';
            indicator.textContent = '刷新中...';
            indicator.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#0071e3;color:white;text-align:center;padding:10px;z-index:1000;transform:translateY(-100%);transition:transform 0.3s;';
            document.body.appendChild(indicator);
        }
        setTimeout(() => {
            indicator.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // 隐藏刷新指示器
    function hideRefreshIndicator() {
        const indicator = document.getElementById('refresh-indicator');
        if (indicator) {
            indicator.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                indicator.remove();
            }, 300);
        }
    }
}

// 初始化学科选择功能
function initSubjectSelector() {
    // 从localStorage加载上次选择的科目
    const savedSubjects = localStorage.getItem('selectedSubjects');
    if (savedSubjects) {
        try {
            const subjects = JSON.parse(savedSubjects);
            // 先将所有复选框设置为未选中状态
            subjectCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            // 然后只选中保存的科目
            subjects.forEach(subject => {
                const checkbox = document.querySelector(`input[name="subject"][value="${subject}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        } catch (error) {
            console.error('加载保存的科目选择时出错:', error);
        }
    }
    
    // 为每个学科复选框添加事件
    subjectCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // 保存当前选择的科目到localStorage
            const selectedSubjects = Array.from(subjectCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            localStorage.setItem('selectedSubjects', JSON.stringify(selectedSubjects));
            
            // 更新知识点显示
            updateSubjectVisibility();
        });
    });
    
    // 为全选按钮添加事件
    selectAllBtn.addEventListener('click', function() {
        subjectCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        // 保存全选状态
        const allSubjects = Array.from(subjectCheckboxes).map(cb => cb.value);
        localStorage.setItem('selectedSubjects', JSON.stringify(allSubjects));
        updateSubjectVisibility();
    });
    
    // 为取消全选按钮添加事件
    deselectAllBtn.addEventListener('click', function() {
        subjectCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        // 保存空选择状态
        localStorage.setItem('selectedSubjects', JSON.stringify([]));
        updateSubjectVisibility();
    });
    
    // 初始化显示所有学科
    updateSubjectVisibility();
}

// 更新学科的可见性
function updateSubjectVisibility() {
    // 遍历所有学科项
    knowledgeItems.forEach(item => {
        const subject = item.getAttribute('data-subject');
        const checkbox = document.querySelector(`input[name="subject"][value="${subject}"]`);
        
        if (checkbox && checkbox.checked) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    
    // 重新加载知识点以更新每科显示的数量
    loadAllKnowledgePoints();
    
    // 在学科可见性变化后调整高度
    setTimeout(adjustKnowledgeSectionHeight, 100);
}

// 获取网络时间和更新倒计时
function updateTimeAndCountdown() {
    // 使用fetch API获取网络时间
    fetch('https://worldtimeapi.org/api/timezone/Asia/Shanghai')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络时间API请求失败');
            }
            return response.json();
        })
        .then(data => {
            // 从API响应中获取当前日期时间
            const currentDate = new Date(data.datetime);
            updateCountdown(currentDate);
        })
        .catch(error => {
            // 如果API请求失败，使用本地时间
            console.log('获取网络时间失败，使用本地时间:', error);
            const currentDate = new Date();
            updateCountdown(currentDate);
        });
        
    // 每天更新一次倒计时
    setTimeout(updateTimeAndCountdown, 86400000); // 24小时
}

// 更新倒计时显示
function updateCountdown(currentDate) {
    try {
        // 获取用户设置的考试日期或使用默认日期
        let examDate = getSavedExamDate();
        
        // 如果用户没有设置日期，则使用默认日期（当年6月20日，常见的中考时间）
        if (!examDate) {
            const currentYear = currentDate.getFullYear();
            const examMonth = 5; // JavaScript中月份从0开始，所以6月是5
            const examDay = 20; // 中考时间默认为6月20日
            
            examDate = new Date(currentYear, examMonth, examDay);
            
            // 如果今年的中考已经过去，计算到明年的中考
            if (currentDate > examDate) {
                examDate.setFullYear(currentYear + 1);
            }
        } else {
            // 如果用户设置的考试日期已经过去，自动更新为下一年的相同日期
            if (currentDate > examDate) {
                examDate.setFullYear(examDate.getFullYear() + 1);
                // 更新保存的日期
                localStorage.setItem('customExamDate', examDate.toISOString());
            }
        }
        
        // 计算剩余天数
        const timeLeft = examDate - currentDate;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        
        // 更新倒计时显示
        const daysElement = document.getElementById('days');
        if (daysElement) {
            daysElement.textContent = daysLeft;
            daysElement.style.display = 'inline-block';
            daysElement.style.visibility = 'visible';
        }
        
        // 更新当前日期显示
        const currentDateElement = document.getElementById('current-date');
        if (currentDateElement) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            currentDateElement.textContent = `当前日期: ${year}年${month}月${day}日`;
            currentDateElement.style.display = 'block';
            currentDateElement.style.visibility = 'visible';
        }
    } catch (error) {
        console.error('倒计时计算错误:', error);
        // 发生错误时使用默认值显示
        const daysElement = document.getElementById('days');
        const currentDateElement = document.getElementById('current-date');
        if (daysElement) daysElement.textContent = "--";
        if (currentDateElement) currentDateElement.textContent = "当前日期: 加载中...";
    }
}

// 加载励志名言
function loadMotivationalQuote() {
    try {
        // 根据设备选择适合长度的名言
        let availableQuotes;
        
        if (isMobileDevice) {
            // 移动设备优先选择较短的名言
            const shortQuotes = motivationalQuotes.filter(quote => quote.length <= 12);
            availableQuotes = shortQuotes.length > 0 ? shortQuotes : motivationalQuotes;
        } else {
            // 桌面设备可以显示更长的名言
            availableQuotes = motivationalQuotes;
        }
        
        const randomIndex = Math.floor(Math.random() * availableQuotes.length);
        const selectedQuote = availableQuotes[randomIndex];
        
        // 设置名言内容
        quoteElement.textContent = selectedQuote;
        
        // 根据文本长度调整样式
        quoteElement.classList.remove('medium-length', 'long-length');
        if (selectedQuote.length > 10 && selectedQuote.length <= 15) {
            quoteElement.classList.add('medium-length');
        } else if (selectedQuote.length > 15) {
            quoteElement.classList.add('long-length');
        }
        
        // 每天更换一次名言
        setTimeout(loadMotivationalQuote, 86400000); // 24小时
    } catch (error) {
        console.error('加载励志名言时出错:', error);
        quoteElement.textContent = "天道酬勤";
    }
}

// 加载所有学科知识点
function loadAllKnowledgePoints() {
    // 今天的日期作为随机种子
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    // 获取选中的科目数量
    const selectedSubjects = Array.from(subjectCheckboxes).filter(checkbox => checkbox.checked);
    const selectedCount = selectedSubjects.length;
    
    // 根据选中科目数量决定每科显示的知识点数量
    let pointsPerSubject = 1; // 默认每科显示1个
    if (selectedCount === 1) {
        pointsPerSubject = 6; // 只选1科时显示6个知识点
    } else if (selectedCount === 2) {
        pointsPerSubject = 3; // 只选2科时每科显示3个知识点
    } else if (selectedCount === 3) {
        pointsPerSubject = 2; // 只选3科时每科显示2个知识点
    }
    
    // 为每个学科加载知识点
    const subjects = [
        { name: 'chinese', element: chineseKnowledgeElement },
        { name: 'math', element: mathKnowledgeElement },
        { name: 'english', element: englishKnowledgeElement },
        { name: 'physics', element: physicsKnowledgeElement },
        { name: 'chemistry', element: chemistryKnowledgeElement },
        { name: 'politics', element: politicsKnowledgeElement },
        { name: 'history', element: historyKnowledgeElement }
    ];
    
    subjects.forEach((subject, index) => {
        if (subject.element) {
            const subjectSeed = seed + index * 100;
            
            if (pointsPerSubject === 1) {
                // 只显示1个知识点，包装在knowledge-point类中以保持一致的样式
                const point = getRandomKnowledgePoint(subject.name, subjectSeed);
                subject.element.innerHTML = `<div class="knowledge-point">${point}</div>`;
            } else {
                // 显示多个不重复的知识点
                let html = '';
                const points = getMultipleUniquePoints(subject.name, pointsPerSubject, subjectSeed);
                points.forEach(point => {
                    html += `<div class="knowledge-point">${point}</div>`;
                });
                subject.element.innerHTML = html;
            }
        }
    });
}

// 获取多个不重复的知识点
function getMultipleUniquePoints(subject, count, seed) {
    if (!knowledgeData[subject]) return ["暂无知识点"];
    
    const subjectData = knowledgeData[subject];
    const totalPoints = subjectData.length;
    
    // 如果请求的知识点数量超过总数，返回所有知识点的一个子集
    count = Math.min(count, totalPoints);
    
    // 创建索引数组
    const indices = [];
    for (let i = 0; i < totalPoints; i++) {
        indices.push(i);
    }
    
    // 使用Fisher-Yates洗牌算法打乱索引数组
    // 使用种子来保证每天的随机结果一致
    const shuffledIndices = shuffleArrayWithSeed(indices, seed);
    
    // 取出前count个索引对应的知识点
    const selectedPoints = [];
    for (let i = 0; i < count; i++) {
        selectedPoints.push(subjectData[shuffledIndices[i]]);
    }
    
    return selectedPoints;
}

// 使用种子的Fisher-Yates洗牌算法
function shuffleArrayWithSeed(array, seed) {
    const result = [...array];
    
    // 使用线性同余法创建伪随机数生成器
    const random = (max) => {
        // 更新种子
        seed = (seed * 9301 + 49297) % 233280;
        // 返回0到max-1之间的伪随机数
        return Math.floor((seed / 233280) * max);
    };
    
    // Fisher-Yates洗牌算法
    for (let i = result.length - 1; i > 0; i--) {
        const j = random(i + 1);
        [result[i], result[j]] = [result[j], result[i]];
    }
    
    return result;
}

// 根据学科和种子获取随机知识点
function getRandomKnowledgePoint(subject, seed) {
    if (!knowledgeData[subject]) return "暂无知识点";
    
    const subjectData = knowledgeData[subject];
    // 根据种子生成伪随机的索引
    const index = seed % subjectData.length;
    
    return subjectData[index];
}

// 调整知识点区域高度
function adjustKnowledgeSectionHeight() {
    const knowledgeSection = document.getElementById('knowledge-container');
    
    if (!knowledgeSection) return;
    
    // 获取窗口高度
    const windowHeight = window.innerHeight;
    
    // 获取知识点区域到页面顶部的距离
    const knowledgeSectionTop = knowledgeSection.getBoundingClientRect().top;
    
    // 计算最大高度，留下一些底部间距
    let maxHeight = windowHeight - knowledgeSectionTop - 30;
    
    // 移动设备上设置更小的高度，允许更多的页面滚动
    if (isMobileDevice) {
        maxHeight = Math.min(maxHeight, windowHeight * 0.5);
    } else {
        maxHeight = Math.min(maxHeight, windowHeight * 0.6);
    }
    
    // 设置最小高度，确保至少能看到一部分内容
    maxHeight = Math.max(maxHeight, 200);
    
    // 应用高度
    knowledgeSection.style.maxHeight = maxHeight + 'px';
}

// 保存选中的学科到本地存储
function saveSelectedSubjects() {
    const selectedSubjects = Array.from(document.querySelectorAll('input[name="subject"]:checked'))
        .map(checkbox => checkbox.value);
    localStorage.setItem('selectedSubjects', JSON.stringify(selectedSubjects));
}

// 从本地存储恢复选中的学科
function restoreSelectedSubjects() {
    const savedSubjects = localStorage.getItem('selectedSubjects');
    if (savedSubjects) {
        try {
            const selectedSubjects = JSON.parse(savedSubjects);
            const checkboxes = document.querySelectorAll('input[name="subject"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = selectedSubjects.includes(checkbox.value);
            });
            updateSubjectVisibility();
        } catch (error) {
            console.error('恢复选中的学科时出错:', error);
            // 如果出错，默认选中所有学科
            const checkboxes = document.querySelectorAll('input[name="subject"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            updateSubjectVisibility();
        }
    } else {
        // 如果没有保存的选择，默认选中所有学科
        const checkboxes = document.querySelectorAll('input[name="subject"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        updateSubjectVisibility();
    }
}

// 修改学科选择事件监听器
document.querySelectorAll('input[name="subject"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateSubjectVisibility();
        saveSelectedSubjects(); // 保存选择
    });
});

// 修改全选和取消全选按钮的事件监听器
document.getElementById('select-all').addEventListener('click', function() {
    document.querySelectorAll('input[name="subject"]').forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSubjectVisibility();
    saveSelectedSubjects(); // 保存选择
});

document.getElementById('deselect-all').addEventListener('click', function() {
    document.querySelectorAll('input[name="subject"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSubjectVisibility();
    saveSelectedSubjects(); // 保存选择
}); 