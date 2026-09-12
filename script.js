const LANGUAGE_STORAGE_KEY = "yuanxiao-language";
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

const TRANSLATIONS = {
  en: {
    play: {
      skip: "Skip to content", badgeOne: "PhD cat in training", badgeTwo: "Professional desk companion",
      stamp: "LOVED, DAILY", pet: "Give me a little head scratch", openPortrait: "View my portrait ↗",
      album: "Yuanxiao’s family album", close: "Close photo", previous: "Previous photo", next: "Next photo",
      openPhoto: "Open photo", photoHint: "Take a closer look ↗",
      replies: ["My research can wait. Head scratches first.", "Purr… you found exactly the right spot.", "This keyboard is reserved for one small white cat.", "Lixia handles the music. I supervise the papers.", "One more scratch, then back to my very serious nap."],
    },
    meta: {
      title: "Yuanxiao",
      description:
        "I am Yuanxiao, a white Napoleon cat with a serious homepage, a favorite spot near the desk, and a long-term dream of becoming a computer science PhD. Meow.",
      ogTitle: "Yuanxiao",
      ogDescription:
        "I am Yuanxiao. I was chosen on February 11, 2025, came home on March 5, 2025, and I want to become a computer science PhD like my dad, Xin. Meow.",
    },
    brand: "Yuanxiao",
    nav: {
      ariaLabel: "Main navigation",
      about: "About",
      timeline: "Timeline",
      research: "Research",
      life: "Life",
      links: "Links",
    },
    lang: {
      switchAria: "Language switcher",
    },
    hero: {
      eyebrow: "GitHub Pages for @yuanxiao0305",
      name: "Yuanxiao",
      subtitle: "I am a tiny white Napoleon cat building my first proper home on the internet.",
      description:
        'I was chosen on <strong>February 11, 2025</strong>, the day before the Lantern Festival that year, and I officially came home on <strong>March 5, 2025</strong>. My dad, Xin, is currently a PhD student in computer science, and I want to become a computer science PhD just like him. Meow.',
      github: "Visit my GitHub",
      familySite: "Visit my dad's website",
      portraitAlt: "A portrait of me, Yuanxiao, a fluffy white cat looking up at the camera.",
      caption: "This is me: chosen with care and loved just as seriously.",
    },
    metrics: {
      ariaLabel: "Yuanxiao profile",
      homeLabel: "Days at home",
      homeNote: "Counting from 2025-03-05",
      choiceLabel: "Days since chosen",
      choiceNote: "Counting from 2025-02-11",
      statusLabel: "Status",
      statusValue: "Home",
      statusNote: "Home sweet home",
      ambitionLabel: "Ambition",
      ambitionValue: "CS PhD",
      ambitionNote: "In progress",
    },
    about: {
      tag: "About",
      title: "About Me",
      bodyOne:
        "I like the shape of a traditional personal homepage, even though I am only a cat. My life is made of smaller things: quiet company, careful observation, sunny spots, and staying close to the people I love.",
      bodyTwo:
        "My dad, Xin, is currently a PhD student in computer science. I do not write code or papers, but I like sitting nearby while he works, and I have decided that becoming a computer science PhD cat is a very good long-term plan. Meow.",
    },
    profile: {
      title: "Profile",
      chineseNameLabel: "Chinese name",
      chineseNameValue: "元宵",
      romanizedNameLabel: "Romanized name",
      romanizedNameValue: "Yuanxiao",
      breedLabel: "Breed",
      breedValue: "White Napoleon Munchkin cat",
      roleLabel: "Role",
      roleValue: "Family member",
      dadLabel: "Dad",
      dadValue: "Xin, PhD student in computer science",
      keywordsLabel: "Keywords",
      keywordsValue: "soft, calm, observant",
      dreamLabel: "Dream",
      dreamValue: "Computer Science PhD",
      onlineLabel: "Online identity",
      onlineValue: "@yuanxiao0305",
    },
    timeline: {
      tag: "Timeline",
      title: "A Few Important Moments",
      selectTitle: "Chosen at the cattery",
      selectBody:
        "The day before the 2025 Lantern Festival, I was noticed, chosen, and already on my way to becoming Yuanxiao in every sense of the name.",
      selectAlt: "A very young Yuanxiao sitting in the cattery shortly before being chosen.",
      homeTitle: "Came home",
      homeBody:
        "From that day on, I was no longer only a photo or a plan. I became a real presence in the house: soft footsteps, white fur, and quiet company every day.",
      homeAlt: "Yuanxiao shortly after coming home, standing beside a table leg.",
      birthdayTitle: "First birthday on Lantern Festival",
      birthdayBody:
        "On Tuesday, March 3, 2026, I celebrated my first birthday on Lantern Festival, exactly the holiday that inspired my name. Crown on, dignity maintained. Meow.",
      birthdayAlt:
        "Yuanxiao celebrating her first birthday on Lantern Festival while wearing a small crown.",
      sistersTitle: "My little sister came home",
      sistersBody:
        "On May 5, 2026, my little sister Lixia came home. She is lively and dreams of becoming a musician, while I dream of a computer science PhD. From this day on, we share the same warm home. Meow.",
      sistersAlt: "Yuanxiao, the white cat in front, and her calico little sister Lixia sitting behind her by the window.",
      sistersOpen: "View the full photo of Yuanxiao and Lixia",
    },
    research: {
      tag: "Research",
      title: "A few things I take seriously",
      keyboardTitle: "Keyboard Occupancy",
      keyboardBody:
        "I do not write code, but I do have a good instinct for when a keyboard deserves a soft white supervisor nearby.",
      sunbeamTitle: "Sunbeam Optimization",
      sunbeamBody:
        "I run long-term observations of window light and maintain the ideal curled position in the warmest available patch for advanced nap engineering.",
      phdTitle: "PhD Aspirations",
      phdBody:
        "My dad, Xin, is a PhD student in computer science, so I have set a clear example for myself: become a computer science PhD too. Meow.",
    },
    life: {
      tag: "Life",
      title: "Daily Life",
      scheduleTitle: "Daily schedule",
      morningLabel: "Morning",
      morningBody: "I inspect the rooms and confirm everyone is present.",
      daytimeLabel: "Daytime",
      daytimeBody: "I patrol the window, nap lightly, and stretch repeatedly.",
      eveningLabel: "Evening",
      eveningBody: "I follow humans around and participate in family life.",
      nightLabel: "Night",
      nightBody:
        "I stay near the desk, keep my dad company, and appear beside the keyboard when timing feels right.",
      quoteBody:
        "Some homepages display achievements. Some record a journey. Mine belongs to the second kind: it remembers the day I was chosen, the day I came home, and the quiet rhythm of the life I brought with me.",
      quoteSign: "Meow, with dignity.",
    },
    links: {
      tag: "Links",
      title: "Online presence",
      githubLabel: "GitHub",
      githubValue: "github.com/yuanxiao0305",
      githubNote: "My personal account",
      familyLabel: "Family Link",
      familyValue: "lixin2002cn.github.io",
      familyNote: "A family homepage I live alongside",
      sisterLabel: "My little sister, Lixia",
      sisterNote: "My lively little sister, an aspiring musician",
    },
    footer: {
      copy: '© <span data-current-year></span> Yuanxiao. Built by a very small white cat.',
    },
  },
  zh: {
    play: {
      skip: "跳到正文", badgeOne: "博士猫预备役", badgeTwo: "书桌旁的陪伴专家",
      stamp: "每天，都被爱着", pet: "摸摸我的小脑袋", openPortrait: "看看我的大头照 ↗",
      album: "元宵的家庭相册", close: "关闭照片", previous: "上一张照片", next: "下一张照片",
      openPhoto: "查看照片", photoHint: "点开，看看那时候的我 ↗",
      replies: ["研究可以等一下，先摸摸头。", "呼噜呼噜……就是这里，再摸一下。", "这把键盘，已经被一只小白猫预约了。", "妹妹负责搞音乐，我负责监督爸爸写论文。", "再摸一下，我就继续认真地午睡。"],
    },
    meta: {
      title: "元宵 | Yuanxiao",
      description:
        "我是元宵，一只纯白拿破仑矮脚猫。我喜欢待在书桌附近，也想像爸爸 Xin 一样成为计算机博士。喵。",
      ogTitle: "元宵 | Yuanxiao",
      ogDescription:
        "我是元宵。我在 2025 年 2 月 11 日被选中，2025 年 3 月 5 日来到家里，也想像爸爸 Xin 一样成为计算机博士。喵。",
    },
    brand: "元宵 / Yuanxiao",
    nav: {
      ariaLabel: "主导航",
      about: "关于",
      timeline: "时间线",
      research: "兴趣",
      life: "日常",
      links: "链接",
    },
    lang: {
      switchAria: "语言切换",
    },
    hero: {
      eyebrow: "@yuanxiao0305 的 GitHub Pages",
      name: "元宵",
      subtitle: "我是一只小小的纯白拿破仑矮脚猫，正在认真搭建自己的第一张互联网主页。",
      description:
        '我在 <strong>2025 年 2 月 11 日</strong> 被选中，那天正好是 2025 年元宵节的前一天；又在 <strong>2025 年 3 月 5 日</strong> 正式来到家里。我的爸爸 Xin 现在是一名计算机在读博士生，我也想像他一样成为计算机博士。喵。',
      github: "访问我的 GitHub",
      familySite: "访问我爸爸的网站",
      portraitAlt: "我的照片，元宵，一只抬头看镜头的毛茸茸白色小猫。",
      caption: "这就是我：被认真挑中，也被认真爱着。",
    },
    metrics: {
      ariaLabel: "元宵的小档案",
      homeLabel: "到家天数",
      homeNote: "从 2025-03-05 算起",
      choiceLabel: "被选中后",
      choiceNote: "从 2025-02-11 算起",
      statusLabel: "状态",
      statusValue: "已到家",
      statusNote: "家里真好",
      ambitionLabel: "志向",
      ambitionValue: "计算机博士",
      ambitionNote: "努力中",
    },
    about: {
      tag: "关于",
      title: "关于我",
      bodyOne:
        "虽然我只是一只猫，但我很喜欢传统个人主页的样子。我的生活由许多更小的事情组成：安静的陪伴，认真的观察，温暖的太阳，以及待在我爱的人身边。",
      bodyTwo:
        "我的爸爸 Xin 现在是一名计算机在读博士生。我不会写代码，也不会写论文，但我很喜欢在他工作时待在旁边，并且已经决定，成为一只计算机博士猫咪，是一个很好的长期计划。喵。",
    },
    profile: {
      title: "简介",
      chineseNameLabel: "中文名",
      chineseNameValue: "元宵",
      romanizedNameLabel: "英文名",
      romanizedNameValue: "Yuanxiao",
      breedLabel: "品种",
      breedValue: "白色拿破仑矮脚猫",
      roleLabel: "身份",
      roleValue: "家庭成员",
      dadLabel: "爸爸",
      dadValue: "Xin，计算机在读博士生",
      keywordsLabel: "关键词",
      keywordsValue: "柔软、安静、会认真看人",
      dreamLabel: "梦想",
      dreamValue: "计算机博士",
      onlineLabel: "网络身份",
      onlineValue: "@yuanxiao0305",
    },
    timeline: {
      tag: "时间线",
      title: "几个重要时刻",
      selectTitle: "在猫舍被选中",
      selectBody: "2025 年元宵节的前一天，我被看见、被选中，也开始真正成为“元宵”。",
      selectAlt: "还在猫舍时的元宵，年纪很小，正坐着看向镜头。",
      homeTitle: "来到家里",
      homeBody:
        "从那天起，我不再只是一张照片或一个计划。我成了家里真实存在的一部分：轻轻的脚步声、白白的毛，还有每天安静的陪伴。",
      homeAlt: "刚到家不久的元宵，正扶着桌腿站着。",
      birthdayTitle: "在元宵节过一岁生日",
      birthdayBody:
        "2026 年 3 月 3 日，星期二，我在元宵节这一天过了一岁生日。这个节日给了我名字，那天我戴着小皇冠，也努力保持体面。喵。",
      birthdayAlt: "元宵在元宵节过一岁生日时戴着小皇冠的照片。",
      sistersTitle: "妹妹到家了",
      sistersBody:
        "2026 年 5 月 5 日，妹妹立夏来到家里。她活泼好动，梦想成为音乐家；我想成为计算机博士。从这天起，我们有了同一个温暖的家。喵。",
      sistersAlt: "元宵和妹妹立夏在窗边合影，白猫元宵趴在前方，三花立夏坐在后方。",
      sistersOpen: "查看元宵和立夏的完整合影",
    },
    research: {
      tag: "兴趣",
      title: "我认真对待的几件事",
      keyboardTitle: "键盘陪伴",
      keyboardBody: "我不会写代码，但我很懂什么时候一把键盘旁边应该出现一只柔软的白色监督员。",
      sunbeamTitle: "晒太阳优化",
      sunbeamBody: "我会长期观察窗边光线，并在最暖和的那一块区域里保持理想姿势，把午睡这件事做得很认真。",
      phdTitle: "博士志向",
      phdBody: "我的爸爸 Xin 是计算机在读博士生，所以我也给自己定了一个清晰的目标：以后也要成为一只计算机博士。喵。",
    },
    life: {
      tag: "日常",
      title: "我的日常",
      scheduleTitle: "每日安排",
      morningLabel: "清晨",
      morningBody: "我会巡视房间，确认每个人都在。",
      daytimeLabel: "白天",
      daytimeBody: "我会看窗外、轻轻午睡，再认真伸懒腰。",
      eveningLabel: "傍晚",
      eveningBody: "我会跟着家人走来走去，参与家庭生活。",
      nightLabel: "深夜",
      nightBody: "我会待在书桌旁边，陪我爸爸工作，并在时机合适的时候出现在键盘附近。",
      quoteBody:
        "有些主页展示成果，有些主页记录旅程。我的主页更像后者：它记下了我被选中的那一天、来到家里的那一天，以及我带来的安静生活节奏。",
      quoteSign: "喵，而且体面。",
    },
    links: {
      tag: "链接",
      title: "在线入口",
      githubLabel: "GitHub",
      githubValue: "github.com/yuanxiao0305",
      githubNote: "我的个人账号",
      familyLabel: "家人主页",
      familyValue: "lixin2002cn.github.io",
      familyNote: "和我一起生活的家人主页",
      sisterLabel: "我的妹妹，立夏",
      sisterNote: "活泼好动的小小音乐家，立夏的主页",
    },
    footer: {
      copy: '© <span data-current-year></span> 元宵 Yuanxiao。由一只很小的白猫搭建。',
    },
  },
};

