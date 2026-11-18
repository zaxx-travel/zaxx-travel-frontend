import Link from "next/link";
import { Plane, Shield, Sparkles } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { SearchWidget } from "@/components/home/SearchWidget";
import { FlightCard } from "@/components/flights/FlightCard";
import { flights } from "@/data/flights";

export default function FlightsPage() {
  return (
    <>
      <PageHero eyebrow="Flights" title="Find and book flights with ease" subtitle="Compare routes, times, and fares with a clean, modern search experience." />
      <Section className="pt-10">
        <Container className="space-y-10">
          <SearchWidget compact />
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ icon: Plane, title: "Flexible Routes", text: "Domestic and international options in one place." }, { icon: Shield, title: "Transparent Fares", text: "Clear pricing and details before you continue." }, { icon: Sparkles, title: "Smooth Booking", text: "Simple steps from search to confirmation." }].map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className="rounded-2xl border border-border bg-card p-5">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">{i.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                </div>
              );
            })}
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Popular flight deals</h2>
              <Link href="/flights/search" className="text-sm font-medium text-primary hover:underline">See all results</Link>
            </div>
            <div className="space-y-4">
              {flights.map((flight) => <FlightCard key={flight.id} flight={flight} />)}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
