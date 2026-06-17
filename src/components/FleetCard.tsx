import { Check } from "lucide-react";
import type { Vehicle } from "@/data/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const images = vehicle.images?.length ? vehicle.images : [vehicle.image];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Carousel className="size-full" opts={{ loop: true }}>
          <CarouselContent className="ml-0 size-full">
            {images.map((src, i) => (
              <CarouselItem key={i} className="pl-0">
                <img
                  src={src}
                  alt={`${vehicle.name} — fotka ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-video size-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-3 border-none bg-background/80 text-foreground hover:bg-background" />
              <CarouselNext className="right-3 border-none bg-background/80 text-foreground hover:bg-background" />
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-semibold text-foreground">
                {images.length} fotek
              </div>
            </>
          )}
        </Carousel>
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
