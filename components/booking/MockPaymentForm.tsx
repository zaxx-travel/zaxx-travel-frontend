"use client";

import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";

export function MockPaymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [v, setV] = useState({ name: "", card: "", expiry: "", cvc: "", zip: "" });
  const errors = {
    name: submitted && !v.name ? "Cardholder name is required" : "",
    card: submitted && v.card.replace(/\s/g, "").length < 12 ? "Enter a valid card number" : "",
    expiry: submitted && !/^\d{2}\/\d{2}$/.test(v.expiry) ? "Use MM/YY" : "",
    cvc: submitted && v.cvc.length < 3 ? "CVC required" : "",
    zip: submitted && v.zip.length < 3 ? "ZIP/Postal code required" : "",
  };
  const invalid = Object.values(errors).some(Boolean) || !v.name || v.card.replace(/\s/g, "").length < 12 || !/^\d{2}\/\d{2}$/.test(v.expiry) || v.cvc.length < 3 || v.zip.length < 3;

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="inline-flex items-center gap-2 font-semibold text-foreground"><CreditCard className="size-4 text-primary" /> Payment details</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"><Lock className="size-3" /> Stripe-ready UI</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Mock payment form for Phase 1. No real charges or Stripe integration yet.</p>
      <div className="mt-5 grid gap-4">
        <Field label="Cardholder name" error={errors.name}><input value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} className={cls(errors.name)} /></Field>
        <Field label="Card number" error={errors.card}><input value={v.card} onChange={(e) => setV({ ...v, card: e.target.value })} placeholder="4242 4242 4242 4242" className={cls(errors.card)} /></Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Expiry" error={errors.expiry}><input value={v.expiry} onChange={(e) => setV({ ...v, expiry: e.target.value })} placeholder="MM/YY" className={cls(errors.expiry)} /></Field>
          <Field label="CVC" error={errors.cvc}><input value={v.cvc} onChange={(e) => setV({ ...v, cvc: e.target.value })} placeholder="123" className={cls(errors.cvc)} /></Field>
          <Field label="ZIP" error={errors.zip}><input value={v.zip} onChange={(e) => setV({ ...v, zip: e.target.value })} className={cls(errors.zip)} /></Field>
        </div>
      </div>
      {submitted && !invalid ? <p className="mt-4 rounded-xl bg-primary/10 p-3 text-sm text-primary">Payment details validated (mock). Ready for Stripe integration in Phase 2.</p> : null}
      {submitted && invalid ? <p className="mt-4 text-sm text-destructive">Please complete payment details correctly.</p> : null}
      <button type="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90">Pay Now (Mock)</button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="flex flex-col gap-1.5"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>{children}{error ? <span className="text-xs text-destructive">{error}</span> : null}</label>;
}
function cls(error?: string) { return `h-11 rounded-xl border bg-background px-3 text-sm outline-none ring-ring/30 focus:ring-4 ${error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`; }
