import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Truck, ClipboardCheck, CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { company } from "@/data/site";

export const Route = createFileRoute("/kariera")({
  head: () => ({
    meta: [
      { title: "Kariéra — PM-servis" },
      {
        name: "description",
        content:
          "Hledáme řidiče autobusu a řidiče nákladních vozidel. Dobré platové ohodnocení, bonusy a stabilní zaměstnání v PM-servis.",
      },
      { property: "og:title", content: "Kariéra — PM-servis" },
      {
        property: "og:description",
        content: "Přidejte se k týmu PM-servis. Aktuálně hledáme řidiče autobusu a řidiče nákladních vozidel.",
      },
    ],
  }),
  component: CareersPage,
});

const positions = [
  {
    icon: Bus,
    title: "Řidič autobusu",
    subtitle: "2 volné pozice",
    summary: "Hledáme zkušeného řidiče autobusu pro vnitrostátní a mezinárodní zájezdovou dopravu.",
  },
  {
    icon: Truck,
    title: "Řidič nákladního vozidla",
    subtitle: "2 volné pozice",
    summary: "Hledáme spolehlivého řidiče nákladního vozidla pro nákladní dopravu.",
  },
];

const requirements = [
  "Platné řidičské oprávnění",
  "Platný profesní průkaz",
  "Platné psychotesty",
  "Bezúhonnost",
  "Praxe v oboru",
  "Bydliště v Královéhradeckém kraji",
  "Komunikace v anglickém / německém jazyce – výhodou",
];

const benefits = [
  "Dobré platové ohodnocení",
  "Bonusy",
  "Stabilní zaměstnání",
  "Přátelský kolektiv",
];

function CareersPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-12 lg:pt-24">
        <span className="mb-6 inline-block rounded bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
          Kariéra
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight lg:text-6xl">
          Přidejte se k našemu týmu
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Právě hledáme nové kolegy na pozice řidiče autobusu a řidiče nákladního vozidla. Nabízíme
          dobré platové ohodnocení, bonusy a stabilní zaměstnání v rodinné firmě.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {positions.map((position) => (
            <PositionCard key={`${position.title}-${position.subtitle}`} position={position} />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-12">
        <div className="rounded-3xl bg-navy p-8 text-center text-primary-foreground lg:p-16">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Máte zájem o práci u nás?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/70">
            Pro bližší informace nás kontaktujte telefonicky, e-mailem nebo přes WhatsApp. Rádi vám
            vše podrobně vysvětlíme.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 font-bold text-gold-foreground transition-all hover:brightness-110"
            >
              <Phone className="size-5" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-8 py-4 font-bold transition-all hover:bg-primary-foreground/10"
            >
              <Mail className="size-5" />
              {company.email}
            </a>
            <a
              href={`https://wa.me/${company.phone.replace(/\s/g, "").replace(/^\+/, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-8 py-4 font-bold transition-all hover:bg-primary-foreground/10"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PositionCard({
  position,
}: {
  position: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    summary: string;
  };
}) {
  const Icon = position.icon;
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-14 place-items-center rounded-xl bg-gold/10 text-gold">
          <Icon className="size-7" />
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
          {position.subtitle}
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-bold">{position.title}</h2>
        <p className="mt-2 text-muted-foreground">{position.summary}</p>
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
          <ClipboardCheck className="size-4" />
          Požadujeme
        </h3>
        <ul className="space-y-2">
          {requirements.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="text-muted-foreground">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Nabízíme</h3>
        <ul className="space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/kontakt"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-center font-bold text-primary-foreground transition-all hover:bg-gold"
      >
        Mám zájem o pozici
      </Link>
    </div>
  );
}
