import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { blogPosts } from "@/data/content";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section className="pt-6 sm:pt-8 bg-background">
      <Container>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline mb-6"
        >
          <ArrowLeft className="size-4" /> Back to travel journal
        </Link>

        <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg">
          {/* Cover Image */}
          <div className="relative h-72 sm:h-96 w-full bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                {post.category}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-3 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" /> {post.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" /> {post.readTime}
                </span>
              </div>
              <h1 className="mt-2 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Author bar */}
          <div className="flex items-center justify-between border-b border-border/70 bg-secondary/30 px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="size-11 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <div className="font-heading text-sm font-bold text-foreground">
                  Written by {post.author}
                </div>
                <div className="text-xs text-muted-foreground">Senior Travel Editor at zaxx Travels</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden sm:inline">Share this guide</span>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <Share2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6 text-foreground/90 text-sm leading-relaxed sm:text-base sm:leading-8">
            <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground border-l-4 border-primary pl-4 italic">
              {post.excerpt}
            </p>

            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground pt-4">
              1. The Anatomy of Seamless Modern Booking
            </h2>
            <p>
              Travel planning gets easier when you compare options clearly, understand what is included, and book with confidence. With automated fare tracking and live schedule sync, our platform strips away the clutter and ambiguity that usually plagues online travel booking.
            </p>

            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground pt-4">
              2. Setting Priorities: Budget vs. Flexibility
            </h2>
            <p>
              Start by setting priorities: timing, comfort, luggage requirements, and cancellation freedom. Use our filter sidebar to isolate non-stop flights, sleeper bus berths, or all-inclusive packages that already include airport transfers and local taxes.
            </p>

            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground pt-4">
              3. The Power of Dedicated Concierge Support
            </h2>
            <p>
              Unlike legacy online travel agencies that hand you off to endless robot phone trees, zaxx Travels assigns real travel specialists to your reservation. If a flight schedule shifts or a connection gets tight, our team is proactively reaching out with solutions before you even land.
            </p>

            {/* Travel Promo Box */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">
                  Inspired to start planning your next journey?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Explore our verified packages or search instant flights with code WANDER2026.
                </p>
              </div>
              <Link
                href="/packages"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 shrink-0"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
