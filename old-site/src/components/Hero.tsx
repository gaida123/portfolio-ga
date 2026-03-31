"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6 pt-24 sm:pt-32">
      {/* Hero background dots + radial fade (matches loading screen style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-60">
          <FlickeringGrid
            className="absolute inset-0 z-0 h-full w-full"
            squareSize={4}
            gridGap={6}
            color="rgb(99, 102, 241)"
            maxOpacity={0.4}
            flickerChance={0.15}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-background)_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Label */}
        <BlurFade delay={0.1} yOffset={6}>
          <p className="mb-6 font-mono text-xs tracking-[0.25em] text-text-muted uppercase">
            Computer Science · University of British Columbia
          </p>
        </BlurFade>

        {/* Name — serif, large */}
        <BlurFade delay={0.2} yOffset={16} blur="12px">
          <h1 className="font-serif mb-6 text-6xl font-bold leading-[1.05] tracking-tight text-text sm:text-8xl lg:text-9xl">
            Gaida
            <br />
            Amzar
          </h1>
        </BlurFade>

        {/* One-liner */}
        <BlurFade delay={0.35} yOffset={8}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            I build web platforms, e-commerce systems, and data tools. First-year
            CS student at UBC with a background in full-stack development for
            real businesses.
          </p>
        </BlurFade>

        {/* CTAs */}
        <BlurFade delay={0.5} yOffset={6}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-none border border-text bg-text px-7 py-3 text-sm font-medium text-background transition-all hover:bg-accent hover:border-accent"
            >
              View Work
              <ArrowDown size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-none border border-border px-7 py-3 text-sm font-medium text-text-muted transition-colors hover:border-text hover:text-text"
            >
              Get in touch
            </a>
          </div>
        </BlurFade>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-6 sm:left-auto sm:right-6"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
