import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/layout/Primitives";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { PassengerDetailsForm } from "@/components/booking/PassengerDetailsForm";
import { buses } from "@/data/buses";

export default async function BusPassengersPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bus = buses.find((b) => b.id === id);
  if (!bus) notFound();

  return (
    <Section className="pt-8 sm:pt-10">
      <Container>
        <Link href={`/buses/${bus.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"><ArrowLeft className="size-4" /> Back to seats</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <PassengerDetailsForm action={`/buses/${bus.id}/confirmation`} onSubmitLabel="Continue to Confirmation" />
          <BookingSummary
            title="Bus Summary"
            items={[
              { label: "Bus", value: `${bus.operator} ${bus.id}` },
              { label: "Route", value: `${bus.from} → ${bus.to}` },
              { label: "Date", value: bus.date },
            ]}
            total={{ label: "Total (mock)", value: `$${bus.price}` }}
          />
        </div>
      </Container>
    </Section>
  );
}
