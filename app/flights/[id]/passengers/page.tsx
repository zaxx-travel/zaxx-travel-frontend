import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { PassengerDetailsForm } from "@/components/booking/PassengerDetailsForm";
import { flights } from "@/data/flights";

export default async function FlightPassengersPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flight = flights.find((f) => f.id === id);
  if (!flight) notFound();

  return (
    <Section className="pt-8 sm:pt-10">
      <Container>
        <Link href={`/flights/${flight.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"><ArrowLeft className="size-4" /> Back to flight</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <PassengerDetailsForm action={`/flights/${flight.id}/confirmation`} onSubmitLabel="Continue to Confirmation" />
          <BookingSummary
            title="Flight Summary"
            items={[
              { label: "Flight", value: `${flight.airline} ${flight.id}` },
              { label: "Route", value: `${flight.from} → ${flight.to}` },
              { label: "Date", value: flight.date },
            ]}
            total={{ label: "Total (mock)", value: `$${flight.price}` }}
          />
        </div>
      </Container>
    </Section>
  );
}
