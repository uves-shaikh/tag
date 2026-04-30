import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import Ticker from "@/components/ticker";
import OrgMemberCard from "@/components/org-member-card";
import PlayerCard from "@/components/player-card";
import NewsCard from "@/components/news-card";
import SocialStrip from "@/components/social-strip";
import Newsletter from "@/components/newsletter";
import { ORG_MEMBERS, BGMI_ROSTER, NEWS_ARTICLES } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />

      {/* Org Members preview */}
      <section className="container-apex py-20">
        <SectionHead
          eyebrow="The Apex Family"
          title="The People Behind Apex"
          subtitle="More than a team. A movement."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ORG_MEMBERS.map((m) => (
            <OrgMemberCard key={m.id} m={m} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light"
          >
            See full team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="container-apex">
        <div className="divider-arrow" />
      </div>

      {/* BGMI Roster */}
      <section className="container-apex py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHead
            eyebrow="Active Roster · 2026"
            title="Our BGMI Squad"
            subtitle="Five players. One mission."
          />
          <span className="pill-orange">BGMI</span>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BGMI_ROSTER.map((p) => (
            <PlayerCard key={p.id} p={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/roster/bgmi"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light"
          >
            View full roster <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About snapshot */}
      <section className="container-apex py-20">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
            <p className="label-eyebrow">Our Story</p>
            <h2 className="mt-3 font-display font-bold text-cream text-4xl md:text-5xl leading-tight">
              From player to owner.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Jonathan Jude Amaral spent years competing at India's highest BGMI
              level - through GodLike Esports, a Red Bull partnership, and
              millions of fans. In April 2026, he stepped away from being just a
              player to build something bigger. Team Apex Gaming was born.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-2">
            <blockquote className="rounded-lg border-l-[3px] border-primary bg-surface-1 p-7">
              <p className="font-display font-semibold text-cream text-2xl leading-snug">
                "Team Apex Gaming is here to be on top. Time to Rise."
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                - Jonathan Gaming, Founder
              </footer>
              <p className="mt-2 text-[12px] text-primary tracking-[0.15em]">
                #TAGONTOP
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="container-apex py-20">
        <SectionHead eyebrow="Newsroom" title="Latest from Apex" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {NEWS_ARTICLES.slice(0, 3).map((a) => (
            <NewsCard key={a.slug} a={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light"
          >
            View all news <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SocialStrip />
      <Newsletter />
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="label-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display font-bold text-cream text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
