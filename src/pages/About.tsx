import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { ArrowUpRight } from "lucide-react";
import { ORG_MEMBERS } from "@/lib/data";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const missions = [
  { title: "Rise", text: "Compete at the highest level of Indian BGMI." },
  { title: "Build", text: "Grow the Indian esports ecosystem." },
  { title: "Inspire", text: "Create a platform for the next generation." },
];

export default function About() {
  const j = ORG_MEMBERS[0];
  return (
    <>
      <PageHero eyebrow="Our Story" title="Our Story" subtitle="From a Goa gamer to one of India's most influential esports figures. This is how Team Apex Gaming was born." />

      <section className="container-apex py-12">
        <blockquote className="rounded-lg border-l-[3px] border-primary bg-surface-1 p-8 md:p-10 max-w-3xl mx-auto">
          <p className="font-display font-semibold text-cream text-2xl md:text-3xl leading-snug">
            "It wasn't just about playing anymore. It was about building."
          </p>
        </blockquote>
      </section>

      <section className="container-apex py-12 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        <Para><strong className="text-cream">The journey.</strong> Jonathan Jude Amaral grew up obsessed with mobile gaming. He built a community on YouTube, climbing to 5M+ subscribers — and turned a passion into a profession.</Para>
        <Para><strong className="text-cream">The GodLike chapter.</strong> Joining GodLike Esports, Jonathan competed at the highest level of Indian BGMI, earned a Red Bull athlete deal, and became one of the country's most recognizable esports faces.</Para>
        <Para><strong className="text-cream">The decision.</strong> In April 2026, he chose to leave GodLike and start fresh. Not as a player joining a team — as a founder building one. Team Apex Gaming was born.</Para>
      </section>

      <section className="container-apex py-16">
        <div className="text-center">
          <p className="label-eyebrow">Timeline</p>
          <h2 className="mt-3 font-display font-bold text-cream text-3xl md:text-4xl">The road to TAG</h2>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Timeline />
        </div>
      </section>

      <section className="container-apex py-16">
        <div className="text-center">
          <p className="label-eyebrow">Mission</p>
          <h2 className="mt-3 font-display font-bold text-cream text-3xl md:text-4xl">Why we exist</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {missions.map((m) => (
            <div key={m.title} className="card-apex p-7">
              <div className="flex items-center gap-2 text-primary">
                <ArrowUpRight className="h-5 w-5" />
                <span className="font-display font-semibold text-2xl text-cream">{m.title}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder spotlight */}
      <section className="container-apex py-20">
        <div className="card-apex p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="h-32 w-32 shrink-0 rounded-full border-2 border-primary bg-surface-2 flex items-center justify-center">
              <span className="font-display font-bold text-cream text-3xl">JG</span>
            </div>
            <div className="flex-1">
              <span className="pill-orange">Founder Spotlight</span>
              <h3 className="mt-3 font-display font-bold text-cream text-3xl md:text-4xl">{j.alias}</h3>
              <p className="text-muted-foreground">{j.fullName}</p>
              <p className="mt-4 text-sm text-cream-muted leading-relaxed">{j.bio}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {j.badges.map((b) => <span key={b} className="pill-muted">{b}</span>)}
              </div>
              {j.stats && (
                <div className="mt-5 grid grid-cols-3 gap-3 max-w-md">
                  {j.stats.map((s) => (
                    <div key={s.label} className="rounded-md bg-surface-2 px-3 py-3 text-center">
                      <div className="font-display font-bold text-cream text-lg">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-strong">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-5 flex items-center gap-3">
                {j.instagram && <a href={j.instagram} target="_blank" rel="noreferrer" className="text-muted-strong hover:text-primary"><RiInstagramLine className="h-5 w-5" /></a>}
                {j.youtube && <a href={j.youtube} target="_blank" rel="noreferrer" className="text-muted-strong hover:text-primary"><RiYoutubeLine className="h-5 w-5" /></a>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>;
}
