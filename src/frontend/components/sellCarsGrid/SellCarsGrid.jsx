import React, { useEffect, useState } from "react";
import "./SellCarsGrid.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";
import {
  formatNumber,
  formatAmount,
  truncateText,
} from "../../../../utils/helpers";

function SellCarsGrid({ brandName, makeWithModels, countCars }) {
  const [carsForSale, setCarsForSale] = useState([]);
  const [countCarsForSale, setCountCarsForSale] = useState(0);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      if (makeWithModels) {
        setCarsForSale(makeWithModels);
        setCountCarsForSale(countCars);
      } else {
        const response = await axiosInstance.get(`/car_for_sale/list`);
        setCarsForSale(response.data.cars_for_sale);
        setCountCarsForSale(response.data.count_cars_for_sale);
      }
      //   let response;
      //   if (brandName === undefined) {
      //     response = await axiosInstance.get(`/car_for_sale/list`);
      //   } else {
      //     response = await axiosInstance.get(
      //       `/car_for_sale/list?make=${brandName}`
      //     );
      //   }
      //   setCarsForSale(response.data.cars_for_sale);
      //   setCountCarsForSale(response.data.count_cars_for_sale);
    };
    fetchData();
  }, [brandName, makeWithModels, countCars]);

  const formatUrl = (inputString) => {
    // Convert the input string to lowercase and replace special characters
    const formattedString = inputString
      .toLowerCase() // Convert to lowercase
      .replace(/%20/g, "-") // Replace '%20' with '-'
      .replace(/[^a-zA-Z0-9-]/g, "") // Remove non-alphanumeric characters except '-'
      .replace(/-{2,}/g, "-"); // Replace consecutive '-' with a single '-'

    return formattedString;
  };

  return (
    <>
      <div className="featured-tabs page container home">
        <div className="row pt-3">
          <div className="col primary">
            <div className="heading clearfix">
              <h1>
                Buy & sell <span className="makeName">{brandName}</span> cars
                online in Rwanda.{" "}
                <span className="text-sm-2 graph-icon-title ml-1 vehicle-card-price-rating-label font-bold">
                  {formatAmount(countCarsForSale)} cars
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          {carsForSale.length > 0 &&
            carsForSale.map((car, index) => (
              <div className="auction-item col-md-3" key={index}>
                <div
                  className="linkable card card-shadow vehicle-card"
                  aria-label={`View details ${car.car_name_info}, - Price: ${car.car_price}`}
                >
                  <Link
                    className="hero"
                    to={`/carDetails/${car.stock_number}/${formatUrl(
                      `${car.car_year}-${car.car_name_info}`
                    )}`}
                  >
                    <div className="preload-wrap loaded">
                      <img
                        src={`${imageBaseUrl}${car.cover_image}`}
                        className="img-fluid icon-black"
                        alt={car.car_name_info}
                      ></img>
                    </div>
                    <div className="bid-bar mini">
                      <div className="bar-bg">
                        <ul className="bid-stats">
                          <li className="time-left">
                            <span className="value">
                              <span className="ticking under-ten">
                                {car.car_transmission ==
                                "Automatic Transmission"
                                  ? "Automatic"
                                  : "Manual"}
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span className="new-badge">{car.car_condition}</span>
                  </Link>
                  <div
                    data-test="cardContent"
                    className="card-content order-3 vehicle-card-body"
                  >
                    <div className="LazyLoad is-visible"></div>
                    <div className="vehicle-card-top">
                      <div
                        className="heading-base flex"
                        data-qa="Heading"
                        data-test="vehicleListingCardTitle"
                      >
                        <div className="truncate">
                          <div
                            data-test="vehicleCardYearMakeModel"
                            className="vehicle-card-header w-full"
                          >
                            <span className="mr-1 text-xs font-bold">
                              Sponsored
                            </span>
                            <span className="vehicle-card-year text-xs">
                              {car.car_year}
                            </span>
                            <span className="truncate">
                              {truncateText(car.car_name_info)}
                            </span>
                          </div>
                          <div
                            className="truncate text-xs"
                            data-test="vehicleCardTrim"
                          >
                            <span className="mr-1 text-xs font-bold">
                              Fuel type:
                            </span>
                            <span className="vehicle-card-year text-xs">
                              {car.car_fuel_type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vehicle-card-bottom vehicle-card-bottom-top-spacing">
                      <div
                        className="vehicle-card-bottom-pricing flex w-full justify-between"
                        //   style={{ minHeight: "43px" }}
                      >
                        <div className="pr-3 vehicle-card-bottom-pricing-primary">
                          <div className="text-sm">
                            <div className="">
                              <div className="vehicle-card-price-rating-label-container">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-graph-down-arrow"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"
                                  />
                                </svg>
                                <span
                                  data-test="graphIconLabel"
                                  className="graph-icon-title ml-1 vehicle-card-price-rating-label truncate font-bold"
                                >
                                  Excellent Price
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vehicle-card-bottom-pricing-secondary pl-2 lg:pl-2 vehicle-card-bottom-max-50">
                          <div>
                            <div
                              className="heading-3 normal-case my-1 font-bold"
                              data-qa="Heading"
                              data-test="vehicleCardPricingBlockPrice"
                            >
                              <span data-test="vehicleListingPriceAmount">
                                {formatAmount(car.car_price)} Rwf
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2-5 w-full border-t pt-2 vehicle-card-location">
                      <div className="flex w-full justify-between">
                        <div
                          className="truncate text-xs"
                          data-test="vehicleMileage"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-speedometer2 vehicle_svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                            <path
                              fillRule="evenodd"
                              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                            />
                          </svg>
                          <span>{formatAmount(car.car_mileage)} kms</span>
                        </div>
                        <div className="vehicle-card-discount ml-2 truncate text-right text-xs">
                          <div className="discount-text">
                            {car.car_seller_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {carsForSale.length == 0 && (
            <div className="sc-empnci no-results mb-4">
              <img
                src="/assets/images/no-results.png"
                className="sc-SrznA ksfSSz"
              />
              <div className="sc-fThUAz GNSHw">
                <h3 className="sc-kMribo kQonRp">
                  At this time, we do not have any{" "}
                  {brandName && brandName.toUpperCase()} vehicles matching your
                  search in stock. We're happy to assist you with alternative
                  choices.
                </h3>
                <h4 className="sc-bdOgaJ bvAGqr">
                  Look for other brands using our filters
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SellCarsGrid;
