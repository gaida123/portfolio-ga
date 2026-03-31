import { Route, Routes } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { BottomNav } from "./components/BottomNav";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

const lenisOptions = {
  autoRaf: true,
  smoothWheel: true,
  /** Smooth in-page / hash jumps (works with bottom nav) */
  anchors: true,
  /** Lower = scroll catches up more gently (feels heavier / slower) */
  lerp: 0.15,
  /** < 1 = less distance per wheel tick */
  wheelMultiplier: 0.78,
  touchMultiplier: 0.82,
} as const;

export default function App() {
  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollToTop />
      <div className="bg-cream text-ink">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:slug" element={<ProjectPage />} />
        </Routes>
        <BottomNav />
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </ReactLenis>
  );
}
