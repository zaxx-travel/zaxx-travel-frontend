import Link from "next/link";
import { CalendarDays, Heart, Package, Ticket } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { bookings, wishlist } from "@/data/content";

export default function DashboardPage() {
  return (
    <DashboardShell title="User Dashboard" subtitle="Manage your trips, bookings, and saved items." active="overview">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[{ label: "Total bookings", value: "2", icon: Ticket }, { label: "Upcoming trips", value: "1", icon: CalendarDays }, { label: "Wishlist items", value: `${wishlist.length}`, icon: Heart }, { label: "Packages saved", value: "1", icon: Package }].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <Icon className="size-5 text-primary" />
              <div className="mt-3 text-2xl font-semibold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          );
        })}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold text-foreground">Recent bookings</h2><Link href="/dashboard/bookings" className="text-sm font-medium text-primary hover:underline">View all</Link></div>
          <div className="mt-4 space-y-3">
            {bookings.map((b) => (
              <div key={b.id} className="rounded-xl border border-border p-4 text-sm">
                <div className="flex items-center justify-between gap-3"><span className="font-medium text-foreground">{b.title}</span><span className="rounded-full bg-secondary px-2.5 py-1 text-xs">{b.status}</span></div>
                <div className="mt-1 text-muted-foreground">{b.type} · {b.date} · ${b.amount}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold text-foreground">Wishlist</h2><Link href="/dashboard/wishlist" className="text-sm font-medium text-primary hover:underline">View all</Link></div>
          <div className="mt-4 space-y-3">
            {wishlist.map((w) => (
              <div key={w.id} className="rounded-xl border border-border p-4 text-sm">
                <div className="font-medium text-foreground">{w.title}</div>
                <div className="mt-1 text-muted-foreground">{w.type} · {w.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
