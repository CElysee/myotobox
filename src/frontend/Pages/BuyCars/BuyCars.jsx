import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import "./BuyCars.css";
import makeAnimated from "react-select/animated";
import SellCarsGrid from "../../components/sellCarsGrid/SellCarsGrid";
import axiosInstance from "../../../../utils/axiosInstance";
import Select from "react-select";
import ContentLoader from "react-content-loader";
import MobileFilter from "./MobileFilter";
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
function BuyCars() {
  const make_search = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [brandName, setBrandName] = useState(make_search.make);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);
  const [makeWithModels, setMakeWithModels] = useState([]);
  const [countCarsForSale, setCountCarsForSale] = useState("");
  const [listBrands, setListBrands] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_REACT_APP_API;
  const [color, setColor] = useState("#fff");
  const [loading, setLoading] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [skeleton, setSkeleton] = useState([1, 2, 3, 4]);
  const [updateUrl, setUpdateUrl] = useState(false);
  const [updateOnChangeFilter, setUpdateOnChangeFilter] = useState(false);
  const [showResultsNumber, setShowResultsNumber] = useState({
    results: "",
    category: "",
  });

  const model_id = new URLSearchParams(location.search).get("model_id");
  const minInputPrice = new URLSearchParams(location.search).get(
    "min_input_price"
  );
  const maxInputPrice = new URLSearchParams(location.search).get(
    "max_input_price"
  );
  const startYear = new URLSearchParams(location.search).get("start_year");
  const endYear = new URLSearchParams(location.search).get("end_year");
  const start_kilometers = new URLSearchParams(location.search).get(
    "start_kilometers"
  );
  const end_kilometers = new URLSearchParams(location.search).get(
    "end_kilometers"
  );

  const makeName = make_search.make;
  const modelName = make_search.model;
  const carTransmission = new URLSearchParams(location.search).get(
    "car_transmission"
  );
  const fuelType = new URLSearchParams(location.search).get("fuel_type");
  const [inputValues, setInputValues] = useState({
    brand_id: "",
    model_id: "",
    min_input_price: minInputPrice || "",
    max_input_price: maxInputPrice || "",
    start_year: startYear || "",
    end_year: endYear || "",
    start_kilometers: "",
    end_kilometers: "",
    car_transmission: "",
    fuel_type: "",
  });

  useEffect(() => {
    setBrandModels([]);
    const fetchData = async () => {
      // const response = await axiosInstance.get("/car_for_sale/list");
      const list_brands = await axiosInstance.get("/car_for_sale/car_brands");
      if (brandName) {
        const brand = list_brands.data.car_brand.filter(
          (brand) => brand.name.toLowerCase() == brandName.toLowerCase()
        );
        setSelectedBrand({
          value: brand[0].id,
          label: brand[0].name,
        });
        if (brand[0].models.length > 0) {
          setBrandModels(brand[0].models);
          if (model_id) {
            const model = brand[0].models.filter(
              (item) => item.brand_model_name.toLowerCase() === model_id
            );
            setSelectedModel({
              value: model[0].id,
              label: model[0].brand_model_name,
            });
          }
        }
      }

      setListBrands(list_brands.data.car_brand);

      // Check if brand[0].models is not empty

      // setCarsForSale(response.data.cars_for_sale);
      // setCountCarsForSale(response.data.count_cars_for_sale);
      // console.log(brand)
    };
    fetchData();
  }, [brandName, make_search.model, model_id]);

  useEffect(() => {
    setSkeletonLoading(true);
    const fetchData = async () => {
      try {
        let url = `/car_for_sale/makeModels?make=${brandName}`;

        // Append model_id if it's not null
        if (model_id !== null) {
          url += `&model_id=${model_id}`;
        }
        // Append min_input_price if it's not null
        if (minInputPrice !== null) {
          url += `&min_input_price=${minInputPrice}`;
        }

        // Append max_input_price if it's not null
        if (maxInputPrice !== null) {
          url += `&max_input_price=${maxInputPrice}`;
        }

        // Append start_year if it's not null
        if (startYear !== null) {
          url += `&start_year=${startYear}`;
        }

        // Append end_year if it's not null
        if (endYear !== null) {
          url += `&end_year=${endYear}`;
        }

        // Append start_kilometers if it's not null
        if (start_kilometers !== null) {
          url += `&start_kilometers=${start_kilometers}`;
        }

        // Append end_kilometers if it's not null
        if (end_kilometers !== null) {
          url += `&end_kilometers=${end_kilometers}`;
        }

        // Append car_transmission if it's not null
        if (carTransmission !== null) {
          url += `&car_transmission=${carTransmission}`;
        }

        //  Append fuel_type if it's not null
        if (fuelType !== null) {
          url += `&fuel_type=${fuelType}`;
        }

        const make_models = await axiosInstance.get(url);
        setMakeWithModels(make_models.data.cars_for_sale);
        setCountCarsForSale(make_models.data.count_cars_for_sale);
        setSkeletonLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
        setSkeletonLoading(false);
      }
    };
    fetchData();
  }, [
    brandName,
    model_id,
    makeName,
    modelName,
    minInputPrice,
    maxInputPrice,
    startYear,
    endYear,
    start_kilometers,
    end_kilometers,
    carTransmission,
    fuelType,
  ]);

  const filteredModels = makeWithModels.filter((model) => model.count_cars > 0);

  const brandsOptions = listBrands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  const modelOptions = brandModels.map((model) => ({
    value: model.id,
    label: model.brand_model_name,
  }));

  // Handle Brand change
  const handleBrandChange = (selectedOption) => {
    setInputValues({
      ...inputValues,
      brand_id: selectedOption,
    });
    setSelectedBrand(selectedOption);
    setBrandName(selectedOption.label.toLowerCase());
    setUpdateUrl(true);
    setSelectedModel([]);
  };

  // Handle Model change
  const handleModelChange = (selectedOption) => {
    setInputValues({ ...inputValues, model_id: selectedOption });
    setSelectedModel(selectedOption);
    setUpdateUrl(true);
  };

  // Handle Price change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setUpdateOnChangeFilter(true);
  };

  // Handle Price filter
  const handlePriceFilter = () => {
    setUpdateUrl(true);
    setShowResultsNumber({ ...showResultsNumber, category: "price" });
  };

  // Handle Year change
  const handleYearChange = async (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setShowResultsNumber({ ...showResultsNumber, category: "year" });
    setUpdateOnChangeFilter(true);
  };

  // Handle Year filter
  const handleYearFilter = () => {
    setUpdateUrl(true);
  };

  // Handle Kilometers change
  const handleKilometersChange = async (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setShowResultsNumber({ ...showResultsNumber, category: "kilometers" });
    setUpdateOnChangeFilter(true);
  };

  // Handle Kilometers filter
  const handleKilometersFilter = () => {
    setUpdateUrl(true);
  };

  // Handle Transmission change
  const handleTransmissionChange = (transmissionType) => {
    setInputValues({ ...inputValues, car_transmission: transmissionType });
    setShowResultsNumber({ ...showResultsNumber, category: "transmission" });
    setUpdateOnChangeFilter(true);
  };

  // Handle Fuel type change
  const handleFuelTypeChange = (fuelType) => {
    setInputValues({ ...inputValues, fuel_type: fuelType });
    setShowResultsNumber({ ...showResultsNumber, category: "fuel" });
    setUpdateOnChangeFilter(true);
  };

  const handleReset = (data) => {
    if (data === "transmission_fuel_type") {
      setInputValues({
        ...inputValues,
        car_transmission: "",
        fuel_type: "",
      });
      setUpdateUrl(true);
    }
    if (data === "kilometers") {
      setInputValues({
        ...inputValues,
        start_kilometers: "",
        end_kilometers: "",
      });
      setUpdateUrl(true);
    }
    if (data === "price") {
      setInputValues({
        ...inputValues,
        min_input_price: "",
        max_input_price: "",
      });
      setUpdateUrl(true);
    }
    if (data === "year") {
      setInputValues({
        ...inputValues,
        start_year: "",
        end_year: "",
      });
      setUpdateUrl(true);
    }
  };

  // Update when inputs are updated
  useEffect(() => {
    if (updateOnChangeFilter) {
      const {
        min_input_price,
        max_input_price,
        start_year,
        end_year,
        start_kilometers,
        end_kilometers,
        car_transmission,
        fuel_type,
      } = inputValues;
      // Set default values for min and max prices if they are not provided
      const minPrice = min_input_price ? min_input_price : 1;
      const maxPrice = max_input_price ? max_input_price : 550000000;

      // Set default values for start and end years if they are not provided
      const startYear = start_year ? start_year : 1950;
      const endYear = end_year ? end_year : new Date().getFullYear();

      // Set default values for start and end kilometers if they are not provided
      const startKilometers = start_kilometers ? start_kilometers : 1;
      const endKilometers = end_kilometers ? end_kilometers : 1000000;
      // Construct the base URL with brandName and selectedModel.label

      let url = `/car_for_sale/makeModels?make=${brandName}`;

      // Add query parameters only if their values are not empty
      if (selectedModel !== null && selectedModel.label) {
        url += `?model_id=${selectedModel.label.toLowerCase()}`;
      }
      if (minPrice) {
        url += `${url.includes("?") ? "&" : "?"}min_input_price=${minPrice}`;
      }
      if (maxPrice) {
        url += `${url.includes("?") ? "&" : "?"}max_input_price=${maxPrice}`;
      }
      if (startYear) {
        url += `${url.includes("?") ? "&" : "?"}start_year=${startYear}`;
      }
      if (endYear) {
        url += `${url.includes("?") ? "&" : "?"}end_year=${endYear}`;
      }
      if (startKilometers) {
        url += `${
          url.includes("?") ? "&" : "?"
        }start_kilometers=${startKilometers}`;
      }
      if (endKilometers) {
        url += `${
          url.includes("?") ? "&" : "?"
        }end_kilometers=${endKilometers}`;
      }
      if (car_transmission) {
        url += `${
          url.includes("?") ? "&" : "?"
        }car_transmission=${car_transmission}`;
      }
      if (fuel_type) {
        url += `${url.includes("?") ? "&" : "?"}fuel_type=${fuel_type}`;
      }
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axiosInstance.get(url);
          setLoading(false);
          // setCountCarsForSale(response.data.count_cars_for_sale);
          setShowResultsNumber({
            ...showResultsNumber,
            results: response.data.count_cars_for_sale,
          });
        } catch (error) {
          console.log("Error while filtering", error);
          setLoading(false);
        }
      };
      fetchData();
      setUpdateOnChangeFilter(false); // Reset the flag after update
    }
  }, [updateOnChangeFilter, brandName, navigate, inputValues, selectedModel]);

  // Update URL with when filters are applied
  useEffect(() => {
    if (updateUrl) {
      const {
        min_input_price,
        max_input_price,
        start_year,
        end_year,
        start_kilometers,
        end_kilometers,
        car_transmission,
        fuel_type,
      } = inputValues;

      // Set default values for min and max prices if they are not provided
      const minPrice = min_input_price ? min_input_price : 1;
      const maxPrice = max_input_price ? max_input_price : 550000000;

      // Set default values for start and end years if they are not provided
      const startYear = start_year ? start_year : 1950;
      const endYear = end_year ? end_year : new Date().getFullYear();

      // Set default values for start and end kilometers if they are not provided
      const startKilometers = start_kilometers ? start_kilometers : 1;
      const endKilometers = end_kilometers ? end_kilometers : 1000000;
      // Construct the base URL with brandName and selectedModel.label
      let url = `/buyCars/${brandName}`;

      // Add query parameters only if their values are not empty
      if (selectedModel !== null && selectedModel.label) {
        url += `?model_id=${selectedModel.label.toLowerCase()}`;
      }
      if (min_input_price) {
        url += `${url.includes("?") ? "&" : "?"}min_input_price=${minPrice}`;
      }
      if (max_input_price) {
        url += `${url.includes("?") ? "&" : "?"}max_input_price=${maxPrice}`;
      }
      if (start_year) {
        url += `${url.includes("?") ? "&" : "?"}start_year=${startYear}`;
      }
      if (end_year) {
        url += `${url.includes("?") ? "&" : "?"}end_year=${endYear}`;
      }
      if (start_kilometers) {
        url += `${
          url.includes("?") ? "&" : "?"
        }start_kilometers=${startKilometers}`;
      }
      if (end_kilometers) {
        url += `${
          url.includes("?") ? "&" : "?"
        }end_kilometers=${endKilometers}`;
      }
      if (car_transmission) {
        url += `${
          url.includes("?") ? "&" : "?"
        }car_transmission=${car_transmission}`;
      }
      if (fuel_type) {
        url += `${url.includes("?") ? "&" : "?"}fuel_type=${fuel_type}`;
      }
      navigate(url);
      setUpdateUrl(false); // Reset the flag after update
    }
  }, [updateUrl, brandName, navigate, inputValues, selectedModel]);

  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevents the default behavior of event propagation
  };
  return (
    <section className="bpage container page home" id="NotFound">
      <div className="row justify-content-center">
        <div className="filterbar">
          <div className="car_filter mobile-hide">
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
                Price Range (RWF)
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
                  {inputValues.min_input_price
                    ? `${
                        inputValues.max_input_price
                          ? inputValues.max_input_price
                          : 1950
                      } - ${
                        inputValues.max_input_price
                          ? inputValues.max_input_price
                          : new Date().getFullYear()
                      }`
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
                  <div className="sc-rpwses-1 gjZPbt dropDownButtonsRow">
                    <button
                      className="sc-1c4mb2u-0 hUdPjg"
                      type="reset"
                      data-testid="reset"
                      onClick={() => handleReset("price")}
                    >
                      Clear
                    </button>
                    <button
                      className="sc-1c4mb2u-0 hHfOrj filter"
                      type="submit"
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
                  {inputValues.end_year
                    ? `${
                        inputValues.start_year ? inputValues.start_year : 1950
                      } - ${
                        inputValues.end_year
                          ? inputValues.end_year
                          : new Date().getFullYear()
                      }`
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
                            data-testid="min-input-price"
                            min="1950"
                            max={new Date().getFullYear()}
                            step="1"
                            name="start_year"
                            placeholder="1950"
                            value={inputValues.start_year}
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
                            min="1950"
                            max={new Date().getFullYear()}
                            step="1"
                            name="end_year"
                            placeholder={new Date().getFullYear()}
                            value={inputValues.end_year}
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
                      onClick={() => handleReset("year")}
                    >
                      Clear
                    </button>
                    <button
                      className="sc-1c4mb2u-0 hHfOrj filter"
                      type="submit"
                      disabled={
                        showResultsNumber.results === 0 &&
                        showResultsNumber.category == "year"
                      }
                      onClick={handleYearFilter}
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
                        showResultsNumber.category == "year" ? (
                        `Show ${showResultsNumber.results} Results`
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
                  {inputValues.start_kilometers
                    ? `${formatNumber(
                        inputValues.start_kilometers
                      )} - ${formatNumber(inputValues.end_kilometers)}`
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
                            data-testid="min-input-price"
                            min="0"
                            max="10000000"
                            step="1"
                            name="start_kilometers"
                            placeholder="0"
                            value={inputValues.start_kilometers}
                            onChange={handleKilometersChange}
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
                            name="end_kilometers"
                            placeholder="Any"
                            value={inputValues.end_kilometers}
                            onChange={handleKilometersChange}
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
                      onClick={() => handleReset("kilometers")}
                    >
                      Clear
                    </button>
                    <button
                      className="sc-1c4mb2u-0 hHfOrj filter"
                      type="submit"
                      disabled={
                        showResultsNumber.results === 0 &&
                        showResultsNumber.category == "kilometers"
                      }
                      onClick={handleKilometersFilter}
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
                        showResultsNumber.category == "kilometers" ? (
                        `Show ${showResultsNumber.results} Results`
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
                  data-bs-auto-close="inside"
                >
                  {carTransmission
                    ? carTransmission
                    : "Transmission Type, Fuel Type, "}
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
                  onClick={handleDropdownClick}
                >
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
                                  onClick={() =>
                                    handleTransmissionChange(
                                      "Manual Transmission"
                                    )
                                  }
                                >
                                  <div
                                    data-testid="transmission_type-manual-transmission"
                                    type="button"
                                    className={`sc-6bmekm-1 contentContainer ${
                                      inputValues.car_transmission ===
                                      "Manual Transmission"
                                        ? "dwAEqK-auto"
                                        : "dwAEqK"
                                    }`}
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
                                    className={`sc-6bmekm-1 contentContainer ${
                                      inputValues.car_transmission ===
                                      "Automatic Transmission"
                                        ? "dwAEqK-auto"
                                        : "dwAEqK"
                                    }`}
                                    onClick={() =>
                                      handleTransmissionChange(
                                        "Automatic Transmission"
                                      )
                                    }
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
                                      className={`sc-6bmekm-1 contentContainer ${
                                        inputValues.fuel_type === "Petrol"
                                          ? "dwAEqK-auto"
                                          : "dwAEqK"
                                      }`}
                                      onClick={() =>
                                        handleFuelTypeChange("Petrol")
                                      }
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
                                      className={`sc-6bmekm-1 contentContainer ${
                                        inputValues.fuel_type === "Diesel"
                                          ? "dwAEqK-auto"
                                          : "dwAEqK"
                                      }`}
                                      onClick={() =>
                                        handleFuelTypeChange("Diesel")
                                      }
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
                                      className={`sc-6bmekm-1 contentContainer ${
                                        inputValues.fuel_type === "Hybrid"
                                          ? "dwAEqK-auto"
                                          : "dwAEqK"
                                      }`}
                                      onClick={() =>
                                        handleFuelTypeChange("Hybrid")
                                      }
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
                                      className={`sc-6bmekm-1 contentContainer ${
                                        inputValues.fuel_type === "Electric"
                                          ? "dwAEqK-auto"
                                          : "dwAEqK"
                                      }`}
                                      onClick={() =>
                                        handleFuelTypeChange("Electric")
                                      }
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
                      onClick={() => handleReset("transmission_fuel_type")}
                    >
                      Clear
                    </button>
                    <button
                      className="sc-1c4mb2u-0 hHfOrj filter"
                      type="submit"
                      disabled={
                        showResultsNumber.results === 0 &&
                        (showResultsNumber.category == "transmission" ||
                          showResultsNumber.category == "fuel")
                      }
                      onClick={handleYearFilter}
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
                        (showResultsNumber.category == "transmission" ||
                          showResultsNumber.category == "fuel") ? (
                        `Show ${showResultsNumber.results} Results`
                      ) : (
                        "Apply filters"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MobileFilter listBrands={listBrands} brandModels={brandModels} handleBrandChange={handleBrandChange} handleModelChange={handleModelChange} />

          <div className="sc-2be0ug-3 jbRQcv pt-4 mobile-remove-padding">
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
          {skeletonLoading ? (
            skeleton.map((item, index) => (
              <ContentLoader
                key={index}
                style={{ width: "25%", height: "300px", padding: "10px" }}
                speed={1}
                backgroundColor="#eee"
                foregroundColor="#e8e7e7"
              >
                <rect x="2" y="4" rx="8" ry="8" width="70" height="20" />
                <rect x="100" y="4" rx="8" ry="8" width="60" height="20" />
                <rect x="0" y="40" rx="5" ry="5" width="650" height="415" />
              </ContentLoader>
            ))
          ) : (
            <SellCarsGrid
              brandName={brandName}
              makeWithModels={makeWithModels}
              countCars={countCarsForSale}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default BuyCars;
