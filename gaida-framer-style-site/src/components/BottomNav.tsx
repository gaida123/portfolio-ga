import { Link } from "react-router-dom";

const navItems = [
  { hash: "works", label: "Works" },
  { hash: "about-stack", label: "About" },
  { hash: "follow", label: "Follow" },
] as const;

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 w-[min(calc(100vw-1.5rem),20rem)] -translate-x-1/2 sm:w-auto"
      aria-label="Section navigation"
    >
      <div className="flex items-center justify-center gap-0.5 rounded-full border border-line/90 bg-white/92 px-2 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md sm:gap-1 sm:px-3 sm:py-2">
        {navItems.map(({ hash, label }) => (
          <Link
            key={hash}
            to={{ pathname: "/", hash }}
            className="min-w-[4.25rem] rounded-full px-3 py-2 text-center text-[13px] font-semibold leading-none tracking-wide text-ink/85 transition-colors hover:bg-cream hover:text-ink sm:min-w-[4.75rem] sm:px-4 sm:text-sm"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
