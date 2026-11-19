import { CORE_SKILLS, PROFILE } from "@/data/taher";
import { ARROW_CIRCLE_SVG, DIAMOND_ICON } from "./icons";
import { bookCallHref, onAnchorClick, onBookCall } from "./scroll";

// Taher · Section 1 - Hero
// Copied from index-5/Section1 (layout, background grid, fade animations kept).
// REMOVED: decorative stock image img-102, "Klarus AI Nova" copy, link to /portfolio-5.
// CHANGED: portrait (img-101 → taher.webp), availability tag, headline and lede from index.html,
//          CTAs → "Book a call" + "Things I've built", core-skill chips added.

export default function Section1() {
    const gridColumns = 7;
    const isCenterColumn = (i: number) => i === 3;

    return (
        <div className="bg-neutral-50" id="top">
            <div className="container-2200 pt-140 p-relative z-0">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                    {Array.from({ length: gridColumns }, (_, i) => (
                        <div
                            key={i}
                            className={
                                isCenterColumn(i)
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {isCenterColumn(i) && (
                                <div
                                    className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
                                    aria-hidden
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="sec-1-home-5 bg-cover mt-30 pb-lg-0 pb-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 mx-lg-auto col-md-6 pb-lg-100 pb-40 z-index-2">
                                <span className="category-tag mb-20">
                                    <span className="dot" />
                                    {PROFILE.availability}
                                </span>
                                <p className="fz-18 neutral-900 fw-600 mb-30">
                                    AI automations that save you hours <br /> and win you revenue.
                                </p>
                                <ul className="taher-chips list-unstyled d-flex flex-wrap gap-2 mb-0">
                                    {CORE_SKILLS.map((s) => (
                                        <li key={s} className="taher-chip">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-4 mx-lg-auto z-index-1 pb-lg-0 pb-40">
                                <div
                                    className="p-relative at_fade_anim"
                                    data-delay=".5"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <img
                                        src={PROFILE.photo}
                                        alt={`${PROFILE.name}, ${PROFILE.role}`}
                                        width={720}
                                        height={810}
                                        className="taher-hero-photo"
                                        fetchPriority="high"
                                    />
                                    <div className="p-absolute bottom-0 start-50 translate-middle-x z-n1 d-none d-xxl-block">
                                        <h1 className="fz-290 fw-600 text-nowrap lh-1">{PROFILE.firstName}</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mx-lg-auto z-index-2 pb-lg-0 pb-60">
                                <div className="icon mb-30">{DIAMOND_ICON}</div>
                                <h4>
                                    I&apos;m {PROFILE.firstName}, <br />
                                    {PROFILE.role}
                                </h4>
                                <p className="fz-lg neutral-900 fw-600">
                                    I build n8n workflows, AI agents, voice receptionists, WhatsApp automations and RAG
                                    chatbots that take repetitive work off your team. 13 years building banking and
                                    fintech systems taught me that &ldquo;it mostly works&rdquo; isn&apos;t good enough.
                                </p>
                                <div
                                    className="at-btn-group at-btn-group-transparent at_fade_anim mb-20"
                                    data-delay=".5"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <a className="at-btn-circle" href={bookCallHref} onClick={onBookCall} aria-hidden tabIndex={-1}>
                                        {ARROW_CIRCLE_SVG}
                                    </a>
                                    <a className="at-btn z-index-1" href={bookCallHref} onClick={onBookCall}>
                                        Book a call
                                    </a>
                                    <a className="at-btn-circle" href={bookCallHref} onClick={onBookCall} aria-hidden tabIndex={-1}>
                                        {ARROW_CIRCLE_SVG}
                                    </a>
                                </div>
                                <a href="#work" onClick={onAnchorClick} className="common-underline neutral-900 fw-600">
                                    Things I have built ↓
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
