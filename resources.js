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
     url:     file in resources/ (e.g. "resources/Slids/My_Slides.pptx")
              OR a full link (https://...) for videos/articles
     date:    "YYYY-MM-DD"  (used for sorting + the NEW badge)
     featured:true   (optional — shows in the Spotlight row)
     thumb:   "resources/xyz.jpg"  (optional preview image)
   }
   NOTES:
   - PowerPoint (.pptx) slides preview in-browser on the LIVE site
     (via Microsoft's free Office viewer). On your computer they download.
   - Video files (.mp4) play inside the page. YouTube/TikTok links also work.
   - For VIDEOS from TikTok/YouTube, just paste the link as url — no file needed.
   ============================================================ */
window.RESOURCES = [
  // ===== FEATURED =====
  { id:"vid-ai-power", title:"Ghanaian AI Power (Video)", type:"video", subject:"AI For Ghana", level:"Everyone",
    desc:"How AI can power the next generation of Ghanaian innovators.", url:"resources/Video/Ghanaian_AI_Power.mp4", date:"2026-06-08", featured:true },
  { id:"sld-pocket-supercomputer", title:"Your Pocket Supercomputer", type:"slide", subject:"ICT", level:"Everyone",
    desc:"The phone in your hand is more powerful than the computer that landed man on the moon.", url:"resources/Slids/YOUR_POCKET_SUPERCOMPUTER.pptx", date:"2026-06-08", featured:true },
  { id:"sld-ai-power", title:"Ghanaian AI Power", type:"slide", subject:"AI For Ghana", level:"Everyone",
    desc:"Slides: understanding and harnessing AI for Ghana's future.", url:"resources/Slids/Ghanaian_AI_Power.pptx", date:"2026-06-08", featured:true },

  // ===== SLIDES =====
  { id:"sld-ai-business", title:"Ghana AI Business Blueprint", type:"slide", subject:"AI For Ghana", level:"SHS",
    desc:"Use AI to start and grow a business right here in Ghana.", url:"resources/Slids/Ghana_AI_Business_Blueprint.pptx", date:"2026-06-08" },
  { id:"sld-digital-chop-bar", title:"The Digital Chop Bar", type:"slide", subject:"AI For Ghana", level:"Everyone",
    desc:"Taking everyday Ghanaian business online with simple digital tools.", url:"resources/Slids/The_Digital_Chop_Bar.pptx", date:"2026-06-08" },

  // ===== TOOLS =====
  { id:"tool-teleprompter", title:"Lesson Teleprompter", type:"text", subject:"Tools", level:"Everyone",
    desc:"Paste your slides and read them hands-free in auto-scroll.", url:"/teleprompter", date:"2026-06-06" },
  { id:"tool-slidevideo", title:"Slide → Video", type:"text", subject:"Tools", level:"Everyone",
    desc:"Turn a slide PDF into a shareable video for TikTok, Reels & more.", url:"/slide-to-video", date:"2026-06-07" },

  // ===== CHANNEL =====
  { id:"aig-tiktok", title:"AI For Ghana — TikTok Channel", type:"video", subject:"AI For Ghana", level:"Everyone",
    desc:"Free, bite-size AI lessons in Ghanaian context. Follow @AIForGhana.", url:"https://www.tiktok.com/@AIForGhana", date:"2026-06-01" },
];
