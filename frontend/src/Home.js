import FeatureProduct from "./components/Home/FeatureProduct";
import HeroSection from "./components/Home/HeroSection";
import Services from "./components/Footer/Services";


const Home = () => {
  const data = {
    name: "Novus Vegetables",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
    </>
  );
};

export default Home;
