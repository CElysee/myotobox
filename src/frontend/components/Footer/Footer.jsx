import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function footer() {
  const [emailSubscribe, setEmailSubscribe] = useState("");
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row pt-5">
              <div className="col-xl-6">
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
                        <a
                          href="#"
                          className="at-explore-btn text-white"
                        >
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
                          src="/assets/images/footer-car-2.png"
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
                    src="#"
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
                        <a
                          href="#"
                          className="at-explore-btn text-dark"
                        >
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
                          src="/assets/images/footer-car-1.png"
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
                        className="bg-white w-100"
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
                      <a
                        href="#"
                        className="footer-logo d-inline-block"
                      >
                        <svg
                          width="890.5000000000001"
                          height="133.12576794511895"
                          viewBox="0 0 369.6666666666667 55.26351362572971"
                          className="css-1j8o68f"
                        >
                          <defs id="SvgjsDefs1011"></defs>
                          <g
                            id="SvgjsG1012"
                            featurekey="PG4fjM-0"
                            transform="matrix(1.0247690251052775,0,0,1.0247690251052775,-9.571376078911218,-23.095615284545097)"
                            fill="#FFC300"
                          >
                            <g xmlns="http://www.w3.org/2000/svg">
                              <path d="M32.27,57.891c0,1.104-0.298,2.124-0.82,3.005c-1.031,1.738-2.917,2.905-5.079,2.905c-2.607,0-4.83-1.701-5.6-4.061   c-0.199-0.582-0.299-1.203-0.299-1.85c0-3.254,2.645-5.886,5.898-5.886C29.625,52.005,32.27,54.637,32.27,57.891z"></path>
                              <path d="M85.206,57.891c0,0.795-0.149,1.539-0.435,2.223c-0.881,2.161-2.992,3.688-5.477,3.688c-2.384,0-4.433-1.415-5.353-3.464   c-0.347-0.745-0.533-1.564-0.533-2.446c0-3.254,2.633-5.886,5.886-5.886C82.562,52.005,85.206,54.637,85.206,57.891z"></path>
                              <path d="M89.701,59.294l-2.955,0.782L86.1,60.09c0.236-0.696,0.349-1.441,0.349-2.199c0-3.924-3.204-7.128-7.153-7.128   c-3.924,0-7.128,3.204-7.128,7.128c0,0.857,0.149,2.483,0.46,3.266H33.896l-1.117-0.123c0.484-0.969,0.732-2.05,0.732-3.143   c0-3.924-3.204-7.128-7.14-7.128c-3.936,0-7.14,3.204-7.14,7.128c0,0.583,0.074,1.154,0.199,1.701l-8.581-0.919   c0,0-2.869-5.974-0.695-8.147c2.172-2.173,0.695-5.972,0.695-5.972h7.45c0,0,8.68-6.941,21.036-8.158   c3.949-0.385,7.835-0.087,7.835-0.087s7.997,0.012,12.802,3.899c5.837,4.694,9.302,4.842,13.797,5.152   c4.507,0.311,12.355,0.436,15.385,3.614C92.185,52.154,89.701,59.294,89.701,59.294z"></path>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1013"
                            featurekey="jxYttZ-0"
                            transform="matrix(2.69578115247462,0,0,2.69578115247462,98.68674591406015,-12.993665617689173)"
                            fill="#fff"
                          >
                            <path d="M18.54 5 l0.32 0 l0 15 l-2.22 0 l0 -11.26 l-5.78 11.26 l-1.26 0 l-5.78 -11.26 l0 11.26 l-2.22 0 l0 -15 l0.3 0 l2.38 0 l5.94 11.6 l5.94 -11.6 l2.38 0 z M30.439999999999998 10.12 c0 0 -2.5 5.92 -4.16 9.88 c-1.4 3.32 -2.5 5.32 -4.36 5.32 c-0.58 0 -1.32 -0.28 -1.86 -0.6 l0.62 -1.8 c0.16 0.14 0.52 0.34 0.76 0.4 c1.54 0.44 2.5 -2.78 3.16 -4.36 l-3.74 -8.84 l2.08 0 l2.72 6.48 l2.7 -6.48 l2.08 0 z M39.06 6.66 c-3.16 0 -5.4 2.8 -5.4 5.84 c0 3.06 2.24 5.86 5.4 5.86 c3.18 0 5.4 -2.8 5.4 -5.86 c0 -3.04 -2.24 -5.84 -5.4 -5.84 z M39.06 4.82 c4.2 0 7.62 3.32 7.62 7.68 s-3.42 7.7 -7.62 7.7 s-7.62 -3.34 -7.62 -7.7 s3.42 -7.68 7.62 -7.68 z M52.480000000000004 18.36 c0.64 0.26 1.14 0.08 1.44 -0.06 l0 1.6 c-0.26 0.16 -0.64 0.3 -1.18 0.3 c-1.18 0 -2.22 -0.38 -2.86 -1.42 c-0.6 -1 -0.6 -1.54 -0.6 -3.1 l0 -3.88 l-1.2 0 l0 -1.68 l1.2 0 l0 -3.12 l2.06 0 l0 3.12 l2.58 0 l0 1.68 l-2.58 0 l0 3.88 c0 1.64 0.16 2.24 1.14 2.68 z M61.06 11.64 c-1.7 0 -3.08 1.42 -3.08 3.44 c0 2 1.38 3.44 3.08 3.44 s3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 z M61.06 9.94 c2.84 0 5.14 2.2 5.14 5.14 s-2.3 5.12 -5.14 5.12 s-5.14 -2.18 -5.14 -5.12 s2.3 -5.14 5.14 -5.14 z M73.36 9.94 c2.84 0 4.94 2.2 4.94 5.14 s-2.1 5.12 -4.94 5.12 c-0.96 0 -2.06 -0.36 -2.84 -0.94 l0 0.74 l-2.06 0 l0 -15 l2.06 0 l0 5.9 c0.66 -0.54 1.88 -0.96 2.84 -0.96 z M73.16 18.52 c1.7 0 3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 c-1.12 0 -2.1 0.5 -2.64 1.56 c-0.28 0.56 -0.44 1.2 -0.44 1.88 s0.16 1.32 0.44 1.86 c0.54 1.06 1.52 1.58 2.64 1.58 z M85.04 11.64 c-1.7 0 -3.08 1.42 -3.08 3.44 c0 2 1.38 3.44 3.08 3.44 s3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 z M85.04 9.94 c2.84 0 5.14 2.2 5.14 5.14 s-2.3 5.12 -5.14 5.12 s-5.14 -2.18 -5.14 -5.12 s2.3 -5.14 5.14 -5.14 z M100.52000000000001 10.12 l-3.5 4.94 l3.5 4.94 l-2.36 0 l-2.2 -3.3 l-2.22 3.3 l-2.36 0 l3.52 -4.94 l-3.52 -4.94 l2.36 0 l2.22 3.3 l2.2 -3.3 l2.36 0 z"></path>
                          </g>
                        </svg>
                      </a>
                    </div>
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
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="footer-widget footer-nav-widget mb-5 mb-sm-0">
                        <h6 className="widget-title text-white mb-3">
                          Vehicles Type
                        </h6>
                        <ul className="footer-nav">
                          <li>
                            <a href="#">All Autohive Vehicles</a>
                          </li>
                          <li>
                            <a href="#">SUVs</a>
                          </li>
                          <li>
                            <a href="#">Trucks</a>
                          </li>
                          <li>
                            <a href="#">Cars</a>
                          </li>
                          <li>
                            <a href="#">Crossovers</a>
                          </li>
                          <li>
                            <a href="#">Electrified Vehicles</a>
                          </li>
                          <li>
                            <a href="#">Hybrids</a>
                          </li>
                          <li>
                            <a href="#">Hybrid SUVs</a>
                          </li>
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

export default footer;
