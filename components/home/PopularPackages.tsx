"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Shield, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

const categories = ["All", "Beach & Wellness", "Mountain & Adventure", "City & Luxury", "Culture & City"] as const;

export function PopularPackages() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered = activeCategory === "All"
    ? packages
    : packages.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 5)));

  return (
    <Section className="bg-secondary/35 relative">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/70 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Flame className="size-3.5" /> Curated Holiday Experiences
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Signature Travel Packages
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-xl">
              Handcrafted itineraries featuring boutique stays, private airport transfers, curated excursions, and 24/7 in-destination support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-background text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}

            <Link
              href="/packages"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary ml-1"
            >
              Browse All ({packages.length}) <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Perks Trust Banner underneath packages */}
        <div className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-accent/10 p-6 sm:p-8 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-3 items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
                <Shield className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">100% Price Match Guarantee</h4>
                <p className="text-xs text-muted-foreground">Found the same package cheaper? We refund the difference instantly.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-md shadow-accent/20">
                <Sparkles className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">VIP Flexible Booking</h4>
                <p className="text-xs text-muted-foreground">Complimentary date changes up to 14 days before your departure.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                <ArrowRight className="size-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">Custom Private Itineraries</h4>
                <p className="text-xs text-muted-foreground">Speak directly with our destination concierge to customize any trip.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
