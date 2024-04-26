import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CarGallery.css";
import axiosInstance from "../../../../utils/axiosInstance";
import ContentLoader from "react-content-loader";
import CarGalleryModal from "../carGalleryModal/CarGalleryModal";

function CarGallery() {
  const urlParams = useParams();
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [carDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [lastGalleryImage, setLastGalleryImage] = useState();
  const [modalTitle, setModalTitle] = useState("");

  const stock_numner = urlParams.stock;

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
        setModalTitle(`All Photos ${(galleryImages.length + 1)} ${response.data[0].car_year} ${response.data[0].car_name_info}`)
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
                    <div className="car-title">
                      <h1>
                        {car.car_year} {car.car_name_info}
                      </h1>
                      <div aria-hidden="true" className="_5kaapu">
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
                      <button
                        aria-hidden="true"
                        type="button"
                        className="btn rb btn-share d-none d-md-block"
                      >
                        Share
                      </button>
                    </div>

                    <div className="d-md-flex justify-content-between flex-wrap">
                      <h2>
                        <span className="inspected">Inspected</span>
                      </h2>
                     
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
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                        </div>
                        <div className="images">
                          <div className="group exterior">
                            {limitedImages.splice(0, 7).map((image, index) => (
                              <div
                                className="preload-wrap loaded"
                                key={index}
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
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
                    <CarGalleryModal gallery={imagesArray} modalTitle={modalTitle} />
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
