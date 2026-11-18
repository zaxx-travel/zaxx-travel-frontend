"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  Bus,
  Calendar,
  CheckCircle2,
  Compass,
  MapPin,
  Package,
  Plane,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "buses", label: "Buses & Coaches", icon: Bus },
  { id: "packages", label: "Holiday Packages", icon: Package },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function SearchWidget({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<TabId>("flights");

  return (
    <div
      className={cn(
        "relative w-full rounded-3xl border border-border/80 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-all",
        compact ? "p-4" : "p-5 sm:p-7"
      )}
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className={cn("size-4", isActive ? "animate-pulse" : "")} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 text-xs font-medium text-muted-foreground md:flex">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-3.5" /> Best Price Guarantee
          </span>
          <span>·</span>
          <span>Instant Confirmation</span>
        </div>
      </div>

      {/* Tab Forms */}
      <div className="pt-5">
        {active === "flights" && <FlightForm />}
        {active === "buses" && <BusForm />}
        {active === "packages" && <PackageForm />}
      </div>

      {/* Quick Search Suggestions */}
      {!compact && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground flex items-center gap-1">
            <Sparkles className="size-3 text-accent" /> Popular Searches:
          </span>
          {[
            { label: "New York → London", href: "/flights/search?from=New+York&to=London" },
            { label: "Bali Retreat Packages", href: "/packages/bali-escape" },
            { label: "Swiss Alps Scenic Rail", href: "/packages/swiss-alps-adventure" },
            { label: "NY → Boston Express Bus", href: "/buses/search?from=New+York&to=Boston" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full bg-secondary/80 px-3 py-1 font-medium transition hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function FlightForm() {
  const [tripType, setTripType] = useState<"round" | "oneway">("round");
  const [from, setFrom] = useState("New York (JFK)");
  const [to, setTo] = useState("London (LHR)");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <form action="/flights/search" className="space-y-4">
      {/* Sub options: Round trip / One way + Class */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTripType("round")}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition",
              tripType === "round"
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Round Trip
          </button>
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition",
              tripType === "oneway"
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            One Way
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <select
            name="cabinClass"
            defaultValue="Economy"
            className="rounded-lg border border-border/80 bg-background px-2.5 py-1 text-xs font-medium text-foreground outline-none transition focus:border-primary"
          >
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business Class</option>
            <option value="First">First Class</option>
          </select>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        {/* From */}
        <div className="relative sm:col-span-1 lg:col-span-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Departure Airport
          </label>
          <div className="relative flex items-center">
            <MapPin className="absolute left-3.5 size-4 text-primary" />
            <input
              type="text"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
              placeholder="City or Airport"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Swap button */}
        <div className="hidden lg:flex lg:col-span-1 items-end justify-center pb-1">
          <button
            type="button"
            onClick={handleSwap}
            title="Swap Locations"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition hover:border-primary hover:bg-primary hover:text-white"
          >
            <ArrowLeftRight className="size-4" />
          </button>
        </div>

        {/* To */}
        <div className="relative sm:col-span-1 lg:col-span-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Destination Airport
          </label>
          <div className="relative flex items-center">
            <Plane className="absolute left-3.5 size-4 text-accent" />
            <input
              type="text"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              placeholder="City or Airport"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="sm:col-span-1 lg:col-span-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Depart Date
          </label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3.5 size-4 text-muted-foreground" />
            <input
              type="date"
              name="departure"
              defaultValue="2026-12-10"
              required
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-2 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Return Date / Travelers */}
        {tripType === "round" ? (
          <div className="sm:col-span-1 lg:col-span-3">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Return Date
            </label>
            <div className="relative flex items-center">
              <Calendar className="absolute left-3.5 size-4 text-muted-foreground" />
              <input
                type="date"
                name="return"
                defaultValue="2026-12-20"
                className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-2 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>
        ) : (
          <div className="sm:col-span-1 lg:col-span-3">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Travelers
            </label>
            <div className="relative flex items-center">
              <Users className="absolute left-3.5 size-4 text-muted-foreground" />
              <select
                name="travelers"
                defaultValue="1"
                className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="1">1 Adult Passenger</option>
                <option value="2">2 Adult Passengers</option>
                <option value="3">3 Adult Passengers</option>
                <option value="4">Family (2 Adults, 2 Kids)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex justify-end">
        <Button
          type="submit"
          className="h-12 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-700 px-8 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          <Search className="size-4" /> Find Lowest Flight Fares
        </Button>
      </div>
    </form>
  );
}

function BusForm() {
  const [from, setFrom] = useState("New York, Port Authority");
  const [to, setTo] = useState("Boston, South Station");

  return (
    <form action="/buses/search" className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-1 lg:col-span-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Pick-up Terminal / City
          </label>
          <div className="relative flex items-center">
            <MapPin className="absolute left-3.5 size-4 text-primary" />
            <input
              type="text"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
              placeholder="Departure City"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="sm:col-span-1 lg:col-span-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Drop-off Terminal / City
          </label>
          <div className="relative flex items-center">
            <Bus className="absolute left-3.5 size-4 text-accent" />
            <input
              type="text"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              placeholder="Destination City"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="sm:col-span-1 lg:col-span-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Journey Date
          </label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3.5 size-4 text-muted-foreground" />
            <input
              type="date"
              name="date"
              defaultValue="2026-12-10"
              required
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-2 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="sm:col-span-1 lg:col-span-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Seats
          </label>
          <div className="relative flex items-center">
            <Users className="absolute left-3.5 size-4 text-muted-foreground" />
            <select
              name="passengers"
              defaultValue="1"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4+ Passengers</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <Button
          type="submit"
          className="h-12 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-700 px-8 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          <Search className="size-4" /> Search Bus Schedules & Seats
        </Button>
      </div>
    </form>
  );
}

function PackageForm() {
  return (
    <form action="/packages" className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-5">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Where would you love to travel?
          </label>
          <div className="relative flex items-center">
            <Compass className="absolute left-3.5 size-4 text-primary" />
            <input
              type="text"
              name="destination"
              defaultValue="Bali, Indonesia"
              placeholder="e.g. Bali, Swiss Alps, Santorini, Kyoto..."
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="sm:col-span-1 lg:col-span-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Departure Month
          </label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3.5 size-4 text-muted-foreground" />
            <input
              type="month"
              name="month"
              defaultValue="2026-12"
              className="h-12 w-full rounded-2xl border border-input bg-background/80 pl-10 pr-2 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="sm:col-span-1 lg:col-span-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Budget per Person
          </label>
          <select
            name="budget"
            defaultValue="any"
            className="h-12 w-full rounded-2xl border border-input bg-background/80 px-3 text-xs font-semibold text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          >
            <option value="any">Any Budget (All Packages)</option>
            <option value="1000">Economy Explorer (&lt; $1,000)</option>
            <option value="2000">Premium Comfort ($1,000 – $2,000)</option>
            <option value="3000">Ultra-Luxury Collection ($2,000+)</option>
          </select>
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <Button
          type="submit"
          className="h-12 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-indigo-700 px-8 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          <Search className="size-4" /> Explore Curated Packages
        </Button>
      </div>
    </form>
  );
}
