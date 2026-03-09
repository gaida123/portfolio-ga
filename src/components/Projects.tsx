"use client";

import {
  Github,
  ImageIcon,
  Smartphone,
  Database,
  Gamepad2,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

function DevpostIcon({ size = 18 }: { size?: number }) {
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

const projects = [
  {
    title: "Lockout",
    icon: Smartphone,
    tags: ["React", "Expo", "TypeScript", "Firebase", "Gemini Vision API"],
    description:
      "A student well-being mobile app leveraging social accountability to help students stay focused. Features AI-powered verification for study sessions using the Gemini Vision API, real-time progress tracking, and social challenges.",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/184/202/datas/medium.png",
    links: {
      github: "https://github.com/keananwongso/projectlocked.",
      devpost: "https://devpost.com/software/lockedout-5nge0b",
    },
  },
  {
    title: "Bsystem",
    icon: Database,
    tags: ["Laravel", "Vue.js", "SQL", "Node.js"],
    description:
      "An automated Inventory Management Database System that reduced manual data errors by 20%. Features server-side pagination for handling large datasets, role-based access control, and a clean dashboard for real-time stock monitoring in this Inventory Management Database System.",
    image: null as string | null,
    links: {
      github: "https://github.com/gaida123",
    },
  },
  {
    title: "Minecraft Server Data Project",
    icon: Gamepad2,
    tags: ["R", "Classification", "Data Science", "Custom Development", "Data Management"],
    description:
      "Custom development and data management solutions for a Minecraft server community. Built tools for player analytics, demand forecasting, and community engagement tracking.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv6B7SB9iUaNdbPJaFvYLoJj1_rd0BJO-Cw&s",
    links: {
      github: "https://github.com/gaida123",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">
            (04)
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="mb-12 text-4xl font-bold tracking-tight sm:mb-16 sm:text-5xl">
            Selected Works /
          </h2>
        </BlurFade>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <BlurFade key={project.title} delay={0.3 + i * 0.15} inView>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/30"
              >
                {/* Image area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-light">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-text-muted/25">
                      <ImageIcon size={36} strokeWidth={1.5} />
                      <span className="font-mono text-xs">Coming soon</span>
                    </div>
                  )}

                  {/* Overlay with links on hover */}
                  {Object.keys(project.links).length > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.devpost && (
                        <a
                          href={project.links.devpost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                          aria-label="Devpost"
                        >
                          <DevpostIcon size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                      <project.icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold leading-tight sm:text-lg">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-light sm:px-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
