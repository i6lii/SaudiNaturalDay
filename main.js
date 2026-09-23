import './style.css'

const milestones = [
  { year: '1727', title: 'تأسيس الدولة السعودية الأولى', text: 'من الدرعية بدأت حكاية دولةٍ جعلت الوحدة والازدهار طريقاً للمستقبل.', story: 'بدأت الحكاية في الدرعية عندما تولى الإمام محمد بن سعود إمارة الدرعية عام 1727م. عمل على توحيد البلدة وتقوية الأمن وتنظيم شؤون الناس، ثم جاء التحالف التاريخي مع الشيخ محمد بن عبدالوهاب ليضع أساساً للإصلاح والتعليم. توسعت الدولة السعودية الأولى في مناطق واسعة من الجزيرة العربية، وأصبحت الدرعية مركزاً سياسياً وعلمياً مزدهراً. واجهت الدولة حملات عسكرية متتالية، واستمرت في الدفاع عن استقلالها حتى سقطت الدرعية عام 1818م، لكن أثرها بقي حاضراً ومهّد لقيام الدولتين السعوديتين الثانية والثالثة.', person: 'الإمام محمد بن سعود', detail: 'الدرعية · بداية الدولة السعودية الأولى · 1727 - 1818', image: '/history/diriyah.jpg' },
  { year: '1902', title: 'استرداد الرياض', text: 'عاد الملك عبدالعزيز إلى الرياض، لتبدأ رحلة توحيد الأرض والإنسان.', story: 'بعد سنوات من مغادرة الرياض، عاد الملك عبدالعزيز بن عبدالرحمن آل سعود في ليلة الخامس من شوال 1319هـ الموافق 15 يناير 1902م. تحرك مع رجاله في سرية حتى وصل إلى أسوار المدينة، ثم قاد مجموعة صغيرة إلى قصر المصمك. دخل القصر، وتمكن رجاله من السيطرة على الحامية، وقُتل عامل الرياض ابن عجلان في المواجهة. مع طلوع الفجر أعلن الملك عبدالعزيز عودة الرياض إلى حكم آل سعود، ومن هذه اللحظة بدأت مسيرة توحيد استمرت أكثر من ثلاثين عاماً، شملت معارك ومصالحات وتحالفات حتى تأسست المملكة.', person: 'الملك عبدالعزيز بن عبدالرحمن آل سعود', detail: 'معركة استرداد الرياض · قصر المصمك · 1902', image: '/history/masmak.jpg' },
  { year: '1932', title: 'توحيد المملكة', text: 'أُعلن توحيد البلاد باسم المملكة العربية السعودية في يومٍ مجيد.', story: 'بعد استرداد الرياض، واصل الملك عبدالعزيز توحيد مناطق نجد والحجاز وعسير والأحساء وغيرها عبر سنوات طويلة من العمل السياسي والعسكري. خاضت قواته معارك حاسمة، وعقدت القبائل والمناطق عهوداً واتفاقات، حتى اجتمعت أجزاء واسعة من الجزيرة تحت راية واحدة. وفي 23 سبتمبر 1932م صدر المرسوم الملكي الذي أعلن توحيد البلاد باسم المملكة العربية السعودية. أصبح هذا اليوم ذكرى وطنية ترمز إلى الوحدة وبداية الدولة الحديثة ومؤسساتها.', person: 'الملك عبدالعزيز بن عبدالرحمن آل سعود', detail: '23 سبتمبر 1932 · يوم التوحيد · المملكة العربية السعودية', image: '/history/unification-correct.jpg' },
  { year: '1970s', title: 'نهضة التعليم والبنية', text: 'توسعت المدارس والجامعات والطرق، وبدأت ملامح الدولة الحديثة.', story: 'مع خطط التنمية المتتابعة، انتقلت المملكة من بدايات البنية الأساسية إلى مرحلة بناء واسعة شملت المدارس والجامعات والمستشفيات والطرق والمطارات. توسع التعليم العام والعالي، ونمت المدن والصناعة والخدمات، وارتبطت المناطق بشبكات حديثة. شاركت مؤسسات الدولة والمجتمع في تحويل عائدات التنمية إلى مشاريع طويلة الأثر، فظهرت ملامح الدولة الحديثة التي أسست لاقتصاد أكثر تنوعاً ومجتمع أكثر اتصالاً.', person: 'الملك خالد بن عبدالعزيز آل سعود', detail: 'التعليم · البنية التحتية · التنمية', image: '/history/development.jpg' },
  { year: '2016', title: 'رؤية السعودية 2030', text: 'طموح يعيد تعريف الاقتصاد والمجتمع، ويصنع فرصاً للأجيال القادمة.', story: 'في 25 أبريل 2016م أُعلنت رؤية السعودية 2030 بوصفها إطاراً وطنياً للتحول. انطلقت من ثلاثة محاور: مجتمع حيوي، اقتصاد مزدهر، ووطن طموح. تبعتها برامج تنفيذية في الإسكان والصناعة والسياحة وجودة الحياة والتحول الرقمي، ونمت قطاعات الثقافة والرياضة والترفيه والاستثمار. يقود الملك سلمان وولي العهد الأمير محمد بن سلمان هذه المرحلة التي تهدف إلى تنويع الاقتصاد ورفع جودة الحياة وفتح فرص جديدة للشباب والشابات.', person: 'خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود و صاحب السمو الملكي الأمير محمد بن سلمان بن عبدالعزيز آل سعود، ولي العهد رئيس مجلس الوزراء', detail: 'رؤية السعودية 2030 · التحول الوطني · جودة الحياة', image: '/history/vision-leaders.jpg' },
]
const leaders = [
  ['الملك عبدالعزيز بن عبدالرحمن آل سعود', '1932 - 1953', 'المؤسس والموحّد', 'King Abdulaziz.jpg'],
  ['الملك سعود', '1953 - 1964', 'ثاني ملوك المملكة', 'King Saud.jpg'],
  ['الملك فيصل', '1964 - 1975', 'رائد النهضة الدبلوماسية', 'faisal-final.jpg'],
  ['الملك خالد', '1975 - 1982', 'قائد مرحلة النمو', 'King Khalid.jpg'],
  ['الملك فهد', '1982 - 2005', 'خادم الحرمين الشريفين', 'King Fahd.jpg'],
  ['الملك عبدالله', '2005 - 2015', 'ملك الإصلاح والتنمية', 'King Abdullah bin Abdulaziz Al Saud.jpg'],
  ['خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود', '2015 - الآن', 'خادم الحرمين الشريفين', 'King Salman bin Abdulaziz Al Saud.jpg'],
]
const crownPrinces = [
  ['الأمير سعود', '1933 - 1953', '', 'saud.jpg'], ['الأمير فيصل', '1953 - 1964', '', 'faisal-correct-2.jpg'], ['الأمير خالد', '1964 - 1965', '', 'khalid.jpg'],
  ['الأمير فهد', '1967 - 1975', '', 'fahd.jpg'], ['الأمير عبدالله', '1975 - 1982', '', 'abdullah.jpg'], ['الأمير سلطان', '1982 - 2005', '', 'sultan-correct.jpg'],
  ['الأمير نايف', '2005 - 2012', '', 'naif.jpg'], ['الأمير مقرن', '2014 - 2015', '', 'muqrin-correct.jpeg'], ['الأمير محمد بن نايف', '2015 - 2017', '', 'mohammed-bin-naif-correct.jpg'],
  ['صاحب السمو الملكي الأمير محمد بن سلمان بن عبدالعزيز آل سعود، ولي العهد رئيس مجلس الوزراء', '2017 - الآن', 'ولي العهد ورئيس مجلس الوزراء', 'mohammed-bin-salman.jpg'],
]
const portraitFiles = {
  'King Abdulaziz.jpg': 'abdulaziz.jpg', 'King Saud.jpg': 'saud.jpg', 'King Faisal.jpg': 'faisal.jpg',
  'King Khalid.jpg': 'khalid.jpg', 'King Fahd.jpg': 'fahd.jpg', 'King Abdullah bin Abdulaziz Al Saud.jpg': 'abdullah.jpg',
  'King Salman bin Abdulaziz Al Saud.jpg': 'salman.jpg', 'Mohammed bin Salman.jpg': 'mohammed-bin-salman.jpg',
}
const projects = [
  ['نيوم NEOM', 'مدينة المستقبل', 'اقتصاد', 'https://blog.wasalt.sa/wp-content/uploads/2022/02/%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%86%D9%8A%D9%88%D9%85.jpg', 'منظومة مدن ومناطق اقتصادية تعيد تعريف الحياة والعمل على ساحل البحر الأحمر.'],
  ['ذا لاين THE LINE', 'مدينة خطية', 'تقنية', 'the-line.jpg', 'نموذج عمراني طموح يضع الإنسان والطبيعة والتقنية في قلب المدينة.'],
  ['مشروع البحر الأحمر', 'وجهة سياحية', 'سياحة', 'red-sea.png', 'وجهة عالمية تجمع الطبيعة والضيافة الفاخرة والسياحة المستدامة.'],
  ['العلا', 'إرث حي', 'ثقافة', 'alula.jpg', 'رحلة ثقافية بين الآثار والطبيعة والفنون في واحدة من أقدم مناطق المملكة.'],
  ['القدية', 'مدينة الترفيه والرياضة', 'رياضة', 'qiddiya.jpg', 'وجهة كبرى للرياضة والترفيه والثقافة، تصنع تجارب جديدة للأجيال.'],
  ['روشن', 'مجتمعات عمرانية', 'بنية تحتية', 'roshn.webp', 'مجتمعات سكنية متكاملة ترفع جودة الحياة وتقرّب الخدمات من السكان.'],
  ['الدرعية', 'جوهرة التاريخ', 'ثقافة', 'diriyah.jpg', 'إحياء قلب الدولة السعودية الأولى وتحويله إلى وجهة عالمية للثقافة والضيافة.'],
  ['حديقة الملك سلمان', 'قلب أخضر', 'استدامة', 'kings-park.jpeg', 'واحدة من أكبر الحدائق الحضرية في العالم، ومساحة للمعرفة والفن والطبيعة.'],
  ['المربع الجديد', 'وسط حضري', 'اقتصاد', 'new-murabba.jpg', 'تجربة حضرية جديدة في الرياض تجمع الأعمال والثقافة والضيافة والتقنية.'],
  ['المسار الرياضي', 'مدينة تتحرك', 'رياضة', 'sports-path.jpg', 'مسار مفتوح يربط الرياض ويجعل المشي والدراجات والرياضة جزءاً من الحياة اليومية.'],
  ['الطاقة المتجددة', 'طاقة المستقبل', 'استدامة', 'renewable-energy.jpg', 'مشاريع شمسية ورياح تدعم مزيج الطاقة وتبني مستقبلاً أكثر استدامة.'],
]

