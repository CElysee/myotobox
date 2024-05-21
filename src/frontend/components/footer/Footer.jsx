import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../utils/AxiosInstance";

function Footer() {
  const [emailSubscribe, setEmailSubscribe] = useState("");
  const year = new Date().getFullYear();
  const [carBodyTypeList, setCarBodyTypeList] = useState("");
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/car_body_type/list");
      setCarBodyTypeList(response.data.car_body);
    };
    fetchData();
  }, []);

  const limitBodyType = carBodyTypeList.slice(0, 5);

  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row pt-5">
              <div className="col-xl-6 pb-2">
                <div className="footer-banner position-relative banner-gradient z-3 rounded">
                  <img
                    src="/assets/images/banner-wave.png"
                    alt="wave"
                    className="opacity-50 position-absolute end-0 top-0 z--1"
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="footer-banner-left">
                        <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                          <img src="/assets/svg/sale-car.svg" width={"40px"} />
                        </span>
                        <h3 className="text-white mt-3 mb-20">
                          Are You Looking to Sell your Car?
                        </h3>
                        <a href="#" className="at-explore-btn text-white">
                          <span className="me-2 text-white">
                            <svg
                              width="39"
                              height="26"
                              viewBox="0 0 39 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ position: "relative", top: "7px" }}
                            >
                              <path
                                d="M32.6161 7.85693L37.4087 12.9998M37.4087 12.9998L32.6161 18.1426M37.4087 12.9998H18.0671"
                                stroke="#F1F7FE"
                                strokeWidth="1.71429"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <ellipse
                                cx="12.9322"
                                cy="13"
                                rx="11.9815"
                                ry="12"
                                stroke="#F1F7FE"
                                strokeWidth="1.71429"
                              />
                            </svg>
                          </span>
                          Sale your Car
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-end">
                      <div className="footer-banner-right">
                        <img
                          src="/assets/images/4fc3d21442ec199f.webp"
                          alt="car"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="footer-banner position-relative bg-primary z-3 rounded">
                  <img
                    src="/assets/images/banner-wave.png"
                    alt="wave"
                    className="position-absolute end-0 top-0 z--1"
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="footer-banner-left">
                        <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                          <img
                            src="/assets/svg/searching-car.svg"
                            width={"40px"}
                          />
                        </span>
                        <h3 className="text-dark mt-3 mb-20">
                          Are You Looking to Buy or Rent a Car?
                        </h3>
                        <a href="#" className="at-explore-btn text-dark">
                          <span className="me-2 text-white mt-2">
                            <svg
                              width="39"
                              height="26"
                              viewBox="0 0 39 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ position: "relative", top: "7px" }}
                            >
                              <path
                                d="M32.6161 7.85693L37.4087 12.9998M37.4087 12.9998L32.6161 18.1426M37.4087 12.9998H18.0671"
                                stroke="#262626"
                                strokeWidth="1.71429"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <ellipse
                                cx="12.9322"
                                cy="13"
                                rx="11.9815"
                                ry="12"
                                stroke="#262626"
                                strokeWidth="1.71429"
                              />
                            </svg>
                          </span>
                          Search Car
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-end">
                      <div className="footer-banner-right">
                        <img
                          src="/assets/images/fc3d21442ec199ff.webp"
                          alt="car"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-wrapper pt-120 position-relative z-1 overflow-hidden has-banner"
          data-background="assets/img/shapes/texture-bg.png"
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-5">
                <div className="footer-widget widget-basic">
                  <div className="phone-box d-flex align-items-center">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white">
                      <i className="flaticon-phone-call"></i>
                    </span>
                    <h4 className="text-white ms-3 mb-0">+250 782 384 772</h4>
                  </div>
                  <div className="sb-form mt-40 pt-3">
                    <h5 className="text-white mb-4">
                      Get latest updates & offers
                    </h5>
                    <form className="footer-sb-form position-relative">
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        className="bg-white w-100 subscribe-input"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ height: "-webkit-fill-available" }}
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="ms-lg-5 ms-xl-0 mt-5 mt-lg-0">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="text-end">
                        <div className="footer-social d-inline-block text-start">
                          <h6 className="text-white">Follow us on</h6>
                          <ul className="footer-social-list">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-30">
                    <div className="col-sm-4">
                      <div className="footer-widget footer-nav-widget mb-5 mb-sm-0">
                        <h6 className="widget-title text-white mb-3">
                          About Company
                        </h6>
                        <ul className="footer-nav">
                          <li>
                            <a href="#">Our Company</a>
                          </li>
                          <li>
                            <a href="#">CanMove</a>
                          </li>
                          <li>
                            <a href="#">CNV customs</a>
                          </li>
                          <li>
                            <a href="#">FAQs & support</a>
                          </li>
                          <li>
                            <Link to={"https://dashboard.myotobox.rw"}>Login</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="footer-widget footer-nav-widget mb-5 mb-sm-0">
                        <h6 className="widget-title text-white mb-3">
                          Vehicles Type
                        </h6>
                        <ul className="footer-nav">
                          {limitBodyType.length > 0 &&
                            limitBodyType.map((carBodyType, index) => (
                              <li key={index}>
                                <a href="#">{carBodyType.body_type_name}</a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="footer-widget footer-nav-widget mb-5 mb-sm-0">
                        <h6 className="widget-title text-white mb-3">
                          Favorite brand
                        </h6>
                        <ul className="footer-nav">
                          <li>
                            <Link to={"/BuyCars/toyota"}>
                              <span>Toyota</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/BuyCars/hyundai"}>
                              <span>Hyundai</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/BuyCars/kia"}>
                              <span>KIA</span>
                            </Link>
                          </li>

                          <li>
                            <Link to={"/BuyCars/mercedes"}>
                              <span>Mercedes Benz</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/BuyCars/volkswagen"}>
                              <span>Volkswagen</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/BuyCars/byd"}>
                              <span>BYD</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <div className="copyright-text">
                    <p className="mb-0">
                      &copy; Copyright {year} <a href="#">MyOtobox</a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="copyright-links text-start text-sm-end mt-1 mt-sm-0">
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
