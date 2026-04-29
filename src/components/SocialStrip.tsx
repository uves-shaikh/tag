import { ArrowUpRight } from "lucide-react";
import { RiInstagramLine, RiYoutubeLine, RiTwitterXLine } from "react-icons/ri";
import { SOCIAL_LINKS } from "@/lib/data";

const items = [
  { icon: RiInstagramLine, name: "Instagram", handle: "@team.apexgaming", followers: "Growing fast", url: SOCIAL_LINKS.instagram, label: "Follow" },
  { icon: RiYoutubeLine, name: "YouTube", handle: "Jonathan Gaming", followers: "5M+ subscribers", url: SOCIAL_LINKS.youtube, label: "Subscribe" },
  { icon: RiTwitterXLine, name: "Twitter / X", handle: "@Team_ApexGaming", followers: "Join the talk", url: SOCIAL_LINKS.twitter, label: "Follow" },
];

export default function SocialStrip() {
  return (
    <section className="container-apex py-20">
      <div className="text-center">
        <p className="label-eyebrow">Community</p>
        <h2 className="mt-3 font-display font-semibold text-cream text-3xl md:text-4xl">Join the TAG community</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a key={it.name} href={it.url} target="_blank" rel="noreferrer"
               className="card-apex p-6 flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-md bg-surface-2 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-cream transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-strong">{it.name}</p>
                <p className="font-display font-semibold text-cream text-lg leading-tight truncate">{it.handle}</p>
                <p className="text-xs text-muted-foreground">{it.followers}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-strong group-hover:text-primary transition-colors" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
