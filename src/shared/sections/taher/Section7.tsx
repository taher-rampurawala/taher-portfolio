import RevealText from "@/shared/effects/RevealText";
import { PRINCIPLES, SERVICES } from "@/data/taher";
import { Kicker } from "./icons";

// Taher · Section 7 - Services + principles (copied from index-5/Section7 "Testimonials")
// REMOVED: 3 fake testimonials (Marcus Thorne, Sarah Jenkins, Elena Rossi), stock avatars,
//          3-star ratings, New York address, phone +212-555-7398, info@klarus.io,
//          stock image img-112 in the team card.
// KEPT (animations): reveal-text heading, hover-unborder cards, team-card with anim-zoomin image.
// CHANGED: cards keep the same two-block shape (title bar + body) and now hold the 6 services;
//          the 3 working principles from index.html sit next to the team card (real project cover).

export default function Section7() {
    return (
        <section className="home-5-section-7 p-relative pt-120 pb-100 bg-neutral-50" id="services">
            <div className="container">
                <div className="row align-items-end g-4">
                    <div className="col-xxl-6">
                        <Kicker text="Services" />
                        <h2 className="reveal-text mb-0">
                            <RevealText>What I can build for you.</RevealText>
                        </h2>
                    </div>
                    <div className="col-xxl-4 col-md-8 ms-xxl-auto">
                        <h6 className="fw-600 mb-0">
                            Send me your process and I&apos;ll walk you through how I&apos;d automate it, free of charge.
                        </h6>
                    </div>
                </div>
            </div>

            <div className="container pt-80">
                <div className="row g-2">
                    {SERVICES.map((s, i) => (
                        <div key={s.title} className="col-xxl-4 col-md-6 col-12">
                            <div className="hover-unborder h-100 d-flex flex-column">
                                <div className="bg-neutral-0 rounded-4 px-5 py-3">
                                    <h6 className="d-flex justify-content-between align-items-center mb-0">
                                        <span>{s.title}</span>
                                        <span className="neutral-500">{String(i + 1).padStart(2, "0")}</span>
                                    </h6>
                                </div>
                                <div className="bg-neutral-0 rounded-4 p-5 mt-2 flex-grow-1">
                                    <p className="neutral-500 fz-font-lg fw-500 mb-0">{s.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-2 pt-60">
                    {PRINCIPLES.map((p) => (
                        <div key={p.title} className="col-xxl-3 col-md-6">
                            <div className="taher-principle rounded-4 p-4 p-md-5 h-100">
                                <h5 className="fw-600 mb-2">{p.title}</h5>
                                <p className="neutral-500 fz-font-md mb-0">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                    {/* Same team-card + anim-zoomin as Home5, with a real project cover */}
                    <div className="col-xxl-3 col-md-6">
                        <div className="changeless h-100">
                            <div className="team-card h-100">
                                <div className="team-card-image">
                                    <div className="anim-zoomin">
                                        <img
                                            src="/taher/covers/lead-gen-agent.webp"
                                            alt="AI lead generation agent, one of the projects"
                                            width={450}
                                            height={500}
                                            className="img-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="team-card-content">
                                    <h6 className="team-card-position fz-font-3xl fw-400 m-0 neutral-0">
                                        11 working builds, most of them on GitHub.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
