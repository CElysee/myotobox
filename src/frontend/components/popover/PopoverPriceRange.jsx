import React from "react";

function PopoverPriceRange({ showPopOver, handleShowPopOver }) {
  return (
    <>
    {showPopOver && (  <div className="sc-jMakVo chnukS"></div>)}
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
                  Price Range
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
                            min="1"
                            max="550000000"
                            step="1"
                            name="min_input_price"
                            placeholder="0"
                            value=""
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
                            min="1"
                            max="550000000"
                            step="1"
                            name="max_input_price"
                            placeholder="Any"
                            value=""
                          />
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

export default PopoverPriceRange;
