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

                    {/* Social links in mobile menu only (class matches globals.css) */}
                    <div className="nav-social" role="list" aria-label="Linkuri sociale">
                        <a
                            href={SOCIAL_LINKS.facebook || "https://www.facebook.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Vizitati pagina noastra pe Facebook"
                            onClick={close}
                        >
                            <span className="social-badge social-badge--fb" aria-hidden>
                                f
                            </span>
                        </a>

                        <a
                            href={SOCIAL_LINKS.instagram || "https://www.instagram.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Urmariti-ne pe Instagram"
                            onClick={close}
                        >
                            <span className="social-badge social-badge--ig" aria-hidden>
                                ig
                            </span>
                        </a>
                    </div>
                </nav>

                {/* Desktop social links - shown only on desktop (class matches globals.css) */}
                <div className="social-links-desktop">
                    <a
                        href={SOCIAL_LINKS.facebook || "https://www.facebook.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Vizitati pagina noastra pe Facebook"
                    >
                        <span className="social-badge social-badge--fb" aria-hidden>
                            f
                        </span>
                    </a>
                    <a
                        href={SOCIAL_LINKS.instagram || "https://www.instagram.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        title="Urmariti-ne pe Instagram"
                    >
                        <span className="social-badge social-badge--ig" aria-hidden>
                            ig
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
