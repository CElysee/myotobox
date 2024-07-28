import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./CarGallery.css";
import axiosInstance from "../../../../utils/AxiosInstance";
import ContentLoader from "react-content-loader";
import CarGalleryModal from "../carGalleryModal/CarGalleryModal";
import { Helmet } from "react-helmet-async";
import { formatAmount } from "../../../../utils/Helpers";
function CarGallery() {
  const urlParams = useParams();
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [carDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [lastGalleryImage, setLastGalleryImage] = useState();
  const [modalTitle, setModalTitle] = useState("");
  const stock_numner = urlParams.stock;

  const { stock, name } = useParams();
  const location = useLocation();
  const fullUrl = `https://www.myotobox.rw${location.pathname}`;
  // Fetch car details
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/car_for_sale/car_details?id=${stock_numner}`
        );
        const lastImage =
          response.data[0].car_images[response.data[0].car_images.length - 1];

        setCarDetails(response.data);
        setGalleryImages(response.data[0].car_images);
        setLastGalleryImage(lastImage);
        setLoading(false);
        setModalTitle(
          `All Photos ${galleryImages.length + 1} ${
            response.data[0].car_year
          } ${response.data[0].car_name_info}`
        );
        // console.log("Car details",response.data);
      } catch (error) {
        console.log("Error fetching car details", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const imagesArray = galleryImages.map((image) => ({
    src: `${imageBaseUrl}/CarSellImages/${image.image_name}`,
    thumbnail: `${imageBaseUrl}/CarSellImages/${image.image_name}`,
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: `${carDetails[0].car_year} ${carDetails[0].car_name_info}`,
  }));
  const limitedImages = galleryImages.slice(0, 7);

  // console.log(galleryImages)
  return (
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
            {carDetails.map((car, index) => (
              <div key={index}>
                <div className="row car-heading">
                  <div className="col">
                    <div className="car-title mobile-car-title">
                      <h1 className="pr-2">
                        {car.car_year} {car.car_name_info}
                      </h1>
                      <div className="d-md-flex justify-content-between flex-wrap pt-1">
                        <h2>
                          <span className="inspected">Inspected</span>
                        </h2>
                      </div>
                      <div className="action-rb-button">
                        <div aria-hidden="true" className="_5kaapu mr-3">
                          <span className="_14tkmhr">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style={{
                                display: "block",
                                fill: "none",
                                height: "16px",
                                width: "16px",
                                stroke: "currentcolor",
                                strokeWidth: "2",
                                overflow: "visible",
                              }}
                            >
                              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                            </svg>
                          </span>
                          Save
                        </div>
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
                          Share
                        </div>
                      </div>
                    </div>
                    <div className="heading-base flex items-center">
                      <h3>
                        {car.car_transmission} - {car.car_fuel_type} -{" "}
                        {car.car_drive_train}, {car.car_engine_capacity} with{" "}
                        {formatAmount(car.car_mileage)} Kilometers
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row car-photos">
                  <div className="col for-hero">
                    <div className="gallery-preview">
                      <div id="gallery-preview-ref" className="draggable">
                        <div className="preload-wrap main loaded">
                          <img
                            src={`${imageBaseUrl}${car.cover_image}`}
                            alt={car.car_name_info}
                            data-section="exterior"
                            data-id={car.stock_number}
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          />
                        </div>
                        <div className="images">
                          <div className="group exterior">
                            {limitedImages.splice(0, 7).map((image, index) => (
                              <div
                                className="preload-wrap loaded"
                                key={index}
                                type="button"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                <img
                                  src={`${imageBaseUrl}/CarSellImages/${image.image_name}`}
                                  alt={`${car.car_year}-${car.car_name_info}`}
                                  data-id="KP7MGP0Q"
                                />
                              </div>
                            ))}

                            <div
                              className="preload-wrap loaded"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <img
                                src={`${imageBaseUrl}/CarSellImages/${lastGalleryImage.image_name}`}
                                alt={`${car.car_year}-${car.car_name_info}`}
                                data-section="exterior"
                                data-id="3pREE80w"
                              />
                              <div
                                data-section="interior"
                                data-id="all"
                                className="all"
                              >
                                All Photos ({galleryImages.length + 1})
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CarGalleryModal
                      gallery={imagesArray}
                      modalTitle={modalTitle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default CarGallery;
