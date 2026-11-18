"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Pkg = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  days: number;
  nights: number;
  price: number;
  originalPrice?: number;
  discount?: string;
  badge?: string;
  rating: number;
  reviews?: number;
  category: string;
  image: string;
  highlights?: string[];
  inclusions?: string[];
};

export function PackageCard({ pkg }: { pkg: Pkg }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      {/* Top Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Badges on Top Left */}
        <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-2">
          {pkg.badge && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
              <Sparkles className="size-3" /> {pkg.badge}
            </span>
          )}
          {pkg.discount && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
              {pkg.discount}
            </span>
          )}
        </div>

        {/* Heart Wishlist Button on Top Right */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSaved(!saved);
          }}
          aria-label="Save package"
          className="absolute right-3.5 top-3.5 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:scale-110 hover:bg-black/70"
        >
          <Heart className={cn("size-4 transition-colors", saved ? "fill-red-500 text-red-500" : "")} />
        </button>

        {/* Bottom Bar on Top of Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
          <span className="inline-flex items-center gap-1 font-medium bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
            <CalendarDays className="size-3.5 text-sky-300" />
            {pkg.days} Days / {pkg.nights} Nights
          </span>
          <span className="inline-flex items-center gap-1 font-bold bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {pkg.rating} ({pkg.reviews || 120})
          </span>
        </div>
      </div>

      {/* Package Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
            <MapPin className="size-3.5" />
            <span>{pkg.destination}</span>
          </div>

          <h3 className="mt-1 font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {pkg.title}
          </h3>

          {/* Highlights checklist */}
          <div className="mt-3 space-y-1.5">
            {(pkg.highlights || []).slice(0, 3).map((h) => (
              <div key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 border-t border-border/80 pt-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
              <span>All-Inclusive</span>
              {pkg.originalPrice && (
                <span className="line-through text-muted-foreground/70">${pkg.originalPrice}</span>
              )}
            </div>
            <div className="text-2xl font-extrabold text-foreground tracking-tight">
              ${pkg.price}
              <span className="text-xs font-normal text-muted-foreground"> / guest</span>
            </div>
          </div>

          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-primary/20 transition hover:from-primary/90 hover:to-blue-700 hover:shadow-lg active:scale-95"
          >
            View Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}
