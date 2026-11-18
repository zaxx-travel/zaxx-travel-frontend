import { Container, PageHero, Section } from "@/components/layout/Primitives";

export function StaticPageLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
            {children}
          </div>
        </Container>
      </Section>
    </>
  );
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-heading text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}
