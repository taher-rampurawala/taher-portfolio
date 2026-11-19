// Name logo: dark rounded mark with the four-point sparkle used in the hero (DIAMOND_ICON),
// plus a tight DM Sans wordmark. Colours come from theme tokens, so it inverts in dark mode.
// The same mark is the browser tab icon: public/favicon.svg.

const SPARKLE = (
    <svg viewBox="0 0 38 38" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            d="M19.3621 35.41C20.3107 28.6345 20.785 25.2468 23.0159 23.0158C25.2469 20.7848 28.6347 20.3105 35.4102 19.362L37.9991 18.9995L35.4102 18.6371C28.6347 17.6885 25.2469 17.2142 23.0159 14.9832C20.785 12.7522 20.3107 9.36449 19.3621 2.58901L18.9996 -4.5973e-05L18.6372 2.58898C17.6886 9.36447 17.2143 12.7522 14.9833 14.9832C12.7524 17.2142 9.36462 17.6885 2.58913 18.637L0 18.9995L2.58912 19.362C9.36461 20.3106 12.7524 20.7848 14.9833 23.0158C17.2143 25.2468 17.6886 28.6345 18.6372 35.41L18.9996 37.9991L19.3621 35.41Z"
            fill="currentColor"
        />
    </svg>
);

type Props = { href?: string; full?: boolean; className?: string };

/** `full` shows "Taher Rampurawala" (sidebar); default shows "Taher" (header). */
export default function TaherLogo({ href = "#top", full = false, className = "" }: Props) {
    return (
        <a href={href} className={`taher-logo ${className}`.trim()} aria-label="Taher Rampurawala, home">
            <span className="taher-logo__mark">{SPARKLE}</span>
            <span className="taher-logo__word">
                Taher{full && <span className="taher-logo__last"> Rampurawala</span>}
            </span>
        </a>
    );
}
