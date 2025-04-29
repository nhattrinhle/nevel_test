import React from "react";

import Slider from "../components/Slider";
import FeaturesBar from './../components/FeaturesBar';
import PromoSection from "../components/PromoSection";

function HomePage() {
  return (
    <>
      <Slider />
      <FeaturesBar />
      <PromoSection />
    </>
  );
}

export default HomePage;
