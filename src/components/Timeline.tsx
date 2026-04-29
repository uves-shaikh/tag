import { Lock } from "lucide-react";
import { TIMELINE_EVENTS } from "@/lib/data";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
      <ul className="space-y-8">
        {TIMELINE_EVENTS.map((e, i) => {
          const right = i % 2 === 1;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-8 ${right ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`md:px-8 ${right ? "md:text-left" : "md:text-right"}`}>
                <span className={`inline-flex items-center rounded px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] ${e.locked ? "bg-surface-2 text-muted-strong" : "bg-primary-muted text-primary"}`}>
                  {e.locked && <Lock className="h-3 w-3 mr-1.5" />}
                  {e.year}
                </span>
              </div>
              <div className="md:px-8">
                <p className={`text-sm leading-relaxed ${e.locked ? "text-muted-strong italic" : "text-cream-muted"}`}>
                  {e.event}
                </p>
              </div>
              <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