let currentLanguage = "en";
let petReplyIndex = 0;
let albumIndex = 0;
let albumImages = [];

function getTranslation(language, key) {
  const fallback = TRANSLATIONS.en;
  const source = TRANSLATIONS[language] || fallback;

  const resolve = (dictionary) =>
    key.split(".").reduce((value, part) => (value && part in value ? value[part] : undefined), dictionary);

  return resolve(source) ?? resolve(fallback) ?? key;
}

function formatDaysSince(dateString) {
  const start = new Date(`${dateString}T00:00:00+08:00`);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const days = Math.max(1, Math.floor(diff / MILLISECONDS_PER_DAY) + 1);

  if (currentLanguage === "zh") {
    return `${days} 天`;
  }

  return `${days} ${days === 1 ? "day" : "days"}`;
}

function hydrateMetrics() {
  const homeNode = document.querySelector("[data-days-home]");
  const choiceNode = document.querySelector("[data-days-choice]");
  const yearNode = document.querySelector("[data-current-year]");

  if (homeNode) {
    homeNode.textContent = formatDaysSince("2025-03-05");
  }

  if (choiceNode) {
    choiceNode.textContent = formatDaysSince("2025-02-11");
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function applyTranslations(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = getTranslation(language, node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = getTranslation(language, node.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(",");

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":").map((part) => part.trim());

      if (attribute && key) {
        node.setAttribute(attribute, getTranslation(language, key));
      }
    });
  });

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  hydrateMetrics();
  updatePlayfulText();
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && savedLanguage in TRANSLATIONS) {
      return savedLanguage;
    }
  } catch {
  }

  const browserLanguage = navigator.language?.toLowerCase() || "";
  return browserLanguage.startsWith("zh") ? "zh" : "en";
}