document.querySelector('#app').innerHTML = `
  <section class="cli-intro" id="cli-intro" aria-label="المقدمة الافتتاحية"><div class="cli-grid"></div><div class="cli-shell"><div class="cli-prompt">SAUDI_SYSTEM / NATIONAL_DAY_96 <span>●</span></div><div class="cli-globe-wrap"><div class="cli-orbit cli-orbit-a"></div><div class="cli-orbit cli-orbit-b"></div><div class="cli-globe"><i></i><i></i><i></i></div><div class="cli-scan"></div></div><div class="cli-leader cli-king"><img src="/portraits/salman.jpg" alt="الملك سلمان بن عبدالعزيز"><div><small>LEADERSHIP / 01</small><b>الملك سلمان بن عبدالعزيز آل سعود</b><span>خادم الحرمين الشريفين</span></div></div><div class="cli-leader cli-crown"><img src="/portraits/mohammed-bin-salman.jpg" alt="الأمير محمد بن سلمان"><div><small>LEADERSHIP / 02</small><b>الأمير محمد بن سلمان بن عبدالعزيز آل سعود</b><span>ولي العهد رئيس مجلس الوزراء</span></div></div><div class="cli-status"><span id="cli-status-text">INITIALIZING NATIONAL MEMORY</span><i></i><b>SCROLL TO ENTER</b></div></div></section>
  <header class="topbar"><a class="brand" href="#top" aria-label="العودة إلى البداية"><span class="brand-mark" aria-hidden="true"></span></a><nav><a href="#journey">الرحلة</a><a href="#leaders">القيادة</a><a href="#achievements">الإنجازات</a><a href="#projects">المشاريع</a></nav></header>
  <main id="top">
    <section class="hero section-wrap"><div class="hero-copy"><p class="eyebrow"><span></span> اليوم الوطني السعودي 96</p><h1>من <em>جذورنا</em><br>إلى أفق 2026</h1><p class="hero-lead">رحلة وطنٍ يدور حول العالم، وكلما تقدمت في الحكاية ظهرت كلمة من مجده.</p><a class="primary-cta" href="#journey">ابدأ الرحلة <span>↓</span></a></div><div class="hero-leaders"><div class="hero-person king-hero"><img src="/portraits/salman.jpg" alt="الملك سلمان بن عبدالعزيز"><span>خادم الحرمين الشريفين</span><b>الملك سلمان</b></div><div class="hero-person crown-hero"><img src="/portraits/mohammed-bin-salman.jpg" alt="ولي العهد الأمير محمد بن سلمان"><span>ولي العهد ورئيس مجلس الوزراء</span><b>الأمير محمد بن سلمان</b></div><div class="hero-art" aria-label="كرة أرضية تدور مع التمرير"><div class="globe"><i></i><i></i><i></i></div><span class="globe-word word-one">همة حتى القمة</span><span class="globe-word word-two">وطن العزم</span><span class="globe-word word-three">رؤية 2030</span><div class="art-caption"><b id="scroll-year">1727 — 2026</b><span id="scroll-message">ثلاثة قرون من العزم</span></div></div></div><div class="scroll-note">مرّر لتدور الحكاية <span>↓</span></div></section>
    <section class="journey section-wrap" id="journey"><div class="section-heading"><p class="eyebrow"><span></span> الفصول الأولى</p><h2>رحلة تُروى<br><em>بخطى ثابتة</em></h2><p>اضغط على التاريخ لتفتح قصته، وتشاهد الشخصيات والمعارك والمحطات التي صنعت المملكة.</p></div><div class="timeline" id="timeline">${milestones.map((item, i) => `<button class="timeline-card ${i === 0 ? 'active' : ''}" data-index="${i}"><span class="timeline-year">${item.year}</span><span class="timeline-dot"></span><strong>${item.title}</strong><small>${item.text}</small><span class="read-story">اقرأ القصة ↗</span></button>`).join('')}</div><div class="journey-progress"><span id="progress-bar"></span></div></section>
    <section class="leadership section-wrap" id="leaders"><div class="section-heading split-heading"><div><p class="eyebrow"><span></span> من حملوا الراية</p><h2>قيادة تصنع<br><em>أثراً لا يزول</em></h2></div><p>ملوك وولاة عهد قادوا المملكة عبر مراحل التحول، وحافظوا على ثوابتها وفتحوا لها أبواب المستقبل.</p></div><div class="switcher" role="tablist"><button class="switch active" data-view="kings">الملوك</button><button class="switch" data-view="crown">ولاة العهد</button></div><div class="leader-grid" id="leader-grid"></div></section>
    <section class="achievements section-wrap" id="achievements"><div class="achievement-intro"><p class="eyebrow"><span></span> منجزات وطن</p><h2>حاضرٌ يليق<br><em>بالمستقبل</em></h2><p>في كل اتجاه، تتحول الرؤية إلى واقعٍ يلمسه العالم.</p></div><div class="achievement-grid"><article><b>01</b><h3>اقتصاد متنوع</h3><p>استثمارات وفرص جديدة تتجاوز النفط وتفتح أبواب الابتكار.</p><span class="card-line"></span></article><article><b>02</b><h3>مجتمع حيوي</h3><p>ثقافة وفنون ورياضة وسياحة تجعل جودة الحياة أسلوباً يومياً.</p><span class="card-line"></span></article><article><b>03</b><h3>طموح بلا حدود</h3><p>من نيوم إلى الفضاء، مشاريع كبيرة ترسم صورة الغد.</p><span class="card-line"></span></article></div></section>
    <section class="projects section-wrap" id="projects"><div class="projects-heading"><div><p class="eyebrow"><span></span> الفصل القادم</p><h2>مشاريع المملكة<br><em>وطموحات المستقبل 🇸🇦</em></h2></div><p>من تاريخٍ نصونه إلى مستقبلٍ نصنعه: مبادرات رؤية السعودية 2030 تحوّل الطموح إلى أماكن وتجارب وفرص.</p></div><div class="project-grid">${projects.map((project, index) => { const image = project[3].startsWith('http') ? project[3] : `/history/${project[3]}`; return `<article class="project-card"><div class="project-image"><img src="${image}" alt="${project[0]}" loading="lazy"><span>${String(index + 1).padStart(2, '0')}</span></div><div class="project-info"><small>${project[2]}</small><h3>${project[0]}</h3><h4>${project[1]}</h4><p>${project[4]}</p></div></article>` }).join('')}</div></section>
  </main>
  <footer id="contact" class="footer section-wrap"><div><p class="eyebrow"></p><h2>خلّك جزءاً من<br><em>الحكاية القادمة</em></h2></div><div class="footer-copy"><strong>اليوم الوطني السعودي الـ96 🇸🇦</strong><p>من <b>يوم التأسيس وبدايات المملكة</b>، إلى حاضرها المزدهر ومستقبلها الطموح، نستعرض في هذا الموقع مسيرة وطنٍ عظيم، وتاريخًا نفخر به، وإنجازاتٍ تتواصل عامًا بعد عام، تحت قيادة ولاة أمرنا.</p><p><b>96 عامًا من المجد والعطاء… ومسيرة وطنٍ لا تتوقف.</b></p><p>دام عزّك يا وطن 🇸🇦</p><p><b>المملكة العربية السعودية — فخر الماضي، ازدهار الحاضر، وطموح المستقبل.</b></p></div><div class="contact-block"><p>مطور الموقع</p><h3>يارا خالد آل عقيل</h3><div class="contact-links"><a href="https://www.linkedin.com/in/yara-alaqil-936a39331/" target="_blank" rel="noreferrer"><span class="site-icon linkedin-icon">in</span> LinkedIn <span>↗</span></a><a href="mailto:yarakalaqeel@gmail.com"><span class="site-icon email-icon">@</span> البريد الإلكتروني <span>↗</span></a><a href="https://github.com/i6lii" target="_blank" rel="noreferrer"><span class="site-icon github-icon">◉</span> GitHub <span>↗</span></a><a class="website-link" href="https://i6lii.github.io/yaraALaqeel/ecyara.html#contact" target="_blank" rel="noreferrer"><span class="site-icon web-icon">↗</span> يارا خالد آل عقيل — Yara Khaled Al-Aqil <span>↗</span></a></div></div><div class="footer-bottom"><span>© 2026 — جميع الحقوق محفوظة لمطور الموقع يارا آل عقيل</span></div></footer>
  <div class="story-modal" id="story-modal" aria-hidden="true"><div class="story-dialog" role="dialog" aria-modal="true" aria-labelledby="story-title"><button class="story-close" id="story-close" aria-label="إغلاق القصة">×</button><img id="story-image" src="" alt=""><div class="story-content"><p class="eyebrow"><span></span> حكاية محطة</p><p class="story-year" id="story-year"></p><h2 id="story-title"></h2><p class="story-text" id="story-text"></p><div class="story-facts"><div><small>الشخصية / القائد</small><b id="story-person"></b></div><div><small>تفاصيل المحطة</small><b id="story-detail"></b></div></div></div></div></div>
`

