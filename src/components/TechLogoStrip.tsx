import type { IconType } from "react-icons";
import { useId } from "react";
import {
  SiElectron,
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const tools: IconType[] = [
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiLaravel,
  SiElectron,
  SiExpo,
  SiGithub,
  SiVercel,
  SiFramer,
];

/** Seconds for one full loop (half track = one copy of icons) */
const MARQUEE_DURATION_SEC = 45;

function IconTile({ Icon }: { Icon: IconType }) {
  return (
    <div
      role="listitem"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white shadow-sm sm:h-12 sm:w-12"
    >
      <Icon className="h-5 w-5 text-ink sm:h-6 sm:w-6" aria-hidden />
    </div>
  );
}

export function TechLogoStrip() {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "_");
  const trackClass = `techMarquee_track_${rawId}`;
  const keyframesName = `techMarquee_kf_${rawId}`;

  return (
    <div className="min-h-0">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        Technologies I use
      </p>
      {/* Scoped CSS so Tailwind layers cannot kill the animation */}
      <style>{`
        @keyframes ${keyframesName} {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .${trackClass} {
          display: inline-flex;
          flex-wrap: nowrap;
          width: max-content;
          gap: 0.625rem;
          animation: ${keyframesName} ${MARQUEE_DURATION_SEC}s linear infinite;
          will-change: transform;
        }
        @media (min-width: 640px) {
          .${trackClass} {
            gap: 0.75rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .${trackClass} {
            animation: none;
            will-change: auto;
          }
        }
        @media (hover: hover) {
          .techMarquee_wrap:hover .${trackClass} {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div
        className="techMarquee_wrap relative overflow-hidden py-0.5"
        role="list"
        aria-label="Technologies"
        data-lenis-prevent
      >
        <div className={trackClass}>
          {tools.map((Icon, idx) => (
            <IconTile key={`a-${idx}`} Icon={Icon} />
          ))}
          {tools.map((Icon, idx) => (
            <IconTile key={`b-${idx}`} Icon={Icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
