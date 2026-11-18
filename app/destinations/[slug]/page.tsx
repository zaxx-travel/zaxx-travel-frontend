import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  MapPin,
  Plane,
  Sparkles,
  Star,
  Thermometer,
} from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { destinations } from "@/data/content";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const related = packages.filter(
    (p) =>
      p.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
      p.slug.includes(slug)
  );
  const show = related.length ? related : packages.slice(0, 3);

  return (
    <Section className="pt-6 sm:pt-8 bg-background">
      <Container>
        {/* Back Link */}
        <Link
          href="/destinations"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline mb-6"
        >
          <ArrowLeft className="size-4" /> Back to all destinations
        </Link>

        {/* Hero Banner Card with Real Image */}
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
          <div className="relative h-72 w-full sm:h-96 bg-muted">
            <Image
              src={destination.heroImage || destination.image}
              alt={destination.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Badges on Top */}
            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                {destination.region}
              </span>
              <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {destination.tag}
              </span>
            </div>

            {/* Bottom Hero Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <MapPin className="size-4 text-accent" />
                <span>{destination.country}</span>
              </div>
              <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {destination.name}
              </h1>
              <p className="mt-2 text-sm text-white/90 sm:text-base max-w-2xl font-light">
                {destination.tagline || destination.summary}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 border-t border-border/70 bg-secondary/20 p-5 sm:grid-cols-4 sm:p-6">
            <Info icon={Calendar} label="Best Time to Visit" value={destination.bestTime} />
            <Info icon={Plane} label="Flights Starting From" value={`$${destination.fromPrice}`} />
            {destination.temperature && (
              <Info icon={Thermometer} label="Average Season Temp" value={destination.temperature} />
            )}
            <Info icon={Star} label="Traveler Rating" value={`${destination.rating} / 5.0 (${destination.reviewsCount}+)`} />
          </div>

          {/* Overview & Key Highlights */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                About {destination.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {destination.summary} With zaxx Travels, you enjoy curated accommodations, fast-track access to top historical attractions, and custom round-trip travel planning crafted by destination specialists.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base font-bold text-foreground">
                Signature Highlights & Experiences
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {destination.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-secondary/30 p-3 text-sm text-foreground font-medium"
                  >
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Flight / Tour Call to Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-5 border border-primary/20">
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">
                  Ready to visit {destination.name}?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Compare flights, buses, and all-inclusive holiday packages with free cancellation.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/flights/search?to=${encodeURIComponent(destination.name)}`}
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90"
                >
                  Search Flights
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-4 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        <div className="mt-14">
          <div className="flex items-end justify-between border-b border-border/60 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Curated Packages
              </p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Featured Trips for {destination.name}
              </h2>
            </div>
            <Link
              href="/packages"
              className="text-xs font-semibold text-primary hover:underline"
            >
              All Packages →
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {show.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        <Icon className="size-4 text-primary" />
        <span>{label}</span>
      </div>
      <div className="mt-1.5 font-heading text-base font-bold text-foreground">
        {value}
      </div>
    </div>
  );
}
