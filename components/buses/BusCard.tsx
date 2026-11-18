import Link from "next/link";
import {
  AlertCircle,
  Bus,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  Star,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

type BusItem = {
  id: string;
  operator: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  type: string;
  seatsLeft: number;
  price: number;
  originalPrice?: number;
  rating?: number;
  amenities?: string[];
};

export function BusCard({ bus }: { bus: BusItem }) {
  const isUrgent = bus.seatsLeft <= 6;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Operator Info */}
        <div className="flex items-center gap-3.5 sm:w-56 shrink-0">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/20">
            <Bus className="size-6" />
          </div>
          <div>
            <div className="font-heading text-base font-bold text-foreground">
              {bus.operator}
            </div>
            <div className="text-xs text-muted-foreground">
              {bus.id} · {bus.type}
            </div>
            {bus.rating && (
              <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-foreground">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                <span>{bus.rating} / 5.0</span>
              </div>
            )}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-4 sm:px-6">
          {/* Departure */}
          <div>
            <div className="text-2xl font-black text-foreground tracking-tight">
              {bus.departure}
            </div>
            <div className="text-xs font-semibold text-foreground/90 mt-0.5 line-clamp-1 max-w-[140px]">
              {bus.from}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              Boarding Terminal
            </div>
          </div>

          {/* Timeline Center */}
          <div className="flex flex-1 flex-col items-center px-4 max-w-[180px]">
            <div className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
              <Clock3 className="size-3.5" />
              <span>{bus.duration}</span>
            </div>

            <div className="my-2 relative flex items-center w-full">
              <div className="h-0.5 w-full bg-border/80" />
              <div className="absolute left-1/2 -translate-x-1/2 flex size-6 items-center justify-center rounded-full bg-card border border-border shadow-xs text-emerald-600">
                <Bus className="size-3.5" />
              </div>
            </div>

            <div className="text-[11px] font-semibold text-muted-foreground">
              Express Coach
            </div>
          </div>

          {/* Arrival */}
          <div className="text-right">
            <div className="text-2xl font-black text-foreground tracking-tight">
              {bus.arrival}
            </div>
            <div className="text-xs font-semibold text-foreground/90 mt-0.5 line-clamp-1 max-w-[140px]">
              {bus.to}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              Arrival Station
            </div>
          </div>
        </div>

        {/* Seats urgency & CTA */}
        <div className="flex items-end justify-between gap-4 border-t border-border/70 pt-4 lg:w-56 lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="lg:text-right">
            <div className="text-[11px] text-muted-foreground flex items-center gap-1 lg:justify-end">
              <span>Per seat</span>
              {bus.originalPrice && (
                <span className="line-through text-muted-foreground/70">${bus.originalPrice}</span>
              )}
            </div>
            <div className="text-3xl font-extrabold text-foreground tracking-tight">
              ${bus.price}
            </div>
            <div className="mt-0.5">
              {isUrgent ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent">
                  <AlertCircle className="size-3" /> Only {bus.seatsLeft} seats left!
                </span>
              ) : (
                <span className="text-[11px] text-muted-foreground">
                  {bus.seatsLeft} seats available
                </span>
              )}
            </div>
          </div>

          <Link
            href={`/buses/${bus.id}`}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-600/90 hover:to-teal-800 hover:shadow-lg active:scale-95"
          >
            Select Seats
          </Link>
        </div>
      </div>

      {/* Bus Amenities Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center gap-2">
          {(bus.amenities || []).map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1 rounded-lg border border-border/70 px-2.5 py-0.5 text-[11px]"
            >
              <Sparkles className="size-2.5 text-accent" /> {amenity}
            </span>
          ))}
        </div>

        <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="size-3" /> Live Seat Selection
        </div>
      </div>
    </div>
  );
}
