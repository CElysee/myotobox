import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { formatAmount } from "../../../../utils/Helpers";

function RentalBookingMessage() {
  // Use the useLocation hook to access the location object
  const location = useLocation();

  // Access the data from the location state
  const { data } = location.state || {};
  console.log(data);
  return (
    <section
      className="bpage container mobile-t-5 pb-5"
      style={{ paddingTop: "100px" }}
    >
      <div className="row justify-content-center">
        <div className="ThankYouMessage col-lg-12 d-flex flex-column">
          <h2>
            Dear {data.user_name}, Thank you for booking your rental car with
            us!{" "}
            <span className="pl-2" role="img" aria-label="grimace">
              😎
            </span>
          </h2>
          <div className="py-4 lg:py-5" data-test="vdpConditionHistory">
            <h2 className="heading-3_5 normal-case" data-qa="Heading">
              Your booking details are as follows:
            </h2>
            <div className="row md:flex">
              <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
                <h3 className="heading-base" data-qa="Heading">
                  <strong>Start Date</strong>
                  <div className="heading-base mt-1" data-qa="Heading">
                    {data.start_date}
                  </div>
                </h3>
              </div>
              <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
                <h3 className="heading-base" data-qa="Heading">
                  <strong> End Date</strong>
                  <div className="heading-base mt-1" data-qa="Heading">
                    {data.end_date}
                  </div>
                </h3>
              </div>
              <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
                <h3 className="heading-base" data-qa="Heading">
                  <strong>Days</strong>
                  <div className="heading-base mt-1" data-qa="Heading">
                    {formatAmount(data.rental_days)}
                  </div>
                </h3>
              </div>
              <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
                <h3 className="heading-base" data-qa="Heading">
                  <strong>Total Amount</strong>
                  <div className="heading-base mt-1" data-qa="Heading">
                    {formatAmount(data.rental_amount)} Rwf
                  </div>
                </h3>
              </div>
              <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
                <h3 className="heading-base" data-qa="Heading">
                  <strong> Car Info</strong>
                  <div className="heading-base mt-1" data-qa="Heading">
                    {data.car_name}
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <p>
            A member of our MyOtobox will reach out to you shortly to confirm
            your booking details and assist with any additional needs or
            questions you may have.
          </p>
          <p>
            We look forward to providing you with an excellent rental
            experience!
          </p>
          <Link to="/" className="btn btn-block mt-3 btn-primary" style={{width: "fit-content"}}>
            Go back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RentalBookingMessage;
