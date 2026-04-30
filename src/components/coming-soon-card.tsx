import { Lock } from "lucide-react";

export default function ComingSoonCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-1 p-6">
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-md bg-primary-muted text-primary flex items-center justify-center">
          <Lock className="h-4 w-4" />
        </div>
        <span className="pill-orange">Coming Soon</span>
      </div>
      <h3 className="mt-4 font-display font-semibold text-cream text-lg">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
