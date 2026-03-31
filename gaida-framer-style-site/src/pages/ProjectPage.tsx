import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { getProjectBySlug } from "../data/projects";

function DevpostIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 3h6l6 9-6 9H6l6-9z" />
    </svg>
  );
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [imageIndex, setImageIndex] = useState(0);

  if (!project || project.hasDetailPage === false) {
    return <Navigate to="/" replace />;
  }

  const totalImages = project.gallery.length;
  const activeImage = project.gallery[imageIndex];

  const goPrev = () => {
    setImageIndex((curr) => (curr - 1 + totalImages) % totalImages);
  };

  const goNext = () => {
    setImageIndex((curr) => (curr + 1) % totalImages);
  };

  return (
    <div className="bg-cream">
      <article className="mx-auto max-w-3xl px-5 pb-6 pt-10 sm:px-8 sm:pt-14">
        <Link
          to={{ pathname: "/", hash: "works" }}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to Works
        </Link>

        <motion.header
          className="mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{project.blurb}</p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-line py-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Type</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{project.type}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Role</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Year</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{project.year}</dd>
            </div>
          </dl>
        </motion.header>

        <div className="mt-10">
          <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            {activeImage ? (
              <img
                src={activeImage}
                alt={`${project.title} screenshot ${imageIndex + 1}`}
                className="w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/10] w-full items-center justify-center bg-cream">
                <span className="text-sm font-medium text-muted">Image {imageIndex + 1}</span>
              </div>
            )}
          </figure>

          {totalImages > 1 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-cream"
              >
                <ChevronLeft size={18} />
              </button>

              <p className="text-xs font-medium tracking-wide text-muted">
                {imageIndex + 1} / {totalImages}
              </p>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-cream"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 space-y-5 text-base leading-relaxed text-ink/90 sm:text-[17px]">
          {project.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="text-lg font-bold text-ink">Tech stack</h2>
          <ul className="mt-4 space-y-3">
            {project.stackItems.map((item) => (
              <li key={item.name} className="flex flex-col gap-0.5 border-b border-line/80 pb-3 last:border-0">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="text-sm text-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-ink/20"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight size={16} />
          </a>
          {project.links.devpost && (
            <a
              href={project.links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-ink/20"
            >
              <DevpostIcon />
              Devpost
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </article>

      <div className="mt-6">
        <ContactSection id="follow" />
      </div>
    </div>
  );
}
