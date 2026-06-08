/* ============================================================
   AI FOR GHANA — LEARNING CENTER DATA
   Each item:
   {
     id, title,
     type:    "slide" | "pdf" | "text" | "image" | "video"
     subject: "Mathematics" | "Integrated Science" | "English" |
              "ICT" | "AI For Ghana" | "Framework" | "Tools"
     topic:   (AI For Ghana curriculum — matches Notion)
              "Phase 1 · Foundation" | "Phase 2 · Prompting Skills" |
              "Phase 3 · #PromptGhana"   (optional, leave out if N/A)
     level:   "Everyone" | "Primary" | "JHS" | "SHS"
     desc, url, date:"YYYY-MM-DD", featured:true (optional), thumb (optional)
   }
   NOTES:
   - PowerPoint (.pptx) previews in-browser on the LIVE site (Office viewer);
     on your computer it downloads. .mp4 videos play inside the page.
   - For TikTok/YouTube, just paste the link as url — no file needed.
   ============================================================ */
window.RESOURCES = [
  // ===== AI FOR GHANA · PHASE 1 — FOUNDATION =====
  { id:"vid-ai-power", title:"Ghanaian AI Power (Video)", type:"video", subject:"AI For Ghana", topic:"Phase 1 · Foundation", level:"Everyone",
    desc:"How AI can power the next generation of Ghanaian innovators.", url:"resources/Video/Ghanaian_AI_Power.mp4", date:"2026-06-08", featured:true },
  { id:"sld-ai-power", title:"Ghanaian AI Power", type:"slide", subject:"AI For Ghana", topic:"Phase 1 · Foundation", level:"Everyone",
    desc:"Slides: understanding and harnessing AI for Ghana's future.", url:"resources/Slids/Ghanaian_AI_Power.pptx", date:"2026-06-08", featured:true },
  { id:"sld-ai-business", title:"Ghana AI Business Blueprint", type:"slide", subject:"AI For Ghana", topic:"Phase 1 · Foundation", level:"SHS",
    desc:"Use AI to start and grow a business right here in Ghana (Lesson 10: AI as an entrepreneur).", url:"resources/Slids/Ghana_AI_Business_Blueprint.pptx", date:"2026-06-08" },
  { id:"sld-digital-chop-bar", title:"The Digital Chop Bar", type:"slide", subject:"AI For Ghana", topic:"Phase 1 · Foundation", level:"Everyone",
    desc:"Taking everyday Ghanaian business online with simple AI & digital tools.", url:"resources/Slids/The_Digital_Chop_Bar.pptx", date:"2026-06-08" },

  // ===== AI FOR GHANA · PHASE 3 — #PROMPTGHANA / CHANNEL =====
  { id:"aig-tiktok", title:"AI For Ghana — TikTok Channel", type:"video", subject:"AI For Ghana", topic:"Phase 3 · #PromptGhana", level:"Everyone",
    desc:"Free, bite-size AI lessons in Ghanaian context. Follow @AIForGhana.", url:"https://www.tiktok.com/@AIForGhana", date:"2026-06-01" },

  // ===== ICT =====
  { id:"sld-pocket-supercomputer", title:"Your Pocket Supercomputer", type:"slide", subject:"ICT", level:"Everyone",
    desc:"The phone in your hand is more powerful than the computer that landed man on the moon.", url:"resources/Slids/YOUR_POCKET_SUPERCOMPUTER.pptx", date:"2026-06-08", featured:true },

  // ===== TOOLS =====
  { id:"tool-teleprompter", title:"Lesson Teleprompter", type:"text", subject:"Tools", level:"Everyone",
    desc:"Paste your slides and read them hands-free in auto-scroll.", url:"/teleprompter", date:"2026-06-06" },
  { id:"tool-slidevideo", title:"Slide → Video", type:"text", subject:"Tools", level:"Everyone",
    desc:"Turn a slide PDF into a shareable video for TikTok, Reels & more.", url:"/slide-to-video", date:"2026-06-07" },
];
