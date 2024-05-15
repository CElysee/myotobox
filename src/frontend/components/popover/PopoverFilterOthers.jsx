import React from "react";

function PopoverFilterOthers({ showPopOver, handleShowPopOver }) {
  return (
    <>
      {showPopOver && <div className="sc-jMakVo chnukS"></div>}
      <div
        className={`sc-jaXxmE iJRokZ category_1 dropDownPopover ${
          showPopOver ? "showPopover" : null
        }`}
      >
        <form
          name="category_1"
          autoComplete="off"
          noValidate=""
          className="sc-ibQAlb iOlkdw  "
        >
          <div className="sc-fTFjTM FQjQE">
            <div className="sc-jGKxIK juFfCH dropdownTitle">
              <div className="sc-hwdzOV eAyoUW dropDownTitleHolder">
                <div className="sc-esYiGF jsLgPD" size="16" type="default">
                  Filters
                </div>
                <button
                  className="sc-tagGq fRhCEv"
                  type="button"
                  data-testid="close-button"
                  onClick={handleShowPopOver}
                >
                  <img
                    src="https://static.dubizzle.com/frontend-web/listings/assets/images/xMark.svg"
                    className="sc-hZDyAQ dAkAzs"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="sc-guJBdh diCYgE  dropDownContentHolder">
            <div className="sc-dBmzty hFTrak">
              <div className="sc-fifgRP dJFunU">
                <div className="sc-bDumWk bQMEsa">
                  <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                    <div className="sc-1xtdvaj-0 iqjTqg">
                      <div className="sc-rpwses-6 jSvZvk dropDownContentHolder">
                        <div className="dropdown_holder">
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
                                      type="button"
                                      className="sc-6bmekm-0 cOTnrw"
                                    >
                                      <div
                                        data-testid="transmission_type-manual-transmission"
                                        type="button"
                                        className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                                        className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                                          className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                                          data-testid="fuel_type-petrol"
                                          type="large"
                                          className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                                          className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                                          className={`sc-6bmekm-1 contentContainer dwAEqK`}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="sc-krNlru dCroFP dropDownButtonsRow">
            <button
              className="sc-tagGq hLfOBg"
              type="reset"
              data-testid="reset"
            >
              Clear
            </button>
            <button
              className="sc-tagGq eZFUTO filter"
              type="submit"
              data-testid="submit"
            >
              Apply filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PopoverFilterOthers;
