import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import CarMoreDetails from "../../components/carMoreDetails/CarMoreDetails";
import "./CarDetails.css";
import CarGallery from "../../components/carGallery/CarGallery";

function CarDetails() {
  return (
    <>
      <div className="main_content padding-l-r" id="main_content">
        <CarGallery />
        <CarMoreDetails />
      </div>
    </>
  );
}

export default CarDetails;
