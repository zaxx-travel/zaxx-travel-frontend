import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { bookings } from "@/data/content";

export default function DashboardBookingsPage() {
  return (
    <DashboardShell title="My Bookings" subtitle="Track your confirmed and pending travel bookings (mock data)." active="bookings">
      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-primary">{b.type}</div>
                <h2 className="mt-1 font-semibold text-foreground">{b.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">Booking ID: {b.id} · Travel date: {b.date}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-foreground">${b.amount}</div>
                <span className="mt-1 inline-flex rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{b.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
