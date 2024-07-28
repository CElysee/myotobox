import React, { useState } from "react";
import RentalMoreDetails from "../../components/rentalMoreDetails/RentalMoreDetails";
import "./CarRentalOverView.css";
import RentalCarGallery from "../../components/rentalCarGallery/RentalCarGallery";

function CarDetails() {
  return (
    <div className="main_content padding-l-r" id="main_content">
      <RentalCarGallery />
      <RentalMoreDetails />
    </div>
  );
}

export default CarDetails;
