"use client";

import { Download, Linkedin, Github, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const actions = [
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: Download,
    primary: true,
    download: true,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaida-amzar-3304a82b6/",
    icon: Linkedin,
    primary: false,
    download: false,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/gaida123",
    icon: Github,
    primary: false,
    download: false,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:mgamzar@gmail.com",
    icon: Mail,
    primary: false,
    download: false,
    external: false,
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <hr className="rule mb-10" />
        </BlurFade>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <BlurFade delay={0.15} inView>
              <h2 className="font-serif mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                About
              </h2>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <p className="mb-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                I&apos;m a Computer Science student at the University of British
                Columbia, born in Bali, Indonesia. Before university I spent
                three years building e-commerce and web platforms for local
                businesses — real work, real deadlines, real clients.
              </p>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                I care about software that does what it says, loads fast, and
                holds up under use. I&apos;m drawn to full-stack work, data
                pipelines, and anything that ships to real users.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.download ? { download: true } : {})}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`inline-flex items-center gap-2 rounded-none border px-5 py-2.5 text-sm font-medium transition-all ${
                      action.primary
                        ? "border-text bg-text text-background hover:bg-accent hover:border-accent"
                        : "border-border text-text-muted hover:border-text hover:text-text"
                    }`}
                  >
                    <action.icon size={14} />
                    {action.label}
                  </a>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.35} inView>
            <div className="relative mx-auto h-60 w-60 shrink-0 overflow-hidden border border-border lg:mx-0 sm:h-72 sm:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-photo.png"
                alt="Gaida Amzar"
                className="h-full w-full object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
