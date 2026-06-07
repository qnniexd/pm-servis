import { Check } from "lucide-react";
import type { Vehicle } from "@/data/site";

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
      <div className="aspect-video overflow-hidden bg-surface">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          width={800}
          height={600}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">{vehicle.name}</h3>
            <p className="text-sm text-muted-foreground">{vehicle.tagline}</p>
          </div>
          <span className="shrink-0 rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
            {vehicle.seats}
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {vehicle.description}
        </p>
        <ul className="mt-auto grid gap-2 border-t border-border pt-5 text-sm">
          {vehicle.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="size-4 shrink-0 text-gold" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
