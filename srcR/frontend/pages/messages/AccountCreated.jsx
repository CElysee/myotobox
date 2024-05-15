import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AccountCreated() {
  // Use the useLocation hook to access the location object
  const location = useLocation();

  // Access the data from the location state
  const { data } = location.state || {};
  return (
    <section className="bpage container mobile-t-5">
      <div className="row justify-content-center">
        <div className="ThankYouMessage col-lg-12 d-flex flex-column align-items-center justify-content-center flex-grow-1 wrap">
          <h2>
            {data.user_name}, Thank you for creating an account on Myotobox. You
            can now log in to your account and start exploring our services.
            <span className="pl-2" role="img" aria-label="grimace">
              😎
            </span>
          </h2>
          <img
            src="/assets/images/thanks.png"
            alt="404"
            className="thankYouImg pt-4"
          ></img>
          <Link
            to="/login"
            className="btn btn-primary btn-block mt-3"
            style={{ width: "150px" }}
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AccountCreated;
