import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("py-12 sm:py-16 lg:py-20", className)}>{children}</section>;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border/80 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Decorative gradient glow circles */}
      <div className="absolute -left-20 -top-20 size-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 size-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <Container className="py-12 sm:py-16 relative z-10">
        {eyebrow ? (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
