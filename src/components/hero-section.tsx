"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";

const words = ["TIME", "TO", "RISE"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Layer 2: subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Layer 4: radial glow */}
      <div className="absolute inset-0 hero-glow" />
      {/* Layer 3: huge watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold text-cream"
          style={{
            fontSize: "clamp(180px, 28vw, 360px)",
            opacity: 0.03,
            lineHeight: 1,
          }}
        >
          APEX
        </span>
      </div>

      {/* Floating arrow X motif (right side) */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block opacity-[0.07]">
        <div className="animate-float-slow">
          <ArrowUpRight
            className="h-[420px] w-[420px] text-primary"
            strokeWidth={0.8}
          />
        </div>
      </div>

      <div className="container-apex relative z-10 text-center py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-eyebrow"
        >
          Est. April 2026 · Mumbai
        </motion.p>

        <h1 className="heading-hero mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
        >
          India's newest BGMI powerhouse. Founded by Jonathan Gaming.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-3 text-[13px] text-primary font-medium tracking-[0.18em]"
        >
          #TAGONTOP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
        >
          <Link
            href="/roster/bgmi"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-cream hover:bg-primary-light transition-colors"
          >
            Meet the Roster
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm text-muted-foreground hover:border-primary hover:text-cream transition-colors"
          >
            Follow @team.apexgaming
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-strong"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
