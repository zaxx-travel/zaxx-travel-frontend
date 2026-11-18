import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Flame,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { PackageBookingForm } from "@/components/packages/PackageBookingForm";
import { packages } from "@/data/packages";

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const galleryImages = pkg.gallery && pkg.gallery.length > 0
    ? pkg.gallery
    : [pkg.image, pkg.image, pkg.image, pkg.image];

  return (
    <Section className="pt-6 sm:pt-8 bg-background">
      <Container>
        {/* Breadcrumb / Back button */}
        <Link
          href="/packages"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline mb-6"
        >
          <ArrowLeft className="size-4" /> Back to all holiday packages
        </Link>

        {/* Main 2-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left Column: Package Details & Gallery */}
          <div className="space-y-8">
            
            {/* Header & Main Image Hero */}
            <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg">
              <div className="relative h-72 sm:h-96 w-full bg-muted">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Badges on Top */}
                <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                  {pkg.badge && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {pkg.badge}
                    </span>
                  )}
                  {pkg.discount && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {pkg.discount}
                    </span>
                  )}
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                    <MapPin className="size-4 text-accent" />
                    <span>{pkg.destination}</span>
                  </div>
                  <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
                    {pkg.title}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/90">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                      <CalendarDays className="size-3.5 text-sky-300" />
                      {pkg.days} Days / {pkg.nights} Nights
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      {pkg.rating} ({pkg.reviews} verified reviews)
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                      {pkg.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing & Key Summary Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 bg-secondary/20 p-5 sm:p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    All-Inclusive Package Price
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-foreground">
                      ${pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">/ person</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="size-5" />
                  <span>Free Cancellation up to 14 Days Prior</span>
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Package Experience Gallery
                </h2>
                <span className="text-xs text-muted-foreground">4 Curated Views</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-28 sm:h-36 w-full overflow-hidden rounded-2xl bg-muted group"
                  >
                    <Image
                      src={src}
                      alt={`${pkg.title} scene ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Trip Highlights
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h: string) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/30 p-3 text-sm text-foreground font-medium"
                  >
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Day-by-Day Itinerary
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Crafted for comfort, scenic beauty, and authentic cultural encounters.
              </p>

              <div className="mt-6 space-y-4">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="relative flex gap-4 rounded-2xl border border-border/70 bg-secondary/20 p-4 sm:p-5 transition hover:border-primary/40 hover:bg-card"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary font-heading text-sm font-bold text-primary-foreground shadow-sm">
                      D{day.day}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {day.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/10 p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="size-5" /> What Is Included
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-foreground/90">
                  {pkg.inclusions.map((inc: string) => (
                    <li key={inc} className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-muted-foreground flex items-center gap-2">
                  <X className="size-5 text-rose-500" /> What Is Not Included
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {pkg.exclusions.map((exc: string) => (
                    <li key={exc} className="flex items-start gap-2">
                      <X className="size-4 text-rose-400 mt-0.5 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl shadow-primary/5">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Book This Package
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Lock in your reservation with instant confirmation.
              </p>

              <div className="mt-5">
                <PackageBookingForm packageTitle={pkg.title} price={pkg.price} />
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 space-y-2 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>No Booking Fees & Best Rate Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>24/7 Dedicated Trip Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
