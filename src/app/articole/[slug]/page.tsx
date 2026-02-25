import Link from "next/link";
import { articles, Article } from "@/data/articles";
import { notFound } from "next/navigation";
import React from "react";
import ClientImage from "@/components/ClientImage";

export const metadata = {
  title: "Articol – Smart Steps",
};

function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

function getRelatedArticles(relatedIds: string[]): Article[] {
  return relatedIds
    .map((id) => articles.find((a) => a.id === id))
    .filter(Boolean) as Article[];
}

export const generateStaticParams = () => {
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
    return null;
  }

  // assert defined for TypeScript
  const art = article as Article;
  const relatedArticles = getRelatedArticles(art.relatedArticles || []);
  const fallback = "/logo.png";

  return (
    <article className="article-single">
      <div className="article-header">
        <Link href="/articole" className="breadcrumb">
          ← Înapoi la articole
        </Link>
        <h1>{art.title}</h1>
        <div className="article-meta">
          <span className="category-badge">{art.category}</span>
          <span className="article-date">
            {new Date(art.date).toLocaleDateString("ro-RO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {art.imageUrl && (
        <figure className="article-featured-image">
          <img src={art.imageUrl} alt={art.title} />
        </figure>
      )}

      <div className="article-body">
        {art.content.split("\n\n").map((paragraph, idx) => {
          // Remove leading/trailing quotes and whitespace for comparison
          const normalizedParagraph = paragraph
            .replace(/["“”'\s]+/g, "")
            .toLowerCase();
          const normalizedTitle = art.title
            .replace(/["“”'\s]+/g, "")
            .toLowerCase();

          // Skip a leading paragraph if it is the same as the title (or contains it)
          if (
            idx === 0 &&
            (normalizedParagraph === normalizedTitle ||
              normalizedParagraph.startsWith(normalizedTitle))
          ) {
            return null;
          }

          const isHeading = /^(Cum|Ce|In |Dar|Daca|De|Pentru|Sprijin|Un |Indiciu|Iesirea|Problema)/.test(
            paragraph
          );

          if (isHeading && paragraph.length < 80) {
            return <h3 key={idx}>{paragraph}</h3>;
          }

          if (paragraph.trim().startsWith("- ")) {
            const items = paragraph
              .split("\n")
              .filter((line) => line.trim().startsWith("- "));
            return (
              <ul key={idx}>
                {items.map((item, i) => (
                  <li key={i}>{item.replace(/^- /, "")}</li>
                ))}
              </ul>
            );
          }

          return <p key={idx}>{paragraph}</p>;
        })}
      </div>

      {art.bibliography && art.bibliography.length > 0 && (
        <section className="bibliography">
          <h3>Bibliografie</h3>
          <ul>
            {art.bibliography.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <h3>Articole conexe</h3>
          <div className="related-grid">
            {relatedArticles.map((related) => (
              <article key={related.id} className="related-card">
                <div className="related-image">
                  <ClientImage
                    src={related.thumbnailUrl ?? related.imageUrl ?? fallback}
                    alt={related.title}
                  />
                </div>
                <div className="related-content">
                  <Link href={`/articole/${related.slug}`}>
                    <h3>{related.title}</h3>
                  </Link>
                  <p className="article-excerpt">{related.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
