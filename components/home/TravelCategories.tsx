import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { travelCategories } from "@/data/content";

export function TravelCategories() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/70 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Compass className="size-3" /> Explore By Travel Style
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose Your Travel Vibe
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-xl">
              Whether you crave sun-drenched coastal waters, alpine mountain trails, or vibrant urban nightscapes, start your journey here.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            All Collections <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {travelCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/packages?category=${cat.id}`}
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              <div className="relative z-10">
                <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                  {cat.count}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
