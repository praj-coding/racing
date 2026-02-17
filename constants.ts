
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Jarvis-AI-Voice-Assistant",
    description: "A sophisticated AI assistant using speech recognition and NLP. Developed with TypeScript and integrating Gemini API for advanced reasoning and system automation.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Gemini API", "Automation"],
    link: "https://github.com/prajasus2308/Jarvis-AI"
  },
  {
    id: 2,
    title: "PRAJ-CSS-Framework",
    description: "A custom utility-first CSS framework built from scratch to handle complex neon and glassmorphism effects with extreme performance and zero dependencies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML5", "CSS3", "Design Systems"],
    link: "https://github.com/prajasus2308/PRAJ-UI-System"
  },
  {
    id: 3,
    title: "Nexus-Hacker-Terminal",
    description: "An interactive, web-based terminal emulator that simulates a high-level security environment. Features custom command processing and real-time feedback.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Terminal", "UI/UX"],
    link: "https://github.com/prajasus2308/Hacker-Portfolio"
  },
  {
    id: 4,
    title: "Secure-Vault-App",
    description: "A high-security data encryption application designed to protect sensitive information using modern cryptographic standards and a clean TypeScript architecture.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Security", "Crypto"],
    link: "https://github.com/prajasus2308/Secure-Vault"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML / CSS", level: 100, color: "#E34F26" },
  { name: "JavaScript", level: 100, color: "#F7DF1E" },
  { name: "TypeScript", level: 100, color: "#3178C6" },
  { name: "React / Next.js", level: 98, color: "#61DAFB" },
  { name: "Fullstack Engineering", level: 92, color: "#FF00FF" }
];
