import { motion } from "framer-motion";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import type { OrgMember } from "@/lib/data";

function initials(name: string) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function OrgMemberCard({ m }: { m: OrgMember }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="card-apex p-6 flex flex-col h-full"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 rounded-full border-2 border-primary bg-surface-2 flex items-center justify-center overflow-hidden shrink-0">
          <span className="font-display font-semibold text-cream text-xl">{initials(m.alias)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="pill-orange">{m.role.split(",")[0]}</span>
          <h3 className="mt-2 font-display font-semibold text-cream text-2xl leading-tight">{m.alias}</h3>
          <p className="text-[13px] text-muted-foreground">{m.fullName}</p>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-3">{m.bio}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {m.badges.map((b) => (
          <span key={b} className="pill-muted">{b}</span>
        ))}
      </div>

      <div className="mt-auto pt-5 flex items-center gap-3">
        {m.instagram && (
          <a href={m.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
             className="text-muted-strong hover:text-primary transition-colors">
            <RiInstagramLine className="h-4 w-4" />
          </a>
        )}
        {m.youtube && (
          <a href={m.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
             className="text-muted-strong hover:text-primary transition-colors">
            <RiYoutubeLine className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
