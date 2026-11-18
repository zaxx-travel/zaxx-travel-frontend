import Link from "next/link";
import { CheckCircle2, Download, Home } from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";

export default async function FlightConfirmationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="size-7" /></div>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground">Flight booking confirmed</h1>
          <p className="mt-2 text-muted-foreground">Your mock flight booking has been placed successfully. A confirmation email would be sent in production.</p>
          <div className="mt-6 grid gap-3 rounded-xl bg-secondary/40 p-5 text-left text-sm sm:grid-cols-2">
            <div><div className="text-muted-foreground">Booking Ref</div><div className="font-semibold text-foreground">ZAXX-{id.replace(/[^A-Z0-9]/gi, "").slice(-4)}-F</div></div>
            <div><div className="text-muted-foreground">Status</div><div className="font-semibold text-primary">Confirmed (Mock)</div></div>
            <div><div className="text-muted-foreground">Flight</div><div className="font-semibold text-foreground">{id}</div></div>
            <div><div className="text-muted-foreground">Payment</div><div className="font-semibold text-foreground">Not charged (Phase 1)</div></div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/dashboard/bookings" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"><Download className="size-4" /> View My Bookings</Link>
            <Link href="/" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border px-5 text-sm font-semibold text-foreground hover:bg-secondary"><Home className="size-4" /> Back to Home</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
