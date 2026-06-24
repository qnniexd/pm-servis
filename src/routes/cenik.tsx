import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Truck, Percent, BadgePercent } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { priceZones, priceDiscounts, pricing } from "@/data/site";

export const Route = createFileRoute("/cenik")({
  head: () => ({
    meta: [
      { title: "Ceník — PM-servis" },
      {
        name: "description",
        content:
          "Orientační ceník autobusové dopravy PM-servis. Ceny za kilometr ve třech cenových pásmech pro jednotlivé autobusy, slevy pro školy a seniory.",
      },
      { property: "og:title", content: "Ceník — PM-servis" },
      {
        property: "og:description",
        content:
          "Ceny za kilometr ve třech cenových pásmech pro jednotlivé autobusy a minibusy.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-12 lg:pt-24">
        <span className="mb-6 inline-block rounded bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
          Orientační ceník
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight lg:text-6xl">
          Ceny za jednotlivé autobusy
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Každá zakázka je posuzována individuálně. Orientační ceny se pohybují
          ve třech cenových pásmech podle nájezdu kilometrů. Pro přesnou kalkulaci
          nás neváhejte kontaktovat.
        </p>
      </section>

      {/* Zones + discounts */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {priceZones.map((z) => (
            <div
              key={z.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <MapPin className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">{z.label}</h2>
                <p className="text-sm text-muted-foreground">{z.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
              <BadgePercent className="size-5" />
            </div>
            <h2 className="text-lg font-bold">Slevy</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {priceDiscounts.map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gold">{d.value}</span>
                <div>
                  <p className="text-sm font-semibold">{d.label}</p>
                  <p className="text-xs text-muted-foreground">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-12 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="border-b border-border bg-navy px-6 py-5">
                <h3 className="text-xl font-bold text-primary-foreground">{p.name}</h3>
              </div>
              <div className="flex flex-col">
                {[
                  { label: priceZones[0].label, sub: priceZones[0].note, value: p.zone1 },
                  { label: priceZones[1].label, sub: priceZones[1].note, value: p.zone2 },
                  { label: priceZones[2].label, sub: priceZones[2].note, value: p.zone3 },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-border px-6 py-4"
                  >
                    <div>
                      <p className="font-semibold">{row.label}</p>
                      <p className="text-xs text-muted-foreground">{row.sub}</p>
                    </div>
                    <span className="whitespace-nowrap text-lg font-bold text-gold">
                      {row.value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Truck className="size-4 text-muted-foreground" />
                    <p className="font-medium">Osobní přívěs</p>
                  </div>
                  <span className="whitespace-nowrap font-semibold">{p.trailer}</span>
                </div>
                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Clock className="size-4 text-muted-foreground" />
                    <p className="font-medium">Čekání / prodlevy</p>
                  </div>
                  <span className="whitespace-nowrap font-semibold">{p.waiting}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Percent className="size-4 text-gold" />
          Uvedené ceny jsou orientační a bez DPH. Konečná cena je vždy stanovena
          individuálně dle konkrétní zakázky.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-14 text-center">
          <h2 className="max-w-2xl text-3xl font-bold lg:text-4xl">
            Chcete přesnou cenovou nabídku?
          </h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Napište nám trasu a termín a my vám připravíme nezávaznou kalkulaci na míru.
          </p>
          <Link
            to="/kontakt"
            className="inline-block rounded-xl bg-navy px-8 py-4 font-bold text-primary-foreground transition-all hover:bg-gold"
          >
            Nezávazná poptávka
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
