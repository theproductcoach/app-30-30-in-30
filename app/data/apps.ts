export interface App {
  title: string;
  slug: string;
  description: string;
  learnings: string[];
  tech: string[];
  link?: string;
}

export const apps: App[] = [
  {
    title: "01 - What app should I build?",
    slug: "what-app-should-i-build",
    description: "A simple GPT-powered app that helps you decide what to build next. Perfect for getting unstuck or generating ideas.",
    learnings: [
      "Structured my repo layout properly for reuse",
      "Handled rate-limiting to protect OpenAI endpoints",
      "Deployed the app to Vercel for the first time"
    ],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-01.vercel.app/"
  },
  {
    title: "02 - PM Coaching App",
    slug: "pm-coaching-app",
    description: "A product management coaching tool that helps PMs reflect, grow, and improve through structured prompts and feedback.",
    learnings: [
      "Pushed large files to GitHub by mistake due to missing .gitignore",
      "Built a working proof-of-concept for a product I'd actually use",
      "Validated a niche coaching use case in minimal time"
    ],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-02.vercel.app/"
  },
  {
    title: "03 - Flappy Bird Clone",
    slug: "flappy-bird-clone",
    description: "A simple but fun browser-based clone of Flappy Bird using PNG's.",
    learnings: [
      "Tried using a sprite sheet but failed to get coordinates working reliably",
      "Used PNG images instead for consistent visual results",
      "Learned to deploy a dev app using Capacitor and Android Studio"
    ],
    tech: ["React", "Capacitor", "HTML5 Canvas", "Vercel"],
    link: "https://30-in-30-app-03.vercel.app/"
  },
  {
    title: "04 - Rock Climber Coaching App",
    slug: "rock-climber-coaching",
    description: "A basic coaching app for rock climbers that logs progress and visualises outdoor climbing locations on a map.",
    learnings: [
      "Built a simple coaching app prototype from scratch",
      "Added an embedded map of all my outdoor climbing locations",
      "Recognised the value of starting mobile-first, especially for this kind of app"
    ],
    tech: ["Next.js", "Mapbox", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-04.vercel.app/"
  },
  {
    title: "05 - MealMate Pantry Scanner",
    slug: "mealmate-pantry-scanner",
    description: "An early version of a meal planning app that scans your pantry and suggests meals based on your preferences.",
    learnings: [
      "Struggled with Supabase integration and pivoted to a simpler pantry scanner",
      "Used Open Food Facts SDK and html5-qrcode for barcode scanning",
      "Learned to start small and build functionality step by step",
      "Designing a good UI is still really hard, especially with Cursor"
    ],
    tech: ["Next.js", "Open Food Facts SDK", "html5-qrcode", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-05.vercel.app/"
  },
  {
    title: "06 - Pairsy",
    slug: "pairsy",
    description: "A proof-of-concept pairing app that mimics sign-up flows, stores session info in cookies, and mocks API responses for demo purposes.",
    learnings: [
      "Cursor works better with standard CSS than Tailwind, which often creates conflicts",
      "Supabase was tricky — faked sign-ups and mocked responses instead",
      "Mocking data made the app feel more complete and polished without needing real backend logic",
      "Cursor is really strong when combining mocked data with GPT-generated visuals"
    ],
    tech: ["Next.js", "Mock API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-06.vercel.app/"
  },
  {
    title: "07 - Definitely Helpful AI",
    slug: "definitely-helpful-ai",
    description: "A cheeky April Fools app featuring an unhelpful AI that gives predetermined, often useless responses. Fun and quick to build.",
    learnings: [
      "Hit Vercel deploy limits due to all apps redeploying on changes",
      "Turned off auto-redeploys for all apps to save deploys",
      "Used static responses instead of GPT to keep it simple — but could easily be upgraded later"
    ],
    tech: ["Next.js", "Static Content", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-07.vercel.app/"
  },
  {
    title: "08 - Kilter Climbing Coach",
    slug: "kilter-coach",
    description: "A simple climbing app that generates a kilterboard training plan. Originally planned to personalise based on username and API data, but that will have to come later.",
    learnings: [
      "Wanted to use Kilter APIs but that required a third-party Python library",
      "Scoped it down to a simple plan generator",
      "Quick to build, may revisit later with more complex integration"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-08.vercel.app/"
  },
  {
    title: "09 - What's for Dinner?",
    slug: "whats-for-dinner",
    description: "A one-page GPT-powered app that helps you decide what to make for dinner based on available ingredients, style, and time.",
    learnings: [
      "Single-call GPT apps are a sweet spot for Vibe Coding",
      "Fixed a deployment bug caused by a renamed API route",
      "Improved deploy efficiency by limiting which folders trigger builds"
    ],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-09.vercel.app/"
  },
  {
    title: "10 - HikeScout",
    slug: "hikescout",
    description: "A weekend hike trip planner that recommends routes from around the world, shows maps, and uses image generation for visual context.",
    learnings: [
      "Got everything working in 90 minutes — including Unsplash API integration",
      "Tried using DALL·E but it slowed performance too much",
      "Would use Google Image Search or a custom dataset long term"
    ],
    tech: ["Next.js", "Unsplash API", "Google Maps", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-10.vercel.app/"
  },
  {
    title: "11 - Send Home",
    slug: "send-home",
    description: "A currency conversion helper that compares the spot rate vs 6-month average to tell you whether to send money back home.",
    learnings: [
      "Built in under 30 minutes",
      "Simple financial logic and UX that solves a real problem"
    ],
    tech: ["Next.js", "Currency API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-11.vercel.app/"
  },
  {
    title: "12 - Coffee Buddy",
    slug: "coffee-buddy",
    description: "An app that helps you pick coffee beans based on taste preferences, with static guides about coffee origins, roasting, and more.",
    learnings: [
      "Built in about an hour",
      "Cleaned up API key handling to move calls from frontend to backend",
      "Great example of fast, focused GPT usage"
    ],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-12.vercel.app/"
  },
  {
    title: "13 - Nurtura Aged Care App",
    slug: "nurtura-aged-care",
    description: "A mobile-first app to help families schedule and coordinate carers for elderly parents, including preferences, routines, and tasks.",
    learnings: [
      "Built from a real-world problem my partner's parents are facing",
      "Ran into typing issues that required GPT to re-architect the code",
      "Cursor with Claude 3.7 struggled — reminder to use multiple tools and get GPT to do the heavy lifting"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-13.vercel.app/"
  },
  {
    title: "14 - AetherGlass (Smart Glasses Concept)",
    slug: "aetherglass",
    description: "A fake marketing site for futuristic AI-powered smart glasses, complete with preorder CTA and product mockups.",
    learnings: [
      "Started using Sora for high-quality image generation",
      "GPT was great at writing detailed image prompts",
      "Planning to add a Sora video background once supported"
    ],
    tech: ["Next.js", "Sora", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-14.vercel.app/"
  },
  {
    title: "15 - VitaeAI (Resume & Cover Letter Editor)",
    slug: "vitaeai",
    description: "An AI-powered tool that tailors your resume and cover letter to a job description. Built to help me with job hunting.",
    learnings: [
      "Getting PDF parsing working in Next.js was tough",
      "Cursor and GPT made the final designs look very professional",
      "Prompt tuning made the output feel much more human"
    ],
    tech: ["Next.js", "OpenAI API", "PDF.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-15.vercel.app/"
  },
  {
    title: "16 - Snaake",
    slug: "snaake",
    description: "A stylised clone of Snake with a retro feel. Built to improve mobile gameplay UX and experiment with adding music.",
    learnings: [
      "SoundCloud was too messy for free music sourcing",
      "Had to finesse mobile styling and input controls",
      "Core gameplay was simple and fun to build"
    ],
    tech: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-16.vercel.app/"
  },
  {
    title: "17 - StrataHQ (Body Corporate App)",
    slug: "stratahq",
    description: "A proof-of-concept tool for managing strata committees, schedules, and notices. Inspired by gaps in Australian software.",
    learnings: [
      "Cursor struggles without clear UI references to mimic",
      "Not specifying mobile-first leads to weaker layout",
      "May need to integrate with Figma later for real-world use"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-17.vercel.app/"
  },
  {
    title: "18 - AIQ (AI Knowledge Quiz)",
    slug: "aiq",
    description: "A quick quiz app to test how much users really understand AI, with an accompanying knowledge base on practical AI at work.",
    learnings: [
      "Cursor still struggles mixing Tailwind and global CSS",
      "Keeping global styles clean is tricky — needs a better strategy",
      "Quiz logic and layout were quick to implement",
      "Used OpenAI API to generate the quiz questions and answers"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel", "OpenAI API"],
    link: "https://30-in-30-app-18.vercel.app/"
  },
  {
    title: "19 - Sushi Sensei",
    slug: "sushi-sensei",
    description: "A knowledge app for everything sushi: types, etiquette, preparation, and a base for broader food culture content.",
    learnings: [
      "Cursor worked surprisingly well with minimal instructions",
      "Quick setup and clean UI with almost no friction",
      "Really liked the visual results — felt professional fast"
    ],
    tech: ["Next.js", "CSS", "Vercel"],
    link: "https://30-in-30-app-19.vercel.app/"
  },
  {
    title: "20 - Aether Agent (AI Travel Planner)",
    slug: "aether-agent",
    description: "An agentic AI app that plans personalised trips via tool-calling. Built with a FastAPI backend and GPT orchestration.",
    learnings: [
      "Used LangGraph and tool-calling for real agentic behaviour",
      "Got agent thought streaming working — magical!",
      "Learnt a lot deploying FastAPI to Render and wiring up to Next.js frontend",
      "Would have styled the output better if I had more time"
    ],
    tech: ["Next.js", "FastAPI", "LangGraph", "OpenAI API", "Tailwind CSS", "Render", "Vercel"],
    link: "https://30-in-30-app-20.vercel.app/"
  },
  {
    title: "21 - Hangtime (Climbing Gym Finder)",
    slug: "hangtime",
    description: "A community-focused climbing gym finder that lets you filter by features and connect with other climbers.",
    learnings: [
      "Cursor works well for mobile-first UI",
      "Used Sora for placeholder images",
      "Felt polished and useful even as an early prototype"
    ],
    tech: ["Next.js", "Tailwind CSS", "Sora", "Vercel"],
    link: "https://30-in-30-app-21.vercel.app/"
  },
  {
    title: "22 - Assetly (Net Worth Visualiser)",
    slug: "assetly",
    description: "A personal finance tool that lets you map out assets and liabilities to understand your net worth visually.",
    learnings: [
      "Had extra time to add demo data and basic AI features",
      "Still figuring out how to make banners and headers look good",
      "Would like to improve visual polish in future iterations"
    ],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-22.vercel.app/"
  },
  {
    title: "23 - Blindhire (CV Scrubber)",
    slug: "blindhire",
    description: "An app that removes demographic data from CVs to reduce bias in the hiring process and help focus on real experience.",
    learnings: [
      "Routing file broke — had to delete and rewrite to fix it",
      "Had issues extracting content from PDFs before switching to OpenAI Assistants API",
      "Got file uploads working in a single request — super smooth when it finally worked"
    ],
    tech: ["Next.js", "OpenAI Assistants", "PDF upload", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-23.vercel.app/"
  },
  {
    title: "24 - Discovr (PM Discovery Assistant)",
    slug: "discovr",
    description: "An assistant that helps product managers gather insights from uploaded notes and files, then generate next steps using GPT.",
    learnings: [
      "Used Assistants API again — struggled with file referencing because the API docs are so new and had to cross reference with GPT itself",
      "Streaming responses was harder than expected due to misleading docs",
      "A solid MVP for structured product discovery"
    ],
    tech: ["Next.js", "OpenAI Assistants", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-24.vercel.app/"
  },
  {
    title: "25 - Dimensio (Dimension Converter)",
    slug: "dimensio",
    description: "A handy unit conversion tool for interior design, converting between metric and imperial with custom formatting options.",
    learnings: [
      "Built on request from my partner (an interior designer)",
      "Conversion logic worked well, but needed UX cleanup",
      "Did a quick refactor to make it more robust later"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-25.vercel.app/"
  },
  {
    title: "26 - Fake Tetris (Zetris)",
    slug: "zetris",
    description: "A tongue-in-cheek Tetris clone that mostly gives you the dreaded Z-block. Built to experiment with game logic and styling.",
    learnings: [
      "Free assets made dev faster but styling was trickier than Snake",
      "Mobile responsiveness required a lot of tweaking",
      "Added a fun gag version for extra flavour"
    ],
    tech: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-26.vercel.app/"
  },
  {
    title: "27 - Is It Hotdog? (Pizza Edition)",
    slug: "is-it-hotdog",
    description: "An AI-powered image classifier inspired by the classic 'Not Hotdog' app from Silicon Valley — this time detecting pizza instead.",
    learnings: [
      "Used Vercel Blob storage and GPT Vision for image analysis",
      "Really simple and fast to get working with new tools",
      "Great result from a fun weekend dinner idea"
    ],
    tech: ["Next.js", "OpenAI Vision", "Vercel Blob", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-27.vercel.app/"
  },
  {
    title: "28 - Beyond Relativity",
    slug: "beyond-relativity",
    description: "A visual explainer app covering physics concepts that challenge classical relativity, like black holes, the Big Bang, and quantum effects.",
    learnings: [
      "Used Three.js to bring the content to life",
      "Sora-generated graphics added a polished feel",
      "Cursor was great here — most pages worked on first try"
    ],
    tech: ["Next.js", "Three.js", "Sora", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-28.vercel.app/"
  },
  {
    title: "29 - QuickSplit (Receipt Splitter)",
    slug: "quicksplit",
    description: "A tool to split receipts by scanning a photo, identifying items, and generating a QR code or share link so friends can select and pay.",
    learnings: [
      "OpenAI Vision model made item detection easy",
      "Built without a backend using just Vercel Blob and GPT",
      "Learned how to simulate functionality in a clean way"
    ],
    tech: ["Next.js", "OpenAI Vision", "Vercel Blob", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-29.vercel.app/"
  },
  {
    title: "30 - 30 in 30 Directory",
    slug: "30-in-30-directory",
    description: "The final app. A directory of all 30 projects, complete with descriptions, learnings, and links to each live build.",
    learnings: [
      "Reflected on the entire challenge and documented key learnings",
      "Built a clean, responsive directory to showcase all projects",
      "Great way to wrap up the 30-day journey"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://30-in-30-app-30.vercel.app/"
  }
]; 