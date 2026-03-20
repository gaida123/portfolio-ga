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
      <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-10" />
    ),
  }
);

const iconSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "php",
  "mysql",
  "react",
  "vuedotjs",
  "nextdotjs",
  "vite",
  "expo",
  "firebase",
  "laravel",
  "bootstrap",
  "tailwindcss",
  "nodedotjs",
  "git",
  "github",
  "postman",
  "vercel",
];

const languages = ["HTML / CSS", "JavaScript", "TypeScript", "PHP", "R", "SQL"];
const tools = [
  "React",
  "Vite",
  "Expo",
  "Firebase",
  "Laravel",
  "Vue.js",
  "Bootstrap",
  "APIs",
  "Postman",
  "GitHub",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">
            (02)
          </p>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <h2 className="mb-12 text-4xl font-bold tracking-tight sm:mb-16 sm:text-5xl">
            Skills & Tools /
          </h2>
        </BlurFade>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-accent/[0.03] blur-[60px]" />
            <IconCloud iconSlugs={iconSlugs} />
          </motion.div>

          {/* Category lists */}
          <div className="space-y-8">
            <BlurFade delay={0.3} inView>
              <div>
                <h3 className="mb-4 font-mono text-xs tracking-[0.3em] text-accent-light uppercase">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.45} inView>
              <div>
                <h3 className="mb-4 font-mono text-xs tracking-[0.3em] text-accent-light uppercase">
                  Tools & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
