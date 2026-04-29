import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { NEWS_ARTICLES } from "@/lib/data";
import NewsCard from "@/components/NewsCard";
import NotFound from "./NotFound";

export default function NewsArticle() {
  const { slug } = useParams();
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return <NotFound />;

  const related = NEWS_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-28">
        <div className="container-apex max-w-3xl">
          <Link to="/news" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>
        </div>

        <div className="container-apex max-w-3xl mt-6">
          <span className="pill-orange">{article.category}</span>
          <h1 className="mt-4 font-display font-bold text-cream text-4xl md:text-5xl leading-tight">{article.title}</h1>
          <p className="mt-4 text-sm text-muted-strong">{article.date} · TAG Staff</p>
        </div>

        <div className="container-apex max-w-4xl mt-8">
          <div className="relative aspect-[16/9] rounded-lg bg-surface-1 border border-border overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold text-cream/10 text-7xl md:text-9xl uppercase">
                {article.category}
              </span>
            </div>
          </div>
        </div>

        <div className="container-apex max-w-3xl mt-10 prose-invert">
          {article.content.split("\n").map((p, i) => (
            <p key={i} className="text-cream-muted leading-[1.85] mb-5 whitespace-pre-line">{p}</p>
          ))}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {article.tags.map((t) => <span key={t} className="pill-muted">{t}</span>)}
          </div>
        </div>
      </article>

      <section className="container-apex py-20">
        <div className="divider-arrow" />
        <h2 className="font-display font-bold text-cream text-2xl md:text-3xl">Related stories</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((a) => <NewsCard key={a.slug} a={a} />)}
        </div>
      </section>
    </>
  );
}
