import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { FilterSidebar } from "@/components/booking/FilterSidebar";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/data/packages";

export default function PackagesPage() {
  return (
    <>
      <PageHero eyebrow="Packages" title="Curated travel packages" subtitle="Discover complete itineraries designed for comfort, value, and memorable experiences." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <FilterSidebar
              title="Package Filters"
              groups={[
                { title: "Category", name: "category", options: [{ label: "Beach", value: "beach" }, { label: "Adventure", value: "adventure" }, { label: "City", value: "city" }, { label: "Family", value: "family" }] },
                { title: "Duration", name: "duration", options: [{ label: "3-5 days", value: "short" }, { label: "6-8 days", value: "mid" }, { label: "9+ days", value: "long" }] },
                { title: "Rating", name: "rating", type: "radio", options: [{ label: "Any", value: "any" }, { label: "4.5+ stars", value: "45" }, { label: "4.7+ stars", value: "47" }] },
              ]}
            />
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
                <div><span className="font-semibold text-foreground">{packages.length} packages</span> <span className="text-muted-foreground">available · mock results</span></div>
                <select className="h-10 rounded-xl border border-input bg-background px-3 text-sm"><option>Sort: Recommended</option><option>Price: Low to High</option><option>Rating: High to Low</option><option>Duration</option></select>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
