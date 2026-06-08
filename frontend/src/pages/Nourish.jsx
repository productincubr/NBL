import Navbar from "../nourish/Navbar";
import HeroSection from "../nourish/HeroSection";
import RecipeCollections from "../nourish/RecipeCollections";
import RecipeBuilder from "../nourish/RecipeBuilder";
import CulinaryChannel from "../nourish/CulinaryChannel";
import Footer from "../nourish/Footer";

const Nourish = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecipeCollections />
      <RecipeBuilder />
      <CulinaryChannel />
      {/* <Footer /> */}
    </>
  );
};

export default Nourish;