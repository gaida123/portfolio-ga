"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function IntroAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [counter, setCounter] = useState(0);
  const [exiting, setExiting] = useState(false);

  const stableOnComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1800;

    function tick(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.floor(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setExiting(true), 2400);
    const completeTimer = setTimeout(stableOnComplete, 3200);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [stableOnComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Flickering grid background */}
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

          {/* Radial fade overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-background)_70%)]" />

          {/* Corner brackets */}
          {[
            "top-6 left-6 border-l-2 border-t-2",
            "top-6 right-6 border-r-2 border-t-2",
            "bottom-6 left-6 border-l-2 border-b-2",
            "bottom-6 right-6 border-r-2 border-b-2",
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`absolute h-10 w-10 border-accent/40 ${pos}`}
            />
          ))}

          {/* Central content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* GA Monogram */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.3, filter: "blur(30px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="gradient-text text-8xl font-bold tracking-tighter sm:text-[11rem]"
            >
              GA
            </motion.h1>

            {/* Expanding line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              className="mt-4 h-[1px] w-56 origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-5 font-mono text-xs tracking-[0.5em] text-text-muted uppercase"
            >
              Portfolio
            </motion.p>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[1px] w-16 origin-right bg-border"
              />
              <span className="font-mono text-lg tabular-nums text-text-muted">
                {counter.toString().padStart(3, "0")}
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[1px] w-16 origin-left bg-border"
              />
            </motion.div>
          </div>

          {/* Orbiting ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.12, scale: 1, rotate: 360 }}
            transition={{
              opacity: { delay: 0.5, duration: 0.8 },
              scale: { delay: 0.5, duration: 0.8 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            className="pointer-events-none absolute h-72 w-72 rounded-full border border-accent/30 sm:h-[28rem] sm:w-[28rem]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.08, scale: 1, rotate: -360 }}
            transition={{
              opacity: { delay: 0.7, duration: 0.8 },
              scale: { delay: 0.7, duration: 0.8 },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
            className="pointer-events-none absolute h-96 w-96 rounded-full border border-accent-light/20 sm:h-[36rem] sm:w-[36rem]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
