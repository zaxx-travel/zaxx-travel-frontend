import Link from "next/link";
import { Heart } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { wishlist } from "@/data/content";

export default function DashboardWishlistPage() {
  return (
    <DashboardShell title="Wishlist" subtitle="Saved destinations and packages for future trips." active="wishlist">
      <div className="grid gap-4 md:grid-cols-2">
        {wishlist.map((item) => (
          <div key={item.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{item.type}</span>
                <h2 className="mt-2 font-semibold text-foreground">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
              </div>
              <Heart className="size-5 text-accent fill-accent" />
            </div>
            <div className="mt-4">
              <Link href={item.type === "Package" ? "/packages" : "/destinations"} className="text-sm font-medium text-primary hover:underline">Explore similar</Link>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
