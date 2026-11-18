import {
  BadgeCheck,
  Clock3,
  CreditCard,
  Headset,
  Lock,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container, Section } from "@/components/layout/Primitives";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Vetted Premium Quality",
    text: "Every airline, boutique hotel, and luxury coach partner passes stringent safety, cleanliness, and passenger satisfaction audits.",
    badge: "Verified Quality",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Secure Booking",
    text: "Encrypted transactions with 256-bit SSL protection, instant digital tickets, and zero hidden credit card processing fees.",
    badge: "100% Secure",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Headset,
    title: "24/7 Dedicated Concierge",
    text: "Real human travel advisors available round-the-clock via phone, WhatsApp, and live chat to assist before, during, and after your trip.",
    badge: "< 2 min response",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Clock3,
    title: "Seamless Real-Time Sync",
    text: "Instant seat selection, gate delay push alerts, and direct e-ticket boarding passes delivered directly to your device.",
    badge: "Instant E-Ticket",
    color: "from-purple-500 to-pink-600",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-background relative overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> The zaxx Travels Standard
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Travelers Across the Globe Choose Us
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            We bridge luxury travel curation with state-of-the-art booking technology so you travel with complete peace of mind.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-3">
                  <span className="text-[11px] font-semibold text-primary group-hover:underline">
                    Learn about our guarantees →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
