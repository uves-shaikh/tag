"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/roster/bgmi", label: "Roster" },
  { href: "/news", label: "News" },
  { href: "/achievements", label: "Trophies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface-1/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-apex flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Team Apex Gaming home"
        >
          <span className="font-display font-bold text-cream text-xl tracking-wide">
            APEX <span className="text-primary">GAMING</span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors py-1",
                    active
                      ? "text-primary"
                      : "text-cream-muted hover:text-cream"
                  )}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-md border border-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-primary hover:bg-primary hover:text-cream transition-colors"
        >
          Follow Us <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          className="lg:hidden text-cream p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm animate-fade-in">
          <ul className="container-apex flex flex-col gap-1 py-8">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "block py-4 text-2xl font-display font-semibold border-b border-border",
                      active ? "text-primary" : "text-cream"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-cream hover:bg-primary-light transition-colors"
              >
                Follow @team.apexgaming <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
