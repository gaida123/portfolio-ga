"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextShimmer } from "@/components/ui/text-shimmer";

const AnimatedShaderBackground = dynamic(
  () =>
    import("@/components/ui/animated-shader-background").then(
      (mod) => mod.default
    ),
  { ssr: false }
);

const phrases = [
  "Building scalable web apps & interactive experiences.",
  "Engineering clean systems, fast UIs, and reliable APIs.",
  "Exploring cybersecurity: threat modeling, hardening, and secure-by-design.",
];

function RotatingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <div className="relative mx-auto mb-12 flex h-24 w-full max-w-3xl items-center justify-center overflow-hidden sm:h-20">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute px-4 text-center text-xl font-medium leading-snug text-text sm:text-2xl"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {isInView && <AnimatedShaderBackground />}

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_75%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <BlurFade delay={0.1} yOffset={8}>
          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-light uppercase sm:text-base">
            Hi I am
          </p>
        </BlurFade>

        <BlurFade delay={0.25} yOffset={12} blur="12px">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="gradient-text">Gaida Amzar</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.55} yOffset={6}>
          <TextShimmer
            className="mx-auto mb-2 font-mono text-xs tracking-[0.35em] uppercase [--base-color:theme(colors.slate.400)] [--base-gradient-color:theme(colors.indigo.200)] dark:[--base-color:theme(colors.slate.500)] dark:[--base-gradient-color:theme(colors.indigo.300)]"
            duration={1.4}
          >
            Computer Science · University of British Columbia
          </TextShimmer>
        </BlurFade>

        <BlurFade delay={0.65} yOffset={6}>
          <RotatingSubtitle />
        </BlurFade>

        <BlurFade delay={0.8} yOffset={6}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              View My Work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gaida-amzar-3304a82b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-muted transition-all hover:border-accent/50 hover:text-text"
            >
              <Linkedin size={16} />
              Connect
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-text-muted/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-accent-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
