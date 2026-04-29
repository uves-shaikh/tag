import PageHero from "@/components/PageHero";
import PlayerCard from "@/components/PlayerCard";
import ComingSoonCard from "@/components/ComingSoonCard";
import { BGMI_ROSTER } from "@/lib/data";

export default function RosterBgmi() {
  return (
    <>
      <PageHero eyebrow="Battlegrounds Mobile India" title="BGMI" subtitle="Active Roster · Season 2026" />

      <section className="container-apex py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BGMI_ROSTER.map((p) => <PlayerCard key={p.id} p={p} large />)}
        </div>
      </section>

      <section className="container-apex py-12">
        <div className="text-center">
          <p className="label-eyebrow">What's Next</p>
          <h2 className="mt-3 font-display font-bold text-cream text-3xl md:text-4xl">More from the squad</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ComingSoonCard title="Stats Integration" description="Live K/D, damage, and match data." />
          <ComingSoonCard title="Match History" description="Tournament results and scrim performance." />
          <ComingSoonCard title="Upcoming Scrims" description="Schedules and stream links." />
          <ComingSoonCard title="VOD Reviews" description="Breakdowns and gameplay analysis." />
        </div>
      </section>

      <section className="container-apex py-12">
        <div className="rounded-lg border border-border bg-surface-1 p-6 text-sm text-muted-foreground max-w-3xl mx-auto">
          <p>
            <span className="text-cream font-medium">Past team note: </span>
            Jonathan previously competed with GodLike Esports (2023–2026). Saumay joined GodLike's BGMI lineup following Jonathan's departure.
          </p>
          <p className="mt-3 text-[11px] text-muted-strong">
            Team Apex Gaming is an independent Indian esports organization and is not affiliated with Apex Legends® or Respawn Entertainment.
          </p>
        </div>
      </section>
    </>
  );
}
