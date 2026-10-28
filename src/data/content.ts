// ─────────────────────────────────────────────────────────────
// SOURCE OF TRUTH: Vaidehi_Teraiya_CV.pdf + supplied reel URLs
// Every field below is either a direct fact from the CV, a light
// web-copy rewording of a CV bullet (meaning unchanged), or an
// explicit [PLACEHOLDER] marking something still needed from her.
// Do not add stats, clients, or outcomes not present here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vaidehi Teraiya",
  location: "Ankleshwar, Gujarat",
  email: "teraiyavaidehi@gmail.com",
  phone: "+91 87340 57454",
  // Add actual LinkedIn/Instagram URLs here if available
  socials: [] as { label: string; url: string }[],
};

export const hero = {
  eyebrow: "DIGITAL MARKETING • CONTENT • CREATIVE STRATEGY",
  headline: ["MAKING BRANDS", "IMPOSSIBLE TO", "SCROLL PAST."],
  sub: "Digital marketing, content strategy and creative storytelling that help brands connect with their audiences.",
};

export const about = {
  heading: "STRATEGY IN MIND. CREATIVITY IN ACTION.",
  paragraphs: [
    "I'm based in Ankleshwar, Gujarat, and work across digital marketing, content strategy, brand management, and creative design.",
    "My experience includes social media content, campaign support, export strategy research, and customer surveys. I enjoy bringing research and creative execution together to help brands connect with their audiences.",
    "I hold an MBA from Amrut Mody School of Management, Ahmedabad University, and a BBA in International Business from CHARUSAT.",
  ],
};

export const expertise = [
  {
    title: "Content Strategy",
    description: "Planning multi-platform content calendars and shaping what a brand says, where, and how often.",
  },
  {
    title: "Social Media Marketing",
    description: "Turning a brand's voice into scroll-stopping posts, reels, and campaigns across platforms.",
  },
  {
    title: "Brand Management",
    description: "Keeping a brand's visual and verbal identity consistent while it grows across channels.",
  },
  {
    title: "Market & Consumer Research",
    description: "Surveying and analysing real customer behaviour to inform strategy, not guesswork.",
  },
  {
    title: "Creative Design & Production",
    description: "Designing assets in Canva and editing video reels in CapCut and VN, from brief to final cut.",
  },
  {
    title: "Client & PR Communication",
    description: "Managing client acquisition, requirements, and relationships directly.",
  },
];

export const experience = [
  {
    company: "Bitwise Branding",
    role: "Digital Marketing & Content Strategy Intern",
    period: "June 2026 – August 2026",
    accent: "#D7FF64",
    summary:
      "Supported client acquisition and communications, campaign requirements, content calendars, creative shoots, and marketing asset production.",
    bullets: [
      "Supported client acquisition and communications; gathered campaign requirements and brand goals.",
      "Prepared monthly multi-platform content calendars and supported creative visual shoots.",
      "Designed marketing assets in Canva and edited video reels using CapCut and VN.",
    ],
  },
  {
    company: "The Franchise Insider",
    role: "Content Creator Intern",
    period: "September 2026 – October 2026",
    accent: "#435BFF",
    summary:
      "Created social media posts and stories and supported WhatsApp campaigns for The Franchise Insider.",
    bullets: [
      "Created social media posts and stories.",
      "Managed the WhatsApp Community and Channel and supported WhatsApp campaigns.",
      "Supported influencer marketing activities and learned Meta Ads fundamentals.",
    ],
  },
  {
    company: "Gujarat Fluorochemicals Limited (GFL)",
    role: "Digital Marketing & Export Strategy Intern",
    period: "May 2025 – July 2025",
    accent: "#FF8068",
    summary:
      "Conducted export growth research and proposed digital approaches to improve product visibility internationally.",
    bullets: [
      "Conducted export growth research.",
      "Collaborated with marketing stakeholders.",
      "Proposed B2B digital strategies to improve visibility.",
    ],
  },
  {
    company: "SUMUL Dairy",
    role: "Market Research & Marketing Intern",
    period: "May 2023 – July 2023",
    accent: "#DCD6FF",
    summary:
      "Started here — grounding marketing decisions in real customer research rather than assumption.",
    bullets: [
      "Surveyed dairy customers to evaluate preferences, identifying key quality and affordability drivers.",
      "Applied research insights to targeted marketing strategies.",
    ],
  },
];

