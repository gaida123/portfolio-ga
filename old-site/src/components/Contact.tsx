"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const socials = [
  {
    label: "Email",
    href: "mailto:mgamzar@gmail.com",
    display: "mgamzar@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaida-amzar-3304a82b6/",
    display: "linkedin.com/in/gaida-amzar",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/gaida123",
    display: "github.com/gaida123",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <hr className="rule mb-10" />
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h2 className="font-serif mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Contact
          </h2>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            I&apos;m always building something new. If you want to work
            together, talk shop, or just say hi — feel free to reach out.
          </p>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="divide-y divide-border border-y border-border">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
              >
                <div className="flex items-center gap-4">
                  <s.icon
                    size={16}
                    className="shrink-0 text-text-muted transition-colors group-hover:text-accent"
                  />
                  <span className="text-sm font-medium text-text transition-colors group-hover:text-accent">
                    {s.display}
                  </span>
                </div>
                <span className="font-mono text-xs text-text-muted transition-colors group-hover:text-accent">
                  {s.label} ↗
                </span>
              </a>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="mt-20 border-t border-border pt-8 sm:mt-24">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Gaida Amzar. Built with Next.js &
              Tailwind CSS.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
