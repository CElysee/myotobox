import React, {useEffect, useState} from "react";
import { label } from "yet-another-react-lightbox";
import { useParams } from "react-router-dom";

function PopoverMake({
  showPopOver,
  listBrands,
  handleShowPopOver,
  handleBrandChange,
}) {
  const [listBrandFiltered, setListBrandFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const params = useParams();

  useEffect(() => {
    const filtered = listBrands.filter(brand =>
      brand.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListBrandFiltered(filtered);
  }, [searchValue, listBrands]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      {showPopOver && <div className="sc-jMakVo chnukS" onClick={handleShowPopOver}></div>}
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
                  Make
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
                      <span className="sc-EgOXT eriFET">All in Cars</span>
                    </li>
                    {listBrandFiltered.map((brand, index) => (
                      <li
                      className={`sc-ejfMa-d ${params.make === (brand.name).toLowerCase() ? "kpnEkf-active" : "kpnEkf"}`}
                        key={brand.id}
                        onClick={() =>
                          handleBrandChange({
                            value: brand.id,
                            label: brand.name,
                          })
                        }
                      >
                        <span className="sc-EgOXT eriFET">{brand.name}</span>
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

export default PopoverMake;
