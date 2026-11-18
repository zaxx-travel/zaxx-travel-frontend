import Link from "next/link";

export function DashboardShell({
  title,
  subtitle,
  active,
  children,
}: {
  title: string;
  subtitle?: string;
  active: "overview" | "bookings" | "wishlist";
  children: React.ReactNode;
}) {
  const nav = [
    { href: "/dashboard", id: "overview", label: "Overview" },
    { href: "/dashboard/bookings", id: "bookings", label: "My Bookings" },
    { href: "/dashboard/wishlist", id: "wishlist", label: "Wishlist" },
  ] as const;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-semibold text-foreground">{title}</h1>
        {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-2xl border border-border bg-card p-3">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.id} href={item.href} className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${active === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}
