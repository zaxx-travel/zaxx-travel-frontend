import { Container, PageHero, Section } from "@/components/layout/Primitives";

const faqs = [
  { q: "Can I book flights, buses, and packages on zaxx Travels?", a: "Yes. The platform is designed to support all three booking types. In Phase 1, flows use mock data and UI-only interactions." },
  { q: "Is payment processed right now?", a: "No. Checkout includes a Stripe-ready mock payment form in Phase 1. Real payment integration is planned for Phase 2." },
  { q: "Can I manage my bookings?", a: "Yes. The User Dashboard includes My Bookings and Wishlist pages with sample data for the frontend experience." },
  { q: "Will the site work on mobile devices?", a: "Yes. All pages are built with responsive layouts for mobile, tablet, and desktop." },
  { q: "How are filters handled in search results?", a: "Search and filter controls are included as design/UI components in Phase 1 and will be connected to real data in Phase 2." },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Frequently Asked Questions" subtitle="Quick answers about using zaxx Travels." />
      <Section className="pt-10">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold text-foreground">{f.q}</summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
