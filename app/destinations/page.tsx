import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, MapPin, Sparkles, Star, Thermometer } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { destinations } from "@/data/content";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="World Destinations"
        title="Curated Global Wonderlands"
        subtitle="Browse our hand-selected destinations across Europe, Asia, and the Middle East with comprehensive city guides, local weather, and vetted travel packages."
      />

      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

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

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span>{d.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="flex items-center gap-1 text-xs font-medium text-white/80">
                        <MapPin className="size-3.5 text-accent" />
                        <span>{d.country}</span>
                        <span>·</span>
                        <span>{d.region}</span>
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {d.name}
                      </h2>
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

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {d.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Best Travel Window
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {d.bestTime}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Fares From
                      </div>
                      <div className="text-xl font-bold text-primary">
                        ${d.fromPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
