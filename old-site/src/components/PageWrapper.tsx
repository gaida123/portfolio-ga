"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "./IntroAnimation";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function PageWrapper() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introComplete && (
          <IntroAnimation
            key="intro"
            onComplete={handleIntroComplete}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
