import { useMemo, useState } from "react";
import RevealText from "@/shared/effects/RevealText";
import { CATEGORIES, LINKS, PROJECTS, type CategoryKey } from "@/data/taher";
import { CircleButton, Kicker } from "./icons";
import ProjectCard from "./ProjectCard";

// Taher · Section 4 - Selected work (copied from index-5/Section4 "Deployed systems")
// REMOVED: 4 placeholder cards (stock images img-107..110, duplicated "Smart Automation",
//          invented +30% / -20% metrics), generic footer tags.
// CHANGED: 11 real projects from index.html, category filters (same as the live site),
//          "Explore Github Repos" now links to the real repo.

type Filter = "all" | CategoryKey;

export default function Section4() {
    const [filter, setFilter] = useState<Filter>("all");
    const shown = useMemo(
        () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)),
        [filter],
    );
    const filters: { key: Filter; label: string; count: number }[] = [
        { key: "all", label: "All", count: PROJECTS.length },
        ...(Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
            key,
            label: CATEGORIES[key],
            count: PROJECTS.filter((p) => p.cat === key).length,
        })),
    ];

    return (
        <div className="bg-neutral-50" id="work">
            <div className="container-2200">
                <section className="sec-4-home-5 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                    <div className="container">
                        <div className="row g-4 align-items-end">
                            <div className="col-lg-7">
                                <Kicker text="Selected work" />
                                <h2 className="reveal-text mb-20">
                                    <RevealText>Things I&apos;ve built.</RevealText>
                                </h2>
                                <p className="fz-font-lg neutral-500 mb-0">
                                    Each of these is a working n8n build. Most of them are on GitHub if you want to
                                    import one.
                                </p>
                            </div>
                            <div className="col-lg-4 ms-auto d-flex justify-content-lg-end">
                                <CircleButton href={LINKS.repo} label="Explore GitHub repo" external />
                            </div>
                        </div>

                        {/* same fade as Home5's footer tag row (data-fade-from bottom, duration 2) */}
                        <div
                            className="taher-filters d-flex flex-wrap gap-2 pt-50 at_fade_anim"
                            data-fade-from="bottom"
                            data-duration="2"
                            role="tablist"
                            aria-label="Filter projects by category"
                        >
                            {filters.map((f) => (
                                <button
                                    key={f.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={filter === f.key}
                                    className={`taher-filter${filter === f.key ? " is-active" : ""}`}
                                    onClick={() => setFilter(f.key)}
                                >
                                    {f.label} <span>{f.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="container pt-40">
                        <div className="row g-4" aria-live="polite">
                            {shown.map((p) => (
                                <div key={p.title} className="col-lg-6">
                                    <ProjectCard project={p} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
