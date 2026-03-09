import { articles } from "@/data/articles";
import ArticlesClient from "@/components/ArticlesClient";

export const metadata = {
  title: "Articole – Smart Steps",
  description:
    "Citiți articolele noastre despre psihoterapie, dezvoltare personală și relații sănătoase.",
};

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="articles-page">
      <div className="page-header">
        <h1>Articole</h1>
        <p className="page-subtitle">
          Explorați articole despre psihoterapie, dezvoltare personală și relații sănătoase.
        </p>
      </div>
      <ArticlesClient articles={sorted} />
    </div>
  );
}
