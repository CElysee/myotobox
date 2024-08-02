import React, { useEffect, useState } from "react";
// import Logo from "";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { selectUser, selectIsAuthenticated } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import axiosInstance from "../../../../utils/AxiosInstance";

function Header() {
  const nav_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/buy-cars",
      display: "Buy",
    },
    {
      path: "/rent-cars",
      display: "Rent",
    },
    {
      path: "/sell-my-car",
      display: "Sell my car",
    },
    {
      path: "/view4you",
      display: "View4You",
    },
    {
      path: "/import-on-order",
      display: "Import on order",
    },
    {
      path: "/car-tax-calculator",
      display: "Tax calculator",
    },
  ];
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const MenuItem = ({ to, display }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const handleActiveIndex = (i) => {
      setActiveIndex(i);
      setShowToggleMenu(false);
    };
    return (
      <li
        className={isActive ? "nav-item active" : "nav-item"}
        onClick={handleActiveIndex}
      >
        <Link to={to} className="nav-link">
          {display}
        </Link>
      </li>
    );
  };
  const selectedUser = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (search !== "") {
          const response = await axiosInstance.get(
            `/car_for_sale/search?keyword=${search}`
          );
          setSearchResults(response.data);
        } else {
          setSearchResults([]); // Clear search results if search query is empty
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [search]);

  const handleSearchResultClick = async (result) => {
    try {
      const response = await axiosInstance.get(
        `/car_for_sale/search/${result}`
      );
      const car = response.data;
      const brandSlug = car.car_brand.toLowerCase();
      const modelSlug = car.car_model.toLowerCase();
      const navigateUrl = `/buy-cars/${brandSlug}/?model_id=${modelSlug}`;

      navigate(navigateUrl);
      setSearch("");
      setSearchResults([]);
    } catch (error) {
      console.error("Error fetching car details:", error);
    }
  };
  const handleMobileMenu = () => {
    setShowToggleMenu(!showToggleMenu);
  };
  const handleShowMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };
  return (
    <>
      <div
        className="lo mobile-hide navbar navbar-expand-md navbar-light fixed-top"
        id="autos-nav"
      >
        <Link to="/" className="navbar-brand logo" aria-current="page">
          <img src="/assets/images/myotobox-logo.png" alt="logo" />
        </Link>

        <div className="collapse navbar-collapse">
          <div className="d-flex flex-column flex-md-row flex-grow-1">
            <ul className="navbar-nav WhatIs">
              {nav_links.map((link, i) => (
                <MenuItem key={i} to={link.path} display={link.display} />
              ))}
            </ul>
          </div>
        </div>

        <form
          method="post"
          className={`search-form form-inline ${
            searchResults.length > 0 ? "active" : ""
          }`}
          autoComplete="off"
          noValidate=""
        >
          <fieldset className="form-group" style={{ width: "100%" }}>
            <div
              role="combobox"
              aria-haspopup="listbox"
              aria-owns="react-autowhatever-1"
              aria-expanded="false"
              className="react-autosuggest__container"
            >
              <input
                type="text"
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls="react-autowhatever-1"
                className="form-control"
                placeholder="Search for cars (ex. BMW, Toyota, KIA)"
                name="search"
                value={search}
                onChange={handleSearch}
              />
              <div
                id="react-autowhatever-1"
                role="listbox"
                className={`react-autosuggest__suggestions-container ${
                  searchResults.length > 0
                    ? "react-autosuggest__suggestions-container--open"
                    : ""
                }`}
              >
                <ul
                  role="listbox"
                  className="react-autosuggest__suggestions-list"
                >
                  {searchResults.length > 0 &&
                    searchResults.map((result, index) => (
                      <li
                        key={index}
                        role="option"
                        id="react-autowhatever-1--item-0"
                        aria-selected="false"
                        className="react-autosuggest__suggestion react-autosuggest__suggestion--first"
                        data-suggestion-index={index}
                      >
                        <button
                          type="button"
                          className="rb"
                          onClick={() => handleSearchResultClick(result)}
                        >
                          {result}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </fieldset>
        </form>

        {isAuthenticated ? (
          <Link
            // to={"/user/dashboard"}
            to={""}
            className="btn btn-primary btn-lg btn-signin"
            style={{ marginRight: "10px", width: "auto", padding: "0px 10px" }}
          >
            {selectedUser.name} - My Account
          </Link>
        ) : (
          <div className="auth-btn">
            <Link
              to={"/login"}
              className="btn btn-primary btn-lg btn-signin"
              style={{ marginRight: "10px" }}
            >
              Login
            </Link>
            <Link className="btn btn-primary btn-lg btn-signin" to={"/sign-up"}>
              Sign Up
            </Link>
          </div>
        )}
        <div className="header-border"></div>
      </div>

      <div
        id="autos-nav"
        className="lo mobile-show mobile-hide-border navbar navbar-expand-md navbar-light fixed-top"
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand mobile_logo"
            aria-current="page"
            style={{ width: "50%" }}
          >
            <img src="/assets/images/myotobox-logo.png" alt="logo" />
          </Link>
          {!isAuthenticated ? (
            <Link className="btn btn-primary btn-lg btn-signin" to={"/sign-up"}>
              Sign Up
            </Link>
          ) : null}

          <button
            type="button"
            className={`btn rb btn-link mobile-search ${
              showMobileSearch ? "open" : null
            }`}
            onClick={handleShowMobileSearch}
          >
            <span className="sr-only">Search</span>
          </button>
          <div
            className={`collapse navbar-collapse  ${
              showMobileSearch ? "show" : ""
            }`}
          >
            <div className="d-flex flex-column flex-md-row flex-grow-1">
              <div className="scroll-wrapper">
                <div className="mobile-heading search-open">
                  <div>
                    <h6>Search</h6>
                  </div>
                  <div>
                    {" "}
                    <button
                      type="button"
                      className="btn rb btn-link mobile-search-close open"
                      onClick={handleShowMobileSearch}
                    >
                      <span className="x-icon">
                        <span className="sr-only">Close</span>
                      </span>
                    </button>
                  </div>
                </div>

                <form
                  method="post"
                  className={`search-form form-inline ${
                    searchResults.length > 0 ? "active" : ""
                  }`}
                  autoComplete="off"
                  noValidate=""
                >
                  <fieldset className="form-group" style={{ width: "100%" }}>
                    <div
                      role="combobox"
                      aria-haspopup="listbox"
                      aria-owns="react-autowhatever-1"
                      aria-expanded="false"
                      className="react-autosuggest__container"
                    >
                      <input
                        type="text"
                        autoComplete="off"
                        aria-autocomplete="list"
                        aria-controls="react-autowhatever-1"
                        className="form-control"
                        placeholder="Search for cars (ex. BMW, Toyota, KIA)"
                        name="search"
                        value={search}
                        onChange={handleSearch}
                      />
                      <div
                        id="react-autowhatever-1"
                        role="listbox"
                        className={`react-autosuggest__suggestions-container ${
                          searchResults.length > 0
                            ? "react-autosuggest__suggestions-container--open"
                            : ""
                        }`}
                      >
                        <ul
                          role="listbox"
                          className="react-autosuggest__suggestions-list"
                        >
                          {searchResults.length > 0 &&
                            searchResults.map((result, index) => (
                              <li
                                key={index}
                                role="option"
                                id="react-autowhatever-1--item-0"
                                aria-selected="false"
                                className="react-autosuggest__suggestion react-autosuggest__suggestion--first"
                                data-suggestion-index={index}
                              >
                                <button
                                  type="button"
                                  className="rb"
                                  onClick={() =>
                                    handleSearchResultClick(result)
                                  }
                                >
                                  {result}
                                </button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {isAuthenticated ? (
            <Link className="btn rb mb-community" title="Community">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="User / Users">
                  <path
                    id="Vector"
                    d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Link>
          ) : null}

          <button
            type="button"
            className={`navbar-toggler mobile-menu ${
              showToggleMenu ? "open" : ""
            }`}
            onClick={handleMobileMenu}
          >
            <span className="navbar-toggler-icon">
              <span className="sr-only">Nav</span>
            </span>
            <span className="x-icon">
              <span className="sr-only">Close</span>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse  ${
              showToggleMenu ? "show" : ""
            }`}
          >
            <div className="d-flex flex-column flex-md-row flex-grow-1">
              <div className="scroll-wrapper">
                <div className="mobile-heading">
                  <h6>Menu</h6>
                </div>
                <ul className="navbar-nav">
                  {nav_links.map((link, i) => (
                    <MenuItem key={i} to={link.path} display={link.display} />
                  ))}

                  {isAuthenticated ? (
                    <li className="nav-item">
                      <Link
                        className="btn btn-primary btn-lg btn-signin"
                        // onClick={navigateToSignUp}
                        style={{
                          width: "auto",
                          padding: "10px 10px",
                          height: "auto",
                          float: "left",
                        }}
                      >
                        {selectedUser.name} - My Account
                      </Link>
                    </li>
                  ) : (
                    <div className="auth-btn">
                      <Link
                        to={"/login"}
                        className="btn btn-primary btn-lg btn-signin"
                        style={{ marginRight: "10px" }}
                        onClick={handleMobileMenu}
                      >
                        Login
                      </Link>
                      <Link
                        className="btn btn-primary btn-lg btn-signin"
                        to={"/sign-up"}
                        onClick={handleMobileMenu}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="header-border"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
