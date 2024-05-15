import React, { useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import {
  formatNumber,
  formatAmount,
  truncateText,
} from "../../../../utils/helpers";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function PopoverPriceRange({
  showPopOver,
  handleShowPopOver,
  minInputPrice,
  maxInputPrice,
  inputValues,
  handlePriceChange,
  loading,
  handleReset,
  showResultsNumber,
  handlePriceFilter,
}) {
  const [color, setColor] = useState("#fff");
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
                  {inputValues.min_input_price
                    ? `${
                        inputValues.min_input_price || inputValues.max_input_price
                          ? formatNumber(inputValues.min_input_price)
                          : 0
                      } - ${
                        inputValues.max_input_price
                          ? formatNumber(inputValues.max_input_price)
                          : formatNumber(120000000)
                      }`
                    : "Choose price range"}
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
                            value={inputValues.min_input_price}
                            onChange={handlePriceChange}
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
                            value={inputValues.max_input_price}
                            onChange={handlePriceChange}
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
              onClick={() => {
                handleReset("price");
                handleShowPopOver(!showPopOver);
              }}
            >
              Clear
            </button>
            <button
              className="sc-tagGq eZFUTO filter"
              type="submit"
              data-testid="submit"
              disabled={
                showResultsNumber.results === 0 &&
                showResultsNumber.category == "price"
              }
              onClick={handlePriceFilter}
            >
              {loading ? (
                <RiseLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : showResultsNumber.results !== null &&
                showResultsNumber.category == "price" ? (
                `Show ${showResultsNumber.results} Results`
              ) : (
                "Apply filters"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PopoverPriceRange;
