import React from "react";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO"

function Home() {
  return (
    <>
      <SEO
        title="Easy Car Buying & Renting in Rwanda | Myotobox"
        description="Buying or renting a car in Rwanda is easy with Myotobox. Choose from a wide selection of new and used cars at unbeatable rental rates!"
        url="https://www.myotobox.rw/"
        image="/assets/images/meta_image1.jpeg"
      />
      <div className="main_content" style={{ paddingTop: "70px" }}>
        <BrandsWithBodyType />
        <SellCarsGrid />
        <div className="container mobile-gap">
          <div className="row flex-nowrap">
            <div
              className="d-md-flex col-md-12"
              style={{ justifyContent: "center" }}
            >
              <Link
                className="btn btn-lg btn-primary view_more"
                to={"/buy_cars"}
              >
                View more
              </Link>
            </div>
          </div>
        </div>

        <RentCarsGrid />
        <WhyChooseUs />
      </div>
    </>
  );
}

export default Home;
