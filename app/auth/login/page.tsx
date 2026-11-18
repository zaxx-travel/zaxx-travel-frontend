"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthCard, AuthInput, AuthSubmit } from "@/components/auth/AuthPrimitives";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [v, setV] = useState({ email: "", password: "" });
  const errors = {
    email: submitted && !/^\S+@\S+\.\S+$/.test(v.email) ? "Valid email is required" : "",
    password: submitted && v.password.length < 6 ? "Password must be at least 6 characters" : "",
  };
  const invalid = !/^\S+@\S+\.\S+$/.test(v.email) || v.password.length < 6;
  return (
    <div className="px-4 py-16 sm:px-6">
      <AuthCard title="Welcome back" subtitle="Log in to manage bookings and continue planning." footer={<span>Don&apos;t have an account? <Link href="/auth/signup" className="font-medium text-primary hover:underline">Sign up</Link></span>}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <AuthInput label="Email" type="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} error={errors.email} />
          <AuthInput label="Password" type="password" value={v.password} onChange={(e) => setV({ ...v, password: e.target.value })} error={errors.password} />
          <div className="flex justify-end"><Link href="/auth/forgot-password" className="text-sm font-medium text-primary hover:underline">Forgot password?</Link></div>
          {submitted && !invalid ? <p className="rounded-xl bg-primary/10 p-3 text-sm text-primary">Login UI validated (mock). Phase 2 will authenticate with backend/JWT.</p> : null}
          {submitted && invalid ? <p className="text-sm text-destructive">Please check your credentials.</p> : null}
          <AuthSubmit label="Log In" />
        </form>
      </AuthCard>
    </div>
  );
}
