import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().min(1, "Pick a subject"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000),
});
type FormValues = z.infer<typeof schema>;

const SUBJECTS = [
  "General Inquiry", "Sponsorship / Brand Deal", "Media & Press",
  "Collaboration", "Career / Join TAG", "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { subject: "General Inquiry" } });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submission:", data);
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="card-apex p-8 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary-muted text-primary flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display font-semibold text-cream text-2xl">Message sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">We'll get back to you. #TAGonTop</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm text-primary hover:text-primary-light">
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-apex p-6 sm:p-8 space-y-5">
      <Field label="Name" error={errors.name?.message}>
        <input {...register("name")} className={inputCls} placeholder="Your name" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input type="email" {...register("email")} className={inputCls} placeholder="you@email.com" />
      </Field>
      <Field label="Subject" error={errors.subject?.message}>
        <select {...register("subject")} className={inputCls}>
          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className={inputCls + " resize-y"} placeholder="Tell us more..." />
      </Field>
      <button
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-cream hover:bg-primary-light transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"} <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}

const inputCls = "w-full rounded-md bg-surface-2 border border-border px-4 py-2.5 text-sm text-cream placeholder:text-muted-strong focus:border-primary outline-none transition-colors";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary">{label}</label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
