/* ============================================================
   AI FOR GHANA — LEARNING CENTER DATA
   Add your resources here. Each item:
   {
     id:      unique short id (no spaces),  e.g. "maths-01"
     title:   shown on the card
     type:    "slide" | "pdf" | "text" | "image" | "video"
     subject: e.g. "Mathematics", "Integrated Science", "English",
              "ICT", "AI For Ghana", "Framework", "Tools"
     level:   "Everyone" | "Primary" | "JHS" | "SHS"
     desc:    one-line description
     url:     file in resources/ (e.g. "resources/maths-01.pdf")
              OR a full link (https://...) for videos/articles
     date:    "YYYY-MM-DD"  (used for sorting + the NEW badge)
     featured:true   (optional — shows in the Spotlight row)
     thumb:   "resources/xyz.jpg"  (optional preview image)
   }
   For VIDEOS, just paste the YouTube or TikTok link as url — no file needed.
   ============================================================ */
window.RESOURCES = [
  // ===== FEATURED / FLAGSHIP =====
  { id:"aig-tiktok", title:"AI For Ghana — TikTok Channel", type:"video", subject:"AI For Ghana", level:"Everyone",
    desc:"Free, bite-size AI lessons in Ghanaian context. Follow @AIForGhana.", url:"https://www.tiktok.com/@AIForGhana", date:"2026-06-01", featured:true },
  { id:"framework", title:"Ghana Education Framework 2025–2050", type:"pdf", subject:"Framework", level:"Everyone",
    desc:"The full vision, the 6 pillars, and the delivery plan. Export your Notion page to PDF and place it here.", url:"resources/ghana-education-framework.pdf", date:"2026-06-06", featured:true },
  { id:"ai-01", title:"AI Lesson 1 — What is AI? (Slides)", type:"slide", subject:"AI For Ghana", level:"Everyone",
    desc:"The Kejetia market-woman analogy. Export from NotebookLM and drop the PDF in resources/.", url:"resources/ai-lesson-01-what-is-ai.pdf", date:"2026-06-07", featured:true },

  // ===== TOOLS =====
  { id:"tool-teleprompter", title:"Lesson Teleprompter", type:"text", subject:"Tools", level:"Everyone",
    desc:"Paste your NotebookLM slides and read them hands-free in auto-scroll.", url:"/teleprompter", date:"2026-06-06" },
  { id:"tool-slidevideo", title:"Slide → Video", type:"text", subject:"Tools", level:"Everyone",
    desc:"Turn a slide PDF into a shareable video for TikTok, Reels & more.", url:"/slide-to-video", date:"2026-06-07" },

  // ===== MATHEMATICS =====
  { id:"maths-01", title:"Maths Lesson 1 — Market Math (Slides)", type:"slide", subject:"Mathematics", level:"JHS",
    desc:"Do you really know your profit? Cost, profit & hidden costs.", url:"resources/maths-lesson-01-market-math.pdf", date:"2026-06-07" },
  { id:"maths-15", title:"Maths Lesson 15 — Budgeting & Saving (Slides)", type:"slide", subject:"Mathematics", level:"SHS",
    desc:"50/30/20, pay yourself first, and the maths of keeping money.", url:"resources/maths-lesson-15-budgeting.pdf", date:"2026-06-07" },

  // ===== INTEGRATED SCIENCE =====
  { id:"sci-06", title:"Science Lesson 6 — Photosynthesis (Slides)", type:"slide", subject:"Integrated Science", level:"JHS",
    desc:"How green leaves feed the whole world — including you.", url:"resources/science-lesson-06-photosynthesis.pdf", date:"2026-06-08" },
  { id:"sci-09", title:"Science Lesson 9 — Germs & Immunity (Slides)", type:"slide", subject:"Integrated Science", level:"JHS",
    desc:"The invisible invaders and the army inside you.", url:"resources/science-lesson-09-germs-immunity.pdf", date:"2026-06-08" },

  // ===== ENGLISH =====
  { id:"eng-13", title:"English Lesson 13 — Essay Writing (Slides)", type:"slide", subject:"English", level:"SHS",
    desc:"Structure & argument: intro, body, conclusion that win marks.", url:"resources/english-lesson-13-essay-writing.pdf", date:"2026-06-08" },

  // ===== ICT =====
  { id:"ict-02", title:"ICT Lesson 2 — How Scammers Steal Your MoMo (Slides)", type:"slide", subject:"ICT", level:"Everyone",
    desc:"The scam playbook and the 5 Shields that protect your money.", url:"resources/ict-lesson-02-momo-safety.pdf", date:"2026-06-06" },
  { id:"ict-poster", title:"The 5 Shields Against MoMo Scams (Poster)", type:"image", subject:"ICT", level:"Everyone",
    desc:"Shareable infographic from the Internet Safety lesson.", url:"resources/momo-5-shields.png", date:"2026-06-06" },

  // ===== ARTICLES =====
  { id:"art-whatisai", title:"What is AI? — Read the Article", type:"text", subject:"AI For Ghana", level:"Everyone",
    desc:"A short written version of Lesson 1 for the website.", url:"resources/article-what-is-ai.html", date:"2026-06-07" },
];
