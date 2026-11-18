import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { FilterSidebar } from "@/components/booking/FilterSidebar";
import { BusCard } from "@/components/buses/BusCard";
import { buses } from "@/data/buses";

export default function BusSearchPage() {
  return (
    <>
      <PageHero eyebrow="Buses" title="Bus search results" subtitle="Showing mock routes and operators. Filters are UI-only in Phase 1." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <FilterSidebar
              title="Bus Filters"
              groups={[
                { title: "Bus type", name: "type", options: [{ label: "AC Sleeper", value: "sleeper" }, { label: "AC Seater", value: "ac-seater" }, { label: "Non-AC", value: "nonac" }] },
                { title: "Departure", name: "departure", options: [{ label: "Morning", value: "morning" }, { label: "Afternoon", value: "afternoon" }, { label: "Night", value: "night" }] },
                { title: "Amenities", name: "amenities", options: [{ label: "Wi-Fi", value: "wifi" }, { label: "Charging Port", value: "charge" }, { label: "Water Bottle", value: "water" }] },
              ]}
            />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                <div><span className="font-semibold text-foreground">{buses.length} buses</span> <span className="text-muted-foreground">found · New York to Boston</span></div>
                <select className="h-10 rounded-xl border border-input bg-background px-3 text-sm"><option>Sort: Recommended</option><option>Price: Low to High</option><option>Departure: Earliest</option><option>Seats available</option></select>
              </div>
              {buses.map((bus) => <BusCard key={bus.id} bus={bus} />)}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
