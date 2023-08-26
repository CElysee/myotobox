import React from "react";
import CarMoreDetails from "../../components/CarMoreDetails/CarMoreDetails";
import "../CarDetails/CarDetails.css"
import CarGallery from "../../components/CarGallery/CarGallery";

function CarDetails() {
  return (
    <>
      <div className="tc-container _1f3sn1b">
        <CarGallery /> 
        <CarMoreDetails />
      </div>
    </>
  );
}

export default CarDetails;
