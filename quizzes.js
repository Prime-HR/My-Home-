/* ============================================================
   AI FOR GHANA — QUIZZES
   Add a quiz: { id, title, subject, level, questions:[
     { q:"question?", options:["a","b","c","d"], answer:INDEX(0-based), explain:"why" }
   ]}
   subject: "AI For Ghana" | "ICT" | "Mathematics" | "Integrated Science" | "English"
   ============================================================ */
window.QUIZZES = [
  { id:"ai-1", title:"What is AI?", subject:"AI For Ghana", level:"Everyone", questions:[
    { q:"In one sentence, what is AI?", options:["A machine that learns from experience","A new kind of phone","A government office","A social media app"], answer:0, explain:"AI is a machine that learns from experience (data)." },
    { q:"In the lesson, AI is compared to whom?", options:["A footballer","A Kejetia market woman","A taxi driver","A teacher"], answer:1, explain:"AI is like a very fast market woman who learns from millions of 'transactions'." },
    { q:"What is the 'experience' AI learns from called?", options:["Money","Data","Fuel","Electricity"], answer:1, explain:"Experience for AI is called data." },
    { q:"True or false: AI is always correct.", options:["True","False"], answer:1, explain:"AI can be confidently wrong — always check important things." },
  ]},
  { id:"ai-2", title:"How Does AI Learn?", subject:"AI For Ghana", level:"Everyone", questions:[
    { q:"How does AI 'learn'?", options:["By sleeping","By studying many examples and practising","By magic","By guessing once"], answer:1, explain:"Like a student doing past questions — it studies examples and practises." },
    { q:"Why can AI give wrong or unfair answers?", options:["It was trained on bad/biased data","It is tired","It has no battery","It is too old"], answer:0, explain:"Garbage in, garbage out — bad data gives bad results (bias)." },
    { q:"What's the difference between training and using AI?", options:["No difference","Training = studying; using = answering","Training is for phones only","Using needs no data"], answer:1, explain:"First it studies (training), then it answers (like exam day)." },
  ]},
  { id:"ict-1", title:"What is a Computer?", subject:"ICT", level:"Everyone", questions:[
    { q:"What are the 3 jobs every computer does?", options:["Buy, sell, save","Input, Process, Output","Call, text, browse","Start, stop, sleep"], answer:1, explain:"Every computer takes Input, Processes it, and gives Output." },
    { q:"Which is an example of hardware?", options:["WhatsApp","The screen/battery","A song","A password"], answer:1, explain:"Hardware is the body you can touch; software is the instructions." },
    { q:"True or false: a computer has common sense and protects itself.", options:["True","False"], answer:1, explain:"It only does what you tell it — protect your PIN yourself." },
  ]},
  { id:"ict-2", title:"Internet Safety & MoMo", subject:"ICT", level:"Everyone", questions:[
    { q:"A caller says you won a promo but must pay ₵50 to claim. What do you do?", options:["Pay quickly","Refuse — real prizes never require payment","Share your PIN","Send your ID"], answer:1, explain:"'Pay small to get plenty' is advance-fee fraud." },
    { q:"'Customer care' asks for the code in your SMS. Do you give it?", options:["Yes, they are official","Never — no one legit asks for your OTP/PIN","Only if polite","Only at night"], answer:1, explain:"Never share your OTP or PIN with anyone." },
    { q:"What is the one rule that stops most MoMo fraud?", options:["Never share your PIN or OTP","Always answer calls","Keep cash at home","Change your number weekly"], answer:0, explain:"Never share your PIN or OTP — it's the key to your money." },
  ]},
  { id:"maths-1", title:"Market Math: Profit", subject:"Mathematics", level:"JHS", questions:[
    { q:"You buy for ₵80 and sell for ₵120. What is the profit?", options:["₵40","₵200","₵80","₵20"], answer:0, explain:"Profit = Selling − Cost = 120 − 80 = ₵40 (before hidden costs)." },
    { q:"Which is a hidden cost that reduces real profit?", options:["Transport / spoilage","The customer's name","The colour of goods","The weather forecast"], answer:0, explain:"Transport, spoilage, data and time all eat real profit." },
    { q:"What is 20% of ₵50?", options:["₵5","₵10","₵20","₵25"], answer:1, explain:"20% of 50 = (50 ÷ 100) × 20 = ₵10." },
  ]},
  { id:"maths-2", title:"Percentages, Interest & Loans", subject:"Mathematics", level:"JHS", questions:[
    { q:"What is 10% of ₵350?", options:["₵35","₵3.50","₵350","₵150"], answer:0, explain:"10% = move the dot one place: ₵35." },
    { q:"Why is '30% per month' dangerous?", options:["It's less than per year","It adds up to far more than 30% per year","It's illegal","It's free"], answer:1, explain:"Per month is far more than per year — always check the time word." },
    { q:"How can interest work FOR you?", options:["By borrowing more","By saving/investing so you earn it","By ignoring it","By spending fast"], answer:1, explain:"Save or invest and the interest pays YOU." },
  ]},
  { id:"sci-1", title:"What is Science?", subject:"Integrated Science", level:"JHS", questions:[
    { q:"What is science, in one sentence?", options:["Asking 'why' and finding out by observing and testing","Only for laboratories","Memorising facts","Magic"], answer:0, explain:"Science is asking why and finding out by observing and testing." },
    { q:"Why does gari last longer than bread?", options:["It is blessed","Drying removes the water that spoilage needs","It is cooked twice","It is colder"], answer:1, explain:"Drying (evaporation) removes water that microbes need to spoil food." },
    { q:"What is a smart guess you test called?", options:["A hypothesis","A rumour","A fact","A result"], answer:0, explain:"A testable smart guess is a hypothesis." },
  ]},
  { id:"sci-6", title:"Plants & Photosynthesis", subject:"Integrated Science", level:"JHS", questions:[
    { q:"What does photosynthesis make?", options:["Food and oxygen","Only water","Plastic","Electricity"], answer:0, explain:"Sunlight + water + air → food (sugar) and oxygen." },
    { q:"What gas do plants release that we need?", options:["Carbon dioxide","Oxygen","Hydrogen","Smoke"], answer:1, explain:"Plants give out oxygen — forests are the lungs of the Earth." },
    { q:"What green substance catches light in leaves?", options:["Chlorophyll","Calcium","Cholesterol","Charcoal"], answer:0, explain:"Chlorophyll is the green substance that catches sunlight." },
  ]},
  { id:"eng-5", title:"Parts of Speech", subject:"English", level:"JHS", questions:[
    { q:"What does a verb do?", options:["Names a thing","Shows action or being","Describes a noun","Joins words"], answer:1, explain:"A verb shows action or being (run, sell, is)." },
    { q:"What does an adjective do?", options:["Replaces a noun","Describes a noun","Shows action","Shows feeling"], answer:1, explain:"An adjective describes a noun (big, sweet, busy)." },
    { q:"Which of these is a pronoun?", options:["Accra","They","Quickly","Market"], answer:1, explain:"'They' is a pronoun — it replaces a noun." },
  ]},
  { id:"eng-11", title:"Punctuation", subject:"English", level:"JHS", questions:[
    { q:"What does a full stop do?", options:["Ends a complete thought","Asks a question","Shows excitement","Shows ownership"], answer:0, explain:"A full stop ends a complete thought." },
    { q:"Which is correct?", options:["Kofis book","Kofi's book","Kofis' book","Kofi book's"], answer:1, explain:"Apostrophe shows ownership: Kofi's book." },
    { q:"'___ raining.' Which is correct?", options:["Its","It's","Its'","Its is"], answer:1, explain:"'It's' = 'it is'. 'Its' (no apostrophe) shows belonging." },
  ]},
];
