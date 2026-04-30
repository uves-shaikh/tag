import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { SOCIAL_LINKS } from "@/lib/data";
import { RiInstagramLine, RiYoutubeLine, RiTwitterXLine } from "react-icons/ri";
import { Mail, Lock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        subtitle="For sponsorships, collaborations, media, and general inquiries."
      />

      <section className="container-apex pb-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display font-bold text-cream text-3xl">
            Reach out
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Whether you're a brand, a creator, or a fan with something to say -
            we'd love to hear from you.
          </p>

          <ul className="mt-8 space-y-3">
            <InfoCard
              icon={<RiInstagramLine className="h-5 w-5" />}
              label="Instagram"
              value="@team.apexgaming"
              href={SOCIAL_LINKS.instagram}
            />
            <InfoCard
              icon={<RiYoutubeLine className="h-5 w-5" />}
              label="YouTube"
              value="@Team.ApexGaming"
              href={SOCIAL_LINKS.youtube}
            />
            <InfoCard
              icon={<RiTwitterXLine className="h-5 w-5" />}
              label="Twitter / X"
              value="@Team_ApexGaming"
              href={SOCIAL_LINKS.twitter}
            />
            <li className="card-apex p-4 flex items-center gap-4 opacity-70">
              <div className="h-10 w-10 rounded-md bg-surface-2 text-muted-strong flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-strong">
                  Business Email
                </p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
              <Lock className="h-4 w-4 text-muted-strong" />
            </li>
          </ul>
        </div>

        <ContactForm />
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="card-apex p-4 flex items-center gap-4"
      >
        <div className="h-10 w-10 rounded-md bg-surface-2 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-strong">
            {label}
          </p>
          <p className="text-sm text-cream font-medium">{value}</p>
        </div>
      </a>
    </li>
  );
}
