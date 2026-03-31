import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LIKES = [
  "Shipping side projects 🚀",
  "Bali beaches & nasi campur 🌴",
  "Late-night music sessions 🎧",
  "Going to the gym 🏋️",
  "Well-documented APIs 📝",
];

export function RotatingLikes() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setI((n) => (n + 1) % LIKES.length);
    }, 3200);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-[3.5rem] sm:min-h-[4rem]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">I also like</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={LIKES[i]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="text-lg font-semibold leading-snug text-ink sm:text-[20px]"
        >
          {LIKES[i]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