// ── Instagram Reels — central source of truth ────────────────
export const reels = [
  {
    id: "bitwise-1",
    brand: "Bitwise Branding",
    label: "Brand Content",
    url: "https://www.instagram.com/reel/DcbLE6duV41/?obrf=MXA1YXNmZDEyMXkxaA==",
    // Actual video file available
    videoSrc: "/assets/work/bitwise-reel.mp4",
    accent: "#D7FF64",
    category: "Social Media",
  },
  {
    id: "bitwise-2",
    brand: "Bitwise Branding",
    label: "Campaign Reel",
    url: "https://www.instagram.com/reel/DbpY8dNMIOA/?rpxt=MXMzdWhnZ3psaWRlYw==",
    videoSrc: null,
    accent: "#D7FF64",
    category: "Social Media",
  },
  {
    id: "bitwise-3",
    brand: "Bitwise Branding",
    label: "Creative Content",
    url: "https://www.instagram.com/reel/DanWOD5ucxf/?mdxt=NWxlMnFva3hleGwy",
    videoSrc: null,
    accent: "#D7FF64",
    category: "Social Media",
  },
  {
    id: "franchise-1",
    brand: "The Franchise Insider",
    label: "Community Content",
    url: "https://www.instagram.com/reel/DemPyg5SQgR/?rpxt=bGU2bmRzaTMxaDBo",
    videoSrc: null,
    accent: "#435BFF",
    category: "Social Media",
  },
  {
    id: "franchise-2",
    brand: "The Franchise Insider",
    label: "Brand Reel",
    url: "https://www.instagram.com/reel/Ded5dJFyaGy/?obrf=ZGd5OXJiZnFlN3F1",
    videoSrc: null,
    accent: "#435BFF",
    category: "Social Media",
  },
  {
    id: "franchise-3",
    brand: "The Franchise Insider",
    label: "Social Campaign",
    url: "https://www.instagram.com/reel/Dd6aXu3sNLU/?xtok=MXV5cWhmNGVjdnUwag==",
    videoSrc: null,
    accent: "#435BFF",
    category: "Social Media",
  },
];

export const work = [
  {
    id: "wedding-styling",
    title: "Rang · Rishta · Raunak",
    subtitle: "Wedding Content Direction",
    category: "Event styling & moodboard content",
    description:
      "Colour-led moodboard and grid concepts for wedding content — from a warm coral 'Rang / Rishta / Raunak' theme to a red-and-gold 'Timeless Elegance' palette and a citrus garden theme, each built around a distinct colour story and typographic identity.",
    images: [
      "/assets/work/wedding-rang-rishta-raunak.jpg",
      "/assets/work/wedding-timeless-elegance.jpg",
      "/assets/work/wedding-blue-theme.jpg",
      "/assets/work/wedding-fiesta-di-limone.png",
    ],
    accent: "#FF8068",
    layout: "hero",
    section: "design",
  },
  {
    id: "cogrow",
    title: "CoGrow Coworking Space",
    subtitle: "Social Content System",
    category: "Social content & brand voice",
    description:
      "A full content system for a coworking brand — pairing a recurring 'Baad mai?' pain-point series with a benefits carousel and behind-the-scenes team posts, built to make the space feel lived-in rather than just photographed.",
    images: ["/assets/work/cogrow-1.png"],
    accent: "#DCD6FF",
    layout: "split",
    section: "design",
  },
  {
    id: "vpodz",
    title: "V'Podz Headphone Launch",
    subtitle: "Launch Creative",
    category: "Product launch creative",
    description:
      "Launch-flyer design for a next-gen headphone product, built around a bold custom wordmark and clear, scannable spec callouts for battery life and range.",
    images: ["/assets/work/vpodz-1.png"],
    accent: "#435BFF",
    layout: "cinematic",
    section: "design",
  },
  {
    id: "knitsox",
    title: "Knitsox.in",
    subtitle: "Instagram Grid",
    category: "Instagram grid & product storytelling",
    description:
      "A product-first Instagram grid for a socks brand — mixing lifestyle shots, Pantone-style colourways, and light, self-aware copy to keep a simple product visually interesting post after post.",
    images: ["/assets/work/knitsox-1.png"],
    accent: "#D7FF64",
    layout: "split",
    section: "design",
  },
  {
    id: "pizzeria",
    title: "The Pizzeria",
    subtitle: "Restaurant Social Campaign",
    category: "Food & beverage social creative",
    description:
      "Restaurant social creative using a moody neon visual direction and product styling.",
    images: ["/assets/work/pizzeria-1.png"],
    accent: "#FF8068",
    layout: "cinematic",
    section: "design",
  },
];

