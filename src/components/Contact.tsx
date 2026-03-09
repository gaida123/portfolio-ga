"use client";

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const socials = [
  {
    label: "Email",
    href: "mailto:mgamzar@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaida-amzar-3304a82b6/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/gaida123",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.1} inView>
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">
            (05)
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-text-muted sm:mb-12 sm:text-lg">
            Ready to bring your ideas to life? I&apos;m always excited to
            collaborate on innovative projects and help transform your vision
            into reality.
          </p>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <a
            href="mailto:mgamzar@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Get In Touch
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </BlurFade>

        <BlurFade delay={0.65} inView>
          <div className="mt-12 flex items-center justify-center gap-5 sm:mt-16">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-accent/40 hover:text-accent-light"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* Footer */}
      <BlurFade delay={0.8} inView>
        <div className="mx-auto mt-20 max-w-5xl border-t border-border pt-8 text-center sm:mt-24">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Gaida Amzar. Built with Next.js &
            Tailwind CSS.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
