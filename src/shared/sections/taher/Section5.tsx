import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import { LINKS, PROFILE, getMail } from "@/data/taher";

// Taher · Section 5 - Stats + contact details (copied from index-5/Section5)
// REMOVED: invented stats (25+ models, $15M+ daily inferences, 300% latency, 500TB, 99.9% uptime),
//          Chicago street address, placeholder phone +1234567890, info@klarus.io.
// CHANGED: stats now come from index.html (13 years, 11 builds, 6 services, 30+ hrs/week, 2 AWS certs);
//          contact column shows location, availability, click-to-email and Upwork.

type StatItem = { count: number; prefix?: string; suffix?: string; label: string };

const STATS: StatItem[] = [
    { count: 13, suffix: "+", label: "Years of Engineering" },
    { count: 11, label: "Working n8n Builds" },
    { count: 6, label: "Services Offered" },
    { count: 30, suffix: "+", label: "Hours / Week Available" },
    { count: 2, label: "AWS Certifications" },
];

function emailMe(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = `mailto:${getMail()}?subject=${encodeURIComponent("Automation project enquiry")}`;
}

export default function Section5() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-5-home-5 pt-100 pb-100">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-8 col-lg-9">
                            <h3 className="reveal-text">
                                <RevealText>
                                    Years of banking and fintech engineering, now building AI automations that keep
                                    running.
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto">
                            <h6 className="fw-600">I&apos;m here</h6>
                            <span className="fz-font-md neutral-500">
                                {PROFILE.location}
                                <br className="d-block" />
                                {PROFILE.hoursPerWeek}
                                <br className="d-block" />
                                Email:{" "}
                                <a href="#" onClick={emailMe} className="neutral-900">
                                    Email me ↗
                                </a>
                                <br className="d-block" />
                                Upwork:{" "}
                                <a href={LINKS.upwork} target="_blank" rel="noopener noreferrer" className="neutral-900">
                                    Hire me ↗
                                </a>
                            </span>
                        </div>
                        <div className="col-12 pt-100">
                            <div className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center gap-md-5 gap-3">
                                {STATS.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <h1 className="fw-600 mb-0">
                                            <OdometerCounter count={stat.count} prefix={stat.prefix} suffix={stat.suffix ?? ""} />
                                        </h1>
                                        <h6 className="fw-500 fz-font-md neutral-500 mb-0">{stat.label}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
