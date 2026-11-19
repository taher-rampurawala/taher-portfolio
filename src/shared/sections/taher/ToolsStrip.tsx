import Marquee from "react-fast-marquee";
import RevealText from "@/shared/effects/RevealText";
import { TOOLS } from "@/data/taher";

// Taher · Section 3 - Tools (REPLACES index-5/Section3 "Trusted by 100+ businesses")
// REMOVED: "Trusted by 100+ businesses" claim, stock brand logos, 3-star rating,
//          "Customer reviews" link to "#". None of it had real data behind it.
// KEPT (animations): same two-column layout, small uppercase label + `reveal-text` heading,
//          and the logo area's `at_fade_anim` bounce-in from the bottom (now on the tools marquee).
// ADDED: the tools marquee from index.html (react-fast-marquee, already a template dependency).

const HALF = Math.ceil(TOOLS.length / 2);
const ROWS = [
    { tools: TOOLS.slice(0, HALF), delay: ".4", direction: "left" as const },
    { tools: TOOLS.slice(HALF), delay: ".6", direction: "right" as const },
];

export default function ToolsStrip() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-3-home-5 pt-130 pb-110" aria-label="Tools I work with">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-xxl-4 col-lg-8 col-12">
                            <h6 className="fz-font-md text-uppercase neutral-500 fw-600 mb-30">Tools I work with</h6>
                            <h5 className="fw-600 reveal-text pe-xxl-5">
                                <RevealText>
                                    The same stack across every build, from n8n and LLMs to voice, messaging and data.
                                </RevealText>
                            </h5>
                        </div>
                        <div className="col-xxl-8 col-12">
                            {ROWS.map((row) => (
                                <div
                                    key={row.delay}
                                    className="at_fade_anim taher-tools-row"
                                    data-delay={row.delay}
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Marquee speed={35} direction={row.direction} autoFill pauseOnHover gradient={false}>
                                        {row.tools.map((t) => (
                                            <span key={t} className="taher-tool fz-font-lg fw-600 neutral-900">
                                                {t}
                                            </span>
                                        ))}
                                    </Marquee>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
