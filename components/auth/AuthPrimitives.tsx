"use client";

import Link from "next/link";

export function AuthCard({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-6 text-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading">Z</span>
          <span className="font-heading text-lg font-semibold text-foreground">zaxx Travels</span>
        </Link>
        <h1 className="mt-4 font-heading text-2xl font-semibold text-foreground">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {children}
      {footer ? <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div> : null}
    </div>
  );
}

export function AuthInput({ label, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      <input {...props} className={`h-11 rounded-xl border bg-background px-3 text-sm outline-none ring-ring/30 focus:ring-4 ${error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"} ${props.className || ""}`} />
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

export function AuthSubmit({ label }: { label: string }) {
  return <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">{label}</button>;
}
