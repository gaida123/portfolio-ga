"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const IconCloud = dynamic(
  () =>
    import("@/components/ui/interactive-icon-cloud").then(
      (mod) => mod.IconCloud
    ),
  {
    ssr: false,
    loading: () => (
      <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-20" />
    ),
  }
);

const iconSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "python",
  "php",
  "mysql",
  "react",
  "vuedotjs",
  "nextdotjs",
  "electron",
  "fastapi",
  "vite",
  "expo",
  "firebase",
  "laravel",
  "tailwindcss",
  "framer",
  "nodedotjs",
  "git",
  "github",
  "postman",
  "vercel",
];

const stack = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Python, HTML / CSS, SQL, PHP, R",
  },
  {
    label: "Frontend",
    items: "React 19, Next.js, Vite, Expo, Tailwind CSS, Framer Motion",
  },
  {
    label: "Backend",
    items: "FastAPI, Node.js, Laravel, WebSockets, REST APIs",
  },
  {
    label: "Data & AI",
    items: "Google GenAI, Gemini Vision, Fetch.ai uAgents, Web Speech API",
  },
  {
    label: "Infrastructure",
    items: "Firebase, Electron, Git, GitHub, Vercel, Postman",
  },
];

export default function Skills() {
  const cloudRef = useRef(null);
  const isCloudInView = useInView(cloudRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <hr className="rule mb-10" />
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h2 className="font-serif mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Skills & Tools
          </h2>
        </BlurFade>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div className="divide-y divide-border border-y border-border">
            {stack.map((row, i) => (
              <BlurFade key={row.label} delay={0.2 + i * 0.07} inView>
                <div className="grid grid-cols-[130px_1fr] gap-4 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase pt-0.5">
                    {row.label}
                  </span>
                  <span className="text-base leading-relaxed text-text">
                    {row.items}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>

          <motion.div
            ref={cloudRef}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isCloudInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <IconCloud iconSlugs={iconSlugs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
