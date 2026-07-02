import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Building2, Construction, Globe } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/data/site";
import serviceScaffolding from "@/assets/service-scaffolding.jpg";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — PM-servis" },
      {
        name: "description",
        content:
          "Autobusová doprava, technická správa a údržba nemovitostí, půjčovna pojízdného hliníkového lešení a tvorba webových stránek od PM-servis.",
      },
      { property: "og:title", content: "Služby — PM-servis" },
      {
        property: "og:description",
        content: "Komplexní služby s důrazem na kvalitu, spolehlivost a individuální přístup.",
      },
    ],
  }),
  component: ServicesPage,
});

const icons = [Bus, Building2, Construction, Globe];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-12 lg:pt-24">
        <span className="mb-6 inline-block rounded bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
          Přehled služeb
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight lg:text-6xl">
          Vše, co pro vás zajišťujeme
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          V naší společnosti klademe důraz na kvalitní služby, individuální přístup a
          spolehlivost. Naším cílem je, aby byla každá vaše cesta nebo projekt co
          nejjednodušší a bez starostí.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={s.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="size-6" />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface">
            <img
              src={serviceScaffolding}
              alt="Pojízdné hliníkové lešení"
              loading="lazy"
              width={800}
              height={600}
              className="size-full object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Půjčovna lešení i správa objektů</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Kromě dopravy nabízíme pronájem profesionálního pojízdného hliníkového
              lešení pro bezpečnou práci ve výškách a komplexní technickou správu a
              údržbu nemovitostí.
            </p>
            <Link
              to="/kontakt"
              className="inline-block rounded-xl bg-navy px-8 py-4 font-bold text-primary-foreground transition-all hover:bg-gold"
            >
              Mám zájem o službu
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
