"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/page-hero";
import NewsCard from "@/components/news-card";
import { NEWS_ARTICLES } from "@/lib/data";
import { Search } from "lucide-react";

const FILTERS = ["All", "Announcement", "Roster", "BGMI", "Creator"];

export default function News() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return NEWS_ARTICLES.filter((a) => {
      const fOk =
        filter === "All" || a.category === filter || a.tags.includes(filter);
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase());
      return fOk && qOk;
    });
  }, [filter, q]);

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Latest from Apex"
        subtitle="Announcements, roster moves, and stories from the TAG family."
      />

      <section className="container-apex">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  filter === f
                    ? "bg-primary text-cream"
                    : "bg-surface-1 border border-border text-muted-foreground hover:text-cream hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-strong" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-md bg-surface-1 border border-border pl-10 pr-3 py-2.5 text-sm text-cream placeholder:text-muted-strong focus:border-primary outline-none"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <NewsCard key={a.slug} a={a} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No articles match your filter.
          </p>
        )}
      </section>
      <div className="py-12" />
    </>
  );
}
