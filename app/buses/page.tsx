import Link from "next/link";
import { Bus, MapPinned, Ticket } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { SearchWidget } from "@/components/home/SearchWidget";
import { BusCard } from "@/components/buses/BusCard";
import { buses } from "@/data/buses";

export default function BusesPage() {
  return (
    <>
      <PageHero eyebrow="Buses" title="Comfortable bus journeys, simplified" subtitle="Search routes, compare operators, and pick your seat in a few steps." />
      <Section className="pt-10">
        <Container className="space-y-10">
          <SearchWidget compact />
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ icon: Bus, title: "Trusted Operators", text: "Reliable options with clear schedules." }, { icon: Ticket, title: "Seat Selection", text: "Interactive seat picking before checkout." }, { icon: MapPinned, title: "Popular Routes", text: "Easy discovery for frequent city routes." }].map((i) => {
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
              <h2 className="font-heading text-2xl font-semibold text-foreground">Available buses</h2>
              <Link href="/buses/search" className="text-sm font-medium text-primary hover:underline">View results</Link>
            </div>
            <div className="space-y-4">{buses.map((bus) => <BusCard key={bus.id} bus={bus} />)}</div>
          </div>
        </Container>
      </Section>
    </>
  );
}
