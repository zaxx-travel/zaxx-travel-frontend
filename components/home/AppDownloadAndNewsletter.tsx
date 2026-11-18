"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  CheckCircle2,
  Download,
  Mail,
  QrCode,
  Send,
  Smartphone,
  Sparkles,
  Ticket,
} from "lucide-react";
import { Container } from "@/components/layout/Primitives";

export function AppDownloadAndNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-background">
      <Container>
        {/* Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute right-0 top-0 -z-10 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 -z-10 size-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: VIP Newsletter & $50 Off */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="size-3.5 text-accent" />
                <span>Join the zaxx VIP Travel Club</span>
              </div>

              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Get <span className="text-accent">$50 Off</span> Your First Journey
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base max-w-lg">
                Subscribe to receive secret flight flash fare alerts, early-bird package drops, and curated destination guides delivered every Thursday.
              </p>

              {subscribed ? (
                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/20 px-5 py-3 text-sm font-semibold text-emerald-300">
                  <CheckCircle2 className="size-5 text-emerald-400" />
                  <span>You're in! Check your inbox for your $50 coupon: <strong>WELCOME50</strong></span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="h-12 w-full rounded-2xl border border-white/20 bg-white/10 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none backdrop-blur-md transition focus:border-white focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-orange-500 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/25 transition hover:scale-105 active:scale-95"
                  >
                    <span>Claim $50</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-emerald-400" /> No spam ever
                </span>
                <span>·</span>
                <span>Unsubscribe in 1 click</span>
              </div>
            </div>

            {/* Right Column: Mobile App / Instant Digital Boarding Pass */}
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Smartphone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">zaxx Mobile App</h3>
                    <p className="text-xs text-white/70">iOS & Android Companion</p>
                  </div>
                </div>

                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  Free Download
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Ticket className="size-5 text-sky-400 shrink-0" />
                  <div className="text-xs">
                    <div className="font-semibold text-white">Offline Digital Boarding Passes</div>
                    <div className="text-white/60">Access your flight & bus QR tickets without internet.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <Bell className="size-5 text-amber-400 shrink-0" />
                  <div className="text-xs">
                    <div className="font-semibold text-white">Real-Time Gate & Delay Alerts</div>
                    <div className="text-white/60">Get instant notifications before your airline announces them.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-white/90"
                >
                  <Download className="size-3.5" /> App Store
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Download className="size-3.5" /> Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
