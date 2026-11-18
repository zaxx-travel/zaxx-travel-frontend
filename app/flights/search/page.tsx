import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { FilterSidebar } from "@/components/booking/FilterSidebar";
import { FlightCard } from "@/components/flights/FlightCard";
import { flights } from "@/data/flights";

export default function FlightSearchPage() {
  return (
    <>
      <PageHero eyebrow="Flights" title="Flight search results" subtitle="Showing mock results for your selected route and dates. Filters are UI-only in Phase 1." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <FilterSidebar
              title="Flight Filters"
              groups={[
                { title: "Stops", name: "stops", type: "radio", options: [{ label: "Any", value: "any" }, { label: "Non-stop", value: "0", hint: "2" }, { label: "1 stop", value: "1", hint: "2" }] },
                { title: "Airlines", name: "airlines", options: [{ label: "SkyWings", value: "sw" }, { label: "AeroVista", value: "av" }, { label: "GlobalJet", value: "gj" }, { label: "SunAir", value: "sa" }] },
                { title: "Departure time", name: "time", options: [{ label: "Morning", value: "morning" }, { label: "Afternoon", value: "afternoon" }, { label: "Evening", value: "evening" }] },
                { title: "Duration", name: "duration", options: [{ label: "Under 8h", value: "8" }, { label: "8-12h", value: "12" }, { label: "12h+", value: "12plus" }] },
              ]}
            />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                <div><span className="font-semibold text-foreground">{flights.length} flights</span> <span className="text-muted-foreground">found · New York (JFK) to London (LHR)</span></div>
                <select className="h-10 rounded-xl border border-input bg-background px-3 text-sm"><option>Sort: Recommended</option><option>Price: Low to High</option><option>Duration: Shortest</option><option>Departure: Earliest</option></select>
              </div>
              {flights.map((flight) => <FlightCard key={flight.id} flight={flight} />)}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
