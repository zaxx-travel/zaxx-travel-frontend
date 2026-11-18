import Link from "next/link";
import { BookOpen, CreditCard, Headset, Plane, ShieldQuestion } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";

const categories = [
  { icon: Plane, title: "Booking & Trips", text: "Help with flight, bus, and package bookings.", href: "/faqs" },
  { icon: CreditCard, title: "Payments & Refunds", text: "Payment flow, invoices, and refund guidance.", href: "/refund-policy" },
  { icon: BookOpen, title: "Travel Documents", text: "Visa information and travel preparation.", href: "/visa-info" },
  { icon: ShieldQuestion, title: "Policies", text: "Terms, privacy, and service policies.", href: "/terms" },
];

export default function HelpCenterPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Help Center" subtitle="Find answers, guidance, and resources for planning and managing your trips with zaxx Travels." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.title} href={c.href} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></div>
                  <h2 className="mt-4 font-semibold text-foreground">{c.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.text}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Popular topics</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link href="/faqs" className="text-primary hover:underline">How do I search and compare options?</Link></li>
                <li><Link href="/dashboard/bookings" className="text-primary hover:underline">Where can I view my bookings?</Link></li>
                <li><Link href="/checkout" className="text-primary hover:underline">Is the checkout Stripe-ready in Phase 1?</Link></li>
                <li><Link href="/refund-policy" className="text-primary hover:underline">What is the refund policy?</Link></li>
                <li><Link href="/visa-info" className="text-primary hover:underline">How do I check visa requirements?</Link></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Headset className="size-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Need more help?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Our support team can assist with planning, bookings, and travel information.</p>
              <Link href="/contact" className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Contact Support</Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
