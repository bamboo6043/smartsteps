import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";

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
        <html lang="ro" className={`${headingFont.variable} ${bodyFont.variable}`}>
        <body>
        <SiteHeader />

        <main className="site-main">
            <div className="container">
                <div className="page-wrapper">{children}</div>
            </div>
        </main>

        <footer className="site-footer">
            <div className="container">
                <p>Smart Steps © 2008 – {new Date().getFullYear()}</p>
                <p>
                    <Link href="/termeni-si-conditii">Termeni si conditii</Link>
                </p>
            </div>
        </footer>
        </body>
        </html>
    );
}
