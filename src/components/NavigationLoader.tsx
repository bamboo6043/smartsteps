"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const PAGE_NAMES: Record<string, string | undefined> = {
    "/": undefined,
    "/despre-mine": "Despre mine",
    "/servicii": "Servicii",
    "/articole": "Articole",
    "/evenimente": "Evenimente",
    "/referinte": "Referinte",
    "/contact": "Contact",
    "/termeni-si-conditii": "Termeni si conditii",
};

function resolvePageName(href: string): string | undefined {
    const path = href.split("?")[0].replace(/\/$/, "") || "/";
    if (path.startsWith("/articole/")) return "Articol";
    return PAGE_NAMES[path];
}

export default function NavigationLoader() {
    const pathname = usePathname();

    // true on SSR → overlay is in the initial HTML, visible immediately on refresh
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [pageName, setPageName] = useState<string | undefined>(() =>
        resolvePageName(pathname)
    );
    const currentPath = useRef(pathname);
    const navStartTime = useRef<number>(0);
    const NAV_MIN_MS = 600;   // minimum display for navigation
    const INIT_MS    = 900;  // display time on initial load / refresh
    const FADE_MS    = 500;  // fade-out duration (match CSS)

    const hide = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsFading(false);
            setIsLoading(false);
        }, FADE_MS);
    };

    // Initial load: hide after a visible duration
    useEffect(() => {
        const t = setTimeout(hide, INIT_MS);
        return () => clearTimeout(t);
    }, []);

    // Client-side navigation: hide only after minimum display time has elapsed
    useEffect(() => {
        if (currentPath.current !== pathname) {
            currentPath.current = pathname;
            const elapsed = Date.now() - navStartTime.current;
            const remaining = Math.max(0, NAV_MIN_MS - elapsed);
            const t = setTimeout(hide, remaining);
            return () => clearTimeout(t);
        }
    }, [pathname]);

    // Client-side navigation: show immediately on any internal link click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest("a");
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href) return;
            if (
                href.startsWith("http") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                href.startsWith("#")
            ) return;
            const clean = href.split("?")[0].replace(/\/$/, "") || "/";
            const current = currentPath.current.replace(/\/$/, "") || "/";
            if (clean === current) return;
            navStartTime.current = Date.now();
            setPageName(resolvePageName(href));
            setIsFading(false);
            setIsLoading(true);
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`nav-loader${isFading ? " nav-loader--out" : ""}`}
            aria-live="polite"
            aria-label="Se incarca pagina"
        >
            <LoadingScreen pageName={pageName} />
        </div>
    );
}
