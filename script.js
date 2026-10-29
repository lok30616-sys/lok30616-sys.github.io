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
      heroEyebrow: "Hong Kong",
      heroTitle: "Analytics Engineer",
      heroLede:
        "Platform migration, data integration, and measurement — built for scale and clarity.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      metaLocation: "Location",
      metaLocationValue: "Hong Kong",
      metaRole: "Role",
      metaRoleValue: "Analytics Engineer",
      metaFocus: "Focus",
      metaFocusValue: "Migration · ETL · Analytics",
      aboutTitle: "About",
      aboutP1:
        "I am an Analytics Engineer based in Hong Kong. I lead platform migrations and data integration work — Zendesk, Intercom, HubSpot, AWS Glue — with a focus on reliable cutovers, clean CRM models, and measurement that teams can trust.",
      aboutP2:
        "My day-to-day spans distributed ETL, web analytics, and operational data for customer platforms. I care about clear schemas, reproducible pipelines, and handing teams systems they can own.",
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
      contactLinkedInValue: "Sing Lo — link placeholder",
      contactCV: "CV",
      contactCVValue: "Request a PDF by email",
      footerNote: "Personal portfolio · static site",
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
      heroEyebrow: "香港",
      heroTitle: "分析工程師",
      heroLede: "平台遷移、數據整合與成效衡量——以可擴展與清晰為本。",
      ctaProjects: "查看專案",
      ctaContact: "聯絡我",
      metaLocation: "地點",
      metaLocationValue: "香港",
      metaRole: "職位",
      metaRoleValue: "分析工程師",
      metaFocus: "專長",
      metaFocusValue: "遷移 · ETL · 分析",
      aboutTitle: "關於",
      aboutP1:
        "我是駐香港的分析工程師。負責平台遷移與數據整合（Zendesk、Intercom、HubSpot、AWS Glue），著重可靠切換、清晰的 CRM 模型，以及團隊可信任的衡量體系。",
      aboutP2:
        "日常工作涵蓋分散式 ETL、網站分析，以及客戶平台的營運數據。我重視清楚的資料結構、可重現的管線，以及把系統交到團隊手上後他們仍能自主維運。",
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
      contactLinkedInValue: "Sing Lo — 連結待補",
      contactCV: "履歷",
      contactCVValue: "以電郵索取 PDF",
      footerNote: "個人作品集 · 靜態網站",
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
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setLang(getPreferredLang());
})();
