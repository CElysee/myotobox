import React from "react";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

function Home() {
  return (
    <div className="main_content">
      <BrandsWithBodyType />
      {/* <SellCarsGrid /> */}
      <div className="container mobile-gap">
        <div className="row flex-nowrap">
          <div className="d-md-flex col-md-12" style={{ justifyContent: "center" }}>
            <a className="btn btn-lg btn-primary view_more" href="">
              View more
            </a>
          </div>
        </div>
      </div>

      {/* <RentCarsGrid /> */}
      <WhyChooseUs />
    </div>
  );
}

export default Home;
