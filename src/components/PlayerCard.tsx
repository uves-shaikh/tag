import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import type { Player } from "@/lib/data";

export default function PlayerCard({ p, large = false }: { p: Player; large?: boolean }) {
  const initials = p.alias.slice(0, 2).toUpperCase();
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative card-apex overflow-hidden p-6 flex flex-col"
    >
      {/* Huge faded jersey number */}
      <span
        aria-hidden
        className="absolute right-2 top-0 font-display font-bold text-surface-2 leading-none select-none"
        style={{ fontSize: large ? 200 : 130 }}
      >
        {p.jersey}
      </span>

      {/* Role badge */}
      <span className="pill-orange self-start relative z-10">{p.roleShort}</span>

      <div className="relative z-10 mt-5 flex items-center gap-4">
        <div className="h-[72px] w-[72px] rounded-full border-2 border-primary bg-surface-2 flex items-center justify-center shrink-0">
          <span className="font-display font-semibold text-cream text-lg">{initials}</span>
        </div>
        <div>
          <h3 className="font-display font-semibold text-cream text-2xl leading-tight">{p.alias}</h3>
          <p className="text-[13px] text-muted-foreground">{p.role}</p>
        </div>
      </div>

      {large && (
        <p className="relative z-10 mt-4 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
      )}

      <div className="relative z-10 mt-5 pt-5 border-t border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-strong">Stats</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-primary uppercase tracking-[0.1em]">
            <Lock className="h-3 w-3" /> Coming Soon
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["K/D", "Damage", "Matches"].map((k) => (
            <div key={k} className="rounded bg-surface-2 px-2 py-2 text-center">
              <div className="text-[10px] text-muted-strong uppercase tracking-wider">{k}</div>
              <div className="font-display font-semibold text-muted-foreground text-base">—</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-3">
        {p.socials.instagram ? (
          <a href={p.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
             className="text-muted-strong hover:text-primary transition-colors">
            <RiInstagramLine className="h-4 w-4" />
          </a>
        ) : null}
        {p.socials.youtube ? (
          <a href={p.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
             className="text-muted-strong hover:text-primary transition-colors">
            <RiYoutubeLine className="h-4 w-4" />
          </a>
        ) : null}
        {!p.socials.instagram && !p.socials.youtube && (
          <span className="text-[11px] text-muted-strong">Socials coming soon</span>
        )}
      </div>
    </motion.article>
  );
}
