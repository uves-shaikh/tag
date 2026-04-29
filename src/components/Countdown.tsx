import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-26T00:00:00+05:30").getTime();

export default function Countdown() {
  const [t, setT] = useState(() => Math.max(0, TARGET - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setT(Math.max(0, TARGET - Date.now())), 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.floor(t / 86400000);
  const h = Math.floor((t / 3600000) % 24);
  const m = Math.floor((t / 60000) % 60);
  const s = Math.floor((t / 1000) % 60);
  const items = [{ v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Minutes" }, { v: s, l: "Seconds" }];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-md mx-auto">
      {items.map((i) => (
        <div key={i.l} className="text-center">
          <div className="font-display font-bold text-primary text-3xl sm:text-5xl tabular-nums">
            {String(i.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-muted-strong">{i.l}</div>
        </div>
      ))}
    </div>
  );
}
