"use client";

import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiExternalLinkLine,
} from "react-icons/ri";
import type { Player } from "@/lib/data";
import Image from "next/image";

export default function PlayerCard({
  p,
  large = false,
}: {
  p: Player;
  large?: boolean;
}) {
  const initials = p.alias.slice(0, 2).toUpperCase();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative card-apex overflow-hidden flex flex-col"
    >
      {/* ── Header ── */}
      <div className="relative p-6 pb-5">
        {/* Faded jersey watermark */}
        <span
          aria-hidden
          className="absolute right-1 top-0 font-display font-bold text-surface-2 leading-none select-none pointer-events-none"
          style={{ fontSize: large ? 180 : 120 }}
        >
          {p.jersey}
        </span>

        <div className="relative z-10 flex items-center gap-4">
          {/* Avatar */}
          <div className="h-16 w-16 rounded-full border-2 border-primary bg-surface-2 shrink-0 overflow-hidden">
            {p.avatar ? (
              <Image
                src={p.avatar}
                alt={p.alias}
                width={64}
                height={64}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <span className="font-display font-semibold text-cream text-lg">
                  {initials}
                </span>
              </div>
            )}
          </div>

          {/* Identity */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-bold text-cream text-2xl leading-none tracking-wide">
                {p.alias}
              </h3>
              {p.isFounder && (
                <span className="pill-orange text-[10px]">Founder</span>
              )}
            </div>
            {p.realName && p.realName !== p.alias && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {p.realName}
              </p>
            )}
            <p className="mt-1 text-[12px] text-primary font-medium tracking-wide">
              {p.roleShort}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-6 border-t border-border" />

      {/* ── Body ── */}
      <div className="p-6 pt-4 flex flex-col flex-1 gap-3">
        {/* Role + nationality */}
        <p className="text-[13px] text-cream-muted">
          {p.role}
          {p.nationality && (
            <span className="text-muted-strong"> · {p.nationality}</span>
          )}
          {p.age && <span className="text-muted-strong"> · Age {p.age}</span>}
        </p>

        {/* Bio */}
        <p
          className={`text-muted-foreground leading-relaxed ${large ? "text-sm" : "text-[13px] line-clamp-4"}`}
        >
          {p.bio}
        </p>

        {/* Joined date */}
        {p.joinedDate && (
          <p className="text-[11px] text-muted-strong">
            Joined TAG · {p.joinedDate}
          </p>
        )}

        {/* ── Footer ── */}
        <div className="mt-auto pt-3 border-t border-border flex items-center gap-3">
          {p.socials.instagram && (
            <a
              href={p.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted-strong hover:text-primary transition-colors"
            >
              <RiInstagramLine className="h-4 w-4" />
            </a>
          )}
          {p.socials.youtube && (
            <a
              href={p.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-muted-strong hover:text-primary transition-colors"
            >
              <RiYoutubeLine className="h-4 w-4" />
            </a>
          )}
          {p.liquipedia && (
            <a
              href={p.liquipedia}
              target="_blank"
              rel="noreferrer"
              aria-label="Liquipedia profile"
              className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] text-muted-strong hover:text-primary transition-colors"
            >
              Liquipedia <RiExternalLinkLine className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
