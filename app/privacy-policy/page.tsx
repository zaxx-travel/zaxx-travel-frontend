import { StaticPageLayout, PolicySection } from "@/components/static/StaticPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <StaticPageLayout eyebrow="Legal" title="Privacy Policy" subtitle="How zaxx Travels handles personal information. This is Phase 1 placeholder content for design purposes.">
      <PolicySection title="Information we collect">
        <p>We may collect contact details, booking preferences, and account information you provide through forms such as search, checkout, and sign-up. In Phase 1, submissions are not processed by a backend.</p>
      </PolicySection>
      <PolicySection title="How information is used">
        <p>Information is intended to support trip planning, bookings, customer support, and service improvements. Actual processing, storage, and security controls will be implemented with backend services in Phase 2.</p>
      </PolicySection>
      <PolicySection title="Sharing and third parties">
        <p>When fully implemented, limited data may be shared with travel providers and payment processors as needed to complete bookings. Payment UI is Stripe-ready but not integrated in Phase 1.</p>
      </PolicySection>
      <PolicySection title="Your choices">
        <p>You may request access, correction, or deletion of your personal information once account and data systems are live. Contact details are available on our Contact page.</p>
      </PolicySection>
    </StaticPageLayout>
  );
}
