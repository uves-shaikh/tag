const items = [
  "Time To Rise",
  "#TAGonTop",
  "Team Apex Gaming",
  "Est. April 2026",
  "Rise. Build. Inspire.",
  "India's Finest",
  "BGMI Powerhouse",
  "Born To Compete",
  "We Are Apex",
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="bg-primary overflow-hidden border-y border-primary-dark">
      <div className="ticker-track flex whitespace-nowrap py-2.5">
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center text-cream text-xs font-medium tracking-[0.15em] uppercase px-6"
          >
            {t}
            <span className="ml-6 text-cream/60">↗</span>
          </span>
        ))}
      </div>
    </div>
  );
}
