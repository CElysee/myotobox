import React from "react";

function NotFound() {
  return (
    <section className="bpage container" style={{paddingTop: "120px"}}>
      <div className="row justify-content-center">
        <div className="NotFound col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
          <h1>
            This page does not exist{" "}
            <span role="img" aria-label="grimace">
              😬
            </span>
          </h1>
          <img
            src="/assets/images/404-error.png"
            alt="404"
            className="pt-5"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
