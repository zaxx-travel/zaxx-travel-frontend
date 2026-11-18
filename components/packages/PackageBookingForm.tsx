"use client";

import { useState } from "react";

export function PackageBookingForm({ packageTitle, price }: { packageTitle: string; price: number }) {
  const [submitted, setSubmitted] = useState(false);
  const [v, setV] = useState({ name: "", email: "", date: "", travelers: "2", notes: "" });
  const errors = {
    name: submitted && !v.name ? "Name is required" : "",
    email: submitted && !/^\S+@\S+\.\S+$/.test(v.email) ? "Valid email is required" : "",
    date: submitted && !v.date ? "Preferred date is required" : "",
  };
  const invalid = !v.name || !/^\S+@\S+\.\S+$/.test(v.email) || !v.date;

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <h3 className="font-semibold text-foreground">Book this package</h3>
      <p className="mt-1 text-sm text-muted-foreground">Reserve {packageTitle} with a quick request (mock).</p>
      <div className="mt-5 grid gap-4">
        <Field label="Full name" error={errors.name}><input value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} className={cls(errors.name)} /></Field>
        <Field label="Email" error={errors.email}><input type="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} className={cls(errors.email)} /></Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred date" error={errors.date}><input type="date" value={v.date} onChange={(e) => setV({ ...v, date: e.target.value })} className={cls(errors.date)} /></Field>
          <Field label="Travelers"><select value={v.travelers} onChange={(e) => setV({ ...v, travelers: e.target.value })} className={cls("")}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></Field>
        </div>
        <Field label="Notes (optional)"><textarea rows={3} value={v.notes} onChange={(e) => setV({ ...v, notes: e.target.value })} className={cls("")} placeholder="Special requests, room preferences..." /></Field>
      </div>
      <div className="mt-5 rounded-xl bg-secondary/40 p-4 text-sm">
        <div className="flex justify-between text-muted-foreground"><span>Starting from</span><span className="font-semibold text-foreground">${price}</span></div>
        <div className="mt-1 text-xs text-muted-foreground">Final amount may vary by travelers and add-ons (mock).</div>
      </div>
      {submitted && !invalid ? <p className="mt-4 rounded-xl bg-primary/10 p-3 text-sm text-primary">Booking request captured (design-only). Phase 2 will submit to backend.</p> : null}
      {submitted && invalid ? <p className="mt-4 text-sm text-destructive">Please complete required fields.</p> : null}
      <button type="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Request Booking</button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="flex flex-col gap-1.5"><span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>{children}{error ? <span className="text-xs text-destructive">{error}</span> : null}</label>;
}
function cls(error?: string) { return `rounded-xl border bg-background px-3 py-2.5 text-sm outline-none ring-ring/30 focus:ring-4 ${error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`; }
