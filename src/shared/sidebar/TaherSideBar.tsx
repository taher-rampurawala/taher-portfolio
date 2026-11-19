import { OffcanvasMenuMount } from "@/shared/mobile-menu/MobileMenuCloneContext";
import MenuClone from "@/shared/mobile-menu/MenuClone";
import { LINKS, PROFILE, getMail } from "@/data/taher";
import TaherLogo from "@/shared/elements/TaherLogo";

// Copy of SideBar for the Taher page (same at-offcanvas / at-offcanvas-2 markup, so the same
// slide-in animations and the MenuClone copy of the header menu still work).
// REMOVED: "The AI Folks" logo, agency blurb, 5 stock avatars, phone +1 (212) 555-7398,
//          info@klarus.io, Toronto address, Klarus Instagram + someone else's Upwork link.
// CHANGED: Taher sparkle logo, intro from index.html, portrait, click-to-email, location, availability,
//          LinkedIn / GitHub / Upwork.

interface Props {
    open: boolean;
    hamburgerOpen: boolean;
    onClose: () => void;
}

function CloseIconSvg() {
    return (
        <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const SOCIALS = [
    { label: "LinkedIn", href: LINKS.linkedin },
    { label: "GitHub", href: LINKS.github },
    { label: "Upwork", href: LINKS.upwork },
];

function SocialGrid() {
    return (
        <ul className="at-offcanvas-social__grid">
            {SOCIALS.map((s) => (
                <li key={s.label}>
                    <a href={s.href} className="at-offcanvas-social__link" target="_blank" rel="noopener noreferrer">
                        <span>{s.label} ↗</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

function Logo() {
    return <TaherLogo full />;
}

function emailMe(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = `mailto:${getMail()}?subject=${encodeURIComponent("Automation project enquiry")}`;
}

export default function TaherSideBar({ open, hamburgerOpen, onClose }: Props) {
    const isAnyOpen = open || hamburgerOpen;

    return (
        <OffcanvasMenuMount>
            <MenuClone />
            <div
                className={`body-overlay sidebar-overlay ${isAnyOpen ? "apply" : ""}`}
                aria-hidden={!isAnyOpen}
                onClick={onClose}
                role="button"
                tabIndex={0}
                aria-label="Close sidebar"
            />

            {/* at-offcanvas-area (sidebar button; also the mobile menu below xl) */}
            <div className="at-offcanvas-area" aria-hidden={!open}>
                <div className={`at-offcanvas ${open ? "opened" : ""}`}>
                    <div className="at-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="at-offcanvas-logo">
                            <Logo />
                        </div>
                        <div className="at-offcanvas-close-btn">
                            <button type="button" className="close-btn close-sidebar" aria-label="Close" onClick={onClose}>
                                <CloseIconSvg />
                            </button>
                        </div>
                    </div>

                    <div className="at-offcanvas-content d-none d-xl-block">
                        <h3 className="at-offcanvas-title">Hey there!</h3>
                        <p className="fz-font-lg">
                            I&apos;m Taher, an AI Automation Engineer. I build n8n workflows, AI agents, voice
                            receptionists, WhatsApp automations and RAG chatbots that take repetitive work off your team.
                        </p>
                    </div>

                    <div className="at-offcanvas-menu d-xl-none pb-50">
                        <nav />
                    </div>

                    <div className="at-offcanvas-gallery d-none d-xl-block">
                        <img
                            src={PROFILE.photo}
                            alt={PROFILE.name}
                            width={160}
                            height={180}
                            className="rounded-4"
                            style={{ width: 120, height: "auto" }}
                            loading="lazy"
                        />
                    </div>

                    <div className="at-offcanvas-contact">
                        <h5 className="at-offcanvas-title sm">Get in touch</h5>
                        <ul>
                            <li>
                                <a className="fz-font-lg" href="#" onClick={emailMe}>
                                    Email me ↗
                                </a>
                            </li>
                            <li>
                                <a className="fz-font-lg" href="#contact">
                                    Send me your process
                                </a>
                            </li>
                            <li>
                                <span className="fz-font-lg">
                                    {PROFILE.location}
                                    <br />
                                    {PROFILE.hoursPerWeek}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="at-offcanvas-social">
                        <h3 className="at-offcanvas-title sm">Follow Me</h3>
                        <SocialGrid />
                    </div>
                </div>
            </div>

            {/* at-offcanvas-2-area (sticky MENU button) */}
            <div className={`at-offcanvas-2-area ${hamburgerOpen ? "menu-open" : ""}`} aria-hidden={!hamburgerOpen}>
                <div className="offcanvas-bg" />
                <div className="at-offcanvas-2-wrapper offcanvas-menu sidebar-left">
                    <div className="at-offcanvas-2-left">
                        <div className="at-header-logo d-flex justify-content-between align-items-center mb-50">
                            <Logo />
                            <span className="hamburger-close-btn close-sidebar" role="button" tabIndex={0} aria-label="Close" onClick={onClose}>
                                <CloseIconSvg />
                            </span>
                        </div>

                        <div className="at-offcanvas-menu counter-row">
                            <nav />
                        </div>

                        <div className="at-offcanvas-social">
                            <SocialGrid />
                        </div>

                        <span
                            className="hamburger-close-btn hamburger-mobile-close-btn close-sidebar d-md-none"
                            role="button"
                            tabIndex={0}
                            aria-label="Close"
                            onClick={onClose}
                        >
                            CLOSE
                        </span>
                    </div>
                </div>
            </div>
        </OffcanvasMenuMount>
    );
}
