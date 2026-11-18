import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bus, Clock3 } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { SeatSelection } from "@/components/booking/SeatSelection";
import { buses, busSeats } from "@/data/buses";

type Seat = { id: string; status: "available" | "booked" | "selected"; price: number };

export default async function BusDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bus = buses.find((b) => b.id === id);
  if (!bus) notFound();
  const seats = (busSeats[id as keyof typeof busSeats] ?? busSeats["BS-2001"]) as Seat[];

  return (
    <Section className="pt-8 sm:pt-10">
      <Container>
        <Link href="/buses/search" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"><ArrowLeft className="size-4" /> Back to results</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-primary"><Bus className="size-5" /></div>
                  <div>
                    <h1 className="font-heading text-2xl font-semibold text-foreground">{bus.operator}</h1>
                    <p className="text-sm text-muted-foreground">{bus.id} · {bus.type} · {bus.date}</p>
                  </div>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{bus.seatsLeft} seats left</span>
              </div>
              <div className="mt-6 grid gap-4 rounded-xl bg-secondary/40 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div><div className="text-2xl font-semibold text-foreground">{bus.departure}</div><div className="text-sm text-muted-foreground">{bus.from}</div></div>
                <div className="text-center text-sm text-muted-foreground"><Clock3 className="mx-auto size-4 text-primary" /><div className="mt-1 font-medium">{bus.duration}</div></div>
                <div className="sm:text-right"><div className="text-2xl font-semibold text-foreground">{bus.arrival}</div><div className="text-sm text-muted-foreground">{bus.to}</div></div>
              </div>
            </div>
            <SeatSelection seats={seats} />
          </div>
          <BookingSummary
            title="Bus Summary"
            items={[
              { label: "Operator", value: bus.operator },
              { label: "Route", value: `${bus.from} → ${bus.to}` },
              { label: "Date", value: `${bus.date} · ${bus.departure}` },
              { label: "Seat", value: "Select on left (mock)" },
            ]}
            total={{ label: "Total (mock)", value: `$${bus.price}` }}
            cta={<Link href={`/buses/${bus.id}/passengers`} className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Continue to Passenger Details</Link>}
          />
        </div>
      </Container>
    </Section>
  );
}
