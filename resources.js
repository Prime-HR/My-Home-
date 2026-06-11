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
];
