/* ============================================================
   AI FOR GHANA — LEARNING HUB DATA
   How to add resources: copy one object in the array below.
   Change the fields. Save & push. Or ask Claude to add them for you.

   FIELDS:
   {
     id:          'unique-id',
     title:       'Resource Title',
     description: 'Short description, 1–2 sentences.',
     section:     'curriculum' | 'ai-ghana',
     subject:     // CURRICULUM:
                  'mathematics' | 'science' | 'english' | 'social-studies' |
                  'ict' | 'rme' | 'creative-arts' | 'ghanaian-languages' |
                  'chemistry' | 'physics' | 'biology' | 'elective-maths' |
                  'literature' | 'business' | 'economics' | 'government' |
                  'agriculture' | 'home-economics' | 'music' | 'pe' |
                  'french' | 'technical-drawing' | 'engineering' |
                  // AI FOR GHANA:
                  'ai-basics' | 'ai-tools' | 'prompt-quran' | 'gaep' |
                  'documentary' | 'ai-business' | 'ai-agriculture' |
                  'ai-health' | 'ai-students' | 'ai-ethics',
     type:        'video' | 'audio' | 'podcast' | 'pdf' | 'slides' |
                  'notes' | 'article' | 'interactive',
     level:       'primary' | 'jhs' | 'shs1' | 'shs2' | 'shs3' | 'university' |
                  'beginner' | 'intermediate' | 'advanced' | 'educators',
     waec:        true | false,        // shows WAEC ✓ badge
     featured:    true | false,        // full-width featured card
     url:         'https://...' or 'resources/file.pdf',
     downloadUrl: 'resources/file.pdf',   // optional separate download
     audioUrl:    'resources/audio.mp3',  // optional audio version
     thumbnail:   'resources/thumb.jpg',  // optional thumbnail
     duration:    '12 min',               // video/audio/podcast
     language:    'en' | 'twi' | 'en+twi',
     tags:        ['waec','shs','core'],  // extra searchable words
     dateAdded:   'YYYY-MM-DD'
   }
   ============================================================ */
