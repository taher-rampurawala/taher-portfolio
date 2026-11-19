import RevealText from "@/shared/effects/RevealText";
import { EDUCATION, EXPERIENCE, PROCESS } from "@/data/taher";
import { CircleButton, Kicker, PLUS_ICON } from "./icons";
import { bookCallHref, onBookCall } from "./scroll";

// Taher · Section 6 - How I work + experience (copied from index-5/Section6 "Career Path & Expertise")
// REMOVED: 5 invented jobs (Neural Dynamics, DataScale Labs, Visionary Tech, Insight Corp,
//          Quantum Analytics), stock image img-111 with "UI/UX & product design" / "Klarus AI Nova",
//          per-row arrow links to "#", "/contact-1" link.
// KEPT (animations): reveal-text heading, at_fade_anim button group, at-hover-item image card with
//          scale-img-from-to, scroll-move-up journey rows.
// CHANGED: journey list → the 4 process steps from index.html; image card → real project cover +
//          "build and harden" copy; experience timeline + education added below it.

export default function Section6() {
    return (
        <div className="sec-6-home-5 block-journey pt-120 pb-120 bg-neutral-900 changeless" id="process">
            <div className="container">
                <div className="row g-4 align-items-end pb-60">
                    <div className="col-xxl-7 col-lg-9">
                        <Kicker text="How I work" light />
                        <h3 className="text-white reveal-text">
                            <RevealText>How a project runs.</RevealText>
                        </h3>
                        <p className="text-white fz-font-lg m-0">
                            A written scope before I build, hardening while I build, and a handover so your team owns it.
                        </p>
                    </div>
                    <div className="col-lg-3 ms-lg-auto d-flex justify-content-lg-end">
                        <CircleButton href={bookCallHref} onClick={onBookCall} label="Book A Call Now" dark />
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-xxl-4 col-lg-5">
                        {/* Same card + animations as Home5 (at-hover-item overlay, scale-img-from-to on scroll) */}
                        <div className="alt-portfolio-item mb-30 at-hover-item">
                            <a href="#work" className="alt-portfolio-thumb mb-15 p-relative fix d-block">
                                <img
                                    className="w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/taher/covers/whatsapp-booking.webp"
                                    alt="WhatsApp booking bot, one of the projects"
                                    width={550}
                                    height={540}
                                    loading="lazy"
                                />
                                <div className="alt-portfolio-btn">
                                    <div className="content">
                                        <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                                            build and harden
                                        </span>
                                        <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">
                                            Retries, error handling, cost caps and monitoring
                                        </h2>
                                        <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">
                                            If something breaks, you get an alert.
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <div className="alt-portfolio-content d-flex justify-content-between align-items-center bg-neutral-700">
                                <h5 className="alt-portfolio-title mb-0">
                                    <a href="#work" className="common-underline text-white">
                                        See the builds
                                    </a>
                                </h5>
                                <span className="alt-portfolio-plus text-white">{PLUS_ICON}</span>
                            </div>
                        </div>
                        <div className="taher-dark-card bg-neutral-700 rounded-4 p-4 p-md-5">
                            <h6 className="text-uppercase text-white opacity-75 fz-font-md fw-600 mb-30">Experience</h6>
                            <ol className="list-unstyled mb-0">
                                {EXPERIENCE.map((job) => (
                                    <li key={job.date} className="taher-timeline-item">
                                        <span className="journey-list__date">{job.date}</span>
                                        <h6 className="text-white mb-1 mt-1">{job.title}</h6>
                                        <p className="journey-list__desc mb-0">{job.org}</p>
                                    </li>
                                ))}
                            </ol>
                            <h6 className="text-uppercase text-white opacity-75 fz-font-md fw-600 mt-30 mb-2">Education</h6>
                            <p className="journey-list__desc mb-0">{EDUCATION}</p>
                        </div>
                    </div>
                    <div className="col-lg-7 ms-auto pt-lg-80">
                        <ul className="journey-list" role="list">
                            {PROCESS.map((step) => (
                                <li key={step.n} className="journey-list__item scroll-move-up">
                                    <span className="journey-list__date">Step {step.n}</span>
                                    <div className="journey-list__body">
                                        <h6 className="journey-list__title neutral-0">{step.title}</h6>
                                        <p className="journey-list__desc">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
