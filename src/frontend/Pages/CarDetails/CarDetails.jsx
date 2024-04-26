import React, {useState} from "react";
import CarMoreDetails from "../../components/carMoreDetails/CarMoreDetails";
import "./CarDetails.css";
import CarGallery from "../../components/carGallery/CarGallery";

function CarDetails() {
  return (
    <>
      <div className="main_content" id="main_content">
        <CarGallery />
        <CarMoreDetails />
      </div>
    </>
  );
}

export default CarDetails;