window.RESOURCES = [

  /* ================= SECTION 1 — GHANA CORE CURRICULUM ================= */

  { id: 'math-001', title: 'WAEC Core Mathematics — Past Questions 2020–2024',
    description: 'Complete past question papers with worked solutions for SHS 3 students.',
    section: 'curriculum', subject: 'mathematics', type: 'pdf', level: 'shs3',
    waec: true, featured: true, url: '/resources/waec-core-maths-2020-2024.pdf',
    tags: ['waec','past questions','shs'], dateAdded: '2026-07-01' },

  { id: 'eng-001', title: 'English Language Essay Writing Masterclass',
    description: 'Step-by-step guide to scoring A1 in WAEC English Language essay section.',
    section: 'curriculum', subject: 'english', type: 'notes', level: 'shs2',
    waec: true, url: '/resources/english-essay-guide.pdf',
    tags: ['essay','writing','waec'], dateAdded: '2026-07-01' },

  { id: 'sci-001', title: 'Integrated Science Revision — JHS 3',
    description: 'Full revision notes covering all BECE Integrated Science topics.',
    section: 'curriculum', subject: 'science', type: 'pdf', level: 'jhs',
    waec: true, url: '/resources/jhs3-science-revision.pdf',
    tags: ['bece','revision','jhs'], dateAdded: '2026-07-01' },

  { id: 'ict-001', title: 'ICT Practical Guide — SHS Level',
    description: 'Hands-on exercises for SHS ICT covering spreadsheets, word processing, and databases.',
    section: 'curriculum', subject: 'ict', type: 'slides', level: 'shs1',
    waec: false, url: '/resources/shs-ict-practical.pdf',
    tags: ['ict','practical','spreadsheets'], dateAdded: '2026-07-01' },

  { id: 'biz-001', title: 'Business Management — Elective Concepts Explained',
    description: 'Visual notes covering all Business Management elective topics for SHS 2 and 3.',
    section: 'curriculum', subject: 'business', type: 'slides', level: 'shs2',
    waec: true, url: '/resources/business-mgmt-notes.pdf',
    tags: ['elective','business'], dateAdded: '2026-07-01' },

  { id: 'agri-001', title: 'Agriculture Science — Crop Production & Soil',
    description: 'Detailed notes on crop production, soil types, and farm management for SHS.',
    section: 'curriculum', subject: 'agriculture', type: 'notes', level: 'shs2',
    waec: true, url: '/resources/agri-crop-soil.pdf',
    tags: ['crops','soil','farming'], dateAdded: '2026-07-01' },

  { id: 'ict-002', title: 'Your Pocket Supercomputer',
    description: 'The phone in your hand is more powerful than the computer that landed man on the moon.',
    section: 'curriculum', subject: 'ict', type: 'slides', level: 'jhs',
    waec: false, featured: true, url: 'resources/Slids/YOUR_POCKET_SUPERCOMPUTER.pdf',
    tags: ['phones','technology'], dateAdded: '2026-06-08' },

  { id: 'tool-001', title: 'Lesson Teleprompter',
    description: 'Paste your slides and read them hands-free in auto-scroll. Built for teachers and creators.',
    section: 'curriculum', subject: 'ict', type: 'interactive', level: 'university',
    waec: false, url: '/teleprompter',
    tags: ['tool','teacher'], dateAdded: '2026-06-06' },

  { id: 'tool-002', title: 'Slide → Video Converter',
    description: 'Turn a slide PDF into a shareable video for TikTok, Reels and more.',
    section: 'curriculum', subject: 'ict', type: 'interactive', level: 'university',
    waec: false, url: '/slide-to-video',
    tags: ['tool','video','creator'], dateAdded: '2026-06-07' },

  /* ================= SECTION 2 — AI FOR GHANA ================= */

  { id: 'ai-001', title: 'Lesson 1 — What is Artificial Intelligence?',
    description: 'AI explained through the Kejetia market woman analogy. Perfect for complete beginners.',
    section: 'ai-ghana', subject: 'ai-basics', type: 'video', level: 'beginner',
    waec: false, featured: true, url: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    duration: '8 min', language: 'en', tags: ['lesson 1','beginner'], dateAdded: '2026-07-01' },

  { id: 'ai-002', title: 'The Ghana Prompt Formula — Master Guide',
    description: 'The complete guide to Role + Task + Context + Format + Constraint. 14 chapters.',
    section: 'ai-ghana', subject: 'prompt-quran', type: 'pdf', level: 'intermediate',
    waec: false, featured: true, url: '/resources/ghana-prompt-quran.pdf',
    tags: ['prompting','formula'], dateAdded: '2026-07-01' },

  { id: 'ai-003', title: 'Lesson 5 — AI Tools You Can Use TODAY (Free)',
    description: 'ChatGPT, Gemini, Perplexity, and more — all explained for Ghanaian students and professionals.',
    section: 'ai-ghana', subject: 'ai-basics', type: 'video', level: 'beginner',
    waec: false, url: 'https://www.youtube.com/watch?v=PLACEHOLDER2',
    duration: '12 min', language: 'en', tags: ['tools','chatgpt','gemini'], dateAdded: '2026-07-01' },

  { id: 'ai-004', title: 'GAEP Lesson Plan — What is AI? (Teacher Copy)',
    description: 'Complete 45-minute lesson plan for SHS teachers. NaCCA-aligned. Print-ready.',
    section: 'ai-ghana', subject: 'gaep', type: 'pdf', level: 'educators',
    waec: false, url: '/resources/gaep-lesson1-teacher.pdf',
    tags: ['lesson plan','teacher','nacca'], dateAdded: '2026-07-01' },

  { id: 'ai-005', title: 'AI for Your Chop Bar — Business Episode 1',
    description: 'How Ghanaian entrepreneurs can use AI for marketing, customer service, and inventory.',
    section: 'ai-ghana', subject: 'ai-business', type: 'podcast', level: 'beginner',
    waec: false, url: '/resources/ai-chop-bar-ep1.mp3',
    duration: '18 min', language: 'en', tags: ['business','entrepreneur'], dateAdded: '2026-07-01' },

  { id: 'ai-006', title: 'AI Ethics — Bias, Truth, and Ghana',
    description: 'What happens when AI gets Ghana wrong? A discussion on AI bias for SHS students.',
    section: 'ai-ghana', subject: 'ai-ethics', type: 'article', level: 'shs2',
    waec: false, url: '/resources/ai-ethics-ghana.html',
    tags: ['ethics','bias'], dateAdded: '2026-07-01' },

  { id: 'ai-007', title: 'Ghanaian AI Power (Video)',
    description: 'How AI can power the next generation of Ghanaian innovators.',
    section: 'ai-ghana', subject: 'documentary', type: 'video', level: 'beginner',
    waec: false, featured: true, url: 'resources/Video/Ghanaian_AI_Power.mp4',
    duration: '3 min', language: 'en', tags: ['documentary','innovators'], dateAdded: '2026-06-08' },

  { id: 'ai-008', title: 'Ghanaian AI Power — Slides',
    description: 'Slides: understanding and harnessing AI for Ghana\'s future.',
    section: 'ai-ghana', subject: 'ai-basics', type: 'slides', level: 'beginner',
    waec: false, url: 'resources/Slids/Ghanaian_AI_Power.pdf',
    downloadUrl: 'resources/Slids/Ghanaian_AI_Power.pptx',
    tags: ['slides','foundation'], dateAdded: '2026-06-08' },

  { id: 'ai-009', title: 'Ghana AI Business Blueprint',
    description: 'Use AI to start and grow a business right here in Ghana — Lesson 10: AI as an entrepreneur.',
    section: 'ai-ghana', subject: 'ai-business', type: 'slides', level: 'shs3',
    waec: false, url: 'resources/Slids/Ghana_AI_Business_Blueprint.pdf',
    downloadUrl: 'resources/Slids/Ghana_AI_Business_Blueprint.pptx',
    tags: ['business','blueprint'], dateAdded: '2026-06-08' },

  { id: 'ai-010', title: 'The Digital Chop Bar',
    description: 'Taking everyday Ghanaian business online with simple AI and digital tools.',
    section: 'ai-ghana', subject: 'ai-business', type: 'slides', level: 'beginner',
    waec: false, url: 'resources/Slids/The_Digital_Chop_Bar.pdf',
    downloadUrl: 'resources/Slids/The_Digital_Chop_Bar.pptx',
    tags: ['business','digital'], dateAdded: '2026-06-08' },

  { id: 'ai-011', title: 'AI For Ghana — TikTok Channel',
    description: 'Free, bite-size AI lessons in Ghanaian context. Follow @AIForGhana.',
    section: 'ai-ghana', subject: 'ai-students', type: 'video', level: 'beginner',
    waec: false, url: 'https://www.tiktok.com/@AIForGhana',
    language: 'en+twi', tags: ['tiktok','channel'], dateAdded: '2026-06-01' },

  /* ================= PROMPT LIBRARY (PROMPTS folder) ================= */

  { id: 'prompt-100', title: "Climate Change Mitigation — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Climate Change Mitigation. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Climate%20Change%20Mitigation%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Climate%20Change%20Mitigation%20Prompts.markdown',
    tags: ['prompts', "climate change mitigation"], dateAdded: '2026-06-11' },

  { id: 'prompt-101', title: "Computer Architecture — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Computer Architecture. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Computer%20Architecture%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Computer%20Architecture%20Prompts.markdown',
    tags: ['prompts', "computer architecture"], dateAdded: '2026-06-11' },

  { id: 'prompt-102', title: "Software Engineering — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Software Engineering. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Software%20Engineering%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Software%20Engineering%20Prompts.markdown',
    tags: ['prompts', "software engineering"], dateAdded: '2026-06-11' },

  { id: 'prompt-103', title: "Sustainable Design in Engineering — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Sustainable Design in Engineering. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Sustainable%20Design%20in%20Engineering%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Sustainable%20Design%20in%20Engineering%20Prompts.markdown',
    tags: ['prompts', "sustainable design in"], dateAdded: '2026-06-11' },

  { id: 'prompt-104', title: "Waste Management — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Waste Management. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Waste%20Management%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Waste%20Management%20Prompts.markdown',
    tags: ['prompts', "waste management"], dateAdded: '2026-06-11' },

  { id: 'prompt-105', title: "Water Treatment — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Water Treatment. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75%20Water%20Treatment%20Prompts.markdown', downloadUrl: 'PROMPTS/75%20Water%20Treatment%20Prompts.markdown',
    tags: ['prompts', "water treatment"], dateAdded: '2026-06-11' },

  { id: 'prompt-106', title: "Cybersecurity — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Cybersecurity. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75_Cybersecurity_Prompts.xlsx', downloadUrl: 'PROMPTS/75_Cybersecurity_Prompts.xlsx',
    tags: ['prompts', "cybersecurity"], dateAdded: '2026-06-11' },

  { id: 'prompt-107', title: "Networking — 75 AI Prompts",
    description: "Ready-to-use AI prompt pack on Networking. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/75_Networking_Prompts.xlsx', downloadUrl: 'PROMPTS/75_Networking_Prompts.xlsx',
    tags: ['prompts', "networking"], dateAdded: '2026-06-11' },

  { id: 'prompt-108', title: "DSP — 80 AI Prompts",
    description: "Ready-to-use AI prompt pack on DSP. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/80_DSP_Prompts.xlsx', downloadUrl: 'PROMPTS/80_DSP_Prompts.xlsx',
    tags: ['prompts', "dsp"], dateAdded: '2026-06-11' },

  { id: 'prompt-109', title: "Geotechnical — 92 AI Prompts",
    description: "Ready-to-use AI prompt pack on Geotechnical. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/92_Geotechnical_Prompts.xlsx', downloadUrl: 'PROMPTS/92_Geotechnical_Prompts.xlsx',
    tags: ['prompts', "geotechnical"], dateAdded: '2026-06-11' },

  { id: 'prompt-110', title: "Crop Production — 95 AI Prompts",
    description: "Ready-to-use AI prompt pack on Crop Production. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/95_Crop_Production_Prompts.xlsx', downloadUrl: 'PROMPTS/95_Crop_Production_Prompts.xlsx',
    tags: ['prompts', "crop production"], dateAdded: '2026-06-11' },

  { id: 'prompt-111', title: "AI Insemination — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on AI Insemination. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_AI_Insemination_Prompts.xlsx', downloadUrl: 'PROMPTS/99_AI_Insemination_Prompts.xlsx',
    tags: ['prompts', "ai insemination"], dateAdded: '2026-06-11' },

  { id: 'prompt-112', title: "Acids Bases pH — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Acids Bases pH. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Acids_Bases_pH_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Acids_Bases_pH_Prompts.xlsx',
    tags: ['prompts', "acids bases ph"], dateAdded: '2026-06-11' },

  { id: 'prompt-113', title: "Automated Machinery — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Automated Machinery. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Automated_Machinery_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Automated_Machinery_Prompts.xlsx',
    tags: ['prompts', "automated machinery"], dateAdded: '2026-06-11' },

  { id: 'prompt-114', title: "CRISPR Gene Editing — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on CRISPR Gene Editing. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_CRISPR_Gene_Editing_Prompts.xlsx', downloadUrl: 'PROMPTS/99_CRISPR_Gene_Editing_Prompts.xlsx',
    tags: ['prompts', "crispr gene editing"], dateAdded: '2026-06-11' },

  { id: 'prompt-115', title: "Chemical Equilibrium — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Chemical Equilibrium. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Chemical_Equilibrium_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Chemical_Equilibrium_Prompts.xlsx',
    tags: ['prompts', "chemical equilibrium"], dateAdded: '2026-06-11' },

  { id: 'prompt-116', title: "Chemical Formulas Equations — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Chemical Formulas Equations. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Chemical_Formulas_Equations_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Chemical_Formulas_Equations_Prompts.xlsx',
    tags: ['prompts', "chemical formulas equations"], dateAdded: '2026-06-11' },

  { id: 'prompt-117', title: "Chemical Formulas — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Chemical Formulas. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Chemical_Formulas_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Chemical_Formulas_Prompts.xlsx',
    tags: ['prompts', "chemical formulas"], dateAdded: '2026-06-11' },

  { id: 'prompt-118', title: "Chemical Kinetics — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Chemical Kinetics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Chemical_Kinetics_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Chemical_Kinetics_Prompts.xlsx',
    tags: ['prompts', "chemical kinetics"], dateAdded: '2026-06-11' },

  { id: 'prompt-119', title: "Colligative Properties — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Colligative Properties. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Colligative_Properties_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Colligative_Properties_Prompts.xlsx',
    tags: ['prompts', "colligative properties"], dateAdded: '2026-06-11' },

  { id: 'prompt-120', title: "Drones Sensors — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Drones Sensors. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Drones_Sensors_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Drones_Sensors_Prompts.xlsx',
    tags: ['prompts', "drones sensors"], dateAdded: '2026-06-11' },

  { id: 'prompt-121', title: "Functional Groups — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Functional Groups. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Functional_Groups_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Functional_Groups_Prompts.xlsx',
    tags: ['prompts', "functional groups"], dateAdded: '2026-06-11' },

  { id: 'prompt-122', title: "GMO Crop — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on GMO Crop. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_GMO_Crop_Prompts.xlsx', downloadUrl: 'PROMPTS/99_GMO_Crop_Prompts.xlsx',
    tags: ['prompts', "gmo crop"], dateAdded: '2026-06-11' },

  { id: 'prompt-123', title: "GPS Mapping — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on GPS Mapping. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_GPS_Mapping_Prompts.xlsx', downloadUrl: 'PROMPTS/99_GPS_Mapping_Prompts.xlsx',
    tags: ['prompts', "gps mapping"], dateAdded: '2026-06-11' },

  { id: 'prompt-124', title: "Group Chemistry — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Group Chemistry. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Group_Chemistry_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Group_Chemistry_Prompts.xlsx',
    tags: ['prompts', "group chemistry"], dateAdded: '2026-06-11' },

  { id: 'prompt-125', title: "Hydrocarbons — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Hydrocarbons. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Hydrocarbons_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Hydrocarbons_Prompts.xlsx',
    tags: ['prompts', "hydrocarbons"], dateAdded: '2026-06-11' },

  { id: 'prompt-126', title: "Isomerism — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Isomerism. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Isomerism_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Isomerism_Prompts.xlsx',
    tags: ['prompts', "isomerism"], dateAdded: '2026-06-11' },

  { id: 'prompt-127', title: "Matter and Properties — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Matter and Properties. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Matter_and_Properties_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Matter_and_Properties_Prompts.xlsx',
    tags: ['prompts', "matter and properties"], dateAdded: '2026-06-11' },

  { id: 'prompt-128', title: "Metallurgy — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Metallurgy. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Metallurgy_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Metallurgy_Prompts.xlsx',
    tags: ['prompts', "metallurgy"], dateAdded: '2026-06-11' },

  { id: 'prompt-129', title: "Nonmetals Compounds — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Nonmetals Compounds. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Nonmetals_Compounds_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Nonmetals_Compounds_Prompts.xlsx',
    tags: ['prompts', "nonmetals compounds"], dateAdded: '2026-06-11' },

  { id: 'prompt-130', title: "Perfume Mixing — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Perfume Mixing. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Perfume_Mixing_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Perfume_Mixing_Prompts.xlsx',
    tags: ['prompts', "perfume mixing"], dateAdded: '2026-06-11' },

  { id: 'prompt-131', title: "Perfume Producing — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Perfume Producing. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Perfume_Producing_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Perfume_Producing_Prompts.xlsx',
    tags: ['prompts', "perfume producing"], dateAdded: '2026-06-11' },

  { id: 'prompt-132', title: "Periodic Trends — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Periodic Trends. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Periodic_Trends_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Periodic_Trends_Prompts.xlsx',
    tags: ['prompts', "periodic trends"], dateAdded: '2026-06-11' },

  { id: 'prompt-133', title: "Repro Management — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Repro Management. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Repro_Management_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Repro_Management_Prompts.xlsx',
    tags: ['prompts', "repro management"], dateAdded: '2026-06-11' },

  { id: 'prompt-134', title: "Solutions Solubility — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Solutions Solubility. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Solutions_Solubility_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Solutions_Solubility_Prompts.xlsx',
    tags: ['prompts', "solutions solubility"], dateAdded: '2026-06-11' },

  { id: 'prompt-135', title: "States of Matter — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on States of Matter. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_States_of_Matter_Prompts.xlsx', downloadUrl: 'PROMPTS/99_States_of_Matter_Prompts.xlsx',
    tags: ['prompts', "states of matter"], dateAdded: '2026-06-11' },

  { id: 'prompt-136', title: "Thermodynamics — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Thermodynamics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Thermodynamics_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Thermodynamics_Prompts.xlsx',
    tags: ['prompts', "thermodynamics"], dateAdded: '2026-06-11' },

  { id: 'prompt-137', title: "Transition Metals Coordination — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Transition Metals Coordination. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/99_Transition_Metals_Coordination_Prompts.xlsx', downloadUrl: 'PROMPTS/99_Transition_Metals_Coordination_Prompts.xlsx',
    tags: ['prompts', "transition metals coordination"], dateAdded: '2026-06-11' },

  { id: 'prompt-138', title: "Bioinstrumentation — AI Prompts",
    description: "Ready-to-use AI prompt pack on Bioinstrumentation. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Bioinstrumentation_Prompts.xlsx', downloadUrl: 'PROMPTS/Bioinstrumentation_Prompts.xlsx',
    tags: ['prompts', "bioinstrumentation"], dateAdded: '2026-06-11' },

  { id: 'prompt-139', title: "Biomechanics — AI Prompts",
    description: "Ready-to-use AI prompt pack on Biomechanics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Biomechanics%20Prompts%20for%20Excel.csv', downloadUrl: 'PROMPTS/Biomechanics%20Prompts%20for%20Excel.csv',
    tags: ['prompts', "biomechanics"], dateAdded: '2026-06-11' },

  { id: 'prompt-140', title: "Biomedical Device — AI Prompts",
    description: "Ready-to-use AI prompt pack on Biomedical Device. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Biomedical_Device_Prompts.xlsx', downloadUrl: 'PROMPTS/Biomedical_Device_Prompts.xlsx',
    tags: ['prompts', "biomedical device"], dateAdded: '2026-06-11' },

  { id: 'prompt-141', title: "Cattle Feed Formulation Supplements — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Cattle Feed Formulation Supplements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Cattle_Feed_Formulation_Supplements_99.xlsx', downloadUrl: 'PROMPTS/Cattle_Feed_Formulation_Supplements_99.xlsx',
    tags: ['prompts', "cattle feed formulation"], dateAdded: '2026-06-11' },

  { id: 'prompt-142', title: "Disease Prevention — AI Prompts",
    description: "Ready-to-use AI prompt pack on Disease Prevention. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Disease_Prevention_Prompts.xlsx', downloadUrl: 'PROMPTS/Disease_Prevention_Prompts.xlsx',
    tags: ['prompts', "disease prevention"], dateAdded: '2026-06-11' },

  { id: 'prompt-143', title: "Environmental Impact Assessment — AI Prompts",
    description: "Ready-to-use AI prompt pack on Environmental Impact Assessment. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Environmental_Impact_Assessment_Prompts.xlsx', downloadUrl: 'PROMPTS/Environmental_Impact_Assessment_Prompts.xlsx',
    tags: ['prompts', "environmental impact assessment"], dateAdded: '2026-06-11' },

  { id: 'prompt-144', title: "Heat Transfer — AI Prompts",
    description: "Ready-to-use AI prompt pack on Heat Transfer. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Heat_Transfer_Prompts.xlsx', downloadUrl: 'PROMPTS/Heat_Transfer_Prompts.xlsx',
    tags: ['prompts', "heat transfer"], dateAdded: '2026-06-11' },

  { id: 'prompt-145', title: "Housing Environment Cattle With Measurements — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Housing Environment Cattle With Measurements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Housing_Environment_Cattle_With_Measurements_99.xlsx', downloadUrl: 'PROMPTS/Housing_Environment_Cattle_With_Measurements_99.xlsx',
    tags: ['prompts', "housing environment cattle"], dateAdded: '2026-06-11' },

  { id: 'prompt-146', title: "Housing Environment Poultry — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Housing Environment Poultry. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Housing_Environment_Poultry_99.xlsx', downloadUrl: 'PROMPTS/Housing_Environment_Poultry_99.xlsx',
    tags: ['prompts', "housing environment poultry"], dateAdded: '2026-06-11' },

  { id: 'prompt-147', title: "Housing Environment Poultry With Measurements — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Housing Environment Poultry With Measurements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Housing_Environment_Poultry_With_Measurements_99.xlsx', downloadUrl: 'PROMPTS/Housing_Environment_Poultry_With_Measurements_99.xlsx',
    tags: ['prompts', "housing environment poultry"], dateAdded: '2026-06-11' },

  { id: 'prompt-148', title: "Hydrology — AI Prompts",
    description: "Ready-to-use AI prompt pack on Hydrology. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Hydrology_Prompts.xlsx', downloadUrl: 'PROMPTS/Hydrology_Prompts.xlsx',
    tags: ['prompts', "hydrology"], dateAdded: '2026-06-11' },

  { id: 'prompt-149', title: "Livestock Breeding Genetic Selection — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Livestock Breeding Genetic Selection. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Livestock_Breeding_Genetic_Selection_99.xlsx', downloadUrl: 'PROMPTS/Livestock_Breeding_Genetic_Selection_99.xlsx',
    tags: ['prompts', "livestock breeding genetic"], dateAdded: '2026-06-11' },

  { id: 'prompt-150', title: "Machine Design — AI Prompts",
    description: "Ready-to-use AI prompt pack on Machine Design. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Machine_Design_Prompts.xlsx', downloadUrl: 'PROMPTS/Machine_Design_Prompts.xlsx',
    tags: ['prompts', "machine design"], dateAdded: '2026-06-11' },

  { id: 'prompt-151', title: "Manufacturing Processes — AI Prompts",
    description: "Ready-to-use AI prompt pack on Manufacturing Processes. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Manufacturing_Processes_Prompts.xlsx', downloadUrl: 'PROMPTS/Manufacturing_Processes_Prompts.xlsx',
    tags: ['prompts', "manufacturing processes"], dateAdded: '2026-06-11' },

  { id: 'prompt-152', title: "Medical Imaging — AI Prompts",
    description: "Ready-to-use AI prompt pack on Medical Imaging. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Medical%20Imaging%20Prompts%20for%20Excel.csv', downloadUrl: 'PROMPTS/Medical%20Imaging%20Prompts%20for%20Excel.csv',
    tags: ['prompts', "medical imaging"], dateAdded: '2026-06-11' },

  { id: 'prompt-153', title: "Medical Robotics — AI Prompts",
    description: "Ready-to-use AI prompt pack on Medical Robotics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Medical%20Robotics%20Prompts%20for%20Excel%20MORE%20DEEP.csv', downloadUrl: 'PROMPTS/Medical%20Robotics%20Prompts%20for%20Excel%20MORE%20DEEP.csv',
    tags: ['prompts', "medical robotics"], dateAdded: '2026-06-11' },

  { id: 'prompt-154', title: "Medical Robotics — AI Prompts",
    description: "Ready-to-use AI prompt pack on Medical Robotics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Medical_Robotics_Prompts.xlsx', downloadUrl: 'PROMPTS/Medical_Robotics_Prompts.xlsx',
    tags: ['prompts', "medical robotics"], dateAdded: '2026-06-11' },

  { id: 'prompt-155', title: "Nutrition FF Supplements Additional99 — AI Prompts",
    description: "Ready-to-use AI prompt pack on Nutrition FF Supplements Additional99. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Nutrition_FF_Supplements_Additional99.xlsx', downloadUrl: 'PROMPTS/Nutrition_FF_Supplements_Additional99.xlsx',
    tags: ['prompts', "nutrition ff supplements"], dateAdded: '2026-06-11' },

  { id: 'prompt-156', title: "Nutrition Feed Formulation Supplements — AI Prompts",
    description: "Ready-to-use AI prompt pack on Nutrition Feed Formulation Supplements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Nutrition_Feed_Formulation_Supplements_Prompts.xlsx', downloadUrl: 'PROMPTS/Nutrition_Feed_Formulation_Supplements_Prompts.xlsx',
    tags: ['prompts', "nutrition feed formulation"], dateAdded: '2026-06-11' },

  { id: 'prompt-157', title: "Poultry Feed Formulation Supplements — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Poultry Feed Formulation Supplements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Poultry_Feed_Formulation_Supplements_99.xlsx', downloadUrl: 'PROMPTS/Poultry_Feed_Formulation_Supplements_99.xlsx',
    tags: ['prompts', "poultry feed formulation"], dateAdded: '2026-06-11' },

  { id: 'prompt-158', title: "Regenerative Medicine — AI Prompts",
    description: "Ready-to-use AI prompt pack on Regenerative Medicine. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Regenerative_Medicine_Prompts.xlsx', downloadUrl: 'PROMPTS/Regenerative_Medicine_Prompts.xlsx',
    tags: ['prompts', "regenerative medicine"], dateAdded: '2026-06-11' },

  { id: 'prompt-159', title: "Renewable Energy Systems — AI Prompts",
    description: "Ready-to-use AI prompt pack on Renewable Energy Systems. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Renewable_Energy_Systems_Prompts.xlsx', downloadUrl: 'PROMPTS/Renewable_Energy_Systems_Prompts.xlsx',
    tags: ['prompts', "renewable energy systems"], dateAdded: '2026-06-11' },

  { id: 'prompt-160', title: "Sheep Goats Feed Formulation Supplements — 99 AI Prompts",
    description: "Ready-to-use AI prompt pack on Sheep Goats Feed Formulation Supplements. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Sheep_Goats_Feed_Formulation_Supplements_99.xlsx', downloadUrl: 'PROMPTS/Sheep_Goats_Feed_Formulation_Supplements_99.xlsx',
    tags: ['prompts', "sheep goats feed"], dateAdded: '2026-06-11' },

  { id: 'prompt-161', title: "Sheep Goats Wool Milk Meat — AI Prompts",
    description: "Ready-to-use AI prompt pack on Sheep Goats Wool Milk Meat. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Sheep_Goats_Wool_Milk_Meat_Prompts.xlsx', downloadUrl: 'PROMPTS/Sheep_Goats_Wool_Milk_Meat_Prompts.xlsx',
    tags: ['prompts', "sheep goats wool"], dateAdded: '2026-06-11' },

  { id: 'prompt-162', title: "Structural Engineering — AI Prompts",
    description: "Ready-to-use AI prompt pack on Structural Engineering. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Structural_Engineering_Prompts.xlsx', downloadUrl: 'PROMPTS/Structural_Engineering_Prompts.xlsx',
    tags: ['prompts', "structural engineering"], dateAdded: '2026-06-11' },

  { id: 'prompt-163', title: "Technical Engineering Topics — AI Prompts",
    description: "Ready-to-use AI prompt pack on Technical Engineering Topics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Technical%20Engineering%20Topics.markdown', downloadUrl: 'PROMPTS/Technical%20Engineering%20Topics.markdown',
    tags: ['prompts', "technical engineering topics"], dateAdded: '2026-06-11' },

  { id: 'prompt-164', title: "Tissue Engineering — AI Prompts",
    description: "Ready-to-use AI prompt pack on Tissue Engineering. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Tissue%20Engineering%20Prompts%20for%20Excel.csv', downloadUrl: 'PROMPTS/Tissue%20Engineering%20Prompts%20for%20Excel.csv',
    tags: ['prompts', "tissue engineering"], dateAdded: '2026-06-11' },

  { id: 'prompt-165', title: "Transportation Engineering — AI Prompts",
    description: "Ready-to-use AI prompt pack on Transportation Engineering. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Transportation_Engineering_Prompts.xlsx', downloadUrl: 'PROMPTS/Transportation_Engineering_Prompts.xlsx',
    tags: ['prompts', "transportation engineering"], dateAdded: '2026-06-11' },

  { id: 'prompt-166', title: "Vibration and Dynamics — AI Prompts",
    description: "Ready-to-use AI prompt pack on Vibration and Dynamics. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Vibration_and_Dynamics_Prompts.xlsx', downloadUrl: 'PROMPTS/Vibration_and_Dynamics_Prompts.xlsx',
    tags: ['prompts', "vibration and dynamics"], dateAdded: '2026-06-11' },

  { id: 'prompt-167', title: "Water Treatment — AI Prompts",
    description: "Ready-to-use AI prompt pack on Water Treatment. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Water_Treatment_Prompts.xlsx', downloadUrl: 'PROMPTS/Water_Treatment_Prompts.xlsx',
    tags: ['prompts', "water treatment"], dateAdded: '2026-06-11' },

  { id: 'prompt-168', title: "Welding — AI Prompts",
    description: "Ready-to-use AI prompt pack on Welding. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/Welding_Prompts.xlsx', downloadUrl: 'PROMPTS/Welding_Prompts.xlsx',
    tags: ['prompts', "welding"], dateAdded: '2026-06-11' },

  { id: 'prompt-169', title: "Biomaterials — AI Prompts",
    description: "Ready-to-use AI prompt pack on biomaterials. Copy any prompt into ChatGPT, Gemini or Claude and learn step by step.",
    section: 'ai-ghana', subject: 'prompt-quran', type: 'notes', level: 'intermediate',
    waec: false, url: 'PROMPTS/biomaterials.txt', downloadUrl: 'PROMPTS/biomaterials.txt',
    tags: ['prompts', "biomaterials"], dateAdded: '2026-06-11' },
];