export const galleryImages = [
  {
    id: "g1",
    src: "/assets/work/wedding-rang-rishta-raunak.jpg",
    alt: "Rang Rishta Raunak — Wedding moodboard, warm coral theme",
    title: "Rang · Rishta · Raunak",
    category: "Wedding",
    tags: ["Campaigns", "Social Media"],
  },
  {
    id: "g2",
    src: "/assets/work/wedding-timeless-elegance.jpg",
    alt: "Timeless Elegance — Wedding moodboard, red and gold palette",
    title: "Timeless Elegance",
    category: "Wedding",
    tags: ["Campaigns"],
  },
  {
    id: "g3",
    src: "/assets/work/wedding-blue-theme.jpg",
    alt: "Wedding blue theme moodboard",
    title: "Blue Theme Wedding",
    category: "Wedding",
    tags: ["Social Media"],
  },
  {
    id: "g4",
    src: "/assets/work/wedding-fiesta-di-limone.png",
    alt: "Fiesta di Limone — Wedding citrus garden theme",
    title: "Fiesta di Limone",
    category: "Wedding",
    tags: ["Campaigns", "Branding"],
  },
  {
    id: "g5",
    src: "/assets/work/cogrow-1.png",
    alt: "CoGrow coworking space — social media content system",
    title: "CoGrow Social System",
    category: "Branding",
    tags: ["Social Media", "Branding"],
  },
  {
    id: "g6",
    src: "/assets/work/vpodz-1.png",
    alt: "V'Podz headphone launch flyer",
    title: "V'Podz Launch Flyer",
    category: "Campaigns",
    tags: ["Campaigns", "Branding"],
  },
  {
    id: "g7",
    src: "/assets/work/knitsox-1.png",
    alt: "Knitsox.in Instagram grid — product lifestyle photography",
    title: "Knitsox Instagram Grid",
    category: "Social Media",
    tags: ["Social Media"],
  },
  {
    id: "g8",
    src: "/assets/work/pizzeria-1.png",
    alt: "The Pizzeria — moody neon restaurant social campaign",
    title: "The Pizzeria Campaign",
    category: "Campaigns",
    tags: ["Campaigns", "Social Media"],
  },
];

export const toolkit = {
  tools: ["Canva", "CapCut", "VN", "Meta Business Suite", "Meta Tools", "Google Trends", "Generative AI Tools", "Microsoft Office"],
  skills: [
    "Social Media Marketing",
    "Content Strategy",
    "Brand Management",
    "Advertising",
    "PR",
    "CRM",
    "Market Research",
  ],
};

export const marketingApproach = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand the brand, audience, goals, and context. Every effective campaign starts with asking the right questions.",
    accent: "#D7FF64",
  },
  {
    step: "02",
    title: "STRATEGISE",
    description: "Plan content direction, campaign ideas, and communication. Map what gets said, where, and to whom.",
    accent: "#435BFF",
  },
  {
    step: "03",
    title: "CREATE",
    description: "Develop creative assets and engaging content — from Canva designs and reels to campaign copy and visual storytelling.",
    accent: "#DCD6FF",
  },
  {
    step: "04",
    title: "OPTIMISE",
    description: "Review available performance data and identify opportunities for improvement. Iterate based on what the audience responds to.",
    accent: "#FF8068",
  },
];

export const education = [
  {
    degree: "MBA",
    institute: "Amrut Mody School of Management, Ahmedabad University",
    year: "2026",
  },
  {
    degree: "BBA (International Business)",
    institute:
      "Indukaka Ipcowala Institute of Management (IIIM), Charotar University of Science and Technology (CHARUSAT)",
    year: "2023",
  },
];

export const certifications = [
  {
    title: "Foundation of Digital Marketing",
    period: "May 2025 – Jun 2025",
    detail: "",
  },
  {
    title: "Welcome to GenAI for Market Research Analysts",
    period: "May 2025",
    detail: "",
  },
];
