"use client";

import Link from "next/link";
import {
  Compass,
  Heart,
  Menu,
  Moon,
  PhoneCall,
  Plane,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

const links = [
  { href: "/flights", label: "Flights", badge: null },
  { href: "/buses", label: "Buses & Coaches", badge: null },
  { href: "/packages", label: "Packages", badge: "Hot" },
  { href: "/destinations", label: "Destinations", badge: null },
  { href: "/blog", label: "Travel Journal", badge: null },
  { href: "/contact", label: "Contact", badge: null },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="hidden border-b border-border/60 bg-gradient-to-r from-primary/10 via-background to-accent/10 px-4 py-2 text-xs text-muted-foreground sm:block">
        <div className="flex w-full items-center justify-between px-2 sm:px-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2.5 py-0.5 font-medium text-accent">
              <Sparkles className="size-3" /> Special Promo
            </span>
            <span>Use code <strong className="font-semibold text-foreground">WANDER2026</strong> for up to $200 off holiday packages!</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 hover:text-foreground">
              <PhoneCall className="size-3 text-primary" /> 24/7 Support: +1 (800) 555-ZAXX
            </span>
            <div className="flex items-center gap-2 border-l border-border pl-4">
              <span className="cursor-pointer hover:text-foreground">USD ($)</span>
              <span>·</span>
              <span className="cursor-pointer hover:text-foreground">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 shadow-sm backdrop-blur-xl">
        <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-primary-foreground shadow-lg shadow-primary/25 transition group-hover:scale-105">
              <Compass className="size-6 transition-transform duration-500 group-hover:rotate-45" />
              <div className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-background bg-accent" />
            </div>
            <div className="leading-tight">
              <div className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                zaxx<span className="text-primary">Travels</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span>Explore</span>
                <span className="inline-block size-1 rounded-full bg-accent" />
                <span>Book</span>
                <span className="inline-block size-1 rounded-full bg-primary" />
                <span>Experience</span>
              </div>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
              >
                {l.label}
                {l.badge && (
                  <span className="rounded-full bg-accent px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Wishlist Link */}
            <Link
              href="/dashboard/wishlist"
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition hover:border-primary/40 hover:bg-card hover:text-foreground"
              title="Saved Wishlist"
            >
              <Heart className="size-4" />
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground shadow-sm">
                3
              </span>
            </Link>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition hover:border-primary/40 hover:bg-card hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-slate-700" />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/auth/login"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                <User className="size-3.5" />
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 px-5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-primary/20 transition hover:from-primary/90 hover:to-blue-700 hover:shadow-lg active:scale-95"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-full lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open ? (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200 border-t border-border bg-background/95 p-4 backdrop-blur-xl lg:hidden">
            <div className="flex w-full flex-col gap-1.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  <span>{l.label}</span>
                  {l.badge && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                      {l.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="mt-3 flex gap-2 border-t border-border pt-3">
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-border text-xs font-semibold uppercase tracking-wider"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-primary text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
