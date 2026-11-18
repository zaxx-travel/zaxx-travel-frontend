import { StaticPageLayout, PolicySection } from "@/components/static/StaticPageLayout";

export default function RefundPolicyPage() {
  return (
    <StaticPageLayout eyebrow="Legal" title="Refund Policy" subtitle="Understand how cancellations and refunds are handled. This is Phase 1 placeholder content for design purposes.">
      <PolicySection title="Eligibility and timelines">
        <p>Refund eligibility depends on the airline, bus operator, or package provider terms associated with your booking. In Phase 1, all bookings and statuses shown are mock data.</p>
      </PolicySection>
      <PolicySection title="Cancellations">
        <p>Cancellation requests, processing windows, and applicable fees will be displayed clearly during booking and in your dashboard once backend workflows are integrated.</p>
      </PolicySection>
      <PolicySection title="Refund processing">
        <p>Approved refunds will be returned to the original payment method after provider confirmation. Actual payment capture and refund processing will be enabled with Stripe/backend integration in Phase 2.</p>
      </PolicySection>
      <PolicySection title="Need help">
        <p>If you have questions about a booking, contact our support team through the Help Center or Contact page for assistance.</p>
      </PolicySection>
    </StaticPageLayout>
  );
}
