"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthCard, AuthInput, AuthSubmit } from "@/components/auth/AuthPrimitives";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [v, setV] = useState({ name: "", email: "", password: "", confirm: "" });
  const errors = {
    name: submitted && !v.name ? "Full name is required" : "",
    email: submitted && !/^\S+@\S+\.\S+$/.test(v.email) ? "Valid email is required" : "",
    password: submitted && v.password.length < 6 ? "Password must be at least 6 characters" : "",
    confirm: submitted && v.confirm !== v.password ? "Passwords do not match" : "",
  };
  const invalid = !v.name || !/^\S+@\S+\.\S+$/.test(v.email) || v.password.length < 6 || v.confirm !== v.password;
  return (
    <div className="px-4 py-16 sm:px-6">
      <AuthCard title="Create your account" subtitle="Join zaxx Travels to save bookings and wishlists." footer={<span>Already have an account? <Link href="/auth/login" className="font-medium text-primary hover:underline">Log in</Link></span>}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <AuthInput label="Full name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} error={errors.name} />
          <AuthInput label="Email" type="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} error={errors.email} />
          <AuthInput label="Password" type="password" value={v.password} onChange={(e) => setV({ ...v, password: e.target.value })} error={errors.password} />
          <AuthInput label="Confirm password" type="password" value={v.confirm} onChange={(e) => setV({ ...v, confirm: e.target.value })} error={errors.confirm} />
          {submitted && !invalid ? <p className="rounded-xl bg-primary/10 p-3 text-sm text-primary">Sign-up form validated (mock). Account creation will connect to backend in Phase 2.</p> : null}
          {submitted && invalid ? <p className="text-sm text-destructive">Please fix the form errors.</p> : null}
          <AuthSubmit label="Create Account" />
        </form>
      </AuthCard>
    </div>
  );
}
