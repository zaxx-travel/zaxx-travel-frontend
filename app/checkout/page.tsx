import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { MockPaymentForm } from "@/components/booking/MockPaymentForm";

export default function CheckoutPage() {
  return (
    <>
      <PageHero eyebrow="Checkout" title="Secure checkout" subtitle="Review your booking and complete payment details. Stripe integration is planned for Phase 2 (mock form only)." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Contact & billing (mock)</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Full name</span><input defaultValue="Traveler Name" className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-4 ring-ring/30" /></label>
                  <label className="flex flex-col gap-1.5"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</span><input defaultValue="traveler@example.com" className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-4 ring-ring/30" /></label>
                  <label className="flex flex-col gap-1.5 sm:col-span-2"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Billing address</span><input defaultValue="123 Travel Street, Global City" className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-4 ring-ring/30" /></label>
                </div>
              </div>
              <MockPaymentForm />
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">
                <p className="inline-flex items-center gap-2 font-medium text-foreground"><CheckCircle2 className="size-4 text-primary" /> Ready for Phase 2</p>
                <p className="mt-1">This checkout UI is structured so Stripe payment intent and backend order APIs can be connected without redesigning the flow.</p>
              </div>
            </div>
            <BookingSummary
              title="Checkout Summary"
              items={[
                { label: "Flight · FL-1001", value: "$620" },
                { label: "Package · PK-3001", value: "$1299" },
                { label: "Taxes & fees (mock)", value: "$45" },
              ]}
              total={{ label: "Amount due", value: "$1964" }}
              cta={<Link href="/dashboard/bookings" className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Complete Mock Order</Link>}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
