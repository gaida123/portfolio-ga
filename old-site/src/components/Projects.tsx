"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

function DevpostIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h6l6 9-6 9H6l6-9z" />
    </svg>
  );
}

interface Project {
  title: string;
  year: string;
  tags: string[];
  description: string;
  image: string | null;
  links: {
    github?: string;
    devpost?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: "PolterGuide",
    year: "2026",
    tags: [
      "React 19",
      "Electron",
      "FastAPI",
      "WebSockets",
      "Google GenAI",
      "Fetch.ai",
    ],
    description:
      "Agentic AI co-pilot that physically navigates SaaS dashboards via a Ghost Cursor. Parses uploaded PDFs into live onboarding flows with voice/chat commands and sub-100ms WebSocket streaming.",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/486/714/datas/medium.png",
    links: {
      github: "https://github.com/gaida123/polter-guide/",
      devpost: "https://devpost.com/software/polterguide",
    },
  },
  {
    title: "Lockout",
    year: "2025",
    tags: ["React", "Expo", "TypeScript", "Firebase", "Gemini Vision API"],
    description:
      "Student well-being mobile app using social accountability and AI-powered photo verification to confirm study sessions. Real-time feeds and social challenges built on Firebase.",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/184/202/datas/medium.png",
    links: {
      github: "https://github.com/keananwongso/projectlocked.",
      devpost: "https://devpost.com/software/lockedout-5nge0b",
    },
  },
  {
    title: "Bsystem",
    year: "2024",
    tags: ["Laravel", "Vue.js", "SQL", "Node.js"],
    description:
      "Inventory management system with automated data entry, server-side pagination, role-based access control, and a real-time stock dashboard. Reduced manual data errors by 20%.",
    image: null,
    links: {
      github: "https://github.com/gaida123",
    },
  },
  {
    title: "Minecraft Server Analytics",
    year: "2025",
    tags: ["R", "Classification", "Data Science"],
    description:
      "Player analytics and demand forecasting tools for a Minecraft server community. Built classification models and engagement tracking dashboards.",
    image: "images/dsci-project-background.png",
    links: {
      github: "https://github.com/gaida123/dsci-100-008-group-6/",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <hr className="rule mb-10" />
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h2 className="font-serif mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Selected Works
          </h2>
        </BlurFade>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project, i) => (
            <BlurFade key={project.title} delay={0.2 + i * 0.1} inView>
              <motion.div
                whileHover={{ backgroundColor: "rgba(0,0,0,0.015)" }}
                className="grid gap-6 py-8 sm:grid-cols-[1fr_280px] sm:gap-10"
              >
                <div className="order-2 sm:order-1">
                  <div className="mb-2 flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-text-muted">
                      {project.year}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-text-muted">
                    {project.description}
                  </p>

                  <p className="mb-4 font-mono text-xs text-text-muted">
                    {project.tags.join(" · ")}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
                      >
                        <Github size={13} />
                        GitHub
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                    {project.links.devpost && (
                      <a
                        href={project.links.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
                      >
                        <DevpostIcon size={13} />
                        Devpost
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
                      >
                        Live
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="order-1 sm:order-2">
                  {project.image ? (
                    <div className="aspect-[16/10] w-full overflow-hidden border border-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-center justify-center border border-border bg-surface">
                      <span className="font-mono text-xs text-text-muted">
                        No preview
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
