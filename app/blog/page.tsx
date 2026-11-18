import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { blogPosts } from "@/data/content";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Journal & Insights"
        title="Stories, Destination Guides & Pro Tips"
        subtitle="Curated by world travelers and aviation experts. Discover insider tricks, packing wisdom, and hidden gems across every continent."
      />

      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Post Cover Image */}
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                    <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3.5 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-xs text-white backdrop-blur-md">
                    <Clock className="size-3 text-sky-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="font-heading text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="size-8 rounded-full object-cover border border-border"
                      />
                      <div>
                        <div className="text-xs font-bold text-foreground">{post.author}</div>
                        <div className="text-[10px] text-muted-foreground">{post.date}</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="size-3.5" />
                    </span>
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
