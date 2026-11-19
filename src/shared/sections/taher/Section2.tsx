import RevealText from "@/shared/effects/RevealText";
import { CERTIFICATIONS, LANGUAGES, PRINCIPLES, SERVICES } from "@/data/taher";
import { ARROW_BTN_SVG, Kicker, QUOTE_ICON_SVG } from "./icons";
import { onAnchorClick } from "./scroll";

// Taher · Section 2 - About (copied from index-5/Section22 "Why Klarus AI")
// REMOVED: fake testimonial (Jeffena Nippard, 3-star rating), 5 stock avatars, "[Since 2012]",
//          "200+ production-grade models deployed", "+5 Years", stock images img-104/105/106,
//          dead "#" link, generic tags ("Conversion-focused", "User-centric"…).
// CHANGED: heading → About copy; hero card uses a real workflow canvas; list → 6 services;
//          testimonial card → About text + languages; stat → 11 n8n builds; thumbnail → certifications;
//          quote → "No AI where it isn't needed" principle; tags → what every build ships with.

const STACK_GROUPS = [
    "n8n, Retell AI, Twilio, Telnyx",
    "OpenAI, Claude, Gemini",
    "Pinecone, Postgres, Supabase",
    "WhatsApp Cloud API, Telegram",
    "AWS, Java / Spring Boot, Docker",
];

const SHIPS_WITH = ["[ Retries ]", "[ Error handling ]", "[ Cost caps ]", "[ User-centric ]", "[Future-proof]"];

const NO_AI_PRINCIPLE = PRINCIPLES[2];

