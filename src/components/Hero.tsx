"use client";

import { useRef, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function WireframeCube({
  size,
  className,
  speed = 20,
}: {
  size: number;
  className: string;
  speed?: number;
}) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)` },
    { transform: `translateZ(${-half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className={className} style={{ perspective: 800 }}>
      <div
        className="preserve-3d relative"
        style={{
          width: size,
          height: size,
          animation: `spin3d ${speed}s linear infinite`,
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-accent/[0.12]"
            style={{ transform: face.transform }}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingRing({
  className,
  size,
  delay = 0,
}: {
  className: string;
  size: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`rounded-full border border-accent/10 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { stiffness: 40, damping: 25 };
  const sx = useSpring(mouseX, springCfg);
  const sy = useSpring(mouseY, springCfg);

  const parallax1X = useTransform(sx, [-0.5, 0.5], [-25, 25]);
  const parallax1Y = useTransform(sy, [-0.5, 0.5], [-25, 25]);
  const parallax2X = useTransform(sx, [-0.5, 0.5], [-50, 50]);
  const parallax2Y = useTransform(sy, [-0.5, 0.5], [-50, 50]);

  const glowX = useTransform(sx, [-0.5, 0.5], [-300, 300]);
  const glowY = useTransform(sy, [-0.5, 0.5], [-300, 300]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* FlickeringGrid background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 h-full w-full"
          squareSize={4}
          gridGap={6}
          color="rgb(99, 102, 241)"
          maxOpacity={0.25}
          flickerChance={0.08}
        />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_75%)]" />

      {/* Depth layer 1 — wireframe shapes (hidden on small screens) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
        style={{ x: parallax1X, y: parallax1Y }}
      >
        <WireframeCube
          size={60}
          speed={25}
          className="absolute left-[8%] top-[18%] opacity-50"
        />
        <FloatingRing
          size={80}
          className="absolute right-[12%] top-[22%] opacity-30"
          delay={1}
        />
        <WireframeCube
          size={40}
          speed={18}
          className="absolute left-[15%] bottom-[22%] opacity-30"
        />
      </motion.div>

      {/* Depth layer 2 — further shapes (hidden on small screens) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
        style={{ x: parallax2X, y: parallax2Y }}
      >
        <WireframeCube
          size={90}
          speed={30}
          className="absolute right-[18%] bottom-[28%] opacity-20"
        />
        <FloatingRing
          size={50}
          className="absolute left-[45%] top-[8%] opacity-25"
          delay={2}
        />
        <FloatingRing
          size={120}
          className="absolute right-[8%] top-[55%] opacity-15"
          delay={3}
        />
      </motion.div>

      {/* Mouse glow */}
      <motion.div
        className="pointer-events-none absolute z-[3] h-[500px] w-[500px] rounded-full bg-accent/[0.05] blur-[120px]"
        style={{ x: glowX, y: glowY }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <BlurFade delay={0.1} yOffset={8}>
          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-light uppercase sm:text-base">
            Hi I am
          </p>
        </BlurFade>

        <BlurFade delay={0.25} yOffset={12} blur="12px">
          <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="gradient-text">Gaida</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} yOffset={12} blur="12px">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="gradient-text">Amzar</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.6} yOffset={6}>
          <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            Computer Science student at the{" "}
            <span className="font-medium text-text">
              University of British Columbia
            </span>
            . Building scalable web apps &amp; interactive experiences.
          </p>
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
