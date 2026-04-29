export default function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 hero-glow opacity-60" />
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-cream uppercase whitespace-nowrap"
              style={{ fontSize: "clamp(140px, 22vw, 300px)", opacity: 0.025, lineHeight: 1 }}>
          {title}
        </span>
      </div>
      <div className="container-apex relative z-10 text-center">
        {eyebrow && <p className="label-eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 font-display font-bold text-cream text-5xl md:text-6xl lg:text-7xl tracking-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
