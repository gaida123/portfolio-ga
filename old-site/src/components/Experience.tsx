"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  website: string;
  logo?: string;
  logoStyle?: "fill" | "contain" | "contain-white";
  initials: string;
  color: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Nov 2025 — Present",
    role: "Web Developer",
    company: "Gado-Gado Indonesian Student Association of UBC",
    website: "https://gisaubc.com",
    logo: "/images/gisau-logo.png",
    logoStyle: "fill",
    initials: "GG",
    color: "from-emerald-500 to-teal-600",
    bullets: [
      "Maintain web presence for 300+ students and streamline event registrations.",
    ],
  },
  {
    period: "Aug 2022 — Present",
    role: "Full-Stack Developer & Digital Advertising Coordinator",
    company: "PT. Asia Garment Internasional",
    website: "https://sarongwholesale.com",
    logo: "/images/sarong-logo.png",
    logoStyle: "fill",
    initials: "AG",
    color: "from-blue-500 to-indigo-600",
    bullets: [
      "Built responsive e-commerce platform; boosted organic traffic by 20% via SEO.",
      "Ran Google Ads campaigns achieving 10,000+ impressions and high conversion rates.",
      "Maintained 99.9% uptime with secure payment gateways and reCAPTCHA integration.",
    ],
  },
  {
    period: "Dec 2024 — Aug 2025",
    role: "Full-Stack Web Developer",
    company: "Didik Elektronik",
    website: "https://didikelektronik.com",
    logo: "/images/didik-logo.png",
    logoStyle: "contain",
    initials: "DE",
    color: "from-amber-500 to-orange-600",
    bullets: [
      "Reduced order processing time by 30% with a custom admin dashboard.",
      "Integrated Midtrans payments, Biteship API for live shipping, and Firebase auth.",
      "Deployed end-to-end order tracking that cut support inquiries noticeably.",
    ],
  },
  {
    period: "Aug 2024 — Nov 2024",
    role: "Web Developer",
    company: "Gettook",
    website: "https://gettook.shop",
    logo: "/images/gettook-logo.png",
    logoStyle: "contain-white",
    initials: "GT",
    color: "from-violet-500 to-purple-600",
    bullets: [
      "Improved page load speed and search rankings via Lighthouse audits and SEO.",
      "Integrated WhatsApp-linked contact forms to increase lead capture.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <hr className="rule mb-10" />
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h2 className="font-serif mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Experience
          </h2>
        </BlurFade>

        <div className="divide-y divide-border border-y border-border">
          {experiences.map((exp, i) => (
            <BlurFade key={exp.company} delay={0.2 + i * 0.1} inView>
              <div className="flex gap-6 py-8 sm:gap-8">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  {exp.logo ? (
                    <div
                      className={`relative h-16 w-16 overflow-hidden rounded-xl border border-border shadow-sm sm:h-[72px] sm:w-[72px] ${
                        exp.logoStyle === "contain-white" ? "bg-white" : ""
                      }`}
                    >
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={72}
                        height={72}
                        className={`h-full w-full ${
                          exp.logoStyle === "fill"
                            ? "object-cover"
                            : "object-contain p-1.5"
                        }`}
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} text-base font-bold text-white shadow-sm sm:h-[72px] sm:w-[72px]`}
                    >
                      {exp.initials}
                    </div>
                  )}
                </a>

                <div className="min-w-0 flex-1">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mb-0.5 block text-xs font-medium text-text-muted transition-colors hover:text-accent"
                  >
                    {exp.company}
                  </a>

                  <p className="mb-1 text-base font-semibold text-text sm:text-lg">
                    {exp.role}
                  </p>

                  <p className="mb-3 font-mono text-[10px] tracking-widest text-text-muted uppercase">
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
