import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FleetCard } from "@/components/FleetCard";
import { fleet, company } from "@/data/site";
import heroCoach from "@/assets/hero-coach.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PM-servis — Autobusová doprava a přeprava osob" },
      {
        name: "description",
        content:
          "Profesionální vnitrostátní i mezinárodní autobusová doprava moderním vozovým parkem. Nezávazná poptávka a kalkulace na míru do 24 hodin.",
      },
      { property: "og:title", content: "PM-servis — Autobusová doprava" },
      {
        property: "og:description",
        content:
          "Bezpečná a pohodlná přeprava osob moderními autobusy a minibusy po celé Evropě.",
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { label: "Dosah", value: "Celá Evropa" },
  { label: "Flotila", value: `${fleet.length}+ vozů` },
  { label: "Kapacita", value: "20 – 59 míst" },
  { label: "Servis", value: "Individuální přístup" },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              Profesionální autodoprava
            </span>
            <h1 className="mb-8 text-5xl font-bold leading-[1.1] lg:text-7xl">
              Vaše cesta začíná u nás.
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
              Zajišťujeme vnitrostátní i mezinárodní autobusovou dopravu s důrazem na
              bezpečnost, dochvilnost a maximální komfort cestujících.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/vozovy-park"
                className="rounded-xl bg-navy px-8 py-4 font-bold text-primary-foreground transition-all hover:shadow-xl"
              >
                Prohlédnout vozy
              </Link>
              <Link
                to="/sluzby"
                className="rounded-xl border border-border px-8 py-4 font-bold transition-all hover:bg-secondary"
              >
                Naše služby
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={heroCoach}
                alt="Moderní autobus PM-servis"
                width={1200}
                height={900}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-6 shadow-2xl md:block">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-xs font-semibold uppercase tracking-tight text-muted-foreground">
                Let zkušeností
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-surface py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-12">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
              <div className="text-xl font-bold">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Náš moderní vozový park</h2>
            <p className="max-w-lg text-muted-foreground">
              Všechny naše vozy pravidelně servisujeme a udržujeme v perfektní čistotě
              pro váš nejlepší zážitek z cestování.
            </p>
          </div>
          <Link
            to="/vozovy-park"
            className="text-sm font-bold uppercase tracking-wider text-gold underline decoration-2 underline-offset-4"
          >
            Zobrazit všechny vozy
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.slice(0, 3).map((v) => (
            <FleetCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 mb-24 lg:mx-12">
        <div className="rounded-3xl bg-navy p-8 text-center text-primary-foreground lg:p-16">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            Potřebujete zajistit dopravu?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/70">
            Pošlete nám nezávaznou poptávku a my vám co nejdříve připravíme kalkulaci na
            míru.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to="/kontakt"
              className="rounded-xl bg-gold px-10 py-4 text-lg font-bold text-gold-foreground transition-all hover:brightness-110"
            >
              Spočítat cenu přepravy
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3"
            >
              <div className="grid size-12 place-items-center rounded-full bg-primary-foreground/10">
                <Phone className="size-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-tight text-primary-foreground/60">
                  Volejte kdykoliv
                </div>
                <div className="font-bold">{company.phone}</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
