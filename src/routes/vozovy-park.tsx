import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FleetCard } from "@/components/FleetCard";
import { fleet } from "@/data/site";

export const Route = createFileRoute("/vozovy-park")({
  head: () => ({
    meta: [
      { title: "Vozový park — PM-servis" },
      {
        name: "description",
        content:
          "Moderní autobusy a minibusy PM-servis: MAN Lion´s Coach, Irisbus Evadys, Bova Futura, Iveco Mago, Isuzu Turquoise a Mercedes-Benz Sprinter.",
      },
      { property: "og:title", content: "Vozový park — PM-servis" },
      {
        property: "og:description",
        content: "Prohlédněte si náš moderní vozový park pro 20 až 59 cestujících.",
      },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-12 lg:pt-24">
        <span className="mb-6 inline-block rounded bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
          Náš vozový park
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight lg:text-6xl">
          Moderní vozy pro každou příležitost
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Od minibusu pro malé skupiny až po reprezentativní dálkový autobus. Všechny
          vozy mají bezpečnostní pásy, polohovatelné sedačky a pravidelný servis.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <FleetCard key={v.slug} vehicle={v} />
          ))}

          {/* Trailer card */}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-border bg-surface p-8">
            <h3 className="mb-2 text-xl font-bold">Přívěsný zaplachtovaný vozík</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Objem nákladového prostoru 7 m². Vhodné jako další zavazadlový prostor pro
              vaše zájezdy a akce.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-navy p-8 text-center text-primary-foreground lg:p-12">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Vyberte si vůz a pošlete poptávku
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/70">
            Rádi vám doporučíme nejvhodnější vůz podle počtu cestujících a trasy.
          </p>
          <Link
            to="/kontakt"
            className="inline-block rounded-xl bg-gold px-10 py-4 font-bold text-gold-foreground transition-all hover:brightness-110"
          >
            Nezávazná poptávka
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
