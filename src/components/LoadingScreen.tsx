export default function LoadingScreen({ pageName }: { pageName?: string }) {
    return (
        <div className="loading-screen">
            <div className="loading-dots" aria-hidden="true">
                <span /><span /><span />
            </div>
            <p className="loading-text">Se incarca...</p>
            {pageName && <p className="loading-page">{pageName}</p>}
        </div>
    );
}
