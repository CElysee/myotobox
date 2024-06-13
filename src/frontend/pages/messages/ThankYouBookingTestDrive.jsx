import React from "react";

function ThankYouBookingTestDrive() {
  return (
    <section className="bpage container" style={{ paddingTop: "100px" }}>
      <div className="row justify-content-center">
        <div className="ThankYouMessage col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
          <p>
            Thank you for booking a test drive! You'll receive a confirmation
            within the next hour. A representative from MyOtobox will reach out
            to you to confirm the booking.
            <span className="pl-2" role="img" aria-label="grimace">
              😎
            </span>
          </p>
          <img
            src="/assets/images/thanks.png"
            alt="404"
            className="thankYouImg pt-4"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default ThankYouBookingTestDrive;
