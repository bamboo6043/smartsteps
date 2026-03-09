import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import NavigationLoader from "../components/NavigationLoader";
import ThemeToggle from "../components/ThemeToggle";

const headingFont = Playfair_Display({
    subsets: ["latin-ext"],
    weight: ["500", "600", "700"],
    variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
    subsets: ["latin-ext"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    title: "Smart Steps – Dezvoltare personala & profesionala",
    description:
        "Consiliere in dezvoltare personala si profesionala pentru lideri, manageri si profesionisti.",
    icons: {
        icon: [
            { url: "/logo.png", type: "image/png" },
        ],
        apple: "/logo.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
        <body suppressHydrationWarning>
        {/* Runs before paint — prevents flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})();` }} />
        <SiteHeader />
        <NavigationLoader />

        <main className="site-main">
            <div className="container">
                <div className="page-wrapper">{children}</div>
            </div>
        </main>

        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <span className="footer-brand-name">Smart Steps</span>
                        <p>Consiliere in dezvoltare personala &amp; profesionala pentru lideri, manageri si profesionisti.</p>
                    </div>
                    <nav className="footer-nav" aria-label="Navigare secundara">
                        <span className="footer-nav-title">Pagini</span>
                        <Link href="/servicii">Servicii</Link>
                        <Link href="/articole">Articole</Link>
                        <Link href="/despre-mine">Despre mine</Link>
                        <Link href="/referinte">Referinte</Link>
                    </nav>
                    <div className="footer-contact">
                        <span className="footer-contact-title">Contact</span>
                        <a href="mailto:contact@smartsteps.ro">contact@smartsteps.ro</a>
                        <Link href="/contact">Programeaza o sesiune</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Smart Steps © 2008 – {new Date().getFullYear()}</p>
                    <Link href="/termeni-si-conditii">Termeni si conditii</Link>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
