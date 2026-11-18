import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";

const cartItems = [
  { id: "FL-1001", type: "Flight", title: "SkyWings · JFK to LHR", details: "2026-12-10 · 1 Adult · Economy", price: 620 },
  { id: "PK-3001", type: "Package", title: "Bali Escape Retreat", details: "6 days / 5 nights · 2 Travelers", price: 1299 },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((s, i) => s + i.price, 0);
  const fees = 45;
  const total = subtotal + fees;

  return (
    <>
      <PageHero eyebrow="Cart" title="Booking summary" subtitle="Review your selected items before proceeding to checkout." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <div className="rounded-2xl border border-border bg-card p-10 text-center">
                  <ShoppingBag className="mx-auto size-8 text-muted-foreground" />
                  <p className="mt-3 text-muted-foreground">Your cart is empty.</p>
                </div>
              ) : cartItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{item.type}</span>
                    <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.details}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="text-lg font-semibold text-foreground">${item.price}</div>
                    <button type="button" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive"><Trash2 className="size-4" /> Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <BookingSummary
              title="Order Summary"
              items={[
                { label: "Subtotal", value: `$${subtotal}` },
                { label: "Taxes & fees (mock)", value: `$${fees}` },
                { label: "Items", value: `${cartItems.length}` },
              ]}
              total={{ label: "Total", value: `$${total}` }}
              cta={<Link href="/checkout" className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Proceed to Checkout</Link>}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
