"use client";

import { useState } from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/config/social";

export default function SiteHeader() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev: boolean) => !prev);
    const close = () => setOpen(false);

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="logo">
                    <Link href="/" onClick={close}>
                        Smart Steps
                    </Link>
                </div>

                {/* Burger button – visible only on mobile via CSS */}
                <button
                    type="button"
                    className={`nav-toggle ${open ? "nav-toggle--open" : ""}`}
                    aria-label={open ? "Inchide meniul" : "Deschide meniul"}
                    aria-expanded={open}
                    onClick={toggle}
                >
                    <span className="sr-only">Meniu</span>
                    <span className="nav-toggle__icon" aria-hidden="true" />
                </button>

                <nav
                    className={`main-nav ${open ? "main-nav--open" : ""}`}
                    aria-label="Navigare principala"
                >
                    <Link href="/" onClick={close}>
                        Acasa
                    </Link>
                    <Link href="/despre-mine" onClick={close}>
                        Despre mine
                    </Link>
                    <Link href="/servicii" onClick={close}>
                        Servicii
                    </Link>
                    <Link href="/articole" onClick={close}>
                        Articole
                    </Link>
                    <Link href="/evenimente" onClick={close}>
                        Evenimente
                    </Link>
                    <Link href="/referinte" onClick={close}>
                        Referinte
                    </Link>
                    <Link href="/contact" onClick={close}>
                        Contact
                    </Link>
                </nav>

                <div className="social-links">
                    <a
                        href={SOCIAL_LINKS.facebook || "https://www.facebook.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Vizitati pagina noastra pe Facebook"
                    >
                        <svg
                            className="social-icon"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a
                        href={SOCIAL_LINKS.instagram || "https://www.instagram.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        title="Urmariti-ne pe Instagram"
                    >
                        <svg
                            className="social-icon"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.267-1.459.645-1.946 1.132-.487.487-.865 1.167-1.132 1.946-.267.779-.468 1.649-.528 2.927C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.927.267.779.645 1.438 1.132 1.925.487.487 1.167.865 1.946 1.132.779.267 1.648.468 2.927.528 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.927-.528.79-.267 1.438-.645 1.925-1.132.487-.487.865-1.167 1.132-1.946.267-.779.468-1.649.528-2.927.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.528-2.927-.267-.79-.645-1.438-1.132-1.925-.487-.487-1.167-.865-1.946-1.132-.779-.267-1.648-.468-2.927-.528C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.414.561.217.96.477 1.382.896.419.42.679.821.896 1.381.17.422.36 1.057.413 2.228.061 1.264.07 1.645.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.414 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.17-1.057.36-2.228.413-1.264.061-1.645.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.414-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.17-.422-.36-1.057-.413-2.228-.061-1.264-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.414-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.17 1.057-.36 2.228-.413 1.264-.061 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
