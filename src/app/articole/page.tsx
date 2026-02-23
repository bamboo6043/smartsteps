import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Articole – Smart Steps",
  description:
    "Cititi articolele noastre despre psihoterapie, dezvoltare personala si relatii sanatoase.",
};

export default function ArticlesPage() {
  return (
    <div className="articles-page">
      <div className="page-header">
        <h1>Articole</h1>
        <p className="page-subtitle">
          Explorați articole despre psihoterapie, dezvoltare personală și relații sănătoase.
        </p>
      </div>

      <section className="articles-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            {article.imageUrl && (
              <div className="article-image">
                <img src={article.imageUrl} alt={article.title} />
              </div>
            )}
            <div className="article-content">
              <Link href={`/articole/${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="article-date">
                  {new Date(article.date).toLocaleDateString("ro-RO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <Link href={`/articole/${article.slug}`} className="article-link">
                Citiți articolul →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
