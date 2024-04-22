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
      <div className="container">
        <div className="row flex-nowrap">
          <div className="d-md-flex" style={{justifyContent: "center"}}>
            <a className="btn btn-lg btn-primary" href="/past-auctions/">
              View more
            </a>
          </div>
        </div>
      </div>

      <RentCarsGrid />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
