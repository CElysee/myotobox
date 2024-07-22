import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import CarMoreDetails from "../../components/carMoreDetails/CarMoreDetails";
import "./CarDetails.css";
import CarGallery from "../../components/carGallery/CarGallery";

function CarDetails() {
  return (
    <>
      <Helmet>
        <title>Car Details | Myotobox</title>
        <meta
          name="description"
          content="Detailed view of the selected car, including images and specifications."
        />
        <meta
          name="keywords"
          content="car details, car images, car specifications"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Car Details | Myotobox" />
        <meta
          property="og:description"
          content="Detailed view of the selected car, including images and specifications."
        />
        <meta property="og:image" content="/assets/images/meta_image2.jpeg" />
        <meta property="og:url" content="https://www.myotobox.rw/carDetails" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Details | Myotobox" />
        <meta
          name="twitter:description"
          content="Detailed view of the selected car, including images and specifications."
        />
        <meta name="twitter:image" content="/assets/images/meta_image2.jpeg" />
      </Helmet>
      <div className="main_content padding-l-r" id="main_content">
        <CarGallery />
        <CarMoreDetails />
      </div>
    </>
  );
}

export default CarDetails;