const grid = document.querySelector('#leader-grid')
const cliIntro = document.querySelector('#cli-intro')
const cliStatus = document.querySelector('#cli-status-text')
const cliMessages = ['INITIALIZING NATIONAL MEMORY', 'LOADING LEADERSHIP ARCHIVE', 'OPENING THE SAUDI STORY']
let cliIndex = 0
const cliInterval = setInterval(() => { cliIndex += 1; if (cliIndex < cliMessages.length) cliStatus.textContent = cliMessages[cliIndex] }, 1050)
setTimeout(() => { clearInterval(cliInterval); cliIntro.classList.add('cli-complete'); document.body.classList.add('site-ready') }, 3600)
document.querySelector('.footer-copy p:nth-of-type(3)').textContent = 'دام عزّك يا وطن'
function renderLeaders(view = 'kings') { const source = view === 'kings' ? leaders : crownPrinces; grid.innerHTML = source.map((leader, index) => { const image = leader[3].startsWith('http') ? leader[3] : `/portraits/${portraitFiles[leader[3]] || leader[3]}`; const blessing = view === 'kings' ? (leader[0].includes('سلمان') ? 'حفظه الله' : 'رحمه الله') : ''; return `<article class="leader-card ${leader[0].includes('محمد بن سلمان') ? 'featured-leader' : ''}"><span class="leader-number">${String(index + 1).padStart(2, '0')}</span><img src="${image}" alt="صورة ${leader[0]}" loading="lazy"><div><h3>${leader[0]}</h3><p>${leader[1]}</p>${leader[2] ? `<small>${leader[2]}</small>` : ''}${blessing ? `<small class="leader-blessing">${blessing}</small>` : ''}</div><span class="leader-arrow">↗</span></article>` }).join('') }
renderLeaders()
document.querySelectorAll('.switch').forEach((button) => button.addEventListener('click', () => { document.querySelector('.switch.active').classList.remove('active'); button.classList.add('active'); renderLeaders(button.dataset.view) }))
const modal = document.querySelector('#story-modal')
function openStory(index) { const item = milestones[index]; document.querySelector('#story-image').src = item.image; document.querySelector('#story-image').alt = item.title; document.querySelector('#story-year').textContent = item.year; document.querySelector('#story-title').textContent = item.title; document.querySelector('#story-text').textContent = item.story; document.querySelector('#story-person').textContent = item.person; document.querySelector('#story-detail').textContent = item.detail; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false') }
document.querySelectorAll('.timeline-card').forEach((card) => card.addEventListener('click', () => { const index = Number(card.dataset.index); document.querySelector('.timeline-card.active').classList.remove('active'); card.classList.add('active'); document.querySelector('#progress-bar').style.width = `${(index / (milestones.length - 1)) * 100}%`; openStory(index) }))
document.querySelector('#story-close').addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true') })
modal.addEventListener('click', (event) => { if (event.target === modal) document.querySelector('#story-close').click() })

const globe = document.querySelector('.globe')
const scrollMessage = document.querySelector('#scroll-message')
const scrollYear = document.querySelector('#scroll-year')
const scrollMessages = ['ثلاثة قرون من العزم', 'وطن العطاء', 'همة حتى القمة', 'رؤية 2030', 'إلى مستقبلٍ أوسع']
let scrollTick = false
window.addEventListener('scroll', () => {
  if (scrollTick) return
  scrollTick = true
  requestAnimationFrame(() => {
    const rotation = Math.round(window.scrollY * 0.22)
    globe.style.transform = `rotateY(${rotation}deg) rotateX(${Math.sin(rotation / 70) * 7}deg)`
    document.querySelector('.king-hero').style.transform = `translateY(${Math.sin(rotation / 35) * 8}px) rotate(${Math.sin(rotation / 60) * 1.5}deg)`
    document.querySelector('.crown-hero').style.transform = `translateY(${Math.cos(rotation / 35) * 10}px) rotate(${Math.cos(rotation / 60) * 1.5}deg)`
    const messageIndex = Math.min(scrollMessages.length - 1, Math.floor(window.scrollY / 360))
    scrollMessage.textContent = scrollMessages[messageIndex]
    scrollYear.textContent = messageIndex === 0 ? '1727 — 2026' : `${Math.min(2026, 1727 + messageIndex * 75)} — 2026`
    scrollTick = false
  })
}, { passive: true })
