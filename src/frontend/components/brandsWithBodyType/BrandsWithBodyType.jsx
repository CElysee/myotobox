import React from "react";

function BrandsWithBodyType() {
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
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/crossover.svg"
                      alt="crossover"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Crossover</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/suv.svg"
                      alt="suv"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Suv</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/sedan.svg"
                      alt="sedan"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Sedan</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/wagon.svg"
                      alt="wagon"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Wagon</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/coup.svg"
                      alt="coup"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Coup</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/convertible.svg"
                      alt="convertible"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Convertible</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/compact.svg"
                      alt="compact"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Compact</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/sport-coupe.svg"
                      alt="sport-coupe"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Sport Coupe</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/pickup.svg"
                      alt="pickup"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Pickup</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ct-col">
                  <div className="brand-card text-center bg-white position-relative rounded">
                    <img
                      src="assets/bodyType/mpv.svg"
                      alt="mpv"
                      className="img-fluid icon-black"
                    />
                    <h5 className="mt-3 mb-0">Minivan</h5>
                    <a
                      href="#"
                      className="explore-btn position-absolute text-white"
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandsWithBodyType;
