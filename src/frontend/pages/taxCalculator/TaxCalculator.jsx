import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "../../../../utils/AxiosInstance";
import { useSelector } from "react-redux";
import { selectUser, selectIsAuthenticated } from "../../../features/userSlice";
import RiseLoader from "react-spinners/RiseLoader";
import { useNavigate } from "react-router-dom";
import { roundNumbers } from "../../../../utils/Helpers";
import Login from "../../components/auth/Login";
import SEO from "../../components/Seo/SEO";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};

function TaxCalculator() {
  const dismissButtonRef = useRef();
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carTrims, setCarTrims] = useState([]);
  const [usdToRwf, setUsdToRwf] = useState(0);
  const [formError, setFormErrors] = useState("");
  const navigate = useNavigate();
  const [loginTitle, setLoginTitle] = useState("Sign In to Calculate Taxes");
  const [inputValues, setInputValues] = useState({
    car_brand_id: "",
    car_model_id: "",
    car_trim_id: "",
    weight: "",
    engine_cc: "",
    year_of_manufacture: "",
    price_when_new: "",
    amortisation_period: "",
    current_residual_value: "",
    freight_cost: "",
    insurance: "",
    cif_kigali: "",
    current_value: "",
    quitus_fiscal: "",
    vehicle_category: "",
    user_id: "",
  });
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const currencyAPiKey = import.meta.env.VITE_CURRENCY_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/car_for_sale/car_brands/");
        setCarBrands(response.data.car_brand);
        const currency_rate = await axiosInstance.get(
          `https://openexchangerates.org/api/latest.json?app_id=${currencyAPiKey}`
        );
        // setUsdToRwf(currency_rate.data.rates.RWF);
        setUsdToRwf(1325);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    if (name === "car_brand_id") {
      const models = carBrands.filter((brand) => brand.id == value)[0].models;
      setCarModels(models);
    }
    if (name === "car_model_id") {
      const trims = carModels.filter((model) => model.id == value)[0].trims;
      setCarTrims(trims);
    }
    if (name === "year_of_manufacture") {
      // Check if value is a valid number representing a year
      const valueAsNumber = parseInt(value);
      if (
        !isNaN(valueAsNumber) &&
        valueAsNumber >= 1900 &&
        valueAsNumber <= new Date().getFullYear()
      ) {
        const currentYear = new Date().getFullYear();
        const period = currentYear - valueAsNumber;

        // Update state using callback form of setState
        setInputValues((prevState) => ({
          ...prevState,
          year_of_manufacture: valueAsNumber, // Ensure year_of_manufacture is set to the latest value
          amortisation_period:
            period === 1 ? `${period} year` : `${period} years`,
          price_when_new: "",
          current_residual_value: "",
          current_value: "",
          cif_kigali: "",
          freight_cost: "",
          insurance: "",
        }));
      } else {
        setInputValues((prevState) => ({
          ...prevState,
          year_of_manufacture: valueAsNumber, // Ensure year_of_manufacture is set to the latest value
          price_when_new: "",
          current_residual_value: "",
          current_value: "",
          cif_kigali: "",
          freight_cost: "",
          insurance: "",
        }));
      }
    }
    if (name === "price_when_new") {
      const valueAsNumber = parseInt(value);
      if (!isNaN(valueAsNumber)) {
        const currentYear = new Date().getFullYear();
        const yearOfManufacture = inputValues.year_of_manufacture;
        const period = currentYear - yearOfManufacture;

        let depreciationRate = 0;
        if (period <= 2) {
          depreciationRate = 0.2;
        } else if (period <= 3) {
          depreciationRate = 0.3;
        } else if (period <= 4) {
          depreciationRate = 0.4;
        } else if (period <= 5) {
          depreciationRate = 0.5;
        } else if (period <= 6) {
          depreciationRate = 0.55;
        } else if (period <= 7) {
          depreciationRate = 0.6;
        } else if (period <= 8) {
          depreciationRate = 0.65;
        } else if (period <= 9) {
          depreciationRate = 0.7;
        } else if (period <= 10) {
          depreciationRate = 0.75;
        } else {
          depreciationRate = 0.8;
        }
        const depreciation = roundNumbers(depreciationRate * valueAsNumber);
        const current_value = roundNumbers(valueAsNumber - depreciation);

        setInputValues((prevState) => ({
          ...prevState,
          price_when_new: valueAsNumber,
          current_residual_value: current_value,
        }));
      } else {
        console.error("Invalid price entered.");
        // Optionally, show an error message to the user
      }
    }
    if (name === "insurance") {
      if (
        inputValues.current_residual_value &&
        inputValues.freight_cost &&
        inputValues.insurance
      ) {
        const cif_to_kgl =
          parseFloat(inputValues.current_residual_value) +
          parseFloat(inputValues.freight_cost) +
          parseFloat(value);

        setInputValues((prevState) => ({
          ...prevState,
          cif_kigali: roundNumbers(cif_to_kgl),
        }));
      }
    }
  };

  useEffect(() => {
    if (inputValues.cif_kigali) {
      const current_value = inputValues.cif_kigali * usdToRwf;
      const roundedCifToKgl = roundNumbers(current_value);
      setInputValues((prevState) => ({
        ...prevState,
        current_value: roundedCifToKgl,
      }));
    }
  }, [inputValues.cif_kigali]);

  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submitData = async () => {
      const params = {
        ...inputValues,
        user_id: user.userId,
      };
      try {
        const response = await axiosInstance.post(
          "/tax-calculator/create",
          params
        );
        const order_id = response.data.data_id;
        navigate(`/car-tax-calculator_results/${order_id}`);
        setLoading(false);
      } catch (error) {
        console.error("Error while calculating taxes", error);
        setLoading(false);
      }
    };
    submitData();
  };
  const handleClosingModal = () => {
    dismissButtonRef.current.click();
  };
  return (
    <>
      <SEO
        title="Rwanda Car Import Tax Calculator | Estimate Your Import Costs - MyOtobox"
        description="Easily calculate import taxes on your car with MyOtobox's free online tool. Get an accurate estimate of your total import costs before shipping"
        url="https://www.myotobox.rw/car-tax-calculator"
        image="/assets/images/tax-calculator.jpg"
      />
      <div className="main_content import-on-order">
        <div className="banner-section1">
          <div className="row">
            <div
              className="col-xl-6 d-flex align-items-center wow fadeInUp"
              data-wow-delay="200ms"
              style={{ visibility: "visible", animationDelay: "200ms" }}
            >
              <div className="banner-content">
                <span className="sub-title">
                  Fastest Speed
                  <svg
                    width="30"
                    height="23"
                    viewBox="0 0 30 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M27.5455 22.9817C27.4552 22.9815 27.3665 22.9573 27.2884 22.9115C27.2103 22.8658 27.1454 22.8001 27.1004 22.7211C27.0553 22.6421 27.0316 22.5525 27.0317 22.4613C27.0317 22.3701 27.0555 22.2805 27.1007 22.2016C28.3257 20.0567 28.9696 17.6237 28.9675 15.1475C28.9675 7.3693 22.7008 1.04076 14.9987 1.04076C7.29658 1.04076 1.02995 7.3693 1.02995 15.1475C1.02871 17.6237 1.67347 20.0564 2.89932 22.2009C2.93658 22.2601 2.9616 22.3263 2.97287 22.3955C2.98415 22.4647 2.98144 22.5355 2.96492 22.6036C2.94839 22.6718 2.91839 22.7358 2.87672 22.7919C2.83505 22.848 2.78257 22.8951 2.72244 22.9302C2.66231 22.9653 2.59577 22.9877 2.52682 22.9962C2.45787 23.0046 2.38795 22.9989 2.32124 22.9794C2.25454 22.9598 2.19244 22.9269 2.13868 22.8825C2.08492 22.8381 2.04061 22.7831 2.00841 22.721C0.692402 20.4183 -0.000272498 17.8064 8.04167e-08 15.1478C0.000272659 12.4891 0.693483 9.87736 2.00996 7.57499C3.32645 5.27261 5.21982 3.36073 7.4998 2.03148C9.77979 0.70223 12.3661 0.00244141 14.9987 0.00244141C17.6314 0.00244141 20.2176 0.70223 22.4976 2.03148C24.7776 3.36073 26.671 5.27261 27.9875 7.57499C29.3039 9.87736 29.9972 12.4891 29.9974 15.1478C29.9977 17.8064 29.305 20.4183 27.989 22.721C27.9441 22.7998 27.8795 22.8653 27.8017 22.9111C27.7239 22.9568 27.6355 22.9812 27.5455 22.9817Z"></path>
                    <path d="M23.8916 20.852C23.8005 20.8519 23.7111 20.8274 23.6324 20.781C23.5537 20.7346 23.4886 20.668 23.4438 20.5878C23.399 20.5077 23.376 20.4171 23.3772 20.325C23.3784 20.233 23.4038 20.143 23.4507 20.0641C24.3667 18.5232 24.8505 16.7596 24.8501 14.9623C24.8501 9.4795 20.4329 5.01604 15.0012 5.01604C9.56949 5.01604 5.15227 9.4769 5.15227 14.9623C5.15139 16.7589 5.63424 18.522 6.54914 20.0628C6.58726 20.1214 6.61326 20.1871 6.62561 20.256C6.63795 20.3249 6.63638 20.3957 6.62098 20.464C6.60558 20.5323 6.57668 20.5967 6.536 20.6535C6.49533 20.7102 6.44372 20.7581 6.38428 20.7942C6.32483 20.8303 6.25878 20.8539 6.19008 20.8636C6.12138 20.8733 6.05144 20.8689 5.98448 20.8506C5.91751 20.8323 5.8549 20.8006 5.80038 20.7572C5.74587 20.7139 5.70059 20.6599 5.66725 20.5985C4.65594 18.8959 4.12192 16.9477 4.12231 14.9623C4.12231 8.90547 9.00108 3.97591 15.0012 3.97591C21.0013 3.97591 25.8801 8.90287 25.8801 14.9623C25.8805 16.9477 25.3465 18.8959 24.3352 20.5985C24.2894 20.676 24.2244 20.7401 24.1466 20.7845C24.0689 20.829 23.981 20.8523 23.8916 20.852Z"></path>
                    <path d="M15.0014 5.01863C14.8648 5.01863 14.7338 4.96384 14.6373 4.86631C14.5407 4.76877 14.4864 4.63649 14.4864 4.49856V0.520065C14.4864 0.382135 14.5407 0.249855 14.6373 0.152324C14.7338 0.0547925 14.8648 0 15.0014 0C15.138 0 15.269 0.0547925 15.3655 0.152324C15.4621 0.249855 15.5164 0.382135 15.5164 0.520065V4.49856C15.5164 4.63649 15.4621 4.76877 15.3655 4.86631C15.269 4.96384 15.138 5.01863 15.0014 5.01863ZM9.74348 6.46961C9.65306 6.46963 9.56424 6.44561 9.48593 6.39997C9.40762 6.35432 9.34259 6.28866 9.29738 6.20958L7.31343 2.74009C7.24514 2.62061 7.22665 2.47863 7.26202 2.34538C7.29739 2.21212 7.38373 2.09852 7.50204 2.02955C7.62036 1.96059 7.76095 1.94191 7.8929 1.97763C8.02485 2.01335 8.13734 2.10055 8.20563 2.22003L10.1889 5.68951C10.2341 5.76853 10.2579 5.85817 10.2579 5.94941C10.258 6.04066 10.2342 6.1303 10.1891 6.20935C10.1439 6.28839 10.079 6.35405 10.0008 6.39974C9.92257 6.44542 9.83383 6.46952 9.74348 6.46961ZM5.95132 10.3909C5.86084 10.391 5.77198 10.3667 5.69383 10.3207L2.20035 8.28399C2.08204 8.21502 1.9957 8.10142 1.96033 7.96817C1.92496 7.83492 1.94345 7.69293 2.01174 7.57345C2.08003 7.45397 2.19252 7.36678 2.32447 7.33106C2.45642 7.29533 2.59702 7.31401 2.71533 7.38298L6.20945 9.42033C6.30768 9.47755 6.38447 9.56591 6.42789 9.6717C6.47131 9.7775 6.47894 9.8948 6.44959 10.0054C6.42025 10.116 6.35557 10.2138 6.26559 10.2835C6.17561 10.3532 6.06536 10.3909 5.95196 10.3909H5.95132ZM4.64199 15.667H0.517663C0.381082 15.667 0.250096 15.6122 0.153519 15.5146C0.0569419 15.4171 0.00268555 15.2848 0.00268555 15.1469C0.00268555 15.009 0.0569419 14.8767 0.153519 14.7792C0.250096 14.6816 0.381082 14.6268 0.517663 14.6268H4.64199C4.77857 14.6268 4.90955 14.6816 5.00613 14.7792C5.10271 14.8767 5.15696 15.009 5.15696 15.1469C5.15696 15.2848 5.10271 15.4171 5.00613 15.5146C4.90955 15.6122 4.77857 15.667 4.64199 15.667ZM2.45655 22.9817C2.34315 22.9817 2.23291 22.944 2.14293 22.8743C2.05295 22.8046 1.98826 22.7068 1.95892 22.5962C1.92957 22.4856 1.9372 22.3683 1.98062 22.2625C2.02404 22.1567 2.10083 22.0683 2.19906 22.0111L5.85347 19.8808C5.91209 19.8445 5.97732 19.8204 6.04531 19.81C6.1133 19.7995 6.18267 19.8029 6.24933 19.82C6.31598 19.8371 6.37858 19.8675 6.43342 19.9094C6.48826 19.9513 6.53424 20.0039 6.56863 20.064C6.60303 20.1241 6.62515 20.1906 6.63369 20.2595C6.64223 20.3284 6.63702 20.3984 6.61836 20.4652C6.5997 20.5321 6.56798 20.5945 6.52505 20.6487C6.48213 20.703 6.42888 20.748 6.36845 20.7812L2.7134 22.9121C2.63529 22.9576 2.54672 22.9816 2.45655 22.9817ZM27.5462 22.9817C27.4559 22.9817 27.3671 22.9577 27.2888 22.9121L23.6343 20.7812C23.5739 20.748 23.5207 20.703 23.4777 20.6487C23.4348 20.5945 23.4031 20.5321 23.3844 20.4652C23.3658 20.3984 23.3606 20.3284 23.3691 20.2595C23.3776 20.1906 23.3998 20.1241 23.4342 20.064C23.4686 20.0039 23.5145 19.9513 23.5694 19.9094C23.6242 19.8675 23.6868 19.8371 23.7535 19.82C23.8201 19.8029 23.8895 19.7995 23.9575 19.81C24.0255 19.8204 24.0907 19.8445 24.1493 19.8808L27.8037 22.0111C27.902 22.0683 27.9788 22.1567 28.0222 22.2625C28.0656 22.3683 28.0732 22.4856 28.0439 22.5962C28.0145 22.7068 27.9499 22.8046 27.8599 22.8743C27.7699 22.944 27.6596 22.9817 27.5462 22.9817ZM29.4851 15.667H25.3653C25.2287 15.667 25.0977 15.6122 25.0012 15.5146C24.9046 15.4171 24.8503 15.2848 24.8503 15.1469C24.8503 15.009 24.9046 14.8767 25.0012 14.7792C25.0977 14.6816 25.2287 14.6268 25.3653 14.6268H29.4851C29.6217 14.6268 29.7527 14.6816 29.8493 14.7792C29.9459 14.8767 30.0001 15.009 30.0001 15.1469C30.0001 15.2848 29.9459 15.4171 29.8493 15.5146C29.7527 15.6122 29.6217 15.667 29.4851 15.667ZM24.0515 10.3909C23.9381 10.3909 23.8278 10.3532 23.7379 10.2835C23.6479 10.2138 23.5832 10.116 23.5538 10.0054C23.5245 9.8948 23.5321 9.7775 23.5756 9.6717C23.619 9.56591 23.6958 9.47755 23.794 9.42033L27.2881 7.38298C27.4064 7.31401 27.547 7.29533 27.679 7.33106C27.8109 7.36678 27.9234 7.45397 27.9917 7.57345C28.06 7.69293 28.0785 7.83492 28.0431 7.96817C28.0077 8.10142 27.9214 8.21502 27.8031 8.28399L24.3083 10.3207C24.2304 10.3666 24.1417 10.3908 24.0515 10.3909ZM20.2593 6.46896C20.1689 6.46924 20.08 6.44524 20.0018 6.3994C19.9432 6.36526 19.8919 6.3198 19.8507 6.26561C19.8095 6.21143 19.7793 6.14958 19.7618 6.08359C19.7443 6.01761 19.7398 5.94879 19.7486 5.88106C19.7574 5.81333 19.7794 5.74802 19.8132 5.68886L21.7965 2.21938C21.8648 2.0999 21.9773 2.0127 22.1093 1.97698C22.2412 1.94126 22.3818 1.95994 22.5001 2.0289C22.6184 2.09787 22.7048 2.21147 22.7401 2.34473C22.7755 2.47798 22.757 2.61996 22.6887 2.73944L20.7054 6.20893C20.6602 6.28801 20.5952 6.35367 20.5169 6.39931C20.4386 6.44496 20.3497 6.46898 20.2593 6.46896ZM15.0014 21.3071C14.6983 21.3072 14.3986 21.2419 14.1225 21.1157C13.8464 20.9894 13.6001 20.8051 13.4002 20.575C13.2003 20.3449 13.0514 20.0743 12.9634 19.7814C12.8754 19.4884 12.8504 19.1799 12.89 18.8764L14.4909 6.55152C14.5074 6.42659 14.5682 6.31194 14.6621 6.22891C14.756 6.14588 14.8766 6.1001 15.0014 6.1001C15.1262 6.1001 15.2468 6.14588 15.3407 6.22891C15.4346 6.31194 15.4954 6.42659 15.5119 6.55152L17.1128 18.8784C17.1521 19.1817 17.1268 19.49 17.0387 19.7827C16.9506 20.0754 16.8016 20.3457 16.6017 20.5756C16.4019 20.8055 16.1557 20.9897 15.8798 21.1158C15.6038 21.242 15.3043 21.3072 15.0014 21.3071ZM15.0014 10.6178L13.9109 19.0142C13.891 19.1707 13.9043 19.3297 13.9499 19.4806C13.9956 19.6315 14.0726 19.7709 14.1758 19.8894C14.279 20.0079 14.406 20.1028 14.5483 20.1678C14.6907 20.2328 14.8452 20.2664 15.0014 20.2664C15.1576 20.2664 15.3121 20.2328 15.4545 20.1678C15.5968 20.1028 15.7238 20.0079 15.827 19.8894C15.9302 19.7709 16.0072 19.6315 16.0529 19.4806C16.0985 19.3297 16.1118 19.1707 16.0919 19.0142L15.0014 10.6178Z"></path>
                  </svg>
                </span>
                <h1>
                  To Best Way To Calculate <span>Car Taxes.</span>
                </h1>
                <p>
                  We offer an advanced system powered by AI to accurately
                  calculate car taxes. With our cutting-edge technology, you can
                  easily..
                </p>
                <p className="pt-4">
                  <strong>
                    Please contact MyOtobox at 0782384772 if your car details
                    are missing from the form. A representative from MyOtobox
                    will assist you.
                  </strong>
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 wow zoomIn"
              data-wow-delay="300ms"
              style={{ visibility: "visible", animationDelay: "300ms" }}
            >
              <div className="car-filter-area">
                <h4>Moto Vehicles Value Depreciation and Duties Calculation</h4>
                <div className="" id="importorder">
                  <form onSubmit={handleSubmit}>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>Select Brand*</label>
                        <select
                          className="select"
                          name="car_brand_id"
                          value={inputValues.car_brand_id}
                          onChange={handleFormInputs}
                          required
                        >
                          <option value="">Select Brand</option>
                          {carBrands.length > 0 &&
                            carBrands.map((brand, index) => (
                              <option key={index} value={brand.id}>
                                {brand.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Select Model*</label>
                        <select
                          className="select"
                          name="car_model_id"
                          value={inputValues.car_model_id}
                          onChange={handleFormInputs}
                          required
                        >
                          <option value="">Select Model</option>
                          {carModels.length > 0 &&
                            carModels.map((model, index) => (
                              <option key={index} value={model.id}>
                                {model.brand_model_name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Select Trim</label>
                        <select
                          className="select"
                          name="car_trim_id"
                          value={inputValues.car_trim_id}
                          onChange={handleFormInputs}
                          required
                        >
                          <option>Select Trim</option>
                          {carTrims.length > 0 &&
                            carTrims.map((trim, index) => (
                              <option key={index} value={trim.id}>
                                {trim.trim_name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>Weight (Kg)</label>
                        <input
                          type="number"
                          name="weight"
                          value={inputValues.weight}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Engine Capacity (CC)</label>
                        <input
                          type="number"
                          name="engine_cc"
                          value={inputValues.engine_cc}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>Year of Manufucture</label>
                        <input
                          type="number"
                          name="year_of_manufacture"
                          value={inputValues.year_of_manufacture}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Price when new (MSRP - USD)</label>
                        <input
                          type="number"
                          name="price_when_new"
                          value={inputValues.price_when_new}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Amortisation Period</label>
                        <input
                          type="text"
                          name="amortisation_period"
                          value={inputValues.amortisation_period}
                          disabled
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="inline_form"></div>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>Current (Residual) Value - USD</label>
                        <input
                          type="number"
                          name="current_residual_value"
                          value={inputValues.current_residual_value}
                          disabled
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Freight</label>
                        <input
                          type="number"
                          name="freight_cost"
                          value={inputValues.freight_cost}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Insurance</label>
                        <input
                          type="number"
                          name="insurance"
                          value={inputValues.insurance}
                          onChange={handleFormInputs}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>CIF Kigali</label>
                        <input
                          type="number"
                          name="cif_kigali"
                          value={inputValues.cif_kigali}
                          onChange={handleFormInputs}
                          disabled
                          required
                        ></input>
                      </div>
                      <div className="form-inner mb-25">
                        <label>
                          Current Value in Rfw (1 USD = {roundNumbers(usdToRwf)}{" "}
                          Rwf)
                        </label>
                        <input
                          type="number"
                          name="current_value"
                          value={inputValues.current_value}
                          onChange={handleFormInputs}
                          disabled
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-inner mb-25">
                        <label>Quitus fiscal? (YES or NO)</label>
                        <select
                          className="select"
                          name="quitus_fiscal"
                          value={inputValues.quitus_fiscal}
                          onChange={handleFormInputs}
                          required
                        >
                          <option value="">Select quitus fiscal status</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="form-inner mb-25">
                        <label>Vehicle Category</label>
                        <select
                          className="select"
                          name="vehicle_category"
                          value={inputValues.vehicle_category}
                          onChange={handleFormInputs}
                          required
                        >
                          <option value="">Select price range</option>
                          <option value="Motor vehicles with  engine capacity less or equal to 1500 cc">
                            Motor vehicles with engine capacity less or equal to
                            1500 cc
                          </option>
                          <option value="Motor vehicles with engine capacity of 1500 cc to 2500cc">
                            Motor vehicles with engine capacity of 1500 cc to
                            2500cc
                          </option>
                          <option value="Motor vehicles with engine capacity above 2500cc">
                            Motor vehicles with engine capacity above 2500cc
                          </option>
                          <option value="Tractors">Tractors</option>
                          <option value="Minbuses (Seating capacity not exceeding 25 places)">
                            Minbuses (Seating capacity not exceeding 25 places)
                          </option>
                          <option value="Buses (Seating capacity exceeding 25 places)">
                            Buses (Seating capacity exceeding 25 places)
                          </option>
                          <option value="Pick up">Pick up</option>
                          <option value="Truck with carrying capacity not exceeding 20 Tones">
                            Truck with carrying capacity not exceeding 20 Tones
                          </option>
                          <option value="Truck with carrying capacity exceeding 20 Tones">
                            Truck with carrying capacity exceeding 20 Tones
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="inline_form pt-3">
                      <p>
                        <strong>Note: </strong>This calculations are not
                        replacing Customs laws and Customs Management system
                        rather it is a template to assist importers in computing
                        depreciation of used motovehicles and estimating duties
                        and taxes to pay in order to increase the
                        predictability.
                      </p>
                    </div>
                    <div className="form-inner last">
                      {isAuthenticated ? (
                        <button className="primary-btn1" type="submit">
                          {loading ? (
                            <RiseLoader
                              color={color}
                              loading={loading}
                              cssOverride={override}
                              size={10}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                              className="loader"
                            />
                          ) : (
                            "Calculate Taxes"
                          )}
                        </button>
                      ) : (
                        <button
                          className="primary-btn1"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          ref={dismissButtonRef}
                        >
                          Login to Calculate Taxes
                        </button>
                      )}
                    </div>
                  </form>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <Login
                            loginTitle={loginTitle}
                            CloseModal={handleClosingModal}
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
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
    </>
  );
}

export default TaxCalculator;
