import Link from "next/link";
import {
  Compass,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";

const columns = [
  {
    title: "Book & Travel",
    links: [
      { href: "/flights", label: "Search Flights" },
      { href: "/buses", label: "Intercity Buses" },
      { href: "/packages", label: "Holiday Packages" },
      { href: "/destinations", label: "Destinations Catalog" },
      { href: "/packages?category=luxury", label: "Luxury & VIP Suites" },
    ],
  },
  {
    title: "About zaxx",
    links: [
      { href: "/about", label: "Our Story & Mission" },
      { href: "/blog", label: "Travel Journal & Tips" },
      { href: "/contact", label: "Get in Touch" },
      { href: "/help-center", label: "Help & Support Center" },
      { href: "/dashboard", label: "Manage My Booking" },
    ],
  },
  {
    title: "Legal & Protection",
    links: [
      { href: "/faqs", label: "Frequently Asked Questions" },
      { href: "/visa-info", label: "Visa & Entry Guidance" },
      { href: "/refund-policy", label: "Cancellation & Refunds" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white shadow-lg shadow-primary/25">
                <Compass className="size-6" />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-tight text-white">
                  zaxx<span className="text-primary">Travels</span>
                </span>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Explore The World
                </div>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Redefining global travel with transparent pricing, instant digital tickets, and personalized 24/7 concierge support for every traveler.
            </p>

            {/* Direct Contact Info */}
            <div className="mt-6 space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-sky-400" />
                <span className="text-slate-200 font-medium">+1 (800) 555-ZAXX</span> (Toll-Free, 24/7)
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-sky-400" />
                <span>support@zaxxtravels.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-sky-400" />
                <span>One World Trade Plaza, Suite 440, New York, NY</span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-400 transition-colors duration-150 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Partner & Security Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-300">Accepted Secure Payments:</span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-300">
              VISA
            </span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-300">
              Mastercard
            </span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-300">
              AMEX
            </span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-300">
              Apple Pay
            </span>
            <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-slate-300">
              PayPal
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <Shield className="size-4" />
            <span>256-Bit SSL Encrypted & IATA Verified Agency</span>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 zaxx Travels Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:text-slate-300">Refund Guarantee</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
