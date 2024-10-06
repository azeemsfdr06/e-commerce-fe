import Navbar from "./components/Navbar";
import HeroSection from "./components/hero-section";
import Catgories from "./components/clothing-categories";
import Filters from "./components/clothing-store-layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Catgories />
      <Filters />
    </>
  );
}
