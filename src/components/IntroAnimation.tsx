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
            {/* Simple loader */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                className="h-16 w-16 rounded-full border border-border/70 border-t-accent-light"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <p className="font-mono text-xs tracking-[0.45em] text-text-muted uppercase">
                Loading
              </p>

              <span className="font-mono text-base tabular-nums text-text-muted">
                {counter.toString().padStart(3, "0")}%
              </span>
            </motion.div>
          </div>

          {/* (Removed orbiting GA rings to keep loader simple) */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
