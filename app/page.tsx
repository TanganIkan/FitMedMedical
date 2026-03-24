import Hero from "./components/Hero";
import PromotionCarousel from "./components/PromotionCarousel";
import ServicesGrid from "./components/ServicesGrid";
import OurTeam from "./components/OurTeam";
import LatestNews from "./components/LatestNews";
import HomeClientWrapper from "./components/HomeClientWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <PromotionCarousel />

      <ServicesGrid />

      <OurTeam />

      <HomeClientWrapper />

      <LatestNews />
    </main>
  );
}
