import React, { useState } from "react";
// import Logo from "";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const nav_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/BuyCars",
      display: "Buy",
    },
    {
      path: "/RentCars",
      display: "Rent",
    },
    {
      path: "/ImportOnOrder",
      display: "Import on order",
    },
    {
      path: "/myotobox",
      display: "Tax calculator",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const MenuItem = ({ to, display }) => {
    // const isActive = activeIndex === nav_links.indexOf(children);
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
      <li
        className={isActive ? "nav-item active" : "nav-item"}
        onClick={() => {
          setActiveIndex(i);
        }}
      >
        <Link to={to} className="nav-link">
          {display}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div
        className="lo mobile-hide-border navbar navbar-expand-md navbar-light fixed-top"
        id="autos-nav"
      >
        <Link to="/" className="navbar-brand logo" aria-current="page">
          <svg
            width="890.5000000000001"
            height="133.12576794511895"
            viewBox="0 0 369.6666666666667 55.26351362572971"
            className="css-1j8o68f"
          >
            <defs id="SvgjsDefs1011"></defs>
            <g
              id="SvgjsG1012"
              featurekey="PG4fjM-0"
              transform="matrix(1.0247690251052775,0,0,1.0247690251052775,-9.571376078911218,-23.095615284545097)"
              fill="#FFC300"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M32.27,57.891c0,1.104-0.298,2.124-0.82,3.005c-1.031,1.738-2.917,2.905-5.079,2.905c-2.607,0-4.83-1.701-5.6-4.061   c-0.199-0.582-0.299-1.203-0.299-1.85c0-3.254,2.645-5.886,5.898-5.886C29.625,52.005,32.27,54.637,32.27,57.891z"></path>
                <path d="M85.206,57.891c0,0.795-0.149,1.539-0.435,2.223c-0.881,2.161-2.992,3.688-5.477,3.688c-2.384,0-4.433-1.415-5.353-3.464   c-0.347-0.745-0.533-1.564-0.533-2.446c0-3.254,2.633-5.886,5.886-5.886C82.562,52.005,85.206,54.637,85.206,57.891z"></path>
                <path d="M89.701,59.294l-2.955,0.782L86.1,60.09c0.236-0.696,0.349-1.441,0.349-2.199c0-3.924-3.204-7.128-7.153-7.128   c-3.924,0-7.128,3.204-7.128,7.128c0,0.857,0.149,2.483,0.46,3.266H33.896l-1.117-0.123c0.484-0.969,0.732-2.05,0.732-3.143   c0-3.924-3.204-7.128-7.14-7.128c-3.936,0-7.14,3.204-7.14,7.128c0,0.583,0.074,1.154,0.199,1.701l-8.581-0.919   c0,0-2.869-5.974-0.695-8.147c2.172-2.173,0.695-5.972,0.695-5.972h7.45c0,0,8.68-6.941,21.036-8.158   c3.949-0.385,7.835-0.087,7.835-0.087s7.997,0.012,12.802,3.899c5.837,4.694,9.302,4.842,13.797,5.152   c4.507,0.311,12.355,0.436,15.385,3.614C92.185,52.154,89.701,59.294,89.701,59.294z"></path>
              </g>
            </g>
            <g
              id="SvgjsG1013"
              featurekey="jxYttZ-0"
              transform="matrix(2.69578115247462,0,0,2.69578115247462,98.68674591406015,-12.993665617689173)"
              fill="#111111"
            >
              <path d="M18.54 5 l0.32 0 l0 15 l-2.22 0 l0 -11.26 l-5.78 11.26 l-1.26 0 l-5.78 -11.26 l0 11.26 l-2.22 0 l0 -15 l0.3 0 l2.38 0 l5.94 11.6 l5.94 -11.6 l2.38 0 z M30.439999999999998 10.12 c0 0 -2.5 5.92 -4.16 9.88 c-1.4 3.32 -2.5 5.32 -4.36 5.32 c-0.58 0 -1.32 -0.28 -1.86 -0.6 l0.62 -1.8 c0.16 0.14 0.52 0.34 0.76 0.4 c1.54 0.44 2.5 -2.78 3.16 -4.36 l-3.74 -8.84 l2.08 0 l2.72 6.48 l2.7 -6.48 l2.08 0 z M39.06 6.66 c-3.16 0 -5.4 2.8 -5.4 5.84 c0 3.06 2.24 5.86 5.4 5.86 c3.18 0 5.4 -2.8 5.4 -5.86 c0 -3.04 -2.24 -5.84 -5.4 -5.84 z M39.06 4.82 c4.2 0 7.62 3.32 7.62 7.68 s-3.42 7.7 -7.62 7.7 s-7.62 -3.34 -7.62 -7.7 s3.42 -7.68 7.62 -7.68 z M52.480000000000004 18.36 c0.64 0.26 1.14 0.08 1.44 -0.06 l0 1.6 c-0.26 0.16 -0.64 0.3 -1.18 0.3 c-1.18 0 -2.22 -0.38 -2.86 -1.42 c-0.6 -1 -0.6 -1.54 -0.6 -3.1 l0 -3.88 l-1.2 0 l0 -1.68 l1.2 0 l0 -3.12 l2.06 0 l0 3.12 l2.58 0 l0 1.68 l-2.58 0 l0 3.88 c0 1.64 0.16 2.24 1.14 2.68 z M61.06 11.64 c-1.7 0 -3.08 1.42 -3.08 3.44 c0 2 1.38 3.44 3.08 3.44 s3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 z M61.06 9.94 c2.84 0 5.14 2.2 5.14 5.14 s-2.3 5.12 -5.14 5.12 s-5.14 -2.18 -5.14 -5.12 s2.3 -5.14 5.14 -5.14 z M73.36 9.94 c2.84 0 4.94 2.2 4.94 5.14 s-2.1 5.12 -4.94 5.12 c-0.96 0 -2.06 -0.36 -2.84 -0.94 l0 0.74 l-2.06 0 l0 -15 l2.06 0 l0 5.9 c0.66 -0.54 1.88 -0.96 2.84 -0.96 z M73.16 18.52 c1.7 0 3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 c-1.12 0 -2.1 0.5 -2.64 1.56 c-0.28 0.56 -0.44 1.2 -0.44 1.88 s0.16 1.32 0.44 1.86 c0.54 1.06 1.52 1.58 2.64 1.58 z M85.04 11.64 c-1.7 0 -3.08 1.42 -3.08 3.44 c0 2 1.38 3.44 3.08 3.44 s3.08 -1.44 3.08 -3.44 c0 -2.02 -1.38 -3.44 -3.08 -3.44 z M85.04 9.94 c2.84 0 5.14 2.2 5.14 5.14 s-2.3 5.12 -5.14 5.12 s-5.14 -2.18 -5.14 -5.12 s2.3 -5.14 5.14 -5.14 z M100.52000000000001 10.12 l-3.5 4.94 l3.5 4.94 l-2.36 0 l-2.2 -3.3 l-2.22 3.3 l-2.36 0 l3.52 -4.94 l-3.52 -4.94 l2.36 0 l2.22 3.3 l2.2 -3.3 l2.36 0 z"></path>
            </g>
          </svg>
        </Link>
        <Link
          to={"/login"}
          className="btn btn-primary btn-lg btn-signin" style={{marginRight: "10px"}}
          onClick={navigateToSignUp}
        >
          Login
        </Link>
        <Link
          className="btn btn-primary btn-lg btn-signin"
          to={"/sign-up"}
        >
          Sign Up
        </Link>
        <button className="navbar-toggler closed" type="button">
          <span className="navbar-toggler-icon">
            <span className="sr-only">Nav</span>
          </span>
          <span className="x-icon">
            <span className="sr-only">Close</span>
          </span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="d-flex flex-column flex-md-row flex-grow-1">
            <ul className="navbar-nav WhatIs">
              {nav_links.map((link, i) => (
                <MenuItem key={i} to={link.path} display={link.display} />
              ))}
            </ul>
            {/* <form
              method="post"
              className="search-form form-inline"
              autoComplete="off"
              noValidate=""
            >
              <fieldset className="form-group" style={{ width: "100%" }}>
                <div role="combobox" className="react-autosuggest__container">
                  <input
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Search for cars (ex. BMW, Audi, Ford)"
                    name="search"
                    value=""
                  />
                  <div
                    id="react-autowhatever-1"
                    role="listbox"
                    className="react-autosuggest__suggestions-container"
                  ></div>
                </div>
              </fieldset>
            </form> */}
          </div>
        </div>
        <div className="header-border"></div>
      </div>
    </>
  );
}

export default Header;
