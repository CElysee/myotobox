import React from "react";
import "./sellCarsGrid.css";
import { Link } from "react-router-dom";

function sellCarsGrid() {
  return (
    <>
      <div className="page container-fluid home">
        <div className="row flex-nowrap">
          <div className="col primary">
            <div className="heading clearfix">
              <h1>Buy Now</h1>
            </div>
          </div>
          <div className="col secondary d-none d-lg-block">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col primary">
            <article className="min">
              <ul className="auctions-list">
              <li className="auction-item">
                  <div
                    className="linkable card card-shadow vehicle-card"
                    aria-label="View details for 2021 Jeep Wrangler, Unlimited Sahara High Altitude - MSRP: $35,659"
                    data-test="usedListing"
                    data-test-item="1C4HJXEG4MW515388"
                    data-test-dealerid="25103"
                  >
                    <Link
                      className="hero"
                      to="/CarDetails"
                      >
                      <div className="preload-wrap loaded">
                        <img
                          src="https://media.carsandbids.com/cdn-cgi/image/width=712,height=468,quality=70/1477bbe21e8d6b5e719c7c3ccab577fd47dd8cc3/photos/rMxnRya8-T2akcE3-yP-(edit).jpg?t=169162197942"
                          alt="1989 Volkswagen Rallye Golf"
                        />
                      </div>
                      <div className="bid-bar mini">
                        <div className="bar-bg">
                          <ul className="bid-stats">
                            <li className="time-left">
                              <span className="tag sr-only">Time Left</span>
                              <span className="value">
                                <span className="ticking under-ten">
                                  Posted on: 8:12:05
                                </span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <span className="new-badge">Used</span>
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
                                2021
                              </span>
                              <span className="truncate">Jeep Wrangler</span>
                            </div>
                            <div
                              className="truncate text-xs"
                              data-test="vehicleCardTrim"
                            >
                              Unlimited Sahara High Altitude
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
                          <div className="vehicle-card-bottom-pricing-secondary pl-3 lg:pl-2 vehicle-card-bottom-max-50">
                            <div>
                              <div
                                className="heading-3 normal-case my-1 font-bold"
                                data-qa="Heading"
                                data-test="vehicleCardPricingBlockPrice"
                              >
                                <span data-test="vehicleListingPriceAmount">
                                  $35,659
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2-5 w-full border-t pt-2-5">
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
                              className="bi bi-speedometer2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                              <path
                                fillRule="evenodd"
                                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                              />
                            </svg>
                            50,278 miles
                          </div>
                          <div className="vehicle-card-discount ml-2 truncate text-right text-xs">
                            <div className="discount-text">
                              Upfront Price Available
                            </div>
                          </div>
                        </div>
                        <div
                          className="vehicle-card-location mt-1 text-xs"
                          data-test="vehicleCardLocation"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                          </svg>
                          Streetsboro, OH
                        </div>
                        <div
                          className="vehicle-card-location mt-1 truncate text-xs"
                          data-test="vehicleCardColors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-paint-bucket"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" />
                          </svg>
                          Black exterior, Black interior
                        </div>
                      </div>
                      <div
                        className="vehicle-card-location mt-1 text-xs"
                        data-test="vehicleCardCondition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-car-front-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                        </svg>
                        No accidents reported, 1 Owner, Fleet use
                      </div>
                      <div className="vehicle-card-vin-carousel mt-1 text-xs">
                        <span className="vehicle-card-vin-carousel-icon">
                          VIN
                        </span>
                        1C4HJXEG4MW515388
                      </div>
                    </div>
                  </div>
                </li>
               
              </ul>
            </article>
            <div className="d-md-flex flex-column">
              <a className="btn btn-lg btn-primary" href="/past-auctions/">
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sellCarsGrid;