export default function Section2() {
    return (
        <div className="bg-neutral-50" id="about">
            <div className="container-2200">
                <section className="sec-2-home-5 portfolio-area pt-120 pb-120 rounded-5 mx-lg-3 mx-2 fix bg-neutral-100">
                    <div className="container">
                        <div className="row pb-60 g-2">
                            <div className="col-xxl-1 col-lg-2">
                                <Kicker text="About" />
                            </div>
                            <div className="col-xxl-9 col-lg-10">
                                <h3 className="reveal-text lh-1">
                                    <RevealText>
                                        13 years of engineering behind every workflow. I build automations your team
                                        can keep running after I hand them over.
                                    </RevealText>
                                </h3>
                            </div>
                        </div>

                        <div className="row g-3 sec-2-home-5__grid">
                            {/* Column 1: experience card + services list */}
                            <div className="col-xxl-4 col-lg-6">
                                <div className="sec-2-home-5__col p-2 rounded-4 bg-neutral-0">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--hero rounded-4 overflow-hidden rounded-4 p-relative">
                                        <div className="sec-2-home-5__hero-bg" />
                                        <img
                                            src="/taher/workflows/retell-voice.webp"
                                            alt="n8n workflow canvas from the voice receptionist build"
                                            width={600}
                                            height={400}
                                            className="sec-2-home-5__hero-img taher-cover-img"
                                            loading="lazy"
                                        />
                                        <div className="sec-2-home-5__hero-overlay taher-hero-overlay p-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-between p-4">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h6 className="sec-2-home-5__hero-title text-white fw-bold mb-0">
                                                    Banking-grade integrations, <br /> now with n8n and AI.
                                                </h6>
                                                <span className="text-white opacity-75 text-nowrap">Since 2014</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
                                                <span className="text-white fz-font-body">
                                                    13 Years <br /> of Experience
                                                </span>
                                                <a
                                                    className="at-btn bg-neutral-0 changeless text-dark py-2 px-3 fz-font-body"
                                                    href="#contact"
                                                    onClick={onAnchorClick}
                                                >
                                                    <span>
                                                        <span className="text-1">Let&apos;s build</span>
                                                        <span className="text-2">Let&apos;s build</span>
                                                    </span>
                                                    <i>
                                                        {ARROW_BTN_SVG}
                                                        {ARROW_BTN_SVG}
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sec-2-home-5__card sec-2-home-5__card--list p-4 d-flex align-items-center">
                                        <ul className="sec-2-home-5__list list-unstyled mb-0">
                                            {SERVICES.map((s) => (
                                                <li key={s.title} className="sec-2-home-5__list-item">
                                                    {s.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: about text (was a fake testimonial) */}
                            <div className="col-xxl-4 col-lg-6">
                                <div className="sec-2-home-5__col">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--testimonial p-relative rounded-4 bg-neutral-0 p-4 p-md-5 fix h-100">
                                        <h6 className="fw-600 neutral-900 fz-font-md mb-3">Taher Rampurawala</h6>
                                        <p className="neutral-900 fz-font-lg fw-500 mb-3">
                                            Since 2014 I&apos;ve built Java/Spring Boot microservices, REST and SOAP APIs,
                                            middleware and system integrations for banking and financial-services clients at
                                            a global IT services company, deployed on AWS and Azure with CI/CD.
                                        </p>
                                        <p className="neutral-500 fz-font-md mb-4">
                                            I now do the same kind of integration work with n8n and AI models, and I build it
                                            so your team can keep it running after I hand it over.
                                        </p>
                                        {/* at_fade_anim + delay as on Home5's img-104 in this card */}
                                        <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0 at_fade_anim" data-delay=".5">
                                            {LANGUAGES.map((l) => (
                                                <li key={l.name} className="taher-chip">
                                                    {l.name} <span className="neutral-500">· {l.level}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: stat + stack, certifications, principle quote */}
                            <div className="col-xxl-4 col-12">
                                <div className="sec-2-home-5__col sec-2-home-5__col--three">
                                    <div className="sec-2-home-5__card sec-2-home-5__card--small rounded-4 bg-neutral-0 p-4 p-md-5 p-relative fix mb-20">
                                        <div className="d-flex justify-content-between flex-md-row flex-column gap-3">
                                            <div>
                                                <div className="sec-2-home-5__stat mb-2">11</div>
                                                <p className="neutral-900 fw-semibold mb-0">
                                                    Working n8n <br /> builds
                                                </p>
                                            </div>
                                            {/* at_fade_anim as on Home5's img-105 in this card */}
                                            <ul className="sec-2-home-5__list sec-2-home-5__list--sm list-unstyled mb-0 at_fade_anim">
                                                {STACK_GROUPS.map((item) => (
                                                    <li key={item} className="sec-2-home-5__list-item">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            {/* at_fade_anim + delay as on Home5's img-106 thumbnail in this slot */}
                                            <div className="sec-2-home-5__card sec-2-home-5__card--small rounded-4 bg-neutral-0 p-4 h-100 at_fade_anim" data-delay=".5">
                                                <h6 className="fz-font-md text-uppercase neutral-500 fw-600 mb-3">Certifications</h6>
                                                {CERTIFICATIONS.map((c) => (
                                                    <div key={c.title} className="mb-3">
                                                        <p className="neutral-900 fw-600 mb-0">{c.title}</p>
                                                        <span className="neutral-500 fz-font-label">{c.date}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="sec-2-home-5__card sec-2-home-5__card--small sec-2-home-5__card--quote bg-neutral-0 overflow-hidden h-100">
                                                <div className="sec-2-home-5__quote-icon mb-20">{QUOTE_ICON_SVG}</div>
                                                <blockquote className="neutral-900 fz-font-md fw-500 mb-0">
                                                    &quot;{NO_AI_PRINCIPLE.desc}&quot;
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-70">
                            <div className="col-12">
                                <div
                                    className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center gap-md-5 gap-2 at_fade_anim"
                                    data-fade-from="bottom"
                                    data-duration="2"
                                >
                                    <p className="neutral-500 mb-0">Every build ships with:</p>
                                    {SHIPS_WITH.map((tag) => (
                                        <p key={tag} className="neutral-900 mb-0">
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
