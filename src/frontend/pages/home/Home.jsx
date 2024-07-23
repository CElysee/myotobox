import React from "react";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";
// import SEO from "../../components/Seo/SEO";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  return (
    <>
      {/* <SEO
        title="Rent or Buy a Car in Rwanda | MyOtobox"
        description="Find your perfect car in Rwanda with MyOtobox. We offer car rentals, sales, and import services. Enjoy flexible options and excellent customer service"
        url="https://www.myotobox.rw/"
        image="/assets/images/meta_image1.jpeg"
      /> */}
      <Helmet prioritizeSeoTags>
        <title>A fancy webpage</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>
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
                to={"/buy-cars"}
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
