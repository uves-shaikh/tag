import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { RiInstagramLine, RiYoutubeLine, RiTwitterXLine } from "react-icons/ri";
import { useState } from "react";
import Countdown from "./Countdown";
import { SOCIAL_LINKS } from "@/lib/data";

export default function ComingSoon({ title, tagline, watermark }: { title: string; tagline: string; watermark?: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <main className="relative min-h-[100svh] flex items-center justify-center bg-background overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 hero-glow" />
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-cream uppercase whitespace-nowrap"
              style={{ fontSize: "clamp(120px, 22vw, 280px)", opacity: 0.025, lineHeight: 1 }}>
          {watermark ?? title}
        </span>
      </div>

      <div className="container-apex relative z-10 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 pill-orange">
          <Lock className="h-3 w-3" /> Coming Soon
        </div>
        <h1 className="mt-5 heading-hero">{title}</h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">{tagline}</p>

        <div className="mt-10">
          <Countdown />
        </div>

        <div className="mt-12 max-w-md mx-auto">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary">Get notified when we launch</p>
          {sent ? (
            <p className="mt-4 text-sm text-success">✓ You're on the list. Stay locked in.</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
              className="mt-4 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-md bg-surface-2 border border-border px-4 py-2.5 text-sm text-cream placeholder:text-muted-strong focus:border-primary outline-none"
              />
              <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-cream hover:bg-primary-light transition-colors">
                Notify Me
              </button>
            </form>
          )}
        </div>

        <Link to="/" className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cream transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
             className="text-muted-strong hover:text-primary transition-colors"><RiInstagramLine className="h-5 w-5" /></a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
             className="text-muted-strong hover:text-primary transition-colors"><RiYoutubeLine className="h-5 w-5" /></a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"
             className="text-muted-strong hover:text-primary transition-colors"><RiTwitterXLine className="h-5 w-5" /></a>
        </div>
      </div>
    </main>
  );
}
