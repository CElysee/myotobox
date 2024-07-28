import React from "react";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main_content" style={{ paddingTop: "70px" }}>
      <BrandsWithBodyType />
      <SellCarsGrid />
      <div className="container mobile-gap">
        <div className="row flex-nowrap">
          <div
            className="d-md-flex col-md-12"
            style={{ justifyContent: "center" }}
          >
            <Link className="btn btn-lg btn-primary view_more" to={"/buy-cars"}>
              View more
            </Link>
          </div>
        </div>
      </div>

      <RentCarsGrid />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
