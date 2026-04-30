import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type NewsCardData = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags?: string[];
};

export default function NewsCard({ a }: { a: NewsCardData }) {
  return (
    <Link
      href={`/news/${a.slug}`}
      className="card-apex group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] bg-surface-2 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 pill-orange">{a.category}</span>
        <ArrowUpRight className="absolute top-3 right-3 h-5 w-5 text-cream-muted group-hover:text-primary transition-colors" />
        <div className="absolute bottom-3 left-3 right-3 font-display font-bold text-cream/10 text-5xl uppercase leading-none truncate">
          {a.category}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[11px] text-muted-strong uppercase tracking-[0.15em]">
          {a.date}
        </p>
        <h3 className="mt-2 font-display font-semibold text-cream text-xl leading-snug group-hover:text-primary transition-colors">
          {a.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {a.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
          Read more <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
