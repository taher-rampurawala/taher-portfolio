// Icons copied from the index-5 sections, kept in one place for the Taher page.

export const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

export const ARROW_BTN_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
            d="M7.15771 2.62632L1.01015 9.24677L0 8.15892L6.14756 1.53846H0.729157V0H8.58628V8.46154H7.15771V2.62632Z"
            fill="#1D1D1D"
        />
    </svg>
);

export const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
            d="M19.3621 35.41C20.3107 28.6345 20.785 25.2468 23.0159 23.0158C25.2469 20.7848 28.6347 20.3105 35.4102 19.362L37.9991 18.9995L35.4102 18.6371C28.6347 17.6885 25.2469 17.2142 23.0159 14.9832C20.785 12.7522 20.3107 9.36449 19.3621 2.58901L18.9996 -4.5973e-05L18.6372 2.58898C17.6886 9.36447 17.2143 12.7522 14.9833 14.9832C12.7524 17.2142 9.36462 17.6885 2.58913 18.637L0 18.9995L2.58912 19.362C9.36461 20.3106 12.7524 20.7848 14.9833 23.0158C17.2143 25.2468 17.6886 28.6345 18.6372 35.41L18.9996 37.9991L19.3621 35.41Z"
            fill="currentColor"
        />
    </svg>
);

export const QUOTE_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
            d="M6.75 13.5C10.4779 13.5 13.5 10.4779 13.5 6.75C13.5 10.477 16.5207 13.4986 20.2474 13.5C16.5207 13.5014 13.5 16.523 13.5 20.25C13.5 16.5221 10.4779 13.5 6.75 13.5C3.02208 13.5 4.58005e-07 16.5221 2.95052e-07 20.25L0 27L6.75 27C10.4779 27 13.5 23.9779 13.5 20.25C13.5 23.9779 16.5221 27 20.25 27L27 27L27 20.25C27 16.523 23.9794 13.5014 20.2526 13.5C23.9794 13.4986 27 10.477 27 6.75L27 4.54184e-06L20.25 4.83689e-06C16.5221 3.09249e-06 13.5 3.02208 13.5 6.75C13.5 3.02208 10.4779 3.35669e-06 6.75 1.6123e-06L2.36042e-06 0L1.47526e-06 6.75C9.86401e-07 10.4779 3.02208 13.5 6.75 13.5Z"
            fill="currentColor"
        />
    </svg>
);

export const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

/** Small uppercase label with the double-arrow hover used across index-5 ("WHY KLARUS AI", "MY JOURNEY"…). */
export function Kicker({ text, light = false }: { text: string; light?: boolean }) {
    return (
        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
            <span className={`text-uppercase${light ? " text-white" : ""}`}>
                <span className="text-1">{text}</span>
                <span className="text-2">{text}</span>
            </span>
            <i>
                {ARROW_SVG}
                {ARROW_SVG}
            </i>
        </span>
    );
}

/** Pill button with arrow circles on both sides (index-5 "View All Projects" style). */
export function CircleButton({
    href,
    label,
    className = "",
    dark = false,
    external = false,
    onClick,
}: {
    href: string;
    label: string;
    className?: string;
    dark?: boolean;
    external?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
    const extra = dark ? " bg-neutral-700" : "";
    const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
        <div
            className={`at-btn-group at_fade_anim ${className}`.trim()}
            data-delay=".4"
            data-fade-from="bottom"
            data-ease="bounce"
        >
            <a className={`at-btn-circle${extra}`} href={href} onClick={onClick} {...ext} aria-hidden tabIndex={-1}>
                {ARROW_CIRCLE_SVG}
            </a>
            <a className={`at-btn z-index-1${extra}`} href={href} onClick={onClick} {...ext}>
                {label}
            </a>
            <a className={`at-btn-circle${extra}`} href={href} onClick={onClick} {...ext} aria-hidden tabIndex={-1}>
                {ARROW_CIRCLE_SVG}
            </a>
        </div>
    );
}
