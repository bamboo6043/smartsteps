"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import ClientImage from "@/components/ClientImage";

const ALL = "Toate";

export default function ArticlesClient({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);
  const fallback = "/logo.png";

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category)));
    return [ALL, ...cats];
  }, [articles]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return articles.filter((a) => {
      const matchesCategory = activeCategory === ALL || a.category === activeCategory;
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [articles, search, activeCategory]);

  return (
    <>
      <div className="articles-filters">
        <div className="articles-search-wrap">
          <svg className="articles-search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Caută articole…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="articles-search-input"
            aria-label="Caută articole"
          />
          {search && (
            <button
              className="articles-search-clear"
              onClick={() => setSearch("")}
              aria-label="Șterge căutarea"
            >
              ×
            </button>
          )}
        </div>
        <div className="articles-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="articles-empty">Niciun articol găsit pentru „{search}".</p>
      ) : (
        <section className="articles-grid">
          {filtered.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <ClientImage
                  src={article.thumbnailUrl ?? article.imageUrl ?? fallback}
                  alt={article.title}
                />
              </div>
              <div className="article-content">
                <span className="article-category-tag">{article.category}</span>
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
      )}
    </>
  );
}
