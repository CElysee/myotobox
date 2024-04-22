import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import "./BuyCars.css";
import makeAnimated from "react-select/animated";
import SellCarsGrid from "../../components/SellCarsGrid/SellCarsGrid";
import axiosInstance from "../../../../utils/axiosInstance";
import Select from "react-select";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function BuyCars() {
  const make_search = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [brandName, setBrandName] = useState(make_search.make);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [carsForSale, setCarsForSale] = useState("");
  const [makeWithModels, setMakeWithModels] = useState([]);
  const [countCarsForSale, setCountCarsForSale] = useState("");
  const [listBrands, setListBrands] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [color, setColor] = useState("#fff");
  const [loading, setLoading] = useState(false);
  const minInputPrice = new URLSearchParams(location.search).get(
    "min_input_price"
  );
  const maxInputPrice = new URLSearchParams(location.search).get(
    "max_input_price"
  );

  const [inputValues, setInputValues] = useState({
    brand_id: "",
    model_id: "",
    min_input_price: minInputPrice,
    max_input_price: maxInputPrice,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/car_for_sale/list");
      const list_brands = await axiosInstance.get("/car_for_sale/car_brands");
      const brand = list_brands.data.car_brand.filter(
        (brand) => brand.name.toLowerCase() == brandName
      );
      setSelectedBrand({
        value: brand[0].id,
        label: brand[0].name,
      });
      const model = brand[0].models.filter(
        (item) =>
          item.brand_model_name.toLowerCase() ===
          make_search.model.toLowerCase()
      );
      setSelectedModel({
        value: model[0].id,
        label: model[0].brand_model_name,
      });
      setBrandModels(brand[0].models);
      setListBrands(list_brands.data.car_brand);
      setCarsForSale(response.data.cars_for_sale);
      setCountCarsForSale(response.data.count_cars_for_sale);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const model_name = make_search.model;
    const fetchData = async () => {
      let url = `/car_for_sale/makeModels?make=${brandName}&model_id=${model_name}`;
      
      // Append min_input_price if it's not null
      if (minInputPrice !== null) {
        url += `&min_input_price=${minInputPrice}`;
      }
      
      // Append max_input_price if it's not null
      if (maxInputPrice !== null) {
        url += `&max_input_price=${maxInputPrice}`;
      }
  
      const make_models = await axiosInstance.get(url);
      setMakeWithModels(make_models.data.cars_for_sale);
      setCountCarsForSale(make_models.data.count_cars_for_sale);
    };
    fetchData();
  }, [brandName, make_search.model, minInputPrice, maxInputPrice]);

  const formatNumbers = (amountInRwf) => {
    return new Intl.NumberFormat("en-RW").format(amountInRwf);
  };
  const truncateText = (text) => {
    return text.length > 20 ? `${text.substring(0, 20)}...` : text;
  };
  const filteredModels = makeWithModels.filter((model) => model.count_cars > 0);

  const brandsOptions = listBrands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  const modelOptions = brandModels.map((model) => ({
    value: model.id,
    label: model.brand_model_name,
  }));

  const handleBrandChange = (selectedOption) => {
    setInputValues({
      ...inputValues,
      brand_id: selectedOption,
    });
    setSelectedBrand(selectedOption);
    setBrandName(selectedOption.label.toLowerCase());
    navigate(`/BuyCars/${selectedOption.label.toLowerCase()}`);
  };

  const handleModelChange = (selectedOption) => {
    setInputValues({ ...inputValues, model_id: selectedOption });
    setSelectedModel(selectedOption);
    navigate(
      `/BuyCars/${selectedBrand.label.toLowerCase()}/${selectedOption.label.toLowerCase()}`
    );
  };

  const handleYearChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    let url = `/BuyCars/${selectedBrand.label.toLowerCase()}/${selectedModel.label.toLowerCase()}`;
    if (name === "min_input_price") {
      setLoading(true);
      const fetchData = async () => {
        const response = await axiosInstance.get(
          `/car_for_sale/list?make=${brandName}&model=${selectedModel.values}&min_input_price=${value}&max_input_price=500000000`
        );
        setLoading(false);
        // setCarsForSale(response.data.cars_for_sale);
        setCountCarsForSale(response.data.count_cars_for_sale);
      };
      fetchData();
    }
    if (name === "max_input_price") {
      const fetchData = async () => {
        setLoading(true);
        const response = await axiosInstance.get(
          `/car_for_sale/list?make=${brandName}&model_id=${selectedModel.value}&min_input_price=${inputValues.min_input_price}&max_input_price=${value}`
        );
        setLoading(false);
        setCountCarsForSale(response.data.count_cars_for_sale);
      };
      fetchData();
      // url += `/?min_input_price=${inputValues.min_input_price}&max_input_price=${value}`;
    }
    navigate(url);
  };

  const handlePriceFilter = () => {
    // Set default values for min and max prices if they are not provided or invalid
    const minPrice = inputValues.min_input_price
      ? inputValues.min_input_price
      : 1;
    const maxPrice = inputValues.max_input_price
      ? inputValues.max_input_price
      : 550000000;

    const url = `/buyCars/${brandName}/${selectedModel.label}?min_input_price=${minPrice}&max_input_price=${maxPrice}`;

    navigate(url); // Navigate to the constructed URL
  };
  const formatNumber = (number) => {
    // Convert the number to a string and remove any spaces
    const numString = String(number).replace(/\s/g, "");

    // Convert the string back to a number
    const numValue = parseInt(numString);

    // Check the magnitude of the number and format accordingly
    if (numValue >= 1000000) {
      return numValue / 1000000 + "M";
    } else if (numValue >= 1000) {
      return numValue / 1000 + "K";
    } else {
      return numValue;
    }
  };
  return (
    <section className="bpage container page home" id="NotFound">
      <div className="row justify-content-center">
        <div className="filterbar">
          <div className="car_filter">
            <div className="iEzCwv firstItem">
              <label className="form-label" htmlFor="expertise">
                Make
              </label>
              <Select
                placeholder="eg: Toyota"
                name="brand_id"
                // isMulti
                options={brandsOptions}
                value={selectedBrand}
                onChange={handleBrandChange}
              />
            </div>
            <div className="iEzCwv secondItem">
              <label className="form-label" htmlFor="expertise">
                Model
              </label>
              <Select
                placeholder="Model name"
                name="industry_id"
                options={modelOptions}
                value={selectedModel}
                onChange={handleModelChange}
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
                  {minInputPrice
                    ? formatNumber(minInputPrice) - formatNumber(maxInputPrice)
                    : "Choose range"}
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
                            min="1"
                            max="550000000"
                            step="1"
                            name="min_input_price"
                            placeholder="0"
                            value={inputValues.min_input_price}
                            onChange={handleYearChange}
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
                            onChange={handleYearChange}
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
                      disabled={countCarsForSale === 0}
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
                      ) : countCarsForSale > 0 ? (
                        `Show ${countCarsForSale} Results`
                      ) : (
                        "Apply filters"
                      )}
                    </button>
                  </div>
                </div>
              </div>
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

          <div className="sc-2be0ug-3 jbRQcv pt-4 pb-1">
            <div className="sc-2be0ug-4 dGXCjo custom-color">
              <div className="sc-1gw24wa-0 ligASl">
                <div className="sc-a5hw56-0 eDOeRK sc-1xfau7x-0 isSldw">
                  <div className="sc-1ygqovz-0 dFceLx tagWrapper">
                    <div className="sc-1ygqovz-1 hcVlAz tagList category_1 motors seo-link one-row">
                      {filteredModels.length > 0
                        ? filteredModels.map((make, index) => (
                            <div
                              display="block"
                              type="small"
                              className="sc-6bmekm-0 cOTnrw"
                              key={index}
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
                                  {make.brand_model_name}
                                  <span className="sub_label">
                                    {" "}
                                    ({make.count_cars})
                                  </span>
                                </a>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SellCarsGrid
            brandName={brandName}
            makeWithModels={makeWithModels}
            countCars={countCarsForSale}
          />
        </div>
      </div>
    </section>
  );
}

export default BuyCars;
