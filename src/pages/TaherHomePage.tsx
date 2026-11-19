import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import { scrollToSection } from "@/shared/sections/taher/scroll";
import Section1 from "@/shared/sections/taher/Section1";
import Section2 from "@/shared/sections/taher/Section2";
import ToolsStrip from "@/shared/sections/taher/ToolsStrip";
import Section4 from "@/shared/sections/taher/Section4";
import Section5 from "@/shared/sections/taher/Section5";
import Section6 from "@/shared/sections/taher/Section6";
import Section7 from "@/shared/sections/taher/Section7";
import Section8 from "@/shared/sections/taher/Section8";
import "@/shared/sections/taher/taher.css";

// Copy of Home5Page (index-5) filled with Taher's portfolio content.
// Home5Page.tsx and src/shared/sections/index-5/* are left untouched.
// Section order mirrors Home5Page; see each section file's header for what was removed.

export default function TaherHomePage() {
  const { hash } = useLocation();
  // Arriving as /#work (e.g. a menu link from the 404 page): scroll once ScrollSmoother is ready.
  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSection(hash.slice(1)), 700);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageMeta title="Taher Rampurawala · AI Automation Engineer" />
      <Section1 />   {/* Hero */}
      <Section2 />   {/* About (was "Why Klarus AI") */}
      <ToolsStrip /> {/* Tools marquee (was "Trusted by 100+ businesses" logos) */}
      <Section4 />   {/* Selected work: 11 real projects */}
      <Section5 />   {/* Real stats + contact details */}
      <Section6 />   {/* How I work + experience (was fake career path) */}
      <Section7 />   {/* Services + principles (was fake testimonials) */}
      <Section8 />   {/* Contact form (was blog) */}
    </>
  );
}
