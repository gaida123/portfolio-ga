import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SOCIAL } from "../data/social";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

export function ContactSection({ id = "follow" }: { id?: string }) {
  return (
    <footer
      id={id}
      className="border-t border-line bg-ink pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] pt-14 text-cream sm:pb-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:pt-16"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div {...fade}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cream/60">
            Let&apos;s talk
          </p>
          <a
            href={SOCIAL.email}
            className="text-2xl font-semibold underline-offset-4 hover:underline sm:text-3xl"
          >
            mgamzar@gmail.com
          </a>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
            Hi, I&apos;m Gaida. I like to build web platforms and tools that real people use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-cream/10"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-cream/10"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-cream/10"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href={SOCIAL.email}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-cream/10"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
          <p className="mt-12 text-xs text-cream/45">
            © {new Date().getFullYear()} Gaida Amzar
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
