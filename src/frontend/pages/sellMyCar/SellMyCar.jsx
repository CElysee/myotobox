import React from "react";
import "./SellMyCar.css";
import { Link } from "react-router-dom";

function SellMyCar() {
  return (
    <div className="page container-fluid static sellacar">
      <div className="row subbody">
        <div className="col">
          <div className="heading">
            <h1>
              <span>Sell your car on MyOtobox!</span>
            </h1>
            <h2>More money, fewer headaches.</h2>
            <img
              className="stamp"
              src="/assets/images/seller-rec-d@2x.fd6f1260.png"
              alt="9 out of 10 sellers strongly recommend!"
            />
          </div>
          <div className="desktop-wrap">
            <div className="facts">
              <div className="fact">
                <img
                  src="/assets/images/Live-support.png"
                  alt="Live support"
                />
                <p>
                  <strong>Live support</strong> from listing to post-sale
                </p>
              </div>
              <div className="fact">
              <img
                  src="/assets/images/sell-faster.png"
                  alt="Sell for free"
                />
                <p>
                  Sell your car <strong>faster</strong> and go from submission
                  to marketplace in under a week
                </p>
              </div>
              <div className="fact">
                <img
                  src="/assets/images/huge-audience.png"
                  alt="Huge audience"
                />
                <p>
                  Access our <strong>huge audience</strong> of engaged
                  clients
                </p>
              </div>
            </div>
            <div className="reviews-wrap">
              <h2>Our customers love us!</h2>
              <div className="use-swipe-h">
                <div id="reviews-id" className="reviews">
                  <ul style={{ left: "-1041px", width: "2082px" }}>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Andrew G. <span className="date">Apr 2024</span>
                        </span>
                        <span className="blurb">
                          I have bought and sold on other auction websites, but
                          Cars and Bids definitely tops everyone in customer
                          service.
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Christian R. <span className="date">Mar 2024</span>
                        </span>
                        <span className="blurb">
                          Great place to sell a car! The staff work with you and
                          make sure you are always in good hands.
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Ken S. <span className="date">Jun 2022</span>
                        </span>
                        <span className="blurb">
                          The number of views and interested parties was
                          staggering! The staff walked me through the entire
                          process to make sure everything went smoothly, highly
                          recommended.
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Giselle N. <span className="date">July 2024</span>
                        </span>
                        <span className="blurb">
                          Probably the best experience I've had selling a car
                          privately. The listing team was exceptionally helpful,
                          and I had funds just 3 days after the car was sold.
                          Great experience.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="jump">
                    <button type="button" className="btn rb">
                      <span className="sr-only">Go to 1</span>
                    </button>
                    <button type="button" className="btn rb">
                      <span className="sr-only">Go to 2</span>
                    </button>
                    <button type="button" className="btn rb">
                      <span className="sr-only">Go to 3</span>
                    </button>
                    <button type="button" className="btn rb active">
                      <span className="sr-only">Go to 4</span>
                    </button>
                    <button type="button" className="btn rb">
                      <span className="sr-only">Go to 5</span>
                    </button>
                    <button type="button" className="btn rb">
                      <span className="sr-only">Go to 6</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sell-cta">
            <h2>Apply in minutes and we’ll respond within a day.</h2>
            <Link
              role="button"
              className="btn btn-primary btn-lg get-started-cta"
              title="Submit Your Car"
              to={`/submit-car`}
            >
              Sell now — it’s free!
            </Link>
          </div>
          <div className="hiw-cta">
            <h2>How it works</h2>
            <ol>
              <li className="hiw1">
                <span>
                  <img
                    src="/assets/images/1.png"
                    alt="Icon"
                  />
                </span>
                <span>You submit information about your vehicle.</span>
              </li>
              <li className="hiw2">
                <span>
                  <img
                    src="/assets/images/2.png"
                    alt="Icon"
                  />
                </span>
                <span>We’ll let you know if your car is accepted.</span>
              </li>
              <li className="hiw3">
                <span>
                  <img
                    src="/assets/images/3.png"
                    alt="Icon"
                  />
                </span>
                <span>
                  If accepted, we'll schedule a meeting to gather information
                  and photos of your car.
                </span>
              </li>
              <li className="hiw4">
                <span>
                  <img
                    src="/assets/images/4.png"
                    alt="Icon"
                  />
                </span>
                <span>
                  We work with you to create a listing page that describes your
                  vehicle.
                </span>
              </li>
              <li className="hiw5">
                <span>
                  <img
                    src="/assets/images/5.png"
                    alt="Icon"
                  />
                </span>
                <span>We’ll also ask for your scheduling preference.</span>
              </li>
              <li className="hiw6">
                <span>
                  <img
                    src="/assets/images/6.png"
                    alt="Icon"
                  />
                </span>
                <span>Your listing will be featured for a week.</span>
              </li>
              <li className="hiw7">
                <span>
                  <img
                    src="/assets/images/7.png"
                    alt="Icon"
                  />
                </span>
                <span>
                  When your car sells, we’ll connect you with the buyer so
                  you can complete the transaction!
                </span>
              </li>
            </ol>
          </div>
          <div className="sac-footer">
          <a
              className="btn btn-primary btn-lg get-started-cta"
              title="Submit Your Car"
              href="tel:+250782384772"
            >
              Call MyOtobox — today!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellMyCar;
