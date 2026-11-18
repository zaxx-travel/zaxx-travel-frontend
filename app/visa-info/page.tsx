import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { FileCheck2, Globe, Info, Plane } from "lucide-react";

const tips = [
  { icon: Globe, title: "Check destination rules", text: "Visa requirements vary by nationality, destination, and length of stay." },
  { icon: FileCheck2, title: "Prepare documents early", text: "Keep passport validity, photos, and supporting documents ready in advance." },
  { icon: Plane, title: "Match travel details", text: "Ensure booking names and itinerary details align with your documents." },
  { icon: Info, title: "Verify official sources", text: "Always confirm final requirements with official embassy or consulate guidance." },
];

export default function VisaInfoPage() {
  return (
    <>
      <PageHero eyebrow="Travel Info" title="Visa Information" subtitle="General guidance to help you prepare travel documents. Requirements depend on your nationality and destination." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="size-5 text-primary" />
                  <h2 className="mt-4 font-semibold text-foreground">{t.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Common requirements</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                <li>Valid passport (often 6+ months beyond travel dates)</li>
                <li>Completed visa application form and fees (if applicable)</li>
                <li>Recent photographs meeting destination specifications</li>
                <li>Proof of travel, accommodation, and sufficient funds</li>
                <li>Additional documents based on visa type and purpose of travel</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Important note</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                zaxx Travels provides general visa information for planning convenience only. This page does not constitute legal or immigration advice. Always check the latest requirements with the relevant embassy, consulate, or official government portal before traveling.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                In future phases, destination-specific visa guidance and document checklists can be integrated with live data sources.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
