import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Instagram, Linkedin } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RotatingLikes } from "../components/RotatingLikes";
import { TechLogoStrip } from "../components/TechLogoStrip";
import { WhatIUse } from "../components/WhatIUse";
import { experienceCards } from "../data/experience";
import { projects } from "../data/projects";
import { SOCIAL } from "../data/social";
import { ContactSection } from "../components/ContactSection";

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const reading = [
  { title: "Agentic UIs & Ghost Cursors", note: "Shipping PolterGuide-style flows" },
  { title: "Web performance & Core Web Vitals", note: "Real client sites" },
  { title: "Firebase + mobile social patterns", note: "Lockout & real-time feeds" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

function useScrollHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") return;
    const raw = location.hash.replace(/^#/, "");
    if (!raw) return;
    const el = document.getElementById(raw);
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname, location.hash]);
}

export function HomePage() {
  useScrollHash();
  const carousel = useRef<HTMLDivElement>(null);

  const scrollProjects = useCallback((dir: -1 | 1) => {
    const el = carousel.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.88, 520), behavior: "smooth" });
  }, []);

  return (
    <main>
      <section id="home" className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
        <motion.div {...fade} className="mb-10 sm:mb-14 md:mb-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="min-w-0">
              <p className="mb-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Hi, I&apos;m Gaida <span className="inline-block">👋</span>
              </p>
              <h1 className="max-w-xl text-[clamp(1.5rem,3.8vw,3rem)] font-bold leading-snug tracking-tight text-ink md:max-w-none">
                I build web platforms & e-commerce systems.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px] md:max-w-none">
                Computer Science · University of British Columbia
                <br />
                <span className="text-ink/85">
                  First-year CS student with three years of full-stack work for real businesses — born in Bali,
                  Indonesia.
                </span>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink shadow-sm transition-all hover:border-ink/20 hover:bg-white hover:shadow-md sm:h-12 sm:w-12"
                >
                  <Linkedin size={20} strokeWidth={1.75} className="sm:h-[22px] sm:w-[22px]" />
                </a>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink shadow-sm transition-all hover:border-ink/20 hover:bg-white hover:shadow-md sm:h-12 sm:w-12"
                >
                  <Github size={20} strokeWidth={1.75} className="sm:h-[22px] sm:w-[22px]" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink shadow-sm transition-all hover:border-ink/20 hover:bg-white hover:shadow-md sm:h-12 sm:w-12"
                >
                  <Instagram size={20} strokeWidth={1.75} className="sm:h-[22px] sm:w-[22px]" />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/about-photo.png"
                alt="Gaida"
                className="h-52 w-52 shrink-0 rounded-full object-cover shadow-lg sm:h-64 sm:w-64 md:h-72 md:w-72"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <motion.div
            className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6"
            {...fade}
          >
            <SectionLabel>Based in</SectionLabel>
            <p className="text-xl font-semibold text-ink sm:text-2xl">Vancouver, Canada</p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6"
            {...fade}
          >
            <SectionLabel>What inspires me?</SectionLabel>
            <p className="text-lg font-semibold leading-snug text-ink sm:text-xl">
              Software that ships, loads fast, and gets used.
            </p>
          </motion.div>
        </div>

        {/* <motion.div
          className="mt-4 overflow-hidden rounded-2xl border border-line bg-[#1a1a1a] p-4 text-left shadow-md sm:p-5"
          {...fade}
          transition={{ ...fade.transition, delay: 0.05 }}
        >
          <div className="mb-2.5 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
          </div>
          <pre className="font-mono text-[10px] leading-relaxed text-emerald-400/95 sm:text-[11px]">
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hi, I'm Gaida!</title>
</head>
<body>
  <!-- building for real users -->
</body>
</html>`}
          </pre>
        </motion.div> */}

        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <motion.div
            className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5"
            {...fade}
          >
            <TechLogoStrip />
          </motion.div>
          <motion.div
            className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5"
            {...fade}
            transition={{ ...fade.transition, delay: 0.05 }}
          >
            <RotatingLikes />
          </motion.div>
        </div>

        <motion.div
          className="mt-4 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6"
          {...fade}
        >
          <SectionLabel>Focus</SectionLabel>
          <p className="text-lg font-semibold leading-snug text-ink sm:text-xl">
            Clean code, secure backend, and AI integration.
          </p>
        </motion.div>
      </section>

      <section className="border-y border-line bg-white/60 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fade}>
            <SectionLabel>Content</SectionLabel>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What I&apos;ve been exploring lately…
            </h2>
            <ul className="space-y-5">
              {reading.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 border-b border-line pb-5 last:border-0 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-lg font-semibold sm:text-xl">{item.title}</span>
                  <span className="text-sm text-muted">{item.note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="works" className="scroll-mt-6 py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div className="mb-8 flex flex-wrap items-end justify-between gap-4" {...fade}>
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Projects</h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-white"
                onClick={() => scrollProjects(-1)}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-white"
                onClick={() => scrollProjects(1)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <div
          ref={carousel}
          className="flex gap-6 overflow-x-auto px-5 pb-4 scrollbar-hide sm:gap-8 sm:px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((p) => (
            <article
              key={p.slug}
              className="w-[min(100vw-3.25rem,560px)] shrink-0 scroll-mx-5 rounded-2xl border border-line bg-white p-5 shadow-sm sm:w-[540px] sm:scroll-mx-8 sm:p-7"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-cream">
                {p.heroImage ? (
                  <img src={p.heroImage} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-xs text-muted">
                    Preview soon
                  </div>
                )}
              </div>
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <h3 className="text-2xl font-bold text-ink">{p.title}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="mb-3 text-[15px] leading-relaxed text-muted">{p.blurb}</p>
              <p className="mb-5 font-mono text-[10px] leading-relaxed text-muted">{p.tags}</p>
              <div className="flex flex-wrap items-center gap-3">
                {p.hasDetailPage !== false && (
                  <Link
                    to={`/works/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
                  >
                    Read more
                  </Link>
                )}
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  <Github size={14} />
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
                {p.links.devpost && (
                  <a
                    href={p.links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"
                  >
                    Devpost
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/60 py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fade}>
            <SectionLabel>Work & clients</SectionLabel>
            <h2 className="mb-8 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Where I&apos;ve applied that in the real world
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {experienceCards.map((card) => (
                <a
                  key={card.company}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border border-line bg-cream p-5 transition-shadow hover:shadow-md sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white shadow-sm sm:h-16 sm:w-16">
                    <img
                      src={card.logoSrc}
                      alt=""
                      className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-ink group-hover:text-accent sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Visit site
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about-stack" className="scroll-mt-6 py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fade}>
            <SectionLabel>Tech stack</SectionLabel>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-ink sm:text-3xl">What I use</h2>
            <WhatIUse />
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
