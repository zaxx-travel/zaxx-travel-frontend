"use client";

import { CreditCard, ReceiptText } from "lucide-react";

export function BookingSummary({
  title = "Booking Summary",
  items,
  total,
  cta,
}: {
  title?: string;
  items: { label: string; value: string }[];
  total?: { label: string; value: string };
  cta?: React.ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="inline-flex items-center gap-2 font-semibold text-foreground"><ReceiptText className="size-4 text-primary" /> {title}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <div key={item.label} className="flex items-start justify-between gap-4">
            <dt className="text-muted-foreground">{item.label}</dt>
            <dd className="text-right font-medium text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
      {total ? (
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-semibold text-foreground">{total.label}</span>
          <span className="text-lg font-semibold text-primary">{total.value}</span>
        </div>
      ) : null}
      {cta ? <div className="mt-5">{cta}</div> : (
        <div className="mt-5 rounded-xl bg-secondary/50 p-3 text-xs text-muted-foreground inline-flex items-center gap-2 w-full">
          <CreditCard className="size-4 text-primary" /> Taxes and fees shown at checkout (mock).
        </div>
      )}
    </aside>
  );
}
