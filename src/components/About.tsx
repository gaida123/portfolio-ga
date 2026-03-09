"use client";

import { Download, Linkedin, Github, Mail, UserCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const actions = [
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: Download,
    style:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25",
    download: true,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaida-amzar-3304a82b6/",
    icon: Linkedin,
    style:
      "border border-border text-text-muted hover:border-accent/50 hover:text-text",
    download: false,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    style:
      "border border-border text-text-muted hover:border-accent/50 hover:text-text",
    download: false,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:mgamzar@gmail.com",
    icon: Mail,
    style:
      "border border-border text-text-muted hover:border-accent/50 hover:text-text",
    download: false,
    external: false,
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">
            (01)
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="mb-10 text-4xl font-bold tracking-tight sm:mb-14 sm:text-5xl">
            About Me /
          </h2>
        </BlurFade>

        {/* Bio + Photo row */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left — paragraph + action buttons */}
          <div>
            <BlurFade delay={0.35} inView>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                I&apos;m a Computer Science student at the University of British
                Columbia with a deep passion for full-stack development. From
                building e-commerce platforms that drive real business growth to
                creating mobile apps that foster student well-being, I thrive on
                turning ideas into production-ready applications. I love working
                at the intersection of clean design and robust engineering —
                building things that are both beautiful and scalable.
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.download ? { download: true } : {})}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${action.style}`}
                  >
                    <action.icon size={16} />
                    {action.label}
                  </a>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right — photo placeholder */}
          <BlurFade delay={0.4} inView>
            <div className="relative mx-auto h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:h-72 sm:w-72 lg:mx-0">
              {/* Replace the placeholder below with an <img> once you have a photo:
                  <img src="/photo.jpg" alt="Gaida Amzar" className="h-full w-full object-cover" /> */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-text-muted/25">
                <UserCircle size={48} strokeWidth={1.5} />
                <span className="font-mono text-xs">Your photo</span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Highlight cards are temporarily commented out
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {highlights.map((item, i) => (
            <BlurFade key={item.title} delay={0.6 + i * 0.12} inView>
              <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-light sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
