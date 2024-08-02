import React from "react";
import "../sellMyCar/sellMyCar.css";
import { Link } from "react-router-dom";

function View4You() {
  return (
    <div className="page container-fluid static sellacar">
      <div className="row subbody">
        <div className="col">
          <div className="heading">
            <h1>
              <span>View4You with MyOtobox!</span>
            </h1>
            <h3 style={{ lineHeight: "22px", marginTop: "24px" }}>
              Your Trusted Partner in Car Inspections.
            </h3>
            <img
              className="stamp"
              src="/assets/images/seller-rec-d@2x.fd6f1260.png"
              alt="9 out of 10 sellers strongly recommend!"
            />
          </div>
          <div className="desktop-wrap">
            <div className="facts">
              <div className="fact">
                <img src="/assets/images/Live-support.png" alt="Live support" />
                <p>
                  <strong>Why Choose View4You: </strong> Buying a car is a
                  significant investment. Ensuring its condition before purchase
                  is crucial to avoid costly surprises down the line.
                </p>
              </div>
              <div className="fact">
                <img src="/assets/images/sell-faster.png" alt="Sell for free" />
                <p>
                  <strong>Our Inspection Process</strong> Our inspection process
                  is designed to provide a comprehensive evaluation of a
                  vehicle's condition.
                </p>
              </div>
              <div className="fact">
                <img
                  src="/assets/images/huge-audience.png"
                  alt="Huge audience"
                />
                <p>
                  <strong>How it Works</strong> You can schedule an appointment
                  by phone (+250782384772). One of our certified technicians
                  will arrive at the designated location to conduct the
                  inspection.
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
                          Andrew. <span className="date">July 2024</span>
                        </span>
                        <span className="blurb">
                          View4You saved me thousands! Their inspection found
                          serious engine problems that the dealership tried to
                          hide
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Ange. <span className="date">July 2024</span>
                        </span>
                        <span className="blurb">
                          The inspector was knowledgeable and explained
                          everything clearly. I felt confident in my car
                          purchase after the View4You inspection
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Ange. <span className="date">July 2024</span>
                        </span>
                        <span className="blurb">
                          The inspector was knowledgeable and explained
                          everything clearly. I felt confident in my car
                          purchase after the View4You inspection
                        </span>
                      </div>
                    </li>
                    <li style={{ width: "347px" }}>
                      <div className="review">
                        <span className="stars"></span>
                        <span className="user">
                          Ange. <span className="date">July 2024</span>
                        </span>
                        <span className="blurb">
                          The inspector was knowledgeable and explained
                          everything clearly. I felt confident in my car
                          purchase after the View4You inspection.
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
            <h2>A Thorough Inspection, Every Time</h2>
            <a
              className="btn btn-primary btn-lg get-started-cta"
              title="Submit Your Car"
              href="tel:+250782384772"
            >
              Call MyOtobox — today!
            </a>
          </div>
          <div className="hiw-cta">
            <h2>How it works</h2>
            <ol>
              <li className="hiw1">
                <span>
                  <img src="/assets/images/1.png" alt="Icon" />
                </span>
                <span>
                  <strong>Exterior Examination:</strong> We meticulously inspect
                  the car's exterior for dents, scratches, rust, and any signs
                  of previous damage or repairs.
                </span>
              </li>
              <li className="hiw2">
                <span>
                  <img src="/assets/images/2.png" alt="Icon" />
                </span>
                <span>
                  <strong>Interior Assessment:</strong> Our technicians evaluate
                  the interior for wear and tear, upholstery condition, and
                  functionality of all features.
                </span>
              </li>
              <li className="hiw3">
                <span>
                  <img src="/assets/images/3.png" alt="Icon" />
                </span>
                <span>
                  <strong>Mechanical Inspection:</strong> We thoroughly check
                  the engine, transmission, brakes, steering, suspension, and
                  other vital components.
                </span>
              </li>
              <li className="hiw4">
                <span>
                  <img src="/assets/images/4.png" alt="Icon" />
                </span>
                <span>
                  <strong>Undercarriage Inspection:</strong> We examine the
                  undercarriage for rust, leaks, and damage that may not be
                  visible from above.
                </span>
              </li>
              <li className="hiw5">
                <span>
                  <img src="/assets/images/5.png" alt="Icon" />
                </span>
                <span>
                  <strong>Test Drive:</strong> We conduct a test drive to assess
                  the vehicle's performance and handling.
                </span>
              </li>
              <li className="hiw6">
                <span>
                  <img src="/assets/images/6.png" alt="Icon" />
                </span>
                <span>
                  <strong>Comprehensive Inspection Report:</strong> Includes a
                  detailed examination of the entire vehicle.
                </span>
              </li>
              <li className="hiw7">
                <span>
                  <img src="/assets/images/7.png" alt="Icon" />
                </span>
                <span>
                  This information <strong>empowers</strong> you to make
                  informed decisions about your car purchase.
                </span>
              </li>
            </ol>
          </div>
          <div className="sac-footer">
            <a
              className="btn btn-primary btn-lg get-started-cta"
              title="Submit Your Car"
              href="https://wa.me/250782384772"
            >
              Chat on WhatsApp!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View4You;
