import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import TaherHeader from "@/shared/header/TaherHeader";
import TaherFooter from "@/shared/footer/TaherFooter";
import TaherSideBar from "@/shared/sidebar/TaherSideBar";
import { MobileMenuCloneProvider } from "@/shared/mobile-menu/MobileMenuCloneContext";
import GlobalEffects from "@/shared/effects/GlobalEffects";
import ThemeRouteSync from "@/shared/effects/ThemeRouteSync";
import BackToTop from "@/shared/elements/BackToTop";
import SmoothScrollEffect from "@/shared/effects/SmoothScrollEffect";

// Layout for the Taher portfolio. Trimmed from the template's MainLayout, which switched between
// 16 headers / 15 footers / search popup; only the Taher header, footer and sidebar remain.
// Behaviour kept as-is: ScrollSmoother, GSAP effects, Escape closes panels, sidebar button
// bridge (.at-menu-bar), sticky "MENU" button on scroll, back-to-top.

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handlers = useMemo(
    () => ({
      openHamburgerMenu: () => setHamburgerMenuOpen(true),
      closeAllMenus: () => {
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      },
    }),
    [],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
        setHamburgerMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Sidebar button in the header uses the template's DOM class trigger.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t?.closest(".at-header-sidebar-btn, .at-menu-bar")) {
        e.preventDefault();
        setSidebarOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Sticky "MENU" button appears once the page is scrolled.
  useEffect(() => {
    const el = document.getElementById("header-sticky");
    if (!el) return;
    const onScroll = () => el.classList.toggle("header-sticky", window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MobileMenuCloneProvider>
      <div className="px-blur-bottom" />
      <SmoothScrollEffect />
      <GlobalEffects />
      <ThemeRouteSync />
      <TaherHeader onOpenHamburgerMenu={handlers.openHamburgerMenu} />
      <TaherSideBar open={sidebarOpen} hamburgerOpen={hamburgerMenuOpen} onClose={handlers.closeAllMenus} />

      <div id="smooth-wrapper">
        <div id="smooth-content" className="z-index-3">
          <main className="bg-neutral-0">
            <Outlet />
          </main>
          <TaherFooter />
        </div>
      </div>

      <BackToTop />
    </MobileMenuCloneProvider>
  );
}
