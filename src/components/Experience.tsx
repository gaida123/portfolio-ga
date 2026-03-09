"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  initials: string;
  color: string;
  logo?: string;
  /** "fill" = logo fills box (no white), "contain-white" = white bg + logo on top, "contain" = default */
  logoStyle?: "fill" | "contain" | "contain-white";
  website: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Gado-Gado Indonesian Student Association of UBC",
    period: "Nov. 2025 — Present",
    description:
      "Maintaining the web presence for 300+ students and streamlining event registrations with reliable, user-friendly digital solutions.",
    initials: "GG",
    color: "from-emerald-500 to-teal-600",
    logo: "/images/gisau-logo.png",
    logoStyle: "fill",
    website: "https://gisaubc.com",
  },
  {
    role: "Full-Stack Web Developer & Digital Advertising Coordinator",
    company: "PT. Asia Garment Internasional",
    period: "Aug. 2022 — Present",
    description:
      "Built e-commerce websites that boosted organic traffic by 20%. Optimized Google Ads campaigns achieving 10,000+ impressions and integrated secure payment gateways for seamless transactions.",
    initials: "AG",
    color: "from-blue-500 to-indigo-600",
    logo: "/images/sarong-logo.png",
    logoStyle: "fill",
    website: "https://sarongwholesale.com",
  },
  {
    role: "Full-Stack Web Developer",
    company: "Didik Elektronik",
    period: "Dec. 2024 — Aug. 2025",
    description:
      "Developed a full e-commerce platform with a custom admin dashboard, reducing order processing time by 30%. Integrated Midtrans payment gateway, Biteship API for logistics, and Firebase for real-time data.",
    initials: "DE",
    color: "from-amber-500 to-orange-600",
    logo: "/images/didik-logo.png",
    logoStyle: "contain",
    website: "https://didikelektronik.com",
  },
  {
    role: "Web Developer",
    company: "Gettook",
    period: "Aug. 2024 — Nov. 2024",
    description:
      "Optimized catalogue websites for performance and SEO. Integrated WhatsApp-linked contact forms to improve lead capture and client communication.",
    initials: "GT",
    color: "from-violet-500 to-purple-600",
    logo: "/images/gettook-logo.png",
    logoStyle: "contain-white",
    website: "https://gettook.shop",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">
            (03)
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="mb-12 text-4xl font-bold tracking-tight sm:mb-16 sm:text-5xl">
            Experience /
          </h2>
        </BlurFade>

        <div className="space-y-5 sm:space-y-6">
          {experiences.map((exp, i) => {
            const logoFill = exp.logoStyle === "fill";
            const logoContainWhite = exp.logoStyle === "contain-white";
            const logoBoxClass = exp.logo
              ? "overflow-hidden rounded-xl border border-border shadow-lg sm:h-14 sm:w-14 " +
                (logoFill && !exp.company.includes("Asia Garment")
                  ? ""
                  : "bg-white")
              : "";
            const logoImgClass = exp.logo
              ? logoFill
                ? "h-full w-full object-cover"
                : "h-full w-full object-contain p-1"
              : "";
            return (
              <BlurFade key={exp.company} delay={0.3 + i * 0.12} inView>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:bg-surface-light"
                >
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
                    {/* Company logo */}
                    <div className="shrink-0">
                      {exp.logo ? (
                        <div
                          className={
                            "relative h-12 w-12 sm:h-14 sm:w-14 " + logoBoxClass
                          }
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={56}
                            height={56}
                            className={logoImgClass}
                          />
                        </div>
                      ) : (
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} text-base font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:text-lg`}
                        >
                          {exp.initials}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-base font-semibold leading-snug sm:text-lg">
                        {exp.role}
                      </h3>
                      <p className="mb-1 text-sm font-medium text-accent-light">
                        {exp.company}
                      </p>
                      <div className="mb-3 flex items-center gap-1.5 text-xs text-text-muted sm:mb-4">
                        <Calendar size={12} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {exp.description}
                      </p>
                    </div>

                    {/* Index number */}
                    <span className="absolute right-5 top-5 font-mono text-xs text-text-muted/30 sm:relative sm:right-auto sm:top-auto">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Hover accent line */}
                  <div className="h-[2px] w-0 bg-gradient-to-r from-accent to-accent-light transition-all duration-500 group-hover:w-full" />
                </a>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
