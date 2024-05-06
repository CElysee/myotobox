import React from "react";

function ImportOnOrderMessage() {
  return (
    <section className="bpage container">
      <div className="row justify-content-center">
        <div className="ThankYouMessage col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
          <h2>
            Thank you for sending your import on order! You'll receive a call or
            email within the next hour. A representative from MyOtobox will
            reach out to you to confirm your order.
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

export default ImportOnOrderMessage;
