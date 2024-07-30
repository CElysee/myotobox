import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../utils/AxiosInstance";
import ContentLoader from "react-content-loader";
import Sticky from "react-sticky-el";
import {
  formatAmount,
  formatNumber,
  formatDate,
} from "../../../../utils/Helpers";
import { selectIsAuthenticated } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaxCalculatorMessage() {
  const inquiry_id = useParams().id;
  const [taxDetails, setTaxDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [usdToRwf, setUsdToRwf] = useState(0);
  const currencyAPiKey = import.meta.env.VITE_CURRENCY_API_KEY;
  const Ocp_Apim_Subscription_Key = import.meta.env
    .VITE_OCP_APIM_SUBSCRIPTION_KEY;
  const customconfig = import.meta.env.VITE_CUSTOM_CONFIG;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currency_rate = await axiosInstance.get(
          `https://openexchangerates.org/api/latest.json?app_id=${currencyAPiKey}`
        );
        setUsdToRwf(currency_rate.data.rates.RWF);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/tax-calculator/get/${inquiry_id}`
        );
        setTaxDetails(response.data);
        // setLoading(false);
        // console.log("Tax details:", response.data);
      } catch (error) {
        console.error("Error fetching car details", error);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      if (taxDetails !== "") {
        setLoading(true);
        const keyword = `${taxDetails.car_brand.name} ${taxDetails.car_model.brand_model_name} ${taxDetails.year_of_manufacture} ${taxDetails.car_trim.trim_name} `;
        const endpoint = `https://api.bing.microsoft.com/v7.0/images/search`;
        try {
          const response = await fetch(endpoint, {
            headers: { "Ocp-Apim-Subscription-Key": Ocp_Apim_Subscription_Key },
            params: { q: keyword, count: 9 },
          });
          const data = await response.json();
          console.log("Data:", data);
          const imageUrls = data.value.map((item) => item.contentUrl);
          setGalleryImages(imageUrls);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching images:", error);
          setLoading(false);
        }
      }
    };
    setTimeout(fetchImages, 2000); // Add a delay of 1000 milliseconds (1 second) between requests
  }, [taxDetails]); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="main_content padding-l-r" id="main_content">
      <>
        <div className="page container car-details">
          {loading ? (
            <ContentLoader
              style={{ width: "100%", height: "500px", padding: "10px" }}
              speed={1}
              backgroundColor="#eee"
              foregroundColor="#e8e7e7"
            >
              <rect x="2" y="4" rx="8" ry="8" width="70" height="20" />
              <rect x="100" y="4" rx="8" ry="8" width="60" height="20" />
              <rect x="0" y="40" rx="5" ry="5" width="650" height="415" />
            </ContentLoader>
          ) : (
            <>
              {taxDetails ? (
                <div className="row car-heading">
                  <div className="col">
                    <div
                      className="car-title"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1>
                        {taxDetails.car_brand.name}{" "}
                        {taxDetails.car_model.brand_model_name}{" "}
                        {taxDetails.year_of_manufacture}{" "}
                        {taxDetails.car_trim.trim_name}
                      </h1>
                      <div aria-hidden="true" className="_5kaapu">
                        <span className="_14tkmhr">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ position: "relative", top: "3px" }}
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M12.5 6.25C12.9142 6.25 13.25 5.91421 13.25 5.5C13.25 5.08579 12.9142 4.75 12.5 4.75V6.25ZM20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 12.0858 18.75 12.5H20.25ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM15.412 4.75C14.9978 4.75 14.662 5.08579 14.662 5.5C14.662 5.91421 14.9978 6.25 15.412 6.25V4.75ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.641C18.75 10.0552 19.0858 10.391 19.5 10.391C19.9142 10.391 20.25 10.0552 20.25 9.641H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM12.5 4.75H9.5V6.25H12.5V4.75ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5H6.25C6.25 7.70507 7.70507 6.25 9.5 6.25V4.75ZM4.75 9.5V15.5H6.25V9.5H4.75ZM4.75 15.5C4.75 18.1234 6.87665 20.25 9.5 20.25V18.75C7.70507 18.75 6.25 17.2949 6.25 15.5H4.75ZM9.5 20.25H15.5V18.75H9.5V20.25ZM15.5 20.25C18.1234 20.25 20.25 18.1234 20.25 15.5H18.75C18.75 17.2949 17.2949 18.75 15.5 18.75V20.25ZM20.25 15.5V12.5H18.75V15.5H20.25ZM19.5 4.75H15.412V6.25H19.5V4.75ZM18.75 5.5V9.641H20.25V5.5H18.75ZM18.9697 4.96967L11.9697 11.9697L13.0303 13.0303L20.0303 6.03033L18.9697 4.96967Z"
                                fill="#000000"
                              />{" "}
                            </g>
                          </svg>
                        </span>
                        Print
                      </div>
                    </div>

                    <div className="d-md-flex justify-content-between flex-wrap">
                      <h2>
                        <span className="inspected">
                          Estimated duties and taxes
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              ) : (
                <section className="bpage container">
                  <div className="row justify-content-center">
                    <div className="ThankYouMessage col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
                      <h2>
                        We are sorry but we couldn't find tax details for this.
                      </h2>
                      <img
                        src="/assets/images/404-error.png"
                        alt="404"
                        className="thankYouImg pt-4"
                      ></img>
                    </div>
                  </div>
                </section>
              )}
              <div className="row car-photos">
                <div className="col for-hero">
                  <div className="gallery-preview">
                    <div id="gallery-preview-ref" className="draggable">
                      <div className="preload-wrap main loaded">
                        <img
                          src={galleryImages[0]}
                          alt=""
                          data-section="exterior"
                          data-id=""
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                      </div>
                      <div className="images">
                        <div className="group exterior">
                          {galleryImages.map((image, index) => (
                            <div
                              className="preload-wrap loaded"
                              key={index}
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <img src={image} alt="" data-id="KP7MGP0Q" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {taxDetails ? (
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
                                    {formatAmount(taxDetails.total_tax)} Rwf
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link
                            to="/buy-cars"
                            type="button"
                            className={`mt-4 w-full py-[24px] mb-4 btn btn-primary btn-md `}
                          >
                            <span className="btn-inner">
                              Checkout our inventory
                            </span>
                          </Link>
                          <span style={{ fontSize: " 0px" }}></span>
                          <div className="flex flex-col border-t pt-4 md:mt-4 md:border-t md:pl-2 lg:pl-3">
                            <div
                              className="heading-3_5 normal-case mb-3"
                              data-qa="Heading"
                            >
                              To import this car, contact MyOtobox
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
                                <div className="mb-3">+250 782 384 472</div>
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
                                <div className="mb-3">sales@myotobox.rw</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Sticky>
                </div>
                <div className="md:pr-5 col-12 col-md-8 col-lg-8">
                  <div
                    className="py-4 lg:py-5 border-t border-t-[#E5E5E5]"
                    data-test="vdpConditionHistory"
                  >
                    <h2 className="heading-3_5 normal-case" data-qa="Heading">
                      Estimated duties and taxes
                    </h2>
                    <div className="row md:flex">
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Year</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {taxDetails.year_of_manufacture}
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Price when new</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.price_when_new)} USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Amortisation Period</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {taxDetails.amortisation_period}
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Current (Residual) Value</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.current_residual_value)}{" "}
                            USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Freight cost</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.freight_cost)} USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Insurance</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.insurance)} USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>CIF Kigali</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.cif_kigali)} USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Today's Exchange rate (USD)</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(usdToRwf)} USD
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Current Value in Rfw</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.current_value)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Weight</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.weight)} Kg
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Vehicle Category</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {taxDetails.vehicle_category}
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Quitus fiscal status</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {taxDetails.quitus_fiscal}
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Engine Capacity (CC)</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.engine_cc)} Kg
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Import Duty</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.import_duty_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Excise Duty</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.excise_duty_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>VAT</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.vat_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Withholding Tax</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.withholding_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>AUL</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.aul_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>IDL</strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.idl_tax)} Rfw
                          </div>
                        </h3>
                      </div>
                      <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-4">
                        <h3 className="heading-base" data-qa="Heading">
                          <strong>Plate </strong>
                          <div className="heading-base mt-1" data-qa="Heading">
                            {formatAmount(taxDetails.plate_fee)} Rfw
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
}

export default TaxCalculatorMessage;
