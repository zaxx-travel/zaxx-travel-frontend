import Image from "next/image";
import { BadgeCheck, Heart, Quote, Star } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <Section className="bg-secondary/40 relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Heart className="size-3.5 fill-accent" /> Genuine Traveler Reviews
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by 48,000+ Adventurers Worldwide
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Read real stories from travelers who booked flights, coaches, and luxury vacation escapes with zaxx Travels.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                    {t.date}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/90 italic">
                  "{t.quote}"
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span>Trip:</span>
                  <span className="font-bold">{t.trip}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="size-11 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                    {t.verified && (
                      <span title="Verified Traveler">
                        <BadgeCheck className="size-4 text-primary" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