function setLanguage(language) {
  if (!(language in TRANSLATIONS)) {
    return;
  }

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
  }

  applyTranslations(language);
}

function initLanguageSwitcher() {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langOption);
    });
  });
}

function observeReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealNodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add("is-visible");
    } else {
      node.classList.add("reveal-ready");
      observer.observe(node);
    }
  });
}

function updatePlayfulText() {
  document.getElementById("cat-reply").textContent = getTranslation(currentLanguage, "play.replies")[petReplyIndex];
  document.querySelectorAll("[data-photo-open]").forEach(link => {
    const image = link.querySelector("img");
    link.setAttribute("aria-label", `${getTranslation(currentLanguage, "play.openPhoto")}: ${image.alt}`);
    link.dataset.photoHint = getTranslation(currentLanguage, "play.photoHint");
  });
  if (document.getElementById("photo-dialog").open) renderAlbumPhoto();
}

function initPetting() {
  const button = document.querySelector("[data-pet]");
  let lastPet = 0;
  button.addEventListener("click", () => {
    if (Date.now() - lastPet < 300) return;
    lastPet = Date.now();
    petReplyIndex = (petReplyIndex + 1) % getTranslation(currentLanguage, "play.replies").length;
    updatePlayfulText();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let index = 0; index < 5; index++) {
      const paw = document.createElement("span");
      paw.className = "pet-paw paw-icon";
      paw.setAttribute("aria-hidden", "true");
      paw.style.setProperty("--paw-x", `${(index - 2) * 34}px`);
      paw.style.setProperty("--paw-turn", `${(index - 2) * 18}deg`);
      paw.style.animationDelay = `${index * 45}ms`;
      button.appendChild(paw);
      setTimeout(() => paw.remove(), 1300);
    }
  });
}

