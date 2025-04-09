import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import InfoImageSection from "@/components/InfoImageSection";
import InfoImageSectionReversed from "@/components/InfoImageSectionReversed";
import ImageSlider from "@/components/ImageSlider";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <InfoImageSection />
      <InfoImageSectionReversed />
      <ImageSlider />
      <FAQSection />
      <CallToActionSection />
    </>
  );
}