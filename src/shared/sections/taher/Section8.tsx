import { useState } from "react";
import RevealText from "@/shared/effects/RevealText";
import { FORM_ENDPOINT, LINKS, PROFILE, getMail } from "@/data/taher";
import { ARROW_SVG, Kicker } from "./icons";
import { bookCallHref, onBookCall } from "./scroll";

// Taher · Section 8 - Contact (REPLACES index-5/Section8 "My blog / Latest news")
// REMOVED: the whole blog block (3 placeholder posts by "Olivia" / "Lucas", stock images
//          img-113..115, links to /blog-details, /team-details, /archive-1). There is no blog.
// ADDED: the contact form and social links from index.html, styled with the template's
//        contact-1 form classes (sec-4-about-form__*). Submits to FORM_ENDPOINT when set,
//        otherwise opens the visitor's email app with the message pre-filled.

const TOPICS = ["Voice AI agent", "WhatsApp bot / CRM", "AI agent / RAG chatbot", "n8n workflow", "Not sure yet"];

const SOCIALS = [
    { label: "LinkedIn", href: LINKS.linkedin },
    { label: "GitHub", href: LINKS.github },
    { label: "Upwork", href: LINKS.upwork },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = { text: string; kind: "ok" | "err" } | null;

export default function Section8() {
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<Status>(null);
    const [sending, setSending] = useState(false);
    const [copied, setCopied] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        if (String(fd.get("website") ?? "")) return; // honeypot filled → bot

        const data = {
            name: String(fd.get("name") ?? "").trim(),
            email: String(fd.get("email") ?? "").trim(),
            company: String(fd.get("company") ?? "").trim(),
            topic: String(fd.get("topic") ?? "Not sure yet"),
            message: String(fd.get("message") ?? "").trim(),
            page: window.location.href,
            sentAt: new Date().toISOString(),
        };

        const next: Errors = {};
        if (!data.name) next.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) next.email = "Please enter a valid email address.";
        if (data.message.length < 10) next.message = "A few more words, please.";
        setErrors(next);
        if (Object.keys(next).length) return;

        if (!FORM_ENDPOINT) {
            const body =
                `${data.message}\n\n— ${data.name}\n${data.email}` +
                (data.company ? `\n${data.company}` : "") +
                `\nTopic: ${data.topic}`;
            window.location.href =
                `mailto:${getMail()}?subject=${encodeURIComponent(`${data.topic} · enquiry from ${data.name}`)}` +
                `&body=${encodeURIComponent(body)}`;
            setStatus({ text: "Your email app should open with the message ready to send.", kind: "ok" });
            return;
        }

        setSending(true);
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(String(res.status));
            form.reset();
            setStatus({ text: "Thanks! Your message is on its way. I'll reply by email.", kind: "ok" });
        } catch {
            setStatus({ text: "Couldn't send right now. Please use “Email me” instead.", kind: "err" });
        } finally {
            setSending(false);
        }
    }

    function emailMe(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        window.location.href = `mailto:${getMail()}?subject=${encodeURIComponent("Automation project enquiry")}`;
    }

    async function copyMail() {
        try {
            await navigator.clipboard.writeText(getMail());
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${getMail()}`;
        }
    }

    return (
        <div className="bg-neutral-50" id="contact">
            <section className="home-5-section-8 pt-100 pb-120">
                <div className="container">
                    <div className="row align-items-end mb-50 g-4">
                        <div className="col-lg-8">
                            <Kicker text="Let's talk" />
                            <h3 className="alt-section-title lh-1 neutral-900 fw-700 reveal-text mb-20">
                                <RevealText>Send me your process. I&apos;ll show you how I&apos;d automate it.</RevealText>
                            </h3>
                            <p className="fz-font-lg neutral-500 mb-0">
                                Tell me what your team still does by hand. I&apos;ll reply with how I&apos;d automate it,
                                or tell you if it isn&apos;t worth automating.
                            </p>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-xxl-7 col-lg-7 at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <form className="sec-4-about-form" onSubmit={onSubmit} noValidate>
                                <div className="row g-0 gap-md-0">
                                    <div className="col-md-6 pe-md-2">
                                        <div className="sec-4-about-form__field">
                                            <input type="text" className="sec-4-about-form__input" name="name" autoComplete="name" placeholder="Full name *" aria-label="Full name" aria-invalid={!!errors.name} />
                                            {errors.name && <small className="taher-field-err">{errors.name}</small>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 ps-md-2">
                                        <div className="sec-4-about-form__field">
                                            <input type="email" className="sec-4-about-form__input" name="email" autoComplete="email" placeholder="Email *" aria-label="Email" aria-invalid={!!errors.email} />
                                            {errors.email && <small className="taher-field-err">{errors.email}</small>}
                                        </div>
                                    </div>
                                </div>
                                <div className="sec-4-about-form__field">
                                    <input type="text" className="sec-4-about-form__input" name="company" autoComplete="organization" placeholder="Company or website (optional)" aria-label="Company or website" />
                                </div>

                                <fieldset className="sec-4-about-form__field border-0 p-0 m-0 mb-3">
                                    <legend className="fz-font-md neutral-500 mb-2">What do you need?</legend>
                                    <div className="d-flex flex-wrap gap-2">
                                        {TOPICS.map((t) => (
                                            <label key={t} className="taher-pill">
                                                <input type="radio" name="topic" value={t} defaultChecked={t === "Not sure yet"} />
                                                <span>{t}</span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>

                                <div className="sec-4-about-form__field">
                                    <textarea
                                        className="sec-4-about-form__input sec-4-about-form__textarea"
                                        name="message"
                                        placeholder="What does the process look like today, and what would you like to stop doing by hand? *"
                                        rows={5}
                                        aria-label="Message"
                                        aria-invalid={!!errors.message}
                                    />
                                    {errors.message && <small className="taher-field-err">{errors.message}</small>}
                                </div>

                                {/* spam trap: real visitors never see or fill this */}
                                <label className="taher-hp" aria-hidden="true">
                                    Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                                </label>

                                <div className="sec-4-about-form__actions d-flex align-items-center flex-wrap gap-3">
                                    <button type="submit" className="sec-4-about-form__btn at-btn" disabled={sending}>
                                        <span>
                                            <span className="text-1 text-capitalize">{sending ? "Sending…" : "Send Message"}</span>
                                            <span className="text-2 text-capitalize">{sending ? "Sending…" : "Send Message"}</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </button>
                                    <p className={`mb-0 fz-font-md taher-status ${status?.kind ?? ""}`} role="status" aria-live="polite">
                                        {status?.text}
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-4 col-lg-5 ms-auto at_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                            <div className="bg-neutral-0 rounded-4 p-4 p-md-5 mb-3">
                                <h6 className="fw-600 mb-3">Contact details</h6>
                                <ul className="list-unstyled mb-0 taher-info">
                                    <li>
                                        <span className="neutral-500 fz-font-label text-uppercase">Email</span>
                                        <div className="d-flex gap-3 flex-wrap">
                                            <a href="#" onClick={emailMe} className="neutral-900 fw-600">Email me ↗</a>
                                            <button type="button" className="taher-link-btn" onClick={copyMail}>
                                                {copied ? "Copied ✓" : "Copy address"}
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="neutral-500 fz-font-label text-uppercase">Discovery call</span>
                                        <a href={bookCallHref} onClick={onBookCall} className="neutral-900 fw-600">Book a 30-min call ↗</a>
                                    </li>
                                    <li>
                                        <span className="neutral-500 fz-font-label text-uppercase">Location</span>
                                        <span className="neutral-900 fw-600">{PROFILE.location}</span>
                                    </li>
                                    <li>
                                        <span className="neutral-500 fz-font-label text-uppercase">Availability</span>
                                        <span className="neutral-900 fw-600">{PROFILE.hoursPerWeek}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-neutral-0 rounded-4 p-4 p-md-5">
                                <h6 className="fw-600 mb-3">Connect with me</h6>
                                <ul className="list-unstyled mb-0 taher-social">
                                    {SOCIALS.map((s) => (
                                        <li key={s.label}>
                                            <a href={s.href} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-between align-items-center neutral-900 fw-600">
                                                {s.label}
                                                <span className="neutral-500">{ARROW_SVG}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
