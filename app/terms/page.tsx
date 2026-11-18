import { StaticPageLayout, PolicySection } from "@/components/static/StaticPageLayout";

export default function TermsPage() {
  return (
    <StaticPageLayout eyebrow="Legal" title="Terms of Service" subtitle="Please review these terms governing the use of zaxx Travels. This is Phase 1 placeholder content for design purposes.">
      <PolicySection title="Use of service">
        <p>By accessing zaxx Travels, you agree to use the platform for lawful travel search and booking-related activities. Information shown in Phase 1 may include mock data for demonstration.</p>
      </PolicySection>
      <PolicySection title="Bookings and availability">
        <p>Prices, schedules, availability, and package details displayed in this frontend prototype are illustrative. Final booking terms will be confirmed when backend services and payment processing are integrated.</p>
      </PolicySection>
      <PolicySection title="Accounts and responsibilities">
        <p>Users are responsible for providing accurate information during sign-up and booking flows. Account authentication and data persistence will be enabled in Phase 2.</p>
      </PolicySection>
      <PolicySection title="Updates to terms">
        <p>These terms may be updated as the product evolves. Continued use of the service after updates constitutes acceptance of the revised terms.</p>
      </PolicySection>
    </StaticPageLayout>
  );
}
