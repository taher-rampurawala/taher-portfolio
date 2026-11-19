import { useLocation } from "react-router-dom";
import RevealTextEffect from "@/shared/effects/RevealTextEffect";
import ScrollMoveUpEffect from "@/shared/effects/ScrollMoveUpEffect";
import FadeAnimEffect from "@/shared/effects/FadeAnimEffect";
import ScaleImageScrollEffect from "@/shared/effects/ScaleImageScrollEffect";
import AnimZoominEffect from "@/shared/effects/AnimZoominEffect";

/**
 * GSAP effects used by the portfolio, remounted per route so new page DOM is initialised.
 * Trimmed from the template's 27 effects to the ones that have targets on this site:
 *   .reveal-text, .scroll-move-up, .at_fade_anim, .scale-img-from-to, .anim-zoomin
 * (ScrollSmoother and theme sync are mounted in MainLayout.)
 */
export default function GlobalEffects() {
  const key = useLocation().pathname;

  return (
    <>
      <RevealTextEffect key={`reveal-${key}`} />
      <ScrollMoveUpEffect key={`move-${key}`} />
      <FadeAnimEffect key={`fade-${key}`} />
      <ScaleImageScrollEffect key={`scale-img-${key}`} />
      <AnimZoominEffect key={`anim-zoomin-${key}`} />
    </>
  );
}
