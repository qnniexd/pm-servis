import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { company, services } from "@/data/site";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt a poptávka — PM-servis" },
      {
        name: "description",
        content:
          "Kontaktujte PM-servis a získejte nezávaznou cenovou nabídku na autobusovou dopravu. Telefon, e-mail a poptávkový formulář.",
      },
      { property: "og:title", content: "Kontakt a poptávka — PM-servis" },
      {
        property: "og:description",
        content: "Pošlete nám nezávaznou poptávku — připravíme kalkulaci na míru.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(sendContactMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          service: String(fd.get("service") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Odeslání se nezdařilo. Zkuste to prosím později.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="bg-navy py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="mb-6 inline-block rounded bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              Nezávazná poptávka
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Plánujete cestu? Napište nám.
            </h1>
            <p className="mb-10 max-w-md leading-relaxed text-primary-foreground/70">
              Náš tým je připraven sestavit vám individuální cenovou nabídku na míru
              vašim požadavkům. Ozveme se vám co nejdříve.
            </p>

            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Telefon</h3>
                <a href="tel:+420778204815" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Phone className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">+420 778 204 815</span>
                    <span className="text-sm text-primary-foreground/60">Lubomír Morávek</span>
                  </div>
                </a>
                <a href="tel:+420723369098" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Phone className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">+420 723 369 098</span>
                    <span className="text-sm text-primary-foreground/60">Eva Morávková</span>
                  </div>
                </a>
                <a href="tel:+420601577887" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Phone className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">+420 601 577 887</span>
                    <span className="text-sm text-primary-foreground/60">Nákladní doprava</span>
                  </div>
                </a>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gold">E-mail</h3>
                <a href="mailto:servis.pm@seznam.cz" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Mail className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">servis.pm@seznam.cz</span>
                    <span className="text-sm text-primary-foreground/60">Autobusová doprava</span>
                  </div>
                </a>
                <a href="mailto:pm-trans@seznam.cz" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Mail className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">pm-trans@seznam.cz</span>
                    <span className="text-sm text-primary-foreground/60">Nákladní doprava</span>
                  </div>
                </a>
                <a href="mailto:faktury.pmservis@seznam.cz" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Mail className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">faktury.pmservis@seznam.cz</span>
                    <span className="text-sm text-primary-foreground/60">Fakturace</span>
                  </div>
                </a>
                <a href="mailto:pisarikova.annie@gmail.com" className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                    <Mail className="size-5 text-gold" />
                  </div>
                  <div>
                    <span className="block font-semibold">pisarikova.annie@gmail.com</span>
                    <span className="text-sm text-primary-foreground/60">Webové stránky</span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="grid size-11 place-items-center rounded-full bg-primary-foreground/10">
                  <MapPin className="size-5 text-gold" />
                </div>
                <span className="font-semibold">{company.address}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 text-foreground">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <h2 className="mb-3 text-2xl font-bold">Děkujeme!</h2>
                <p className="max-w-sm text-muted-foreground">
                  Vaše poptávka byla odeslána. Ozveme se vám co nejdříve s kalkulací na
                  míru.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Jméno">
                    <input
                      required
                      name="name"
                      type="text"
                      maxLength={100}
                      placeholder="Jan Novák"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                    />
                  </Field>
                  <Field label="Telefon">
                    <input
                      name="phone"
                      type="tel"
                      maxLength={40}
                      placeholder="+420 …"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                    />
                  </Field>
                </div>
                <Field label="E-mail">
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder="email@example.cz"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </Field>
                <Field label="Služba, o kterou máte zájem">
                  <select
                    required
                    name="service"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>
                      Vyberte službu
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Detaily poptávky">
                  <textarea
                    required
                    name="message"
                    rows={4}
                    maxLength={2000}
                    placeholder="Popište, co potřebujete – termín, rozsah, počet osob, místo…"
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                </Field>
                {error && (
                  <p className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-bold text-gold-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting && <Loader2 className="size-5 animate-spin" />}
                  {submitting ? "Odesílání…" : "Odeslat nezávaznou poptávku"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
