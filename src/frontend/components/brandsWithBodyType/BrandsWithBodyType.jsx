import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../utils/axiosInstance";

function BrandsWithBodyType() {
  const [carBodyTypeList, setCarBodyTypeList] = useState("");
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/car_body_type/list");
      setCarBodyTypeList(response.data.car_body);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="bpage container" id="brands">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="at-section-title text-center">
              <h1 className="at-subtitle lead text-primary position-relative">
                Shop your favorite brand
              </h1>
            </div>
          </div>
        </div>
        <div className="brands-filter mt-4">
          <ul className="nav nav-tabs border-0 justify-content-center flex-wrap">
            <li>
              <a href="#toyota" data-bs-toggle="tab">
                <img
                  src="assets/brands/toyota.svg"
                  alt="toyota"
                  className="icon-red"
                />
                <span className="ms-4">Toyota</span>
              </a>
            </li>
            <li>
              <a href="#hyundai" data-bs-toggle="tab">
                <img
                  src="assets/brands/hyundai.svg"
                  alt="Hyundai"
                  className="icon-red"
                />
                <span className="ms-4">Hyundai</span>
              </a>
            </li>
            <li>
              <a href="#honda" data-bs-toggle="tab">
                <img
                  src="assets/brands/kia.svg"
                  alt="Kia"
                  className="icon-red"
                />
                <span className="ms-4">KIA</span>
              </a>
            </li>

            <li>
              <a href="#mercedes" data-bs-toggle="tab">
                <img
                  src="assets/brands/mercedes-benz.svg"
                  alt="Mercedes Benz"
                  className="icon-red"
                />
                <span className="ms-4">Mercedes Benz</span>
              </a>
            </li>
            <li>
              <a href="#volkswagen" data-bs-toggle="tab">
                <img
                  src="assets/brands/volkswagen.svg"
                  alt="Volkswagen"
                  className="icon-red"
                />
                <span className="ms-4">Volkswagen</span>
              </a>
            </li>
            <li>
              <a href="#ferrari" data-bs-toggle="tab">
                <img
                  src="assets/brands/byd.png"
                  alt="byd"
                  className="icon-red"
                />
                <span className="ms-4">BYD</span>
              </a>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade active show" id="honda">
              <div className="ct-row d-flex align-items-center justify-content-center flex-wrap">
                {carBodyTypeList.length > 0 &&
                  carBodyTypeList.map((carBodyType, index) => (
                    <div className="ct-col" key={index}>
                      <div className="brand-card text-center bg-white position-relative rounded">
                        <img
                          src={`${imageBaseUrl}/BodyTypeImage/${carBodyType.body_type_image}`}
                          className="img-fluid icon-black"
                          alt={carBodyType.body_type_name}
                        ></img>
                        <h5 className="mt-3 mb-0">
                          {carBodyType.body_type_name}
                        </h5>
                        <a
                          href="#"
                          className="explore-btn position-absolute text-white"
                        >
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandsWithBodyType;
