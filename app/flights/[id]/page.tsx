import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock3, Luggage, Plane } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { flights } from "@/data/flights";

export default async function FlightDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flight = flights.find((f) => f.id === id);
  if (!flight) notFound();

  return (
    <Section className="pt-8 sm:pt-10">
      <Container>
        <Link href="/flights/search" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"><ArrowLeft className="size-4" /> Back to results</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 font-semibold text-primary">{flight.airlineCode}</div>
                  <div>
                    <h1 className="font-heading text-2xl font-semibold text-foreground">{flight.airline}</h1>
                    <p className="text-sm text-muted-foreground">{flight.id} · {flight.class} · {flight.date}</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{flight.stops === 0 ? "Non-stop" : `${flight.stops} stop`}</span>
              </div>
              <div className="mt-6 grid gap-4 rounded-xl bg-secondary/40 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div>
                  <div className="text-2xl font-semibold text-foreground">{flight.departure}</div>
                  <div className="text-sm text-muted-foreground">{flight.from}</div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <Clock3 className="mx-auto size-4 text-primary" />
                  <div className="mt-1 font-medium">{flight.duration}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-2xl font-semibold text-foreground">{flight.arrival}</div>
                  <div className="text-sm text-muted-foreground">{flight.to}</div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-semibold text-foreground inline-flex items-center gap-2"><Luggage className="size-4 text-primary" /> Fare & Baggage</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-primary" /> Cabin bag included (mock)</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-primary" /> Checked baggage options at checkout</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-primary" /> Free cancellation within 24h (mock policy)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-semibold text-foreground inline-flex items-center gap-2"><Plane className="size-4 text-primary" /> Amenities</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {flight.amenities.map((a: string) => <span key={a} className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground">{a}</span>)}
                </div>
              </div>
            </div>
          </div>
          <BookingSummary
            title="Flight Summary"
            items={[
              { label: "Route", value: `${flight.from} → ${flight.to}` },
              { label: "Airline", value: flight.airline },
              { label: "Departure", value: `${flight.date} · ${flight.departure}` },
              { label: "Travelers", value: "1 Adult" },
            ]}
            total={{ label: "Total (mock)", value: `$${flight.price}` }}
            cta={<Link href={`/flights/${flight.id}/passengers`} className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Continue to Passenger Details</Link>}
          />
        </div>
      </Container>
    </Section>
  );
}
