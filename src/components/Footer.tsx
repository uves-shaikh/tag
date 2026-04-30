import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RiInstagramLine, RiYoutubeLine, RiTwitterXLine } from "react-icons/ri";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border mt-20">
      <div className="container-apex py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-display font-bold text-cream text-xl">
                APEX <span className="text-primary">GAMING</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Time To Rise. India's newest BGMI esports organization, founded by
              Jonathan Gaming.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-muted-strong hover:text-primary transition-colors"
              >
                <RiInstagramLine className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-muted-strong hover:text-primary transition-colors"
              >
                <RiYoutubeLine className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="text-muted-strong hover:text-primary transition-colors"
              >
                <RiTwitterXLine className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Navigate"
            links={[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/team", label: "Team" },
              { href: "/roster/bgmi", label: "Roster" },
              { href: "/news", label: "News" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Divisions"
            links={[
              { href: "/roster/bgmi", label: "BGMI" },
              { href: "/tournaments", label: "More Games · Soon" },
            ]}
          />
          <FooterCol
            title="Coming Soon"
            links={[
              { href: "/merch", label: "Merch" },
              { href: "/tournaments", label: "Tournaments" },
              { href: "/fanzone", label: "Fan Zone" },
              { href: "/careers", label: "Careers" },
              { href: "/sponsors", label: "Sponsors" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-strong">
          <p>© 2026 Team Apex Gaming. All rights reserved.</p>
          <p className="text-primary font-medium tracking-[0.15em]">
            #TAGONTOP
          </p>
          <p>Built with ❤ in India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="text-sm text-muted-foreground hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
