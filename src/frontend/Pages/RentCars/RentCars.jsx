import React from "react";
import "./RentCars.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import RentCarsGrid from "../../components/rentCarsGrid/RentCarsGrid";

function RentCars() {
  return (
    <div className="main_content container-fluid">
      <div className="filterbar">
        <div className="car_filter">
          <div className="iEzCwv firstItem">
            <label className="form-label" htmlFor="expertise">
              Make
            </label>
            <Select
              placeholder="eg: Toyota"
              name="industry_id"
              isMulti
              options=""
              value=""
            />
          </div>
          <div className="iEzCwv secondItem">
            <label className="form-label" htmlFor="expertise">
              Model
            </label>
            <Select
              placeholder="Model name"
              name="industry_id"
              isMulti
              options=""
              value=""
            />
          </div>

          <div className="iEzCwv thirdItem">
            <label className="form-label" htmlFor="expertise">
              Price (RWF)
            </label>
            <div className="dropdown" style={{ display: "flex" }}>
              <button
                className="btn btn-secondary dropdown-toggle carfilter_button_dropdown"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose range
              </button>
              <div className="css-4xgw5l-IndicatorsContainer2">
                <span className=" css-1u9des2-indicatorSeparator"></span>
                <div
                  className="css-1xc3v61-indicatorContainer"
                  aria-hidden="true"
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-tj5bde-Svg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                  <div className="sc-1xtdvaj-0 iqjTqg">
                    <div className="sc-1xtdvaj-1 kWPgKZ">
                      <div className="sc-1xtdvaj-2 gKrQdv">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          From
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="min-input-price"
                          min="1"
                          max="200000000"
                          step="1"
                          name="price.min"
                          placeholder="0"
                          value="200"
                        />
                      </div>
                      <div className="sc-1xtdvaj-3 drIaET">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          Upto
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="max-input-price"
                          min="1"
                          max="200000000"
                          step="1"
                          name="price.max"
                          placeholder="Any"
                          value="3000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-rpwses-1 gjZPbt dropDownButtonsRow">
                  <button
                    className="sc-1c4mb2u-0 hUdPjg"
                    type="reset"
                    data-testid="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="sc-1c4mb2u-0 hHfOrj filter"
                    type="submit"
                    data-testid="submit"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="iEzCwv thirdItem">
            <label className="form-label" htmlFor="expertise">
              Year
            </label>
            <div className="dropdown" style={{ display: "flex" }}>
              <button
                className="btn btn-secondary dropdown-toggle carfilter_button_dropdown"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose range
              </button>
              <div className="css-4xgw5l-IndicatorsContainer2">
                <span className=" css-1u9des2-indicatorSeparator"></span>
                <div
                  className="css-1xc3v61-indicatorContainer"
                  aria-hidden="true"
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-tj5bde-Svg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                  <div className="sc-1xtdvaj-0 iqjTqg">
                    <div className="sc-1xtdvaj-1 kWPgKZ">
                      <div className="sc-1xtdvaj-2 gKrQdv">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          From
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="min-input-price"
                          min="1920"
                          max="2024"
                          step="1"
                          name="price.min"
                          placeholder="0"
                          value="1970"
                        />
                      </div>
                      <div className="sc-1xtdvaj-3 drIaET">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          Upto
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="max-input-price"
                          min="1920"
                          max="2024"
                          step="1"
                          name="price.max"
                          placeholder="Any"
                          value="2024"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-rpwses-1 gjZPbt dropDownButtonsRow">
                  <button
                    className="sc-1c4mb2u-0 hUdPjg"
                    type="reset"
                    data-testid="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="sc-1c4mb2u-0 hHfOrj filter"
                    type="submit"
                    data-testid="submit"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="iEzCwv thirdItem">
            <label className="form-label" htmlFor="expertise">
              Kilometers
            </label>
            <div className="dropdown" style={{ display: "flex" }}>
              <button
                className="btn btn-secondary dropdown-toggle carfilter_button_dropdown"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose range
              </button>
              <div className="css-4xgw5l-IndicatorsContainer2">
                <span className=" css-1u9des2-indicatorSeparator"></span>
                <div
                  className="css-1xc3v61-indicatorContainer"
                  aria-hidden="true"
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-tj5bde-Svg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                  <div className="sc-1xtdvaj-0 iqjTqg">
                    <div className="sc-1xtdvaj-1 kWPgKZ">
                      <div className="sc-1xtdvaj-2 gKrQdv">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          From
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="min-input-price"
                          min="0"
                          max="10000000"
                          step="1"
                          name="price.min"
                          placeholder="0"
                          value="0"
                        />
                      </div>
                      <div className="sc-1xtdvaj-3 drIaET">
                        <div
                          className="sc-bwquqg-0 dKpJPQ"
                          size="14"
                          type="secondary"
                        >
                          Upto
                        </div>
                        <input
                          type="number"
                          className="sc-u95ujf-0 dNPQQh sc-1xtdvaj-4 fNpmOJ"
                          data-testid="max-input-price"
                          min="0"
                          max="10000000"
                          step="1"
                          name="price.max"
                          placeholder="Any"
                          value="10000000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-rpwses-1 gjZPbt dropDownButtonsRow">
                  <button
                    className="sc-1c4mb2u-0 hUdPjg"
                    type="reset"
                    data-testid="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="sc-1c4mb2u-0 hHfOrj filter"
                    type="submit"
                    data-testid="submit"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="iEzCwv thirdItem">
            <label className="form-label" htmlFor="expertise">
              Filters
            </label>
            <div className="dropdown" style={{ display: "flex" }}>
              <button
                className="btn btn-secondary dropdown-toggle carfilter_button_dropdown"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Seller Type, Fuel Type, Transmission Type
              </button>
              <div className="css-4xgw5l-IndicatorsContainer2">
                <span className=" css-1u9des2-indicatorSeparator"></span>
                <div
                  className="css-1xc3v61-indicatorContainer"
                  aria-hidden="true"
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-tj5bde-Svg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
              <div
                className="dropdown-menu last_dropdown"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                  <div className="dropdown_holder">
                    <div>
                      <div
                        data-testid="seller_type-item"
                        className="sc-tyg5kx-2 gUvuUo single_string"
                      >
                        <div
                          className="sc-bwquqg-0 jLvUMq sc-tyg5kx-1 fTIrXz title"
                          size="14"
                          type="default"
                        >
                          Seller Type
                        </div>
                        <div>
                          <div className="sc-a5hw56-0 eDOeRK">
                            <div className="sc-1ygqovz-0 dFceLx tagWrapper">
                              <div className="sc-1ygqovz-1 jzJwEM tagList seller_type motors no-seo-link false">
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="seller_type-OW"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Owner
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="seller_type-DL"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Dealer
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="seller_type-DS"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Dealership/Certified Pre-Owned
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="none"
                                  type="large"
                                  className="sc-6bmekm-0 czaihn view-all"
                                >
                                  <div
                                    data-testid="view-all-view-all"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK view-all contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      <span className="sc-1ygqovz-2 YSGTM">
                                        View Less
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-uf558u-0 cCmKOx divider"></div>
                    </div>
                    <div>
                      <div
                        data-testid="transmission_type-item"
                        className="sc-tyg5kx-2 gUvuUo multi_list"
                      >
                        <div
                          className="sc-bwquqg-0 jLvUMq sc-tyg5kx-1 fTIrXz title"
                          size="14"
                          type="default"
                        >
                          Transmission Type
                        </div>
                        <div>
                          <div className="sc-tyg5kx-8 gfvDkr">
                            <div className="sc-1ygqovz-0 dFceLx tagWrapper">
                              <div className="sc-1ygqovz-1 jzJwEM tagList transmission_type motors no-seo-link false">
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="transmission_type-manual-transmission"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Manual Transmission
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="transmission_type-automatic-transmission"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Automatic Transmission
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-uf558u-0 cCmKOx divider"></div>
                    </div>
                    <div>
                      <div
                        data-testid="fuel_type-item"
                        className="sc-tyg5kx-2 gUvuUo multi_list"
                      >
                        <div
                          className="sc-bwquqg-0 jLvUMq sc-tyg5kx-1 fTIrXz title"
                          size="14"
                          type="default"
                        >
                          Fuel Type
                        </div>
                        <div>
                          <div className="sc-tyg5kx-8 gfvDkr">
                            <div className="sc-1ygqovz-0 dFceLx tagWrapper">
                              <div className="sc-1ygqovz-1 jzJwEM tagList fuel_type motors no-seo-link false">
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="fuel_type-petrol"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Petrol
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="fuel_type-diesel"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Diesel
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="fuel_type-hybrid"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Hybrid
                                    </span>
                                  </div>
                                </div>
                                <div
                                  display="block"
                                  type="large"
                                  className="sc-6bmekm-0 cOTnrw"
                                >
                                  <div
                                    data-testid="fuel_type-electric"
                                    type="large"
                                    className="sc-6bmekm-1 dwAEqK contentContainer"
                                  >
                                    <span
                                      type="large"
                                      className="sc-6bmekm-3 cTaNfx"
                                    >
                                      Electric
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-rpwses-1 gjZPbt dropDownButtonsRow">
                  <button
                    className="sc-1c4mb2u-0 hUdPjg"
                    type="reset"
                    data-testid="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="sc-1c4mb2u-0 hHfOrj filter"
                    type="submit"
                    data-testid="submit"
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-2be0ug-3 jbRQcv">
          <div className="sc-2be0ug-4 dGXCjo">
            <div className="sc-1id7lm3-0 hVORPI">
              <h1 data-testid="page-title" className="sc-1id7lm3-1 blQYHO">
                Buy &amp; sell cars online in Rwanda,
                <span className="sc-1id7lm3-2 ddsRZk">28546 cars</span>
              </h1>
            </div>
            <div className="sc-2be0ug-7 gPeCQR">
              <div className="sc-2be0ug-6 eOsWZf">
                <div className="MuiBox-root css-12jphfb">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-na3qvr"
                    tabIndex="0"
                    type="button"
                    data-testid="sort-button"
                    lang="en"
                  >
                    <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                      <div className="MuiBox-root css-zm52d6">
                        <img
                          className="MuiBox-root css-dixl0t"
                          src="https://static.dubizzle.com/frontend-web/listings/assets/images/sortIcon.svg"
                          alt="Sort"
                        />
                      </div>
                    </span>
                    <span className="MuiTypography-root MuiTypography-subtitle2 css-xp2fim">
                      Sort<span>:</span>&nbsp;
                    </span>
                    Default
                  </button>
                </div>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-td2zoy"
                  tabIndex="0"
                  type="button"
                  id="saved-search-button"
                  data-testid="save-search"
                >
                  <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                    <div className="MuiBox-root css-zm52d6">
                      <img
                        className="MuiBox-root css-jig81s"
                        src="https://static.dubizzle.com/frontend-web/listings/assets/images/saveIcon.svg"
                        alt="Save search"
                      />
                    </div>
                  </span>
                  <span
                    className="MuiTypography-root MuiTypography-subtitle2 css-xp2fim"
                    id="save-label"
                  >
                    Save
                  </span>
                  <span
                    className="MuiTypography-root MuiTypography-subtitle2 css-xp2fim"
                    id="search-label"
                  >
                    &nbsp;Search
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="sc-2be0ug-4 dGXCjo custom-color">
            <div className="sc-1gw24wa-0 ligASl">
              <div className="sc-a5hw56-0 eDOeRK sc-1xfau7x-0 isSldw">
                <div className="sc-1ygqovz-0 dFceLx tagWrapper">
                  <div className="sc-1ygqovz-1 hcVlAz tagList category_1 motors seo-link one-row">
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/mercedes-benz"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/mercedes-benz/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Mercedes-Benz
                          <span className="sub_label">(3972)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/toyota"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/toyota/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Toyota
                          <span className="sub_label">(2161)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/nissan"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/nissan/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Nissan
                          <span className="sub_label">(1852)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/land-rover"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/land-rover/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Land Rover
                          <span className="sub_label">(1837)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/bmw"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/bmw/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          BMW
                          <span className="sub_label">(1732)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/ford"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/ford/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Ford
                          <span className="sub_label">(1115)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/porsche"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/porsche/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Porsche
                          <span className="sub_label">(916)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/audi"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/audi/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Audi
                          <span className="sub_label">(806)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/lexus"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/lexus/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Lexus
                          <span className="sub_label">(795)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/hyundai"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/hyundai/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Hyundai
                          <span className="sub_label">(728)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/jeep"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/jeep/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Jeep
                          <span className="sub_label">(701)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/volkswagen"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/volkswagen/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Volkswagen
                          <span className="sub_label">(646)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/mitsubishi"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/mitsubishi/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Mitsubishi
                          <span className="sub_label">(637)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/chevrolet"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/chevrolet/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Chevrolet
                          <span className="sub_label">(547)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/kia"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/kia/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Kia
                          <span className="sub_label">(527)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/honda"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/honda/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Honda
                          <span className="sub_label">(484)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/infiniti"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/infiniti/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Infiniti
                          <span className="sub_label">(424)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/dodge"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/dodge/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Dodge
                          <span className="sub_label">(413)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/rolls-royce"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/rolls-royce/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Rolls Royce
                          <span className="sub_label">(404)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/bentley"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/bentley/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Bentley
                          <span className="sub_label">(341)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/renault"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/renault/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Renault
                          <span className="sub_label">(295)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/mazda"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/mazda/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Mazda
                          <span className="sub_label">(293)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/mini"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/mini/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          MINI
                          <span className="sub_label">(278)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/cadillac"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/cadillac/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Cadillac
                          <span className="sub_label">(261)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/ferrari"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/ferrari/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Ferrari
                          <span className="sub_label">(258)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/lamborghini"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/lamborghini/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Lamborghini
                          <span className="sub_label">(219)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/jaguar"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/jaguar/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Jaguar
                          <span className="sub_label">(209)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/gmc"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/gmc/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          GMC
                          <span className="sub_label">(200)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/tesla"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/tesla/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Tesla
                          <span className="sub_label">(194)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/maserati"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/maserati/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Maserati
                          <span className="sub_label">(184)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/suzuki"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/suzuki/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Suzuki
                          <span className="sub_label">(184)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/peugeot"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/peugeot/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Peugeot
                          <span className="sub_label">(137)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/lincoln"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/lincoln/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Lincoln
                          <span className="sub_label">(113)</span>
                        </a>
                      </div>
                    </div>
                    <div
                      display="block"
                      type="small"
                      className="sc-6bmekm-0 cOTnrw"
                    >
                      <div
                        data-testid="category_1-motors/used-cars/volvo"
                        type="small"
                        className="sc-6bmekm-1 kGzmix contentContainer"
                      >
                        <a
                          href="/motors/used-cars/volvo/"
                          className="sc-6bmekm-4 ljgfSl"
                        >
                          Volvo
                          <span className="sub_label">(104)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RentCarsGrid />
      </div>
    </div>
  );
}

export default RentCars;
