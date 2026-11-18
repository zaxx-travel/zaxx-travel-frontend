"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Flame, MapPin, Sparkles, Star, Thermometer } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { destinations } from "@/data/content";
import { cn } from "@/lib/utils";

const regions = ["All", "Europe", "Asia", "Middle East"] as const;

export function FeaturedDestinations() {
  const [activeRegion, setActiveRegion] = useState<(typeof regions)[number]>("All");

  const filtered = activeRegion === "All"
    ? destinations
    : destinations.filter((d) => d.region === activeRegion);

  return (
    <Section className="bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-1/4 -z-10 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute left-0 bottom-1/4 -z-10 size-96 rounded-full bg-accent/5 blur-3xl" />

      <Container>
        {/* Header with Title and Region Filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/60 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" /> Handpicked Wonders
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Iconic World Destinations
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-xl">
              From sacred Kyoto bamboo temples to Santorini cliffside sunsets, find inspiration for your next dream itinerary.
            </p>
          </div>

          {/* Region Tabs & View All */}
          <div className="flex flex-wrap items-center gap-2">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                  activeRegion === region
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {region}
              </button>
            ))}

            <Link
              href="/destinations"
              className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary ml-2"
            >
              View All ({destinations.length}) <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Discount / Tag Badge */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {d.discount && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      <Flame className="size-3" /> {d.discount}
                    </span>
                  )}
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                    {d.tag}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  <span>{d.rating}</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-medium text-white/80">
                      <MapPin className="size-3.5 text-accent" />
                      <span>{d.country}</span>
                      <span>·</span>
                      <span>{d.region}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {d.name}
                    </h3>
                  </div>

                  {d.temperature && (
                    <div className="flex items-center gap-1 rounded-lg bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur-md">
                      <Thermometer className="size-3.5 text-amber-300" />
                      <span>{d.temperature}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {d.summary}
                </p>

                {/* Highlights tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Card Footer with Price & CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Trips Starting From
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      ${d.fromPrice}
                      <span className="text-xs font-normal text-muted-foreground"> / person</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform">
                    Explore Guides <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
