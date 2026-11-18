import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Globe2,
  Headset,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/Primitives";
import { SearchWidget } from "@/components/home/SearchWidget";
import { stats } from "@/data/content";

export function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white flex flex-col justify-center">
      {/* Background Hero Image with Layered Gradient Overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic tropical island and ocean"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.18),transparent_55%)]" />
      </div>

      <Container className="py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Top Badges & Social Proof */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
            <span className="flex size-2 rounded-full bg-accent animate-ping" />
            <Sparkles className="size-3.5 text-accent" />
            <span className="tracking-wide text-white/90">Next-Generation Travel Booking Experience</span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-3.5 py-1 text-xs backdrop-blur-md">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
                className="size-6 rounded-full border border-white/40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
                className="size-6 rounded-full border border-white/40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                alt="Traveler"
                className="size-6 rounded-full border border-white/40 object-cover"
              />
            </div>
            <div className="flex items-center gap-1 font-semibold text-white">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              <span>4.95 / 5</span>
              <span className="font-normal text-white/70">(48,000+ Travelers)</span>
            </div>
          </div>
        </div>

        {/* Main Headline & Description */}
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
            Journey Beyond <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">Ordinary.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-xl font-light max-w-2xl">
            Book international flights, VIP coach routes, and bespoke all-inclusive holiday packages with total transparency, zero hidden fees, and dedicated 24/7 concierge care.
          </p>

          {/* Quick Vibe Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-medium text-white/60">Quick Inspiration:</span>
            {[
              { label: "🏖️ Bali Villas", href: "/packages/bali-escape" },
              { label: "🏔️ Swiss Glacier Rail", href: "/packages/swiss-alps-adventure" },
              { label: "🏛️ Ancient Kyoto", href: "/destinations/kyoto" },
              { label: "🌅 Santorini Romance", href: "/packages/santorini-sunset-romance" },
              { label: "✨ Dubai Skyline", href: "/packages/dubai-city-luxe" },
            ].map((vibe) => (
              <Link
                key={vibe.label}
                href={vibe.href}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-medium text-white/90 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/20 hover:text-white"
              >
                {vibe.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Search Widget Container */}
        <div className="mt-8 sm:mt-10">
          <SearchWidget />
        </div>

        {/* Floating Trust Metric Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="group">
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl tracking-tight flex items-baseline gap-1">
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                {item.label}
              </div>
              <div className="text-[11px] text-white/50">{item.sub}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
