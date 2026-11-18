import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  Luggage,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Shield,
  Sparkles,
  Utensils,
  Wifi,
} from "lucide-react";

type FlightItem = {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber?: string;
  aircraft?: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
  stopCity?: string;
  price: number;
  originalPrice?: number;
  class: string;
  refundable?: boolean;
  baggage?: string;
  amenities?: string[];
  logoColor?: string;
};

export function FlightCard({ flight }: { flight: FlightItem }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Airline Info */}
        <div className="flex items-center gap-3.5 sm:w-56 shrink-0">
          <div
            className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${
              flight.logoColor || "from-primary to-blue-700"
            } font-heading text-base font-bold text-white shadow-md shadow-primary/15`}
          >
            {flight.airlineCode}
          </div>
          <div>
            <div className="font-heading text-base font-bold text-foreground">
              {flight.airline}
            </div>
            <div className="text-xs text-muted-foreground">
              {flight.flightNumber || flight.id} · {flight.aircraft || "Modern Jetliner"}
            </div>
            <div className="mt-0.5 inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
              {flight.class}
            </div>
          </div>
        </div>

        {/* Flight Route Timeline Card */}
        <div className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-4 sm:px-6">
          {/* Departure */}
          <div>
            <div className="text-2xl font-black text-foreground tracking-tight">
              {flight.departure}
            </div>
            <div className="text-xs font-semibold text-foreground/90 mt-0.5">
              {flight.from}
            </div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
              <PlaneTakeoff className="size-3 text-primary" /> Departure
            </div>
          </div>

          {/* Timeline Center Diagram */}
          <div className="flex flex-1 flex-col items-center px-4 max-w-[200px]">
            <div className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
              <Clock3 className="size-3.5" />
              <span>{flight.duration}</span>
            </div>

            <div className="my-2 relative flex items-center w-full">
              <div className="h-0.5 w-full bg-border/80" />
              <div className="absolute left-1/2 -translate-x-1/2 flex size-6 items-center justify-center rounded-full bg-card border border-border shadow-xs text-primary">
                <Plane className="size-3.5 rotate-90" />
              </div>
            </div>

            <div className="text-[11px] font-bold">
              {flight.stops === 0 ? (
                <span className="text-emerald-600 dark:text-emerald-400">Direct Flight</span>
              ) : (
                <span className="text-amber-600 dark:text-amber-400">
                  {flight.stops} Stop {flight.stopCity ? `(${flight.stopCity})` : ""}
                </span>
              )}
            </div>
          </div>

          {/* Arrival */}
          <div className="text-right">
            <div className="text-2xl font-black text-foreground tracking-tight">
              {flight.arrival}
            </div>
            <div className="text-xs font-semibold text-foreground/90 mt-0.5">
              {flight.to}
            </div>
            <div className="text-[11px] text-muted-foreground flex items-center justify-end gap-1 mt-0.5">
              <PlaneLanding className="size-3 text-accent" /> Arrival
            </div>
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="flex items-end justify-between gap-4 border-t border-border/70 pt-4 lg:w-56 lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="lg:text-right">
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 lg:justify-end">
              <span>Total per adult</span>
              {flight.originalPrice && (
                <span className="line-through text-muted-foreground/70">${flight.originalPrice}</span>
              )}
            </div>
            <div className="text-3xl font-extrabold text-foreground tracking-tight">
              ${flight.price}
            </div>
            {flight.refundable ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3" /> Refundable Ticket
              </span>
            ) : (
              <span className="text-[11px] text-muted-foreground">Standard Fare</span>
            )}
          </div>

          <Link
            href={`/flights/${flight.id}`}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-primary/20 transition hover:from-primary/90 hover:to-blue-700 hover:shadow-lg active:scale-95"
          >
            Select Flight
          </Link>
        </div>
      </div>

      {/* Flight Amenities and Baggage Pill Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center gap-2">
          {flight.baggage && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-foreground">
              <Luggage className="size-3 text-primary" /> {flight.baggage}
            </span>
          )}
          {(flight.amenities || []).map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1 rounded-lg border border-border/70 px-2 py-0.5 text-[11px]"
            >
              <Sparkles className="size-2.5 text-accent" /> {amenity}
            </span>
          ))}
        </div>

        <div className="text-[11px] font-medium text-muted-foreground">
          Instant E-Ticket · Free Seat Preview
        </div>
      </div>
    </div>
  );
}
