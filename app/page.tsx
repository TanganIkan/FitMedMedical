import Hero from "./components/Hero";
import PromotionCarousel from "./promotion/PromotionCarousel";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import LatestNews from "./components/LatestNews";
import Testimoni from "./components/Testimoni";
import Partner from "./components/Partner";
import Maps from "./components/Maps";
import HomeClientWrapper from "./components/HomeClientWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* <PromotionCarousel /> */}

      <Services />

      <OurTeam />

      <HomeClientWrapper />

      <LatestNews />

      <Testimoni />

      <Partner />

      <Maps />
    </main>
  );
}
