import { HomeHero } from "@/components/home/HomeHero";
import { FlashDeals } from "@/components/home/FlashDeals";
import { TravelCategories } from "@/components/home/TravelCategories";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { PopularPackages } from "@/components/home/PopularPackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AppDownloadAndNewsletter } from "@/components/home/AppDownloadAndNewsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Immersive Hero with Integrated Booking Engine */}
      <HomeHero />

      {/* Limited-Time Flash Deals & Coupons */}
      <FlashDeals />

      {/* Browse By Travel Style / Vibe */}
      <TravelCategories />

      {/* Handpicked World Destinations */}
      <FeaturedDestinations />

      {/* Signature All-Inclusive Packages */}
      <PopularPackages />

      {/* Trust Pillars & Guarantees */}
      <WhyChooseUs />

      {/* Traveler Testimonials & Verified Stories */}
      <TestimonialsSection />

      {/* VIP Club Newsletter & Mobile App Perks */}
      <AppDownloadAndNewsletter />
    </div>
  );
}
