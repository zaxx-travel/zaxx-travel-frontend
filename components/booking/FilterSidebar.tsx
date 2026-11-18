"use client";

import { SlidersHorizontal } from "lucide-react";

type FilterGroup = {
  title: string;
  options: { label: string; value: string; hint?: string }[];
  type?: "checkbox" | "radio";
  name: string;
};

export function FilterSidebar({ title = "Filters", groups }: { title?: string; groups: FilterGroup[] }) {
  return (
    <aside className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="inline-flex items-center gap-2 font-semibold text-foreground"><SlidersHorizontal className="size-4 text-primary" /> {title}</h3>
        <button type="button" className="text-xs font-medium text-primary hover:underline">Reset</button>
      </div>
      <div className="mt-5 space-y-6">
        {groups.map((group) => (
          <div key={group.title} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
            <h4 className="text-sm font-semibold text-foreground">{group.title}</h4>
            <div className="mt-3 space-y-2.5">
              {group.options.map((opt) => (
                <label key={opt.value} className="flex cursor-pointer items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <input type={group.type === "radio" ? "radio" : "checkbox"} name={group.name} defaultChecked={opt.value === "all" || opt.value === "any"} className="size-4 rounded border-input accent-[var(--primary)]" />
                    <span>{opt.label}</span>
                  </span>
                  {opt.hint ? <span className="text-xs text-muted-foreground">{opt.hint}</span> : null}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="border-t border-border pt-5">
          <h4 className="text-sm font-semibold text-foreground">Price range</h4>
          <input type="range" min={0} max={2000} defaultValue={1200} className="mt-4 w-full accent-[var(--primary)]" />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground"><span>$0</span><span>$2000+</span></div>
        </div>
      </div>
    </aside>
  );
}
