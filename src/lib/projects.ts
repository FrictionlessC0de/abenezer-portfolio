export type Project = {
  slug: string;
  n: string;
  title: string;
  tag: string;
  year: string;
  color: string;
  desc: string;
  role: string;
  timeline: string;
  stack: string[];
  overview: string;
  highlights: string[];
  outcomes: { label: string; value: string }[];
  /** Live deployed URL. Omit if not deployed. */
  demo?: string;
  /** GitHub repo in "owner/name" form. Omit if private/none. */
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "nimbus",
    n: "01",
    title: "Nimbus",
    tag: "Next.js · React · Anthropic AI",
    year: "2025",
    color: "oklch(0.78 0.14 50)",
    desc: "Full-stack AI-powered SaaS platform that analyzes resumes against job descriptions and generates tailored, ATS-optimized resumes.",
    role: "Full-Stack Engineer",
    timeline: "Aug 2024 — Jan 2025",
    stack: ["Next.js 16", "React 19", "TypeScript", "Anthropic AI SDK", "Prisma", "NeonDB", "Upstash Redis", "Vercel Blob", "NextAuth v5", "Tailwind CSS", "Zustand", "Zod"],
    overview:
      "Nimbus is an AI-powered SaaS platform that helps job seekers optimize their resumes. The platform analyzes resumes against job descriptions using the Anthropic AI SDK, generates tailored versions, and ensures ATS compliance. Built with rate limiting via Upstash Redis, secure PDF handling with Vercel Blob, and robust user authentication with NextAuth v5 and Prisma ORM.",
    highlights: [
      "Implemented AI-powered resume analysis and generation using Anthropic SDK with streaming responses.",
      "Built rate limiting system with Upstash Redis to manage API usage and prevent abuse.",
      "Engineered secure PDF parsing, generation, and storage pipeline with Vercel Blob integration.",
    ],
    outcomes: [
      { label: "Resumes Generated", value: "2.4k+" },
      { label: "Avg Match Score", value: "87%" },
      { label: "User Satisfaction", value: "4.9 ★" },
    ],
    demo: "https://solace-app.vercel.app",
    repo: "abenezerniguse/solace",
  },
  {
    slug: "hinta",
    n: "02",
    title: "HinTA",
    tag: "React · Node.js · MongoDB",
    year: "2024",
    color: "oklch(0.65 0.13 45)",
    desc: "Official website for Harari Regional State Innovation & Technology Agency with multilingual interface, animated UI, and secure admin CMS.",
    role: "Lead Full-Stack Engineer",
    timeline: "Feb — Oct 2024",
    stack: ["React 19", "React Router v7", "Framer Motion", "i18next", "Zustand", "Node.js", "Express v5", "MongoDB", "Mongoose", "JWT", "Mailtrap", "Multer"],
    overview:
      "HinTA is the official website for the Harari Regional State Innovation & Technology Agency. The platform features a multilingual interface supporting multiple languages, animated UI components with Framer Motion, comprehensive media management, and a secure admin CMS with JWT authentication. Designed to showcase innovation initiatives and provide seamless user experience across regions.",
    highlights: [
      "Built multilingual interface with i18next supporting dynamic language switching and regional content.",
      "Developed secure admin CMS with JWT authentication, role-based access, and media management via Multer.",
      "Implemented smooth animations and micro-interactions using Framer Motion for enhanced user engagement.",
    ],
    outcomes: [
      { label: "Monthly Visitors", value: "12k+" },
      { label: "Languages", value: "4" },
      { label: "Admin Users", value: "8" },
    ],
    demo: "https://solace-app.vercel.app",
    repo: "abenezerniguse/solace",
  },
  {
    slug: "madab-birr",
    n: "03",
    title: "Madab Birr",
    tag: "MERN · Payments · E-Commerce",
    year: "2024",
    color: "oklch(0.70 0.14 60)",
    desc: "Consumer-to-consumer e-commerce platform with product listings, shopping cart, order management, and local payment gateway integration.",
    role: "Co-Founder & Lead Developer",
    timeline: "Mar — Sep 2024",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Mailtrap", "Chappa Payment API"],
    overview:
      "Madab Birr is a MERN-stack consumer-to-consumer e-commerce platform built as a capstone graduation project. The platform enables users to list products, manage shopping carts, process orders, and handle payments through Chappa Payment Gateway tailored for local Ethiopian transactions. Automated email notifications keep users informed throughout their shopping journey.",
    highlights: [
      "Built complete e-commerce flow with product listings, shopping cart, and checkout using React.",
      "Integrated Chappa Payment API for secure local payment processing in Ethiopia.",
      "Implemented automated transactional emails via Mailtrap for order confirmations and updates.",
    ],
    outcomes: [
      { label: "Products Listed", value: "450+" },
      { label: "Transactions", value: "1.2k+" },
      { label: "Team Size", value: "4" },
    ],
    demo: "https://solace-app.vercel.app",
    repo: "abenezerniguse/solace",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);