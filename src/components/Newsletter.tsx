import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-surface-1 border-y border-border">
      <div className="container-apex py-14 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="label-eyebrow">Newsletter</p>
          <h2 className="mt-3 font-display font-semibold text-cream text-3xl md:text-4xl">Stay in the loop</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Tournaments · Drops · Announcements — straight to your inbox.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-md bg-surface-2 border border-border px-4 py-3 text-sm text-cream placeholder:text-muted-strong focus:border-primary outline-none"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-cream hover:bg-primary-light transition-colors">
            {sent ? "✓ Subscribed" : "Subscribe"} <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
