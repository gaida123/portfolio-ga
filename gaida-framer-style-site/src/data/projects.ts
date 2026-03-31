const CF = "https://d112y698adiu2z.cloudfront.net";

export interface Project {
  slug: string;
  title: string;
  type: string;
  role: string;
  year: string;
  blurb: string;
  tags: string;
  heroImage: string | null;
  /** Use `null` for empty gallery slots */
  gallery: (string | null)[];
  links: { github: string; devpost?: string };
  paragraphs: string[];
  stackItems: { name: string; desc: string }[];
  /** When false, no /works/:slug case study or Read more on home */
  hasDetailPage?: boolean;
}

/** Original listing thumbnails from the main portfolio (project cards) */
const polterCardImage =
  `${CF}/photos/production/software_thumbnail_photos/004/486/714/datas/medium.png`;
const lockoutCardImage =
  `${CF}/photos/production/software_thumbnail_photos/004/184/202/datas/medium.png`;

/** Devpost gallery images — https://devpost.com/software/polterguide */
const polterGallery = [
  `${CF}/photos/production/software_photos/004/486/751/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/486/752/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/486/753/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/486/754/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/486/756/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/486/757/datas/gallery.jpg`,
];

/** Gallery images from https://devpost.com/software/lockedout-5nge0b (story order) */
const lockoutGallery = [
  `${CF}/photos/production/software_photos/004/174/888/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/183/005/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/174/887/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/182/153/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/183/947/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/182/180/datas/gallery.jpg`,
  `${CF}/photos/production/software_photos/004/174/886/datas/gallery.jpg`,
];

