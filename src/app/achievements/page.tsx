import PageHero from "@/components/page-hero";
import AchievementCard from "@/components/achievement-card";
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <>
      <PageHero
        eyebrow="Trophy Wall"
        title="The Trophy Wall"
        subtitle="Every milestone. Every win."
      />
      <section className="container-apex pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <AchievementCard key={a.id} a={a} />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-strong italic">
          More achievements unlock as Team Apex Gaming competes and grows. Check
          back soon.
        </p>
      </section>
    </>
  );
}
