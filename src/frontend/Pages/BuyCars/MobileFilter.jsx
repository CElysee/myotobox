import React, { useState } from "react";
import PopoverMake from "../../components/popover/PopoverMake";
import PopoverModel from "../../components/popover/PopoverModel";
import PopoverPriceRange from "../../components/popover/PopoverPriceRange";
import PopoverYear from "../../components/popover/PopoverYear";
import PopoverKilometers from "../../components/popover/PopoverKilometers";
import PopoverFilterOthers from "../../components/popover/PopoverFilterOthers";

function MobileFilter({
  listBrands,
  brandModels,
  handleBrandChange,
  handleModelChange,
  handlePriceRangeChange,
  handleYearChange,
  handleKilometersChange,
  handleMoreFiltersChange,
}) {
  const [showMakePopOver, setShowMakePopOver] = useState(false);
  const [showModelPopOver, setShowModelPopOver] = useState(false);
  const [showPriceRangePopOver, setShowPriceRangePopOver] = useState(false);
  const [showYearPopOver, setShowYearPopOver] = useState(false);
  const [showKilometersPopOver, setShowKilometersPopOver] = useState(false);
  const [showMoreFiltersPopOver, setShowMoreFiltersPopOver] = useState(false);
  const handleShowMakePopOver = () => {
    setShowMakePopOver(!showMakePopOver);
  };
  const handleShowModelPopOver = () => {
    setShowModelPopOver(!showModelPopOver);
  };
  const handleShowPriceRangePopOver = () => {
    setShowPriceRangePopOver(!showPriceRangePopOver);
  };
  const handleShowYearPopOver = () => {
    setShowYearPopOver(!showYearPopOver);
  };
  const handleShowKilometersPopOver = () => {
    setShowKilometersPopOver(!showKilometersPopOver);
  };
  const handleShowMoreFiltersPopOver = () => {
    setShowMoreFiltersPopOver(!showMoreFiltersPopOver);
  };
  return (
    <div className="sc-iHbSHJ jpVLUw mobile-show">
      <div className="sc-dSCufp huYOvZ">
        <div className="sc-fXSgeo gtZNlu sc-fxwrCY fJAFJk">
          <div className="sc-jnOGJG bDqJcb firstItem">
            <div className="sc-eZkCL gcdqgE" data-testid="category_1">
              <button
                className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                type="button"
                onClick={handleShowMakePopOver}
              >
                <span className="sc-ihgnxF hUdurc dropDownIconContainer"></span>
                <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                  <div className="sc-brPLxw cTWZMl">
                    <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                      Make
                    </span>
                    <span className="sc-iMWBiJ gxmaRy">
                      <img
                        src="/assets/images/iconDown.svg"
                        alt="toggle"
                        className="sc-fvtFIe gfBeab"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="sc-jnOGJG bDqJcb secondItem">
            <div className="sc-eZkCL gcdqgE" data-testid="price-filter">
              <button
                className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                type="button"
                onClick={handleShowModelPopOver}
              >
                <span className="sc-ihgnxF hUdurc dropDownIconContainer"></span>
                <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                  <div className="sc-brPLxw cTWZMl">
                    <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                      Model
                    </span>
                    <span className="sc-iMWBiJ gxmaRy">
                      <img
                        src="/assets/images/iconDown.svg"
                        alt="toggle"
                        className="sc-fvtFIe gfBeab"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="sc-jnOGJG bDqJcb fourthItem ">
            <div className="sc-eZkCL gcdqgE" data-testid="year-filter">
              <button
                className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                type="button"
                onClick={handleShowPriceRangePopOver}
              >
                <span className="sc-ihgnxF hUdurc dropDownIconContainer"></span>
                <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                  <div className="sc-brPLxw cTWZMl">
                    <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                      Price Range (RWF)
                    </span>
                    <span className="sc-iMWBiJ gxmaRy">
                      <img
                        src="/assets/images/iconDown.svg"
                        alt="toggle"
                        className="sc-fvtFIe gfBeab"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="sc-jnOGJG bDqJcb fifthItem ">
            <div className="sc-eZkCL gcdqgE" data-testid="kilometers-filter">
              <button
                className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                type="button"
                onClick={handleShowYearPopOver}
              >
                <span className="sc-ihgnxF hUdurc dropDownIconContainer"></span>
                <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                  <div className="sc-brPLxw cTWZMl">
                    <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                      Year
                    </span>
                    <span className="sc-iMWBiJ gxmaRy">
                      <img
                        src="/assets/images/iconDown.svg"
                        alt="toggle"
                        className="sc-fvtFIe gfBeab"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="sc-jnOGJG bDqJcb fifthItem ">
            <div className="sc-eZkCL gcdqgE" data-testid="kilometers-filter">
              <button
                className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                type="button"
                onClick={handleShowKilometersPopOver}
              >
                <span className="sc-ihgnxF hUdurc dropDownIconContainer"></span>
                <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                  <div className="sc-brPLxw cTWZMl">
                    <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                      Kilometers
                    </span>
                    <span className="sc-iMWBiJ gxmaRy">
                      <img
                        src="/assets/images/iconDown.svg"
                        alt="toggle"
                        className="sc-fvtFIe gfBeab"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <span className="sc-hIUJlX fEGswf"></span>
        <div className="MuiBox-root mui-style-1yd0ikp">
          <div className="popover-spotlight">
            <div className="sc-jnOGJG bDqJcb">
              <div
                className="sc-eZkCL gcdqgE sc-dPZUQH bCHSvi"
                data-testid="more-filters"
              >
                <button
                  className="sc-tagGq jBsVVA sc-ggpjZQ iahVYV buttonOpenDropDown"
                  type="button"
                  onClick={handleShowMoreFiltersPopOver}
                >
                  <span className="sc-ihgnxF hUdurc dropDownIconContainer">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="moreFiltersIcon"
                    >
                      <path
                        d="M15.667 5.817V1.5A.833.833 0 1014 1.5v4.317a2.5 2.5 0 000 4.7V16.5a.834.834 0 001.667 0v-5.983a2.5 2.5 0 000-4.7zM14.834 9a.834.834 0 110-1.667.834.834 0 010 1.667zm-5 1.817V1.5a.833.833 0 00-1.667 0v9.317a2.5 2.5 0 000 4.7v.983a.833.833 0 001.667 0v-.983a2.5 2.5 0 000-4.7zM9 14a.833.833 0 110-1.666A.833.833 0 019 14zM4 4.15V1.5a.833.833 0 10-1.666 0v2.65a2.5 2.5 0 000 4.7v7.65A.833.833 0 004 16.5V8.85a2.5 2.5 0 000-4.7zm-.833 3.183a.833.833 0 110-1.666.833.833 0 010 1.666z"
                        fill="var(--moreFilterIconFill)"
                      ></path>
                    </svg>
                    <span className="sc-lnPyaJ jHEYyq">Filters</span>
                  </span>
                  <div className="sc-gFVvzn dppecY dropDownFieldHolder">
                    <div className="sc-brPLxw cTWZMl">
                      <span className="sc-kAkpmW gapgbx dropDownContainerLabel">
                        Filters
                      </span>
                      <span className="sc-iMWBiJ gxmaRy">
                        <img
                          src="/assets/images/iconDown.svg"
                          alt="toggle"
                          className="sc-fvtFIe gfBeab"
                        />
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="MuiBackdrop-root mui-style-1dng5g2"
          style={{ opacity: "0", visibility: "hidden" }}
        ></div>
      </div>
      <PopoverMake
        listBrands={listBrands}
        showPopOver={showMakePopOver}
        handleShowPopOver={handleShowMakePopOver}
        handleBrandChange={handleBrandChange}
      />
      <PopoverModel
        listBrands={listBrands}
        brandModels={brandModels}
        showPopOver={showModelPopOver}
        handleShowPopOver={handleShowModelPopOver}
        handleModelChange={handleModelChange}
      />
      {/* <PopoverPriceRange showPopOver={showPriceRangePopOver} handleShowPopOver={handleShowPriceRangePopOver} /> */}
      {/* <PopoverYear showPopOver={showYearPopOver} handleShowPopOver={handleShowYearPopOver} /> */}
      {/* <PopoverKilometers showPopOver={showKilometersPopOver} handleShowPopOver={handleShowKilometersPopOver} /> */}
      {/* <PopoverFilterOthers showPopOver={showMoreFiltersPopOver} handleShowPopOver={handleShowMoreFiltersPopOver} /> */}
    </div>
  );
}

export default MobileFilter;
