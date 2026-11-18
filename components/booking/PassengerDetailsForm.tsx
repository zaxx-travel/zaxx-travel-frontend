"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function PassengerDetailsForm({ onSubmitLabel = "Continue", action }: { onSubmitLabel?: string; action?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: "", age: "", idType: "Passport", idNumber: "" });

  const errors = {
    firstName: submitted && !values.firstName ? "First name is required" : "",
    lastName: submitted && !values.lastName ? "Last name is required" : "",
    email: submitted && !/^\S+@\S+\.\S+$/.test(values.email) ? "Valid email is required" : "",
    phone: submitted && values.phone.length < 7 ? "Valid phone is required" : "",
    age: submitted && (!values.age || Number(values.age) < 1) ? "Age is required" : "",
    idNumber: submitted && values.idNumber.length < 4 ? "ID number is required" : "",
  };
  const hasError = Object.values(errors).some(Boolean);

  return (
    <form
      action={action}
      onSubmit={(e) => {
        setSubmitted(true);
        if (Object.values({ ...errors, firstName: !values.firstName ? "x" : "", lastName: !values.lastName ? "x" : "", email: !/^\S+@\S+\.\S+$/.test(values.email) ? "x" : "", phone: values.phone.length < 7 ? "x" : "", age: (!values.age || Number(values.age) < 1) ? "x" : "", idNumber: values.idNumber.length < 4 ? "x" : "" }).some(Boolean)) {
          e.preventDefault();
        }
      }}
      className="rounded-2xl border border-border bg-card p-5 sm:p-6"
    >
      <h3 className="font-semibold text-foreground">Passenger Details</h3>
      <p className="mt-1 text-sm text-muted-foreground">Enter traveler information as per government ID.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Input label="First name" value={values.firstName} onChange={(v) => setValues({ ...values, firstName: v })} error={errors.firstName} required />
        <Input label="Last name" value={values.lastName} onChange={(v) => setValues({ ...values, lastName: v })} error={errors.lastName} required />
        <Input label="Email" type="email" value={values.email} onChange={(v) => setValues({ ...values, email: v })} error={errors.email} required />
        <Input label="Phone" value={values.phone} onChange={(v) => setValues({ ...values, phone: v })} error={errors.phone} required />
        <Input label="Age" type="number" value={values.age} onChange={(v) => setValues({ ...values, age: v })} error={errors.age} required />
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ID Type</span>
          <select value={values.idType} onChange={(e) => setValues({ ...values, idType: e.target.value })} className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-4 ring-ring/30">
            <option>Passport</option><option>National ID</option><option>Driver License</option>
          </select>
        </label>
        <div className="sm:col-span-2">
          <Input label="ID Number" value={values.idNumber} onChange={(v) => setValues({ ...values, idNumber: v })} error={errors.idNumber} required />
        </div>
      </div>
      {submitted && hasError ? <p className="mt-4 text-sm text-destructive">Please fix the highlighted fields to continue.</p> : null}
      <button type="submit" className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto">
        {onSubmitLabel}
      </button>
    </form>
  );
}

function Input({ label, error, required, type = "text", value, onChange }: { label: string; error?: string; required?: boolean; type?: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}{required ? " *" : ""}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={cn("h-11 rounded-xl border bg-background px-3 text-sm outline-none ring-ring/30 transition focus:ring-4", error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary")} />
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
