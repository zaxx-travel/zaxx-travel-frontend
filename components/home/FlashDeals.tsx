"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Copy, Check, Flame, Sparkles, Tag } from "lucide-react";
import { useState } from "react";
import { Container, Section } from "@/components/layout/Primitives";
import { flashDeals } from "@/data/content";

export function FlashDeals() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <Section className="bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/70 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Flame className="size-3.5" /> Flash Offers & Promo Codes
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Limited-Time Travel Specials
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-xl">
              Unlock exclusive promotional discounts with instant coupon codes verified for this week.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-accent">
            <Clock className="size-4 animate-pulse" />
            <span>Offers Refresh Every 7 Days</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {deal.discount}
                  </span>
                  <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                    {deal.badge}
                  </span>
                </div>

                <div className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  <Clock className="size-3 text-amber-300" />
                  <span>{deal.expiresIn}</span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <div className="text-xs text-white/80">{deal.destination}</div>
                  <h3 className="font-heading text-xl font-bold leading-tight text-white">
                    {deal.title}
                  </h3>
                </div>
              </div>

              {/* Deal card body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                {/* Coupon Code Pill */}
                <div className="flex items-center justify-between rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-3">
                  <div className="flex items-center gap-2">
                    <Tag className="size-4 text-accent" />
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                        Promo Code
                      </div>
                      <div className="font-mono text-sm font-bold text-foreground">
                        {deal.code}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyCode(deal.code)}
                    className="inline-flex items-center gap-1 rounded-xl bg-background border border-border px-3 py-1 text-xs font-semibold text-foreground shadow-sm transition hover:bg-secondary active:scale-95"
                  >
                    {copiedCode === deal.code ? (
                      <>
                        <Check className="size-3 text-emerald-600" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" /> Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground line-through">
                      ${deal.originalPrice}
                    </div>
                    <div className="text-xl font-extrabold text-foreground">
                      ${deal.price}
                      <span className="text-xs font-normal text-muted-foreground"> / package</span>
                    </div>
                  </div>

                  <Link
                    href="/packages"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition hover:bg-primary/90 active:scale-95"
                  >
                    Claim Offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
