import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import RaceCountdown from "~/components/RaceCountdown";
import FeaturesList from "~/components/FeaturesList";
import CtaSection from "~/components/CtaSection";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RaceCountdown />
        <FeaturesList />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
