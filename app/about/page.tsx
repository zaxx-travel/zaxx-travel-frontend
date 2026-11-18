import { StaticPageLayout, PolicySection } from "@/components/static/StaticPageLayout";
import { Globe2, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <StaticPageLayout eyebrow="Company" title="About zaxx Travels" subtitle="We design modern travel experiences that make it easier to explore the world.">
      <div className="grid gap-4 sm:grid-cols-3 not-prose">
        {[{ icon: Globe2, title: "Global mindset", text: "Connecting travelers to flights, buses, and packages worldwide." }, { icon: Sparkles, title: "Premium experience", text: "Clean, intuitive design focused on clarity and comfort." }, { icon: Shield, title: "Trusted flow", text: "Transparent steps from search to booking confirmation." }].map((i) => { const Icon = i.icon; return <div key={i.title} className="rounded-2xl border border-border bg-card p-5"><Icon className="size-5 text-primary" /><h3 className="mt-3 font-semibold text-foreground">{i.title}</h3><p className="mt-1 text-sm text-muted-foreground">{i.text}</p></div>; })}
      </div>
      <PolicySection title="Our mission"><p>zaxx Travels helps people discover and book journeys with confidence through a modern, fast, and mobile-responsive experience.</p></PolicySection>
      <PolicySection title="What we offer"><p>From flight and bus searches to curated travel packages, our platform brings key travel options together with clear information and a booking flow designed for ease.</p></PolicySection>
    </StaticPageLayout>
  );
}
