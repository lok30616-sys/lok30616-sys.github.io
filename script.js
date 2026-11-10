(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";

  var strings = {
    en: {
      skip: "Skip to content",
      wordmarkRole: "Analytics Engineer",
      navAbout: "About",
      navProjects: "Projects",
      navExperience: "Experience",
      navSkills: "Skills",
      navEducation: "Education",
      navContact: "Contact",
      navHome: "Home",
      navStory: "Story",
      navLab: "Lab",
      heroEyebrow: "Hong Kong",
      heroTitle: "Analytics Engineer",
      heroLede:
        "Platform migration, data integration, and measurement — calm outside, stubborn about craft.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      metaLocation: "Location",
      metaLocationValue: "Hong Kong",
      metaRole: "Role",
      metaRoleValue: "Analytics Engineer",
      metaFocus: "Focus",
      metaFocusValue: "Migration · ETL · Analytics · AI tools",
      aboutTitle: "About",
      aboutP1:
        "I'm an Analytics Engineer in Hong Kong. I work on platform migrations and data integration — Zendesk, Intercom, HubSpot, AWS Glue — chasing reliable cutovers, CRM models that stay clean, and measurement teams can actually trust. Cursor and Kiro help me move faster without cutting corners.",
      aboutP2:
        "Day to day I'm in ETL, web analytics, and ops data for customer platforms. I like clear schemas, pipelines you can rerun, and leaving people with systems they can own.",
      aboutMotto:
        "If something is worth doing, I stick with it — keep turning, keep improving.",
      aboutAttrib:
        "Inspired by Mazda’s rotary / Never Stop Challenging spirit.",
      projectsTitle: "Featured projects",
      projectsIntro:
        "Selected personal project experience. Client names are masked for confidentiality.",
      proj1Tag: "Data Engineer · Migration",
      proj1Title: "Consumer Electronics Brand",
      proj1Meta: "Zendesk → Intercom · 01/2026 – mid 2026",
      proj1b1:
        "Migrated support operations for ~100 CS staff: ~250K tickets; ~5.25M records archived to S3.",
      proj1b2:
        "Built a ~22-stage AWS Glue ETL pipeline; Intercom custom data attributes; Secrets Manager; cutover and reconciliation.",
      proj1b3:
        "Rationalized ~4,858 automation items; Parquet + Athena for archive analytics.",
      proj2Tag: "Web Analytics & Attribution",
      proj2Title: "Audio Brand",
      proj2Meta: "Multi-region ecommerce · GA4 + Shopify",
      proj2b1:
        "Multi-region GA4 with Shopify custom-pixel coverage across EU, Japan, and Korea.",
      proj2b2:
        "Standardized events and channel groupings; reconciled GA4 vs Shopify attribution.",
      proj2b3: "Delivered a GA4 audit toolkit for ongoing measurement hygiene.",
      proj3Tag: "Data Engineer · Migration",
      proj3Title: "Telecommunications Client",
      proj3Meta: "CRM → HubSpot · phased 2024 UAT",
      proj3b1:
        "Consolidated HubSpot, INsight, and Console Connect into a unified HubSpot CRM.",
      proj3b2:
        "Modeled parent–child company hierarchy; BigQuery cleansing and deduplication.",
      proj3b3: "Supported phased UAT through 2024 for a controlled rollout.",
      experienceTitle: "Experience",
      expCurrent: "Present",
      exp1Role: "Analytics Engineer",
      exp1Desc:
        "Senior IC / lead on platform migrations, AWS Glue ETL, CRM unification, and multi-region analytics. See featured projects above.",
      exp2Role: "Associate Analytics Engineer",
      exp2Desc:
        "Tracking plans; GA4, Amplitude, and Mixpanel implementations; BigQuery, dbt, Fivetran, and Hightouch for analytics and activation.",
      exp3Role: "Junior Data Engineer",
      exp3Desc:
        "Built foundational data-engineering skills through programme analytics and operational reporting.",
      exp4Role: "Programme operations",
      exp4Desc:
        "Early experience in programme operations and coordination — groundwork for later analytics work.",
      skillsTitle: "Skills",
      skill1Title: "Data Engineering & Cloud",
      skill2Title: "Analytics & Tracking",
      skill3Title: "Platforms",
      skill4Title: "Languages & Tools",
      educationTitle: "Education",
      edu1School: "The Chinese University of Hong Kong",
      edu1Degree: "BSocSc Psychology",
      edu2School: "HKCC",
      edu2Degree:
        "Associate Degree in Applied Social Sciences (Psychology), with Distinction",
      contactTitle: "Contact",
      contactLede:
        "Open to conversations about analytics engineering, platform migrations, and measurement. Typically available with about one month’s notice.",
      contactEmail: "Email",
      contactLinkedIn: "LinkedIn",
      contactLinkedInValue: "Sing Lo",
      contactCV: "CV",
      contactCVValue: "Request a PDF by email",
      footerNote: "Personal portfolio · static site",
      storyEyebrow: "Story",
      storyTitle: "Keep turning",
      storyLede: "From psychology to migrations — the part of the timeline the roles leave out.",
      story1Title: "Define it first",
      story1Body:
        "I studied psychology, first at HKCC and then at CUHK. The part that stayed was a habit: define a thing before you measure it, and ask who has to live with the answer.",
      story2Title: "The same job, other side",
      story2Body:
        "In late 2021 I was in programme operations. The work was dates, people, and whether a plan would actually run. A few months later I was a junior data engineer, building the reporting around that kind of work. On a timeline the turn is short. It was the same job from the other side. A table means something only if someone knows what the operation was.",
      story3Title: "A name is a promise",
      story3Body:
        "From 2022 I worked on tracking. GA4, Amplitude, Mixpanel, then the warehouse: BigQuery, dbt, Fivetran, Hightouch. A tracking plan is a promise about what an event means. A sloppy name makes every report downstream argue about the definition.",
      story4Title: "The quiet end",
      story4Body:
        "Since 2024 the work has been migrations. Support desks, CRMs, measurement across regions. The scale shows up as tickets, records, automation rules, and storefronts. The part I stay on is the quiet end: a cutover you can reconcile, a hierarchy that does not collapse into duplicates, a pipeline you can rerun, and a system the team can own after I leave.",
      labEyebrow: "Lab",
      labTitle: "Three small tools",
      labLede:
        "UTM links, Unix time, and a field rename for the step between an export and the warehouse. Everything stays in this browser.",
      utmTitle: "UTM builder",
      utmIntro:
        "Build a link with the campaign parameters filled in. Existing query parameters on the URL are kept.",
      utmUrl: "Page URL",
      utmUrlPh: "https://example.com/pricing",
      utmSource: "Source",
      utmSourcePh: "newsletter",
      utmMedium: "Medium",
      utmMediumPh: "email",
      utmCampaign: "Campaign",
      utmCampaignPh: "spring_launch",
      utmContent: "Content",
      utmContentPh: "logo",
      utmTerm: "Term",
      utmTermPh: "analytics",
      utmResult: "Link",
      utmNeed: "Add a page URL.",
      utmBad: "That URL could not be read. Use a full link, or a host like example.com/page.",
      unixTitle: "Unix time",
      unixIntro:
        "Paste a timestamp or a date. Ten digits is seconds, thirteen is milliseconds. A date with no offset uses this browser’s timezone. Add +08:00 for Hong Kong.",
      unixInput: "Timestamp or date",
      unixPh: "1700000000 or 2024-11-10T20:25:00+08:00",
      unixNow: "Now",
      unixSeconds: "Seconds",
      unixMillis: "Milliseconds",
      unixUtc: "UTC",
      unixHk: "Hong Kong",
      unixBad: "That value is not a timestamp or a date.",
      mapTitle: "Field mapper",
      mapIntro:
        "One field per line, or a single comma-separated row. A blank target is snake-cased from the source. Names that need quoting use BigQuery backticks.",
      mapSource: "Source fields",
      mapSourcePh: "Ticket Id\ncreated_at\nChannel Group",
      mapTarget: "Target fields",
      mapTargetPh: "ticket_id",
      mapSql: "SQL",
      mapJson: "JSON",
      mapPaired: "{n} fields paired.",
      mapGenerated: "{n} target names were snake-cased from the source.",
      mapExtra: "{n} extra target rows were left out.",
      mapCollision: "Duplicate target names: {names}.",
      copy: "Copy",
      copied: "Copied",
    },
    zh: {
      skip: "跳至內容",
      wordmarkRole: "分析工程師",
      navAbout: "關於",
      navProjects: "專案",
      navExperience: "經歷",
      navSkills: "技能",
      navEducation: "學歷",
      navContact: "聯絡",
      navHome: "首頁",
      navStory: "故事",
      navLab: "工具",
      heroEyebrow: "香港",
      heroTitle: "分析工程師",
      heroLede: "平台遷移、數據整合與成效衡量——外表從容，骨子裡對做好一件事很執著。",
      ctaProjects: "查看專案",
      ctaContact: "聯絡我",
      metaLocation: "地點",
      metaLocationValue: "香港",
      metaRole: "職位",
      metaRoleValue: "分析工程師",
      metaFocus: "專長",
      metaFocusValue: "遷移 · ETL · 分析 · AI 工具",
      aboutTitle: "關於",
      aboutP1:
        "我是駐香港的分析工程師。日常做平台遷移與數據整合——Zendesk、Intercom、HubSpot、AWS Glue——追求可靠切換、保持乾淨的 CRM 模型，以及團隊真正用得上的衡量。Cursor、Kiro 這類 AI 工具幫我走快一點，但不走捷徑。",
      aboutP2:
        "平常就泡在 ETL、網站分析，還有客戶平台的營運數據裡。喜歡清楚的資料結構、可以重跑的管線，以及把系統交出去之後，大家還能自己維運。",
      aboutMotto:
        "只要事情值得做，我就會堅持下去——持續轉動，持續變好。",
      aboutAttrib:
        "靈感來自 Mazda 轉子引擎與 Never Stop Challenging 精神。",
      projectsTitle: "精選專案",
      projectsIntro: "精選個人專案經驗。客戶名稱已遮罩以保密。",
      proj1Tag: "數據工程 · 遷移",
      proj1Title: "消費電子品牌",
      proj1Meta: "Zendesk → Intercom · 2026/01 – 2026 年中",
      proj1b1:
        "為約 100 名客服人員遷移支援營運：約 25 萬張工單；約 525 萬筆紀錄歸檔至 S3。",
      proj1b2:
        "建置約 22 階段 AWS Glue ETL；Intercom 自訂資料屬性、Secrets Manager；切換與核對。",
      proj1b3: "精簡約 4,858 項自動化規則；以 Parquet + Athena 支援歸檔分析。",
      proj2Tag: "網站分析與歸因",
      proj2Title: "音響品牌",
      proj2Meta: "多區電商 · GA4 + Shopify",
      proj2b1: "多區 GA4，並以 Shopify custom pixel 覆蓋歐盟、日本與韓國。",
      proj2b2: "統一事件與渠道分組；核對 GA4 與 Shopify 歸因差異。",
      proj2b3: "交付 GA4 稽核工具組，支援持續的衡量衛生。",
      proj3Tag: "數據工程 · 遷移",
      proj3Title: "電訊客戶",
      proj3Meta: "CRM → HubSpot · 2024 分階段 UAT",
      proj3b1: "整合 HubSpot、INsight 與 Console Connect，統一至 HubSpot CRM。",
      proj3b2: "建立母子公司層級；以 BigQuery 清洗與去重。",
      proj3b3: "支援 2024 年分階段 UAT，確保可控上線。",
      experienceTitle: "經歷",
      expCurrent: "至今",
      exp1Role: "分析工程師",
      exp1Desc:
        "以資深個人貢獻者／主導角色負責平台遷移、AWS Glue ETL、CRM 整合，以及多區分析。詳見上方精選專案。",
      exp2Role: "副分析工程師",
      exp2Desc:
        "追蹤計畫；GA4、Amplitude、Mixpanel 實作；以 BigQuery、dbt、Fivetran、Hightouch 支援分析與啟動。",
      exp3Role: "初級數據工程師",
      exp3Desc: "透過計劃分析與營運報表，建立數據工程基礎能力。",
      exp4Role: "計劃營運",
      exp4Desc: "早期計劃營運與協調經驗——為後來的分析工作打下基礎。",
      skillsTitle: "技能",
      skill1Title: "數據工程與雲端",
      skill2Title: "分析與追蹤",
      skill3Title: "平台",
      skill4Title: "語言與工具",
      educationTitle: "學歷",
      edu1School: "香港中文大學",
      edu1Degree: "社會科學學士（心理學）",
      edu2School: "香港專上學院（HKCC）",
      edu2Degree: "應用社會科學副學士（心理學），優異",
      contactTitle: "聯絡",
      contactLede:
        "歡迎就分析工程、平台遷移與成效衡量交流。通常約需一個月通知期。",
      contactEmail: "電郵",
      contactLinkedIn: "LinkedIn",
      contactLinkedInValue: "Sing Lo",
      contactCV: "履歷",
      contactCVValue: "以電郵索取 PDF",
      footerNote: "個人作品集 · 靜態網站",
      storyEyebrow: "故事",
      storyTitle: "一直轉下去",
      storyLede: "從心理到遷移——職位列不出的那一段。",
      story1Title: "先定義清楚",
      story1Body:
        "我先讀心理。HKCC，然後中大。留下來的是一個習慣：量一件事之前先定義清楚，再問誰要拿這個答案去做事。",
      story2Title: "同一件事的另一面",
      story2Body:
        "2021 年底我在做計劃營運，對日期、對人、對一份計劃到底跑不跑得動。幾個月後我轉去初級數據工程，替同一類工作做報表。時間線上看很短。那是同一件事的另一面：表要有意思，得有人先知道營運裡發生了什麼。",
      story3Title: "名字是承諾",
      story3Body:
        "2022 年起做追蹤。GA4、Amplitude、Mixpanel，然後是倉庫：BigQuery、dbt、Fivetran、Hightouch。一份 tracking plan 是對「這個事件是什麼意思」的承諾。名字含糊，後面的報表就在吵定義。",
      story4Title: "安靜的那一端",
      story4Body:
        "2024 年以後，工作變成遷移。支援台、CRM、跨地區的成效衡量。規模是工單、紀錄、自動化規則、店面。我留下來盯的是安靜的那一端：對得上的切換、不會塌成重複的層級、可以重跑的管道，以及我離開以後團隊自己擁有的系統。",
      labEyebrow: "工具",
      labTitle: "三個小工具",
      labLede: "UTM 連結、Unix 時間，以及匯出檔到倉庫之間的欄位改名。資料只留在這個瀏覽器。",
      utmTitle: "UTM 產生器",
      utmIntro: "組一條帶活動參數的連結。網址上原有的查詢參數會保留。",
      utmUrl: "頁面網址",
      utmUrlPh: "https://example.com/pricing",
      utmSource: "來源",
      utmSourcePh: "newsletter",
      utmMedium: "媒介",
      utmMediumPh: "email",
      utmCampaign: "活動",
      utmCampaignPh: "spring_launch",
      utmContent: "內容",
      utmContentPh: "logo",
      utmTerm: "關鍵字",
      utmTermPh: "analytics",
      utmResult: "連結",
      utmNeed: "請填上頁面網址。",
      utmBad: "這個網址讀不到。請用完整連結，或 example.com/page 這樣的主機。",
      unixTitle: "Unix 時間",
      unixIntro:
        "貼上時間戳或日期。十位數是秒，十三位數是毫秒。沒有時區的日期會用這個瀏覽器的時區；香港時間請加上 +08:00。",
      unixInput: "時間戳或日期",
      unixPh: "1700000000 或 2024-11-10T20:25:00+08:00",
      unixNow: "現在",
      unixSeconds: "秒",
      unixMillis: "毫秒",
      unixUtc: "UTC",
      unixHk: "香港",
      unixBad: "這不是時間戳，也不是日期。",
      mapTitle: "欄位對應",
      mapIntro:
        "一行一個欄位，或用逗號分隔的一行。目標名稱留空時，會依來源轉成 snake_case。名稱需要引號時，SQL 使用 BigQuery 的反引號。",
      mapSource: "來源欄位",
      mapSourcePh: "Ticket Id\ncreated_at\nChannel Group",
      mapTarget: "目標欄位",
      mapTargetPh: "ticket_id",
      mapSql: "SQL",
      mapJson: "JSON",
      mapPaired: "已配對 {n} 個欄位。",
      mapGenerated: "{n} 個目標名稱由來源轉成 snake_case。",
      mapExtra: "多出的 {n} 個目標列已略過。",
      mapCollision: "目標名稱重複：{names}。",
      copy: "複製",
      copied: "已複製",
    },
  };

  function getPreferredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") return stored;
    } catch (e) {
      /* ignore */
    }
    return "en";
  }

  function setLang(lang) {
    if (!strings[lang]) lang = "en";
    var dict = strings[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    langHooks.forEach(function (fn) {
      fn();
    });
  }

  var langHooks = [];

  function activeDict() {
    return document.documentElement.lang === "zh-Hant" ? strings.zh : strings.en;
  }

  function fillTemplate(template, vars) {
    return String(template).replace(/\{(\w+)\}/g, function (_match, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : "";
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy") ? resolve() : reject(new Error("copy"));
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(area);
    });
  }

  function flashCopied(btn) {
    btn.textContent = activeDict().copied;
    window.setTimeout(function () {
      btn.textContent = activeDict().copy;
    }, 1400);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setLang(getPreferredLang());

  /* Subtle section / card reveal — skipped when user prefers reduced motion */
  function initReveal() {
    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(
      ".hero-copy, .hero-meta, .section-label, .section-intro, .prose, .about-motto, .project-card, .timeline-item, .edu-item, .skill-group, .contact-list"
    );
    if (!targets.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("reveal", "is-visible");
      });
      return;
    }

    function inView(el) {
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > 0;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach(function (el, i) {
      var delay = i % 3;
      if (delay > 0) el.classList.add("reveal-delay-" + delay);
      if (inView(el)) {
        // Already on screen — show immediately, no hide flash
        el.classList.add("reveal", "is-visible");
      } else {
        el.classList.add("reveal");
        observer.observe(el);
      }
    });
  }

  initReveal();
  initLab();

  function initLab() {
    var tools = window.PortfolioLab;
    var utmForm = document.getElementById("utm-form");
    if (!utmForm || !tools) return;

    var utmError = document.getElementById("utm-error");
    var utmResult = document.getElementById("utm-result");
    var utmLink = document.getElementById("utm-link");
    var utmCopy = document.getElementById("utm-copy");
    var utmHref = "";

    function renderUtm() {
      var dict = activeDict();
      var data = new FormData(utmForm);
      var built = tools.buildUtm(data.get("url"), {
        source: data.get("source"),
        medium: data.get("medium"),
        campaign: data.get("campaign"),
        content: data.get("content"),
        term: data.get("term"),
      });
      if (built.error === "empty") {
        utmHref = "";
        utmError.textContent = "";
        utmResult.hidden = true;
        utmLink.removeAttribute("href");
        utmLink.textContent = "";
        return;
      }
      if (built.error) {
        utmHref = "";
        utmError.textContent = dict.utmBad;
        utmResult.hidden = true;
        utmLink.removeAttribute("href");
        utmLink.textContent = "";
        return;
      }
      utmHref = built.href;
      utmError.textContent = "";
      utmResult.hidden = false;
      utmLink.href = built.href;
      utmLink.textContent = built.href;
    }

    utmForm.addEventListener("input", renderUtm);
    utmForm.addEventListener("submit", function (event) {
      event.preventDefault();
      renderUtm();
      if (!String(utmForm.elements.url.value || "").trim()) {
        utmError.textContent = activeDict().utmNeed;
      }
    });
    utmCopy.addEventListener("click", function () {
      if (!utmHref) return;
      copyText(utmHref).then(function () {
        flashCopied(utmCopy);
      });
    });

    var unixForm = document.getElementById("unix-form");
    var unixIn = document.getElementById("unix-in");
    var unixError = document.getElementById("unix-error");
    var unixOut = document.getElementById("unix-out");
    var unixCopy = document.getElementById("unix-copy");
    var unixText = "";

    function renderUnix() {
      var dict = activeDict();
      var parsed = tools.parseInstant(unixIn.value);
      if (parsed.error === "empty") {
        unixText = "";
        unixError.textContent = "";
        unixOut.hidden = true;
        unixCopy.disabled = true;
        return;
      }
      var formatted = parsed.error ? null : tools.formatInstant(parsed.ms);
      if (!formatted) {
        unixText = "";
        unixError.textContent = dict.unixBad;
        unixOut.hidden = true;
        unixCopy.disabled = true;
        return;
      }
      unixError.textContent = "";
      unixOut.hidden = false;
      unixCopy.disabled = false;
      document.getElementById("unix-sec").textContent = formatted.seconds;
      document.getElementById("unix-ms").textContent = formatted.milliseconds;
      document.getElementById("unix-utc").textContent = formatted.utc;
      document.getElementById("unix-hk").textContent = formatted.hongKong;
      unixText = [
        dict.unixSeconds + ": " + formatted.seconds,
        dict.unixMillis + ": " + formatted.milliseconds,
        dict.unixUtc + ": " + formatted.utc,
        dict.unixHk + ": " + formatted.hongKong,
      ].join("\n");
    }

    unixIn.addEventListener("input", renderUnix);
    unixForm.addEventListener("submit", function (event) {
      event.preventDefault();
      renderUnix();
    });
    document.getElementById("unix-now").addEventListener("click", function () {
      unixIn.value = String(Date.now());
      renderUnix();
      unixIn.focus();
    });
    unixCopy.addEventListener("click", function () {
      if (!unixText) return;
      copyText(unixText).then(function () {
        flashCopied(unixCopy);
      });
    });

    var mapSrc = document.getElementById("map-src");
    var mapDst = document.getElementById("map-dst");
    var mapNote = document.getElementById("map-note");
    var mapSqlWrap = document.getElementById("map-sql-wrap");
    var mapJsonWrap = document.getElementById("map-json-wrap");
    var mapSql = document.getElementById("map-sql");
    var mapJson = document.getElementById("map-json");

    function renderMap() {
      var dict = activeDict();
      var mapped = tools.mapFields(mapSrc.value, mapDst.value);
      if (mapped.error) {
        mapNote.textContent = "";
        mapSqlWrap.hidden = true;
        mapJsonWrap.hidden = true;
        mapSql.textContent = "";
        mapJson.textContent = "";
        return;
      }
      var notes = [fillTemplate(dict.mapPaired, { n: mapped.rows.length })];
      if (mapped.generated) notes.push(fillTemplate(dict.mapGenerated, { n: mapped.generated }));
      if (mapped.extra.length) notes.push(fillTemplate(dict.mapExtra, { n: mapped.extra.length }));
      var names = [];
      mapped.rows.forEach(function (row) {
        if (row.collision && names.indexOf(row.dst) === -1) names.push(row.dst);
      });
      if (names.length) notes.push(fillTemplate(dict.mapCollision, { names: names.join(", ") }));
      mapNote.textContent = notes.join(" ");
      mapSql.textContent = mapped.sql;
      mapJson.textContent = mapped.json;
      mapSqlWrap.hidden = false;
      mapJsonWrap.hidden = false;
    }

    mapSrc.addEventListener("input", renderMap);
    mapDst.addEventListener("input", renderMap);
    document.getElementById("map-form").addEventListener("submit", function (event) {
      event.preventDefault();
      renderMap();
    });
    document.getElementById("map-copy-sql").addEventListener("click", function () {
      if (!mapSql.textContent) return;
      copyText(mapSql.textContent).then(function () {
        flashCopied(document.getElementById("map-copy-sql"));
      });
    });
    document.getElementById("map-copy-json").addEventListener("click", function () {
      if (!mapJson.textContent) return;
      copyText(mapJson.textContent).then(function () {
        flashCopied(document.getElementById("map-copy-json"));
      });
    });

    langHooks.push(function () {
      renderUtm();
      renderUnix();
      renderMap();
    });
  }

})();
