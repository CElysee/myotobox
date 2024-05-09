import React, { useEffect, useState } from "react";

function PopoverModel({
  showPopOver,
  brandModels,
  handleShowPopOver,
  handleModelChange,
}) {
  const [listModelFiltered, setListModelFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const model_id = new URLSearchParams(location.search).get("model_id");

  useEffect(() => {
    const filtered = brandModels.filter((model) =>
      model.brand_model_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListModelFiltered(filtered);
  }, [searchValue, brandModels]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
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
                  Model
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
              <div className="sc-ehixzo ifDNpE sc-sLsrZ gzXejl searchInput ">
                <svg
                  width="21"
                  height="21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-kbhJrz gzWYVg"
                >
                  <path
                    d="M20.71 19.29L17 15.61A9 9 0 1015.61 17l3.68 3.68a1.002 1.002 0 001.42 0 1 1 0 000-1.39zM10 17a7 7 0 110-14 7 7 0 010 14z"
                    fill="#A3A6AA"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="category_1"
                  autoComplete="off"
                  placeholder="e.g. Toyota"
                  data-testid="category_1_input"
                  className="sc-iHmpnF bEjwqA"
                  value={searchValue}
                  onChange={handleSearch}
                />
              </div>
              <div className="sc-fifgRP dJFunU">
                <div className="sc-bDumWk bQMEsa">
                  <ul
                    className="sc-dkmUuB bdRjvO searchResults"
                    data-testid="search-result-category_1"
                  >
                    <li className="sc-ejfMa-d eKdSbL">
                      <span className="sc-EgOXT eriFET">All in Models</span>
                    </li>
                    {listModelFiltered.map((model) => (
                      <li
                        className={`sc-ejfMa-d ${model_id === (model.brand_model_name).toLowerCase() ? "kpnEkf-active" : "kpnEkf"}`}
                        key={model.id}
                        onClick={() => {
                          handleModelChange({
                            value: model.id,
                            label: model.brand_model_name,
                          });
                        }}
                      >
                        <span className="sc-EgOXT eriFET">
                          {model.brand_model_name}
                        </span>
                      </li>
                    ))}
                  </ul>
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

export default PopoverModel;
