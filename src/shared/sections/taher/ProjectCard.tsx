import { CATEGORIES, projectHref, type Project } from "@/data/taher";
import OdometerCounter from "@/shared/elements/OdometerCounter";
import { PLUS_ICON } from "./icons";

// Copy of shared/cards/PortfolioCard4 adapted for real projects.
// KEPT (animations): anim-zoomin image, OdometerCounter on the metric (now counts real node numbers).
// REMOVED: "+30% Operational Speed" / "-20% Planning Risk" metrics (made-up numbers),
//          tag links pointing to "#", internal /portfolio-details-1 link.
// CHANGED: overlay shows real node count + platform; tags = tech stack (plain labels);
//          link opens the workflow on GitHub; summary added under the title.

export default function ProjectCard({ project }: { project: Project }) {
    const href = projectHref(project);
    const ext = { target: "_blank", rel: "noopener noreferrer" };
    // "13 nodes · 2 workflows" → odometer counts 13, then " nodes · 2 workflows" (Home5 animates a % here)
    const m = /^(\d+)(.*)$/.exec(project.nodes);
    const metric = m ? { count: Number(m[1]), rest: m[2] } : null;
    return (
        <div className="card_case__studies-list card_case__studies-list--row h-100">
            <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100 h-100 d-flex flex-column">
                <div className="card_case__studies-visual anim-zoomin">
                    <a href={href} {...ext} aria-label={`${project.title} on GitHub`}>
                        <img src={project.cover} alt="" width={600} height={400} loading="lazy" />
                    </a>
                    <div className="card_case__studies-metric-overlay">
                        <h4 className="card_case__studies-metric-value fz-font-xl">
                            {metric ? <OdometerCounter count={metric.count} suffix={metric.rest} /> : project.nodes}
                        </h4>
                        <span className="card_case__studies-metric-label">{CATEGORIES[project.cat]}</span>
                    </div>
                    <div className="card_case__studies-tags-overlay">
                        {project.stack.slice(0, 4).map((tag) => (
                            <span key={tag} className="card_case__studies-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="card_case__studies-footer mt-10 bg-neutral-0 flex-grow-1 d-flex flex-column align-items-start gap-2">
                    <h5 className="card_case__studies-footer-title neutral-900 mb-0">
                        <a href={href} {...ext}>
                            {project.title}
                        </a>
                    </h5>
                    <span className="neutral-500 fz-font-label text-uppercase">{project.platform}</span>
                    <p className="neutral-500 fz-font-md mb-2">{project.summary}</p>
                    <a href={href} {...ext} className="card_case__studies-link neutral-900 mt-auto">
                        <span className="neutral-900">{project.folder ? "VIEW WORKFLOW ON GITHUB" : "VIEW REPO ON GITHUB"}</span>
                        {PLUS_ICON}
                    </a>
                </div>
            </div>
        </div>
    );
}