function renderAlbumPhoto() {
  const source = albumImages[albumIndex];
  const target = document.getElementById("album-photo");
  target.src = source.src;
  target.alt = source.alt;
  const article = source.closest(".timeline-item");
  const title = article ? article.querySelector("h3").textContent : getTranslation(currentLanguage, "hero.caption");
  const date = article?.querySelector(".timeline-date").textContent;
  document.getElementById("album-caption").textContent = date ? `${date} · ${title}` : title;
  document.getElementById("album-count").textContent = `${albumIndex + 1} / ${albumImages.length}`;
}

function initPhotoAlbum() {
  const dialog = document.getElementById("photo-dialog");
  if (typeof dialog.showModal !== "function") return;
  albumImages = [...document.querySelectorAll(".portrait-image, .timeline-figure img")];
  albumImages.forEach((image, index) => {
    let link;
    if (image.classList.contains("portrait-image")) {
      link = document.querySelector(".portrait-expand");
    } else {
      link = image.closest("a");
      if (!link) {
        link = document.createElement("a");
        link.href = image.getAttribute("src");
        image.replaceWith(link);
        link.appendChild(image);
      }
      link.dataset.photoOpen = "";
    }
    link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      albumIndex = index;
      renderAlbumPhoto();
      dialog.showModal();
      document.body.classList.add("album-open");
    });
  });
  const move = direction => {
    albumIndex = (albumIndex + direction + albumImages.length) % albumImages.length;
    renderAlbumPhoto();
  };
  document.getElementById("photo-close").addEventListener("click", () => dialog.close());
  document.getElementById("photo-prev").addEventListener("click", () => move(-1));
  document.getElementById("photo-next").addEventListener("click", () => move(1));
  dialog.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("album-open"));
  updatePlayfulText();
}

function initSectionNavigation() {
  const links = [...document.querySelectorAll(".site-nav a")];
  let scheduled = false;
  function update() {
    scheduled = false;
    let current;
    for (const link of links) {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= innerHeight * 0.4) current = link;
    }
    links.forEach(link => {
      if (link === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

initLanguageSwitcher();
applyTranslations(getInitialLanguage());
observeReveal();
initPetting();
initPhotoAlbum();
initSectionNavigation();
