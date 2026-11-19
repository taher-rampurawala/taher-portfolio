import { LINKS, NAV_LINKS, PROFILE } from "@/data/taher";
import { onAnchorClick } from "@/shared/sections/taher/scroll";

// Copy of Footer5 for the Taher page (background grid + big signature line kept).
// REMOVED: phone +212-555-7398, info@klarus.io, Chicago address, template quick links
//          (Shop, Pricing, Cart, Checkout, Blog…), stock image img-116, "Klarus AI ®",
//          generic tags ("Conversion-focused", "User-centric"…).
// CHANGED: page links = the header menu (NAV_LINKS), social links, "I'm Taher" signature,
//          copyright line from index.html.

const PAGE_LINKS = NAV_LINKS; // same items and order as the header menu

const SOCIAL_LINKS = [
    { label: "LinkedIn", href: LINKS.linkedin },
    { label: "GitHub", href: LINKS.github },
    { label: "Upwork", href: LINKS.upwork },
];

export default function TaherFooter() {
    const year = new Date().getFullYear();
    return (
        <footer className="container-2200">
            <div className="at-footer-area mp-footer-style pt-120 pb-20 bg-neutral-0 rounded-5 mx-lg-3 mx-2 p-relative fix">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        />
                    ))}
                </div>

                <div className="container p-relative z-index-1">
                    <div className="row g-4">
                        <div className="col-xxl-5 col-md-6">
                            <h4 className="mb-2 fw-medium">{PROFILE.role}</h4>
                            <p className="neutral-500 fz-font-lg mb-0">
                                n8n automations, AI agents, voice agents and RAG chatbots that save your team hours and
                                win you revenue.
                            </p>
                        </div>
                        <div className="col-xxl-5 col-md-6 ms-auto">
                            <div className="at-footer-widget alt-footer-link-item-wrap row">
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {PAGE_LINKS.map((item, i) => (
                                            <li key={item.label} className={i === PAGE_LINKS.length - 1 ? "" : "mb-15"}>
                                                <a href={item.href} onClick={onAnchorClick} className="neutral-dark-900 invert-1">
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="alt-footer-link-item col-6">
                                    <ul>
                                        {SOCIAL_LINKS.map((item, i) => (
                                            <li key={item.label} className={i === SOCIAL_LINKS.length - 1 ? "" : "mb-15"}>
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="neutral-dark-900 invert-1">
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="at-footer-copyright-area pt-60">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="taher-signature d-flex align-items-end justify-content-center lh-1 mb-0 text-nowrap">
                                    I&apos;m {PROFILE.firstName}
                                </h1>
                            </div>
                            <div className="col-12">
                                <div className="bg-neutral-50 rounded-3 d-flex flex-wrap align-items-center justify-content-between pt-10 pb-10 gap-2 pl-30 pr-30 mt-20">
                                    <p className="neutral-900 mb-0">
                                        © {year} {PROFILE.name} · {PROFILE.role}
                                    </p>
                                    <a href="#top" onClick={onAnchorClick} className="neutral-900">
                                        Back to top ↑
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-50 pt-20" />
        </footer>
    );
}
