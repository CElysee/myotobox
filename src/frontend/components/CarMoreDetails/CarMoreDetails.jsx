import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CarMoreDetails.css";
import Sticky from "react-sticky-el";
import axiosInstance from "../../../../utils/axiosInstance";
import {
  formatAmount,
  formatNumber,
  formatDate,
} from "../../../../utils/helpers";
import CarListingDetails from "../carListingDetails/CarListingDetails";
import { selectIsAuthenticated } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import AuthLogin from "../auth/Login";
import BookATestDrive from "../bookATestDrive/bookATestDrive";

function CarMoreDetails() {
  const urlParams = useParams();
  const [carDetails, setCarDetails] = useState([]);
  const [carFeatures, setCarFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAboutToBook, setIsAboutToBook] = useState(false);

  const stock_numner = urlParams.stock;
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/car_for_sale/car_details?id=${stock_numner}`
        );
        setCarDetails(response.data[0]);
        setCarFeatures(response.data[0].features);
        setLoading(false);
        // console.log("Car details",response.data);
      } catch (error) {
        console.log("Error fetching car details", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleIsAboutToBook = () => {
    setIsAboutToBook(!isAboutToBook);
  };
  return (
    <>
      <div className="pt-3">
        <div className="container">
          <div className="row md:flex-row-reverse">
            <div className="col-12 col-md-4 col-lg-4 contact_dealer">
              <Sticky boundaryElement=".contact_dealer">
                <div className="top-[30px] mt-0 rounded-[5px] md:mt-3 md:mb-4 md:shadow-[0px_1px_10px_rgba(0,0,0,0.15)]">
                  <div className="sticky-wrapper-waypoint">
                    <span style={{ fontSize: " 0px" }}></span>
                  </div>
                  <div data-test="stickyWrapperChildren" className="">
                    <div
                      className="container container-max-width-2 border-b px-0 pb-2 md:px-3 md:pt-3 md:pb-3"
                      data-test="vdpRightRail"
                    >
                      <div className="mt-2-5 rounded-[8px] border border-[#E5E5E5] bg-[#FCFBFC] py-3">
                        <div className="px-3">
                          <div className="flex content-center text-sm">
                            Listing Price
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="relative flex-1">
                              <h2
                                className="heading-2 normal-case pt-1"
                                data-qa="Heading"
                                data-test="vdpTabPriceBlock"
                              >
                                {formatAmount(carDetails.car_price)} Rwf
                              </h2>
                            </div>
                            <button
                              type="button"
                              className="ml-2 text-sm gray-button"
                              id="priceQuality"
                              aria-haspopup="true"
                            >
                              <div className="relative flex items-center">
                                <span className="text-center">
                                  {" "}
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 6V18M12 6L7 11M12 6L17 11"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Great Deal
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className={`mt-4 w-full py-[24px] mb-4 btn btn-primary btn-md ${
                          isAboutToBook ? "d-none" : ""
                        }`}
                        onClick={handleIsAboutToBook}
                      >
                        <span className="btn-inner">
                          {isAuthenticated
                            ? "Book a Test Drive"
                            : "Sign In and Book a Test Drive"}
                        </span>
                      </button>
                      {isAboutToBook && isAuthenticated ? (
                        <BookATestDrive />
                      ) : !isAuthenticated && isAboutToBook  ? (
                        <AuthLogin isAboutToBook={setIsAboutToBook} />
                      ) : null}
                      <span style={{ fontSize: " 0px" }}></span>
                      <div className="flex flex-col border-t pt-4 md:mt-4 md:border-t md:pl-2 lg:pl-3">
                        <div
                          className="heading-3_5 normal-case mb-3"
                          data-qa="Heading"
                        >
                          Get this vehicle
                        </div>
                        <div className="flex">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.13948 12.7696C3.76094 10.2681 3 7.29713 3 4L4.96733 3.5081C5.68758 3.32804 6.0477 3.238 6.37009 3.29854C6.65417 3.35188 6.91678 3.48615 7.12635 3.68522C7.36417 3.91113 7.50204 4.25579 7.77776 4.9451L8.48846 6.72184C8.67477 7.18763 8.76793 7.42053 8.784 7.65625C8.79821 7.86484 8.76867 8.07409 8.69726 8.27058C8.61655 8.49264 8.46255 8.69065 8.15456 9.08664L5.13948 12.7696ZM5.13948 12.7696C6.66062 15.5299 8.93373 17.7184 11.7662 19.1428M11.7662 19.1428C14.1523 20.3425 16.9352 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.7662 19.1428ZM20.9997 7V3M20.9997 3H16.9997M20.9997 3L14.9997 9"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="ml-3">
                            <div
                              className="heading-4 normal-case mb-2"
                              data-qa="Heading"
                            >
                              Phone Number
                            </div>
                            <div className="mb-3">
                              {carDetails.seller_phone_number}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="3"
                              y="5"
                              width="18"
                              height="14"
                              rx="2"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="ml-3">
                            <div
                              className="heading-4 normal-case mb-2"
                              data-qa="Heading"
                              data-test="deliveryDetailsDeliveryHeading"
                            >
                              Email
                            </div>
                            <div className="mb-3">
                              {carDetails.seller_email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Sticky>
            </div>
            <CarListingDetails
              carDetails={carDetails}
              carFeatures={carFeatures}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarMoreDetails;