export const projects: Project[] = [
  {
    slug: "polterguide",
    title: "PolterGuide",
    type: "Desktop / AI",
    role: "Developer",
    year: "2026",
    blurb:
      "Agentic AI co-pilot that physically navigates SaaS dashboards via a Ghost Cursor. Parses uploaded PDFs into live onboarding flows with voice/chat commands and sub-100ms WebSocket streaming.",
    tags: "React 19 · Electron · FastAPI · WebSockets · Google GenAI · Fetch.ai",
    heroImage: polterCardImage,
    gallery: [polterCardImage, ...polterGallery],
    links: {
      github: "https://github.com/gaida123/polter-guide/",
      devpost: "https://devpost.com/software/polterguide",
    },
    paragraphs: [
      "Modern B2B SaaS dashboards look like spaceship control panels. Companies lose up to 30% of new users to onboarding friction, while customer success teams spend huge chunks of time as human GPS on Zoom. Static PDFs get ignored. PolterGuide exists so great software does not come with homework.",
      "PolterGuide is an Electron desktop app that acts as an agentic AI co-pilot: a transparent overlay on top of any application. It replaces manual tutorials with a Ghost Cursor — an AI-controlled pointer that navigates the UI and runs actions in real time from a voice command or chat message. Administrators upload existing help PDFs to the dashboard; the AI parses them and generates a live, deployable onboarding flow — no rewrites, no screen recordings, no extra Zooms.",
      "Users can chat with the co-pilot mid-task, ask questions in plain language, and get spoken, contextual answers without leaving the app.",
      "The frontend uses React 19, Vite, and Tailwind CSS v4, with Framer Motion for Ghost Cursor motion and the Web Speech API for voice, inside an Electron layer that renders a transparent cross-window overlay. The backend is Python 3 and FastAPI with WebSockets for sub-100ms step streaming; PyPDF and Pillow handle documents, with state routed through Firebase and ElevenLabs for voice output. The AI layer uses Fetch.ai uAgents: a Knowledge Agent (vector retrieval from PDFs), a Vision Agent (Google GenAI + DOM targeting for the cursor), a Context Agent for task state, and a Completion Agent that streams instructions back.",
      "Bridging Fetch.ai’s asynchronous agents with a synchronous React UI meant building a resilient WebSocket layer from scratch. Getting the Vision Agent to map UI elements to reliable coordinates took heavy prompt engineering and retry logic.",
      "We’re proud of seeing the Ghost Cursor navigate a complex dashboard from a parsed PDF and a single voice command, and of making a heavy multi-agent backend feel invisible to users. Next steps include proactive help when the Vision Agent detects frustration, a lightweight embeddable SDK, and a richer live conversation layer so the co-pilot feels like a teammate.",
    ],
    stackItems: [
      { name: "React 19 & Vite", desc: "UI, onboarding shell, and fast dev" },
      { name: "Electron", desc: "Transparent overlay on any desktop app" },
      { name: "FastAPI & WebSockets", desc: "Sub-100ms realtime step streaming" },
      { name: "Fetch.ai uAgents", desc: "Parallel agents for knowledge, vision, context, completion" },
      { name: "Google GenAI", desc: "Vision and DOM understanding for cursor targeting" },
      { name: "Firebase", desc: "State and coordination" },
      { name: "Tailwind CSS v4 & Framer Motion", desc: "Layout and Ghost Cursor animation" },
      { name: "PyPDF, Pillow, ElevenLabs", desc: "Document parsing and spoken responses" },
    ],
  },
  {
    slug: "lockout",
    title: "Lockout",
    type: "Mobile",
    role: "Developer",
    year: "2025",
    blurb:
      "Student well-being mobile app using social accountability and AI-powered photo verification to confirm study sessions. Real-time feeds and social challenges built on Firebase.",
    tags: "React · Expo · TypeScript · Firebase · Gemini Vision API",
    heroImage: lockoutCardImage,
    gallery: [lockoutCardImage, ...lockoutGallery],
    links: {
      github: "https://github.com/keananwongso/projectlocked.",
      devpost: "https://devpost.com/software/lockedout-5nge0b",
    },
    paragraphs: [
      "Humans seek social presence and validation; when that instinct is hijacked by doomscrolling, it works against wellbeing. Lockout reframes the problem as student wellbeing, not productivity: what if validation could be redirected toward the things that actually matter?",
      "Lockout is a social accountability app that turns focus into a shared experience. Users start a lock-in session with a quick photo, note what they’re working on, pick a category and duration, and optionally choose one friend as an accountability witness. A timer runs for the session. At the end, a second photo proves consistency; the lock-in appears in a shared feed for visibility, not flexing.",
      "If a witness is chosen, they get a simple yes-or-no prompt to verify the session. If challenged, the user submits instant proof verified with AI (Gemini Vision) so claims stay honest. As the team puts it: Lockout doesn’t prove productivity — it makes lying more effort than working.",
      "For wellbeing, the goal is to reduce friction, isolation, and guilt around starting: externalize commitment into a short, bounded session, clear cognitive load, and replace guilt with visible effort — social but non-competitive.",
      "Built mobile-first with React and Expo on the frontend, Firebase on the backend, and TypeScript throughout. The hardest challenges were philosophical: every feature had to answer whether it reduces pressure or adds to it.",
      "Next steps are piloting with students on a real campus, learning how accountability feels in daily academic life, and iterating toward a broader launch shaped by real use.",
    ],
    stackItems: [
      { name: "Expo & React", desc: "Mobile-first UI" },
      { name: "TypeScript", desc: "End-to-end typing" },
      { name: "Firebase", desc: "Auth, data, and realtime feed" },
      { name: "Gemini Vision", desc: "AI verification of session proof" },
      { name: "Node.js & npm", desc: "Tooling and ecosystem" },
    ],
  },
  {
    slug: "bsystem",
    title: "Bsystem",
    type: "Web",
    role: "Full-stack developer",
    year: "2024",
    blurb:
      "Inventory management system with automated data entry, server-side pagination, role-based access control, and a real-time stock dashboard. Reduced manual data errors by 20%.",
    tags: "Laravel · Vue.js · SQL · Node.js",
    heroImage: null,
    gallery: [null, null, null],
    links: { github: "https://github.com/gaida123" },
    hasDetailPage: false,
    paragraphs: [],
    stackItems: [],
  },
  {
    slug: "minecraft-server-analytics",
    title: "Minecraft Server Analytics",
    type: "Data science",
    role: "Developer",
    year: "2025",
    blurb:
      "Player analytics and demand forecasting tools for a Minecraft server community. Built classification models and engagement tracking dashboards.",
    tags: "R · Classification · Data Science",
    heroImage: "/images/dsci-project-background.png",
    gallery: [null, null, null],
    links: { github: "https://github.com/gaida123/dsci-100-008-group-6/" },
    hasDetailPage: false,
    paragraphs: [],
    stackItems: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
