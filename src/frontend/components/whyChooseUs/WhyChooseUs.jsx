import React from "react";

function WhyChooseUs() {
  return (
    <>
      <section
        className="about-section pt-120 pb-220 bg-primary-light position-relative z-1 overflow-hidden py-5"
        data-background="assets/img/shapes/about-bg.jpg"
      >
        <img
          src="https://autohive-html.themetags.com/assets/img/shapes/tire-primary-light.png"
          alt="tire"
          className="tire-primary-light position-absolute end-0 top-0 z--1"
        />
        <span className="small-circle-shape position-absolute z--1"></span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-left position-relative z-1">
                <div className="at-section-title mb-20">
                  <span className="at-subtitle position-relative lead text-primary">
                    Why Choose Us
                  </span>
                  <h2 className="mt-2 mb-4">
                    Don't Waste Your Valuable Time or Money
                  </h2>
                  <p>
                    Buy or rent with confidence on MyOtobox, Rwanda's leading
                    online marketplace for guaranteed quality used and brand new
                    cars.
                  </p>
                </div>
                <img
                  src="assets/images/toyota.png"
                  alt="car"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-right mt-5 mt-lg-0">
                <div className="about-icon-box bg-white shadow rounded">
                  <div className="ab-icon-box-top d-flex align-items-center mb-3">
                    <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                      <img
                        src="assets/svg/mechanics.svg"
                        alt="mechanics"
                        style={{ width: "20px" }}
                      />
                    </span>
                    <h5 className="mb-0 ms-3 dark">Expert Certified Mechanics</h5>
                  </div>
                  <p className="mb-0">
                    Credibly maximize resource maximizing channels after
                    interoperable frictionless. Rather than synergistic models.
                  </p>
                </div>
                <div className="about-icon-box bg-white shadow rounded mt-20 ms-md-5 mt-4">
                  <div className="ab-icon-box-top d-flex align-items-center mb-3">
                    <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                      <img
                        src="assets/svg/online.svg"
                        alt="mechanics"
                        style={{ width: "25px" }}
                      />
                    </span>
                    <h5 className="mb-0 ms-3 dark">More Information</h5>
                  </div>
                  <p className="mb-0">
                    We provide vehicle Information , standard features for every
                    vehicle listed on myOtobox — for sell and rent.
                  </p>
                </div>

                <div className="about-icon-box bg-white shadow rounded mt-4">
                  <div className="ab-icon-box-top d-flex align-items-center mb-3">
                    <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                      <img
                        src="assets/svg/car.svg"
                        alt="mechanics"
                        style={{ width: "25px" }}
                      />
                    </span>
                    <h5 className="mb-0 ms-3 dark">
                      User-friendly online automotive marketplace
                    </h5>
                  </div>
                  <p className="mb-0">
                    With easy sorting and searching – and simplified listing
                    that tell you exactly what you need to know about each
                    vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
