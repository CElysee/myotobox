import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../utils/AxiosInstance";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

function BrandsWithBodyType() {
  const [loading, setLoading] = useState(true);
  const [carBodyTypeList, setCarBodyTypeList] = useState([]);
  const [contentLaoderCount, setContentLoaderCount] = useState([1, 2, 3, 4, 5]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/car_body_type/list");
        setCarBodyTypeList(response.data.car_body);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="bpage container pb-4" id="brands">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="at-section-title text-center">
              {/* <h1 className="at-subtitle lead text-dark position-relative">
                Shop your favorite brand
              </h1> */}
            </div>
          </div>
        </div>
        <div className="brands-filter mt-4">
          <ul className="nav nav-tabs border-0 justify-content-center flex-wrap">
            <li>
              <Link to={"/buy_cars/toyota"}>
                <img
                  src="assets/brands/toyota.svg"
                  alt="toyota"
                  className="icon-red"
                />
                <span className="ms-4">Toyota</span>
              </Link>
            </li>
            <li>
              <Link to={"/buy_cars/hyundai"}>
                <img
                  src="assets/brands/hyundai.svg"
                  alt="Hyundai"
                  className="icon-red"
                />
                <span className="ms-4">Hyundai</span>
              </Link>
            </li>
            <li>
              <Link to={"/buy_cars/kia"}>
                <img
                  src="assets/brands/kia.svg"
                  alt="Kia"
                  className="icon-red"
                />
                <span className="ms-4">KIA</span>
              </Link>
            </li>

            <li>
              <Link to={"/buy_cars/Mercedes-Benz"}>
                <img
                  src="assets/brands/mercedes-benz.svg"
                  alt="Mercedes Benz"
                  className="icon-red"
                />
                <span className="ms-4">Mercedes Benz</span>
              </Link>
            </li>
            <li>
              <Link to={"/buy_cars/volkswagen"}>
                <img
                  src="assets/brands/volkswagen.svg"
                  alt="Volkswagen"
                  className="icon-red"
                />
                <span className="ms-4">Volkswagen</span>
              </Link>
            </li>
            <li>
              <Link to={"/buy_cars/byd"}>
                <img
                  src="assets/brands/byd.webp"
                  alt="byd"
                  className="icon-red"
                />
                <span className="ms-4">BYD</span>
              </Link>
            </li>
          </ul>

          {loading ? (
            contentLaoderCount.map((item, index) => (
              <ContentLoader
                style={{
                  width: "20%",
                  height: "150",
                  padding: "10px",
                  marginTop: "15px",
                }}
                speed={1}
                backgroundColor="#eee"
                foregroundColor="#e8e7e7"
                key={index}
              >
                <rect x="2" y="4" rx="8" ry="8" width="70" height="20" />
                <rect x="100" y="4" rx="8" ry="8" width="60" height="20" />
                <rect x="0" y="40" rx="5" ry="5" width="650" height="415" />
              </ContentLoader>
            ))
          ) : (
            <div className="tab-content mt-5">
              <div className="ct-row d-flex align-items-center justify-content-center flex-wrap">
                {carBodyTypeList.map((carBodyType, index) => (
                  <Link
                    className="ct-col mobile-body-shape"
                    key={index}
                    to={`/bodyShape/${carBodyType.body_type_name}`}
                  >
                    <div className="brand-card text-center bg-white position-relative rounded">
                      <img
                        src={`${imageBaseUrl}/BodyTypeImage/${carBodyType.body_type_image}`}
                        className="img-fluid icon-black"
                        alt={carBodyType.body_type_name}
                      ></img>
                      <h5 className="mt-3 mb-0">
                        {carBodyType.body_type_name}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default BrandsWithBodyType;
