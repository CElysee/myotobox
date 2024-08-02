import React from "react";

function SellMyCallMessage() {
  return (
    <section
      className="bpage container mobile-t-5 import-on-order"
      style={{ paddingTop: "130px" }}
    >
      <div className="row justify-content-center">
        <div className="ThankYouMessage col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
          <h2>
            Thank you for submitting your car details! We have received your
            information and our team is now reviewing it. We'll get back to you
            shortly with a day. If accepted, we'll schedule a meeting to gather information and photos of your car.
            <span className="pl-2" role="img" aria-label="grimace">
              😎
            </span>
          </h2>
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

export default SellMyCallMessage;
