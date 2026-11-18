import { Container, PageHero, Section } from "@/components/layout/Primitives";
import { ContactForm } from "@/components/static/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Contact Us" subtitle="Have a question about bookings, destinations, or travel planning? We're here to help." />
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <ContactForm />
            <div className="space-y-4">
              {[{ icon: Mail, label: "Email", value: "support@zaxxtravels.com" }, { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" }, { icon: MapPin, label: "Office", value: "Global Travel Hub, Online First" }].map((i) => {
                const Icon = i.icon;
                return <div key={i.label} className="rounded-2xl border border-border bg-card p-5"><Icon className="size-5 text-primary" /><div className="mt-3 text-sm text-muted-foreground">{i.label}</div><div className="font-medium text-foreground">{i.value}</div></div>;
              })}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">Response times and live support workflows will be connected to backend systems in Phase 2.</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
