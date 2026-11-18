"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthCard, AuthInput, AuthSubmit } from "@/components/auth/AuthPrimitives";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const error = submitted && !/^\S+@\S+\.\S+$/.test(email) ? "Valid email is required" : "";
  return (
    <div className="px-4 py-16 sm:px-6">
      <AuthCard title="Reset password" subtitle="Enter your email and we'll send reset instructions (mock)." footer={<Link href="/auth/login" className="font-medium text-primary hover:underline">Back to login</Link>}>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <AuthInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
          {submitted && !error ? <p className="rounded-xl bg-primary/10 p-3 text-sm text-primary">If this email exists, reset instructions will be sent (Phase 2).</p> : null}
          <AuthSubmit label="Send Reset Link" />
        </form>
      </AuthCard>
    </div>
  );
}
