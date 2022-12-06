import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Trusted from "../components/home/Trusted";

const Home = () => {
  return (
    <div className="">
      <HeroSection
        title="welcome to"
        name="online store"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged."
      />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
