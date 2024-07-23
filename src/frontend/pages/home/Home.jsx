import React from "react";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";
import BrandsWithBodyType from "../../components/brandsWithBodyType/BrandsWithBodyType";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SEO from "../../components/Seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Rent or Buy a Car in Rwanda | MyOtobox"
        description="Find your perfect car in Rwanda with MyOtobox. We offer car rentals, sales, and import services. Enjoy flexible options and excellent customer service"
        url="https://www.myotobox.rw/"
        image="/assets/images/meta_image1.jpeg"
      />
      {/* <Helmet prioritizeSeoTags>
        <title>Rent or Buy a Car in Rwanda | MyOtobox</title>
        <meta name="title" content="Rent or Buy a Car in Rwanda | MyOtobox" />
        <meta
          name="description"
          content="Find your perfect car in Rwanda with MyOtobox. We offer car rentals, sales, and import services. Enjoy flexible options and excellent customer service"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myotobox.rw/" />
        <meta
          property="og:title"
          content="Rent or Buy a Car in Rwanda | MyOtobox"
        />
        <meta
          property="og:description"
          content="Find your perfect car in Rwanda with MyOtobox. We offer car rentals, sales, and import services. Enjoy flexible options and excellent customer service"
        />
        <meta property="og:image" content="/assets/images/meta_image1.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.myotobox.rw/" />
        <meta
          property="twitter:title"
          content="Rent or Buy a Car in Rwanda | MyOtobox"
        />
        <meta
          property="twitter:description"
          content="Rent or Buy a Car in Rwanda | MyOtobox"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta_image1.jpeg"
        /> */}
      {/* </Helmet> */}
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
