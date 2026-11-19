import { BOOK_CALL_URL } from "@/data/taher";

type Smoother = { scrollTo: (target: Element, smooth?: boolean, position?: string) => void };

/**
 * In-page anchor scroll that works with GSAP ScrollSmoother (used by MainLayout).
 * Native `#hash` jumps don't move ScrollSmoother's transformed content, so we ask the
 * smoother to scroll, and fall back to scrollIntoView when it isn't running.
 */
// Pending layout-shift correction from the previous scroll; a new scroll cancels it so a
// quick second click isn't pulled back to the first target.
let correctionTimer: number | undefined;

export async function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    window.clearTimeout(correctionTimer);
    try {
        const mod = await import("gsap/ScrollSmoother");
        const smoother = (mod.default as unknown as { get: () => Smoother | undefined }).get();
        if (smoother) {
            smoother.scrollTo(el, true, "top 90px");
            // Lazy images above the target can load mid-scroll and shift layout; correct once settled.
            correctionTimer = window.setTimeout(() => {
                const top = el.getBoundingClientRect().top;
                const atPageTop = window.scrollY < 5 && top >= 0; // e.g. #top can't sit at 90px
                if (!atPageTop && Math.abs(top - 90) > 24) smoother.scrollTo(el, true, "top 90px");
            }, 1200);
            return;
        }
    } catch {
        /* fall through */
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** onClick handler for `<a href="#id">` links. */
export function onAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href") ?? "";
    if (!href.startsWith("#")) return;
    // Section not on this page (e.g. the 404 page): let the header's delegated handler
    // route to "/#id" instead of swallowing the click.
    if (!document.getElementById(href.slice(1))) return;
    e.preventDefault();
    scrollToSection(href.slice(1));
}

/** "Book a call": opens the booking page when configured, otherwise scrolls to the contact form. */
export const bookCallHref = BOOK_CALL_URL || "#contact";
export function onBookCall(e: React.MouseEvent<HTMLAnchorElement>) {
    if (BOOK_CALL_URL) return; // let the link open normally
    onAnchorClick(e);
}
