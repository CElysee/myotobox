import React from "react";

function footer() {
  return (
    <>
    <div id="autos-reviews">
    <div className="container-fluid">
      <div className="review-wrap">
        <div className="section why">
          <h6>Why Cars &amp; Bids?</h6>
          <ul>
            <li>
              <strong>
                <span>13,250+</span>
              </strong>
              <br />
              <span>Auctions completed</span>
            </li>
            <li>
              <strong>
                <span>$300M+</span>
              </strong>
              <br />
              <span>Value of cars sold</span>
            </li>
            <li>
              <strong>
                <span>85%+</span>
              </strong>
              <br />
              <span>Sell-through rate</span>
            </li>
            <li>
              <strong>
                <span>400k+</span>
              </strong>
              <br />
              <span>Registered members</span>
            </li>
          </ul>
        </div>
        <div className="section stories">
          <h6>Our customers love us!</h6>
          <div className="review">
            <span className="heading">
              <span className="stars"></span>
              <span className="user">Kyle R.</span>
              <span className="date">May 2023</span>
            </span>
            <span className="blurb">
              The best place I could've sold my car. Attentive and
              responsive throughout the entire listing process, and they got
              me the most money for my car!
            </span>
          </div>
        </div>
        <div className="section daily">
          <h6>Get the Daily Email</h6>
          <form method="post" className="" autoComplete="off" noValidate="">
            <div className="d-flex flex-column flex-sm-row">
              <fieldset className="form-group mb-0">
                <label className="placeholder-shown" htmlFor="email">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="footer-email"
                  name="email"
                  data-lpignore="true"
                  type="email"
                  tabIndex="-1"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value=""
                />
              </fieldset>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="autos-footer" className="p-0 navbar navbar-expand-md navbar-light">
    <div className="container-fluid flex-column">
      <div className="footer-wrap">
        <div className="section brand">
          <a
            aria-current="page"
            className="footer-logo active"
            title="Cars &amp; Bids"
            href="/"
          >
            <span className="sr-only">Cars &amp; Bids</span>
          </a>
        </div>
        <div className="section">
          <h6>How it Works</h6>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                title="Buying a Car"
                href="/what-is/?section=buying-a-car"
              >
                Buying a Car
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                title="Selling a Car"
                href="/what-is/?section=selling-a-car"
              >
                Selling a Car
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                title="Finalizing the Sale"
                href="/what-is/?section=finalizing-sale"
              >
                Finalizing the Sale
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                title="FAQs"
                href="/what-is/?section=faqs"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h6>Sellers</h6>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                title="Submit Your Car"
                href="/sell-car/?utm_source=nav&amp;utm_medium=site&amp;utm_campaign=sell&amp;utm_content=footer"
              >
                Submit Your Car
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/photos/">
                Photography Guide
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h6>Helpful Links</h6>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" title="Support" href="/support/">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                title="Cars &amp; Bids Shipping"
                href="/shipping/"
              >
                Shipping
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="Inspections" href="/inspections/">
                Inspections
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://merch.carsandbids.com/?ref=footer"
                target="_blank"
                rel="noopener noreferrer"
                title="Shop C&amp;B Merch"
              >
                Shop C&amp;B Merch
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://crsnbds.com/careers"
                target="_blank"
                rel="noopener noreferrer"
                title="Careers"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="section social">
          <ul>
            <li>
              <a
                className="nav-link youtube"
                href="https://www.youtube.com/@carsandbids"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <span className="sr-only">YouTube</span>
              </a>
            </li>
            <li>
              <a
                className="nav-link instagram"
                href="https://www.instagram.com/carsandbids/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a
                className="nav-link facebook"
                href="https://www.facebook.com/CarsAndBids"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="nav-link tiktok"
                href="https://www.tiktok.com/@cars_and_bids"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
              >
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li>
              <a
                className="nav-link twitter"
                href="https://twitter.com/carsandbids"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <span className="sr-only">Twitter</span>
              </a>
            </li>
          </ul>
          <p className="copyright">© Copyright 2023 Cars and Bids LLC</p>
          <p className="legal">
            <a
              href="/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
              title="Terms of Use"
            >
              Terms of Use
            </a>{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default footer;
