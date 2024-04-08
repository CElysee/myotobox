import React from "react";
import SellCarsGrid from "../../components/SellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/RentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

function Home() {
  return (
    <div className="main_content">
      <BrandsWithBodyType />
      <SellCarsGrid />
      <RentCarsGrid />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
