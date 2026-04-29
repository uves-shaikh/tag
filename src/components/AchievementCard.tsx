import { Lock, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export type Achievement = {
  id: string; title: string; year: string; description: string;
  category: string; locked: boolean;
};

export default function AchievementCard({ a }: { a: Achievement }) {
  const isIndividual = a.category === "Individual" || a.category === "Creator";
  return (
    <article
      className={cn(
        "relative rounded-lg border bg-surface-1 p-6 transition-all duration-300 overflow-hidden",
        a.locked
          ? "border-border opacity-70"
          : isIndividual
          ? "border-gold/40 hover:border-gold"
          : "border-primary/40 hover:border-primary"
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cn(
          "h-10 w-10 rounded-md flex items-center justify-center",
          a.locked ? "bg-surface-2 text-muted-strong" : isIndividual ? "bg-gold/10 text-gold" : "bg-primary-muted text-primary"
        )}>
          {a.locked ? <Lock className="h-5 w-5" /> : <Trophy className="h-5 w-5" />}
        </div>
        <span className={cn(
          "pill-muted",
          !a.locked && (isIndividual ? "!bg-gold/10 !text-gold" : "!bg-primary-muted !text-primary")
        )}>
          {a.category}
        </span>
      </div>

      <h3 className="mt-5 font-display font-semibold text-cream text-xl leading-tight">{a.title}</h3>
      <p className={cn("mt-1 text-xs font-medium tracking-[0.12em] uppercase", a.locked ? "text-muted-strong" : isIndividual ? "text-gold" : "text-primary")}>
        {a.year}
      </p>
      <p className={cn("mt-3 text-sm leading-relaxed", a.locked ? "text-muted-strong italic" : "text-muted-foreground")}>
        {a.description}
      </p>

      {a.locked && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded bg-surface-2 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-muted-strong">
          Coming Soon
        </span>
      )}
    </article>
  );
}
