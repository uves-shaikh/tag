import { STATS } from "@/lib/data";

export default function StatBar() {
  return (
    <section className="bg-surface-1 border-y border-border">
      <div className="container-apex">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="py-8 px-2 md:px-6 text-center md:text-left"
            >
              <div className="font-display font-bold text-cream text-3xl md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-[13px] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
