"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const errors = {
    name: submitted && !values.name ? "Name is required" : "",
    email: submitted && !/^\S+@\S+\.\S+$/.test(values.email) ? "Valid email is required" : "",
    subject: submitted && !values.subject ? "Subject is required" : "",
    message: submitted && values.message.length < 10 ? "Message should be at least 10 characters" : "",
  };
  const invalid = !values.name || !/^\S+@\S+\.\S+$/.test(values.email) || !values.subject || values.message.length < 10;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}><input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className={inputClass(errors.name)} /></Field>
        <Field label="Email" error={errors.email}><input type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className={inputClass(errors.email)} /></Field>
        <Field label="Subject" error={errors.subject} className="sm:col-span-2"><input value={values.subject} onChange={(e) => setValues({ ...values, subject: e.target.value })} className={inputClass(errors.subject)} /></Field>
        <Field label="Message" error={errors.message} className="sm:col-span-2"><textarea rows={5} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} className={inputClass(errors.message)} /></Field>
      </div>
      {submitted && !invalid ? <p className="mt-4 rounded-xl bg-primary/10 p-3 text-sm text-primary">Message ready to send. Backend integration will submit this form in Phase 2.</p> : null}
      {submitted && invalid ? <p className="mt-4 text-sm text-destructive">Please complete all required fields correctly.</p> : null}
      <button type="submit" className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Send Message</button>
    </form>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

function inputClass(error?: string) {
  return `rounded-xl border bg-background px-3 py-2.5 text-sm outline-none ring-ring/30 focus:ring-4 ${error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`;
}
