import PageHero from "@/components/page-hero";
import PlayerCard from "@/components/player-card";
import ComingSoonCard from "@/components/coming-soon-card";
import { BGMI_ROSTER } from "@/lib/data";

export default function RosterBgmi() {
  return (
    <>
      <PageHero
        eyebrow="Battlegrounds Mobile India"
        title="BGMI"
        subtitle="Active Roster · Season 2026"
      />

      <section className="container-apex py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BGMI_ROSTER.map((p) => (
            <PlayerCard key={p.id} p={p} large />
          ))}
        </div>
      </section>

      <section className="container-apex py-12">
        <div className="text-center">
          <p className="label-eyebrow">What's Next</p>
          <h2 className="mt-3 font-display font-bold text-cream text-3xl md:text-4xl">
            More from the squad
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ComingSoonCard
            title="Stats Integration"
            description="Live K/D, damage, and match data."
          />
          <ComingSoonCard
            title="Match History"
            description="Tournament results and scrim performance."
          />
          <ComingSoonCard
            title="Upcoming Scrims"
            description="Schedules and stream links."
          />
          <ComingSoonCard
            title="VOD Reviews"
            description="Breakdowns and gameplay analysis."
          />
        </div>
      </section>
    </>
  );
}
