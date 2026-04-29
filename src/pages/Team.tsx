import PageHero from "@/components/PageHero";
import { ORG_MEMBERS } from "@/lib/data";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { Lock } from "lucide-react";

export default function Team() {
  return (
    <>
      <PageHero eyebrow="The Apex Family" title="The Apex Family" subtitle="Three pillars. One vision." />

      <section className="container-apex py-10 space-y-8">
        {ORG_MEMBERS.map((m, i) => {
          const reverse = i % 2 === 1;
          return (
            <article key={m.id}
              className={`card-apex p-6 md:p-10 grid gap-8 md:grid-cols-5 items-start ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-2 flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-full border-2 border-primary bg-surface-2 flex items-center justify-center">
                  <span className="font-display font-bold text-cream text-3xl">
                    {m.alias.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h2 className="mt-4 font-display font-bold text-cream text-3xl">{m.alias}</h2>
                <p className="text-sm text-muted-foreground">{m.fullName}</p>
                <span className="mt-3 pill-orange">{m.role}</span>
              </div>
              <div className="md:col-span-3">
                <p className="text-cream-muted leading-relaxed">{m.bio}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {m.badges.map((b) => <span key={b} className="pill-muted">{b}</span>)}
                </div>
                {m.stats && (
                  <div className="mt-5 grid grid-cols-3 gap-3 max-w-md">
                    {m.stats.map((s) => (
                      <div key={s.label} className="rounded-md bg-surface-2 px-3 py-3 text-center">
                        <div className="font-display font-bold text-cream text-lg">{s.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-strong">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex items-center gap-4">
                  {m.instagram && <a href={m.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-strong hover:text-primary"><RiInstagramLine className="h-5 w-5" /></a>}
                  {m.youtube && <a href={m.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-muted-strong hover:text-primary"><RiYoutubeLine className="h-5 w-5" /></a>}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="container-apex py-20 text-center">
        <h2 className="font-display font-bold text-cream text-3xl md:text-4xl">Want to be part of something big?</h2>
        <p className="mt-3 text-muted-foreground">Applications opening soon.</p>
        <button disabled
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary/40 px-6 py-3 text-sm font-medium text-cream/70 cursor-not-allowed"
          title="Coming soon">
          <Lock className="h-4 w-4" /> Apply to Join — Coming Soon
        </button>
      </section>
    </>
  );
}
