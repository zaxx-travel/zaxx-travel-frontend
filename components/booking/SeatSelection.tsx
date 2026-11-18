"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Seat = { id: string; status: "available" | "booked" | "selected"; price: number };

export function SeatSelection({ seats, onChange }: { seats: Seat[]; onChange?: (selected: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>(seats.filter((s) => s.status === "selected").map((s) => s.id));

  const toggle = (seat: Seat) => {
    if (seat.status === "booked") return;
    setSelected((prev) => {
      const next = prev.includes(seat.id) ? prev.filter((id) => id !== seat.id) : [...prev, seat.id];
      onChange?.(next);
      return next;
    });
  };

  const total = useMemo(() => seats.filter((s) => selected.includes(s.id)).reduce((sum, s) => sum + s.price, 0), [seats, selected]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold text-foreground">Select Seats</h3>
          <p className="mt-1 text-sm text-muted-foreground">Choose your preferred seats for this journey.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <Legend color="bg-secondary border-border" label="Available" />
          <Legend color="bg-primary border-primary" label="Selected" />
          <Legend color="bg-muted border-border opacity-50" label="Booked" />
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-border bg-secondary/20 p-4">
        <div className="mx-auto mb-4 h-2 w-40 rounded-full bg-border" aria-hidden />
        <div className="mx-auto grid max-w-sm grid-cols-4 gap-3">
          {seats.map((seat) => {
            const isSelected = selected.includes(seat.id);
            const booked = seat.status === "booked";
            return (
              <button
                key={seat.id}
                type="button"
                disabled={booked}
                onClick={() => toggle(seat)}
                className={cn(
                  "flex h-11 items-center justify-center rounded-lg border text-sm font-medium transition",
                  booked && "cursor-not-allowed bg-muted text-muted-foreground/50",
                  !booked && !isSelected && "bg-secondary hover:border-primary hover:text-foreground",
                  isSelected && "border-primary bg-primary text-primary-foreground"
                )}
                aria-label={`Seat ${seat.id}`}
              >
                {seat.id}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm">
        <div className="text-muted-foreground">Selected: <span className="font-medium text-foreground">{selected.length ? selected.join(", ") : "None"}</span></div>
        <div className="font-semibold text-foreground">Seat total: <span className="text-primary">${total}</span></div>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-1.5"><span className={cn("size-4 rounded border", color)} /> {label}</span>;
}
