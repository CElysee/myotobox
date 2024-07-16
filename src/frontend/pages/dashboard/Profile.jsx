import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../utils/AxiosInstance";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import RiseLoader from "react-spinners/RiseLoader";
import { useNavigate } from "react-router-dom";
import Greetings from "../../components/greetings/Greetings";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const [formError, setFormError] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    phone_number: "",
    firstName: "",
    lastName: "",
    password: "",
    gender: "",
    country_id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/country/list");
        setCountryList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const countryOptions = countryList.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  const handleCountryChange = (selectedOption) => {
    setInputValues({
      ...inputValues,
      country_id: selectedOption.value,
    });
    setSelectedCountry(selectedOption);
  };
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const passwordView = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axiosInstance.post(
        "/auth/create_admin",
        inputValues,
        customConfig
      );
      notify("Account created successfully", "success");
      const dataToPass = {
        user_name: inputValues.firstName + " " + inputValues.lastName,
      };
      navigate("/account-created", {
        state: { data: dataToPass },
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        icon: "👏",
      });
    } else if (type === "error") {
      toast.error(message, {
        icon: "😬",
      });
    }
  };
  return (
    <div className="main_content flex" style={{paddingTop: "80px"}}>
      <SideMenu />
      <div className="main_content_wrapper">
      <div className="container pb-5">
        <div className="row pt-5">
          <Greetings />
          <div className="col-lg-12">
            <div className="tabs">
              <input type="radio" id="tab1" name="tab-control" checked />
              <input type="radio" id="tab2" name="tab-control" />
              <ul>
                <li title="UserProfile">
                  <label htmlFor="tab1" role="button">
                    <svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-420.000000, -2119.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M378.083123,1964.99998 C378.083123,1962.79398 376.251842,1960.99998 374,1960.99998 C371.748158,1960.99998 369.916877,1962.79398 369.916877,1964.99998 C369.916877,1967.20598 371.748158,1968.99998 374,1968.99998 C376.251842,1968.99998 378.083123,1967.20598 378.083123,1964.99998 M381.945758,1978.99998 L380.124685,1978.99998 C379.561214,1978.99998 379.103904,1978.55198 379.103904,1977.99998 C379.103904,1977.44798 379.561214,1976.99998 380.124685,1976.99998 L380.5626,1976.99998 C381.26898,1976.99998 381.790599,1976.30298 381.523154,1975.66198 C380.286989,1972.69798 377.383888,1970.99998 374,1970.99998 C370.616112,1970.99998 367.713011,1972.69798 366.476846,1975.66198 C366.209401,1976.30298 366.73102,1976.99998 367.4374,1976.99998 L367.875315,1976.99998 C368.438786,1976.99998 368.896096,1977.44798 368.896096,1977.99998 C368.896096,1978.55198 368.438786,1978.99998 367.875315,1978.99998 L366.054242,1978.99998 C364.778266,1978.99998 363.773818,1977.85698 364.044325,1976.63598 C364.787453,1973.27698 367.107688,1970.79798 370.163906,1969.67298 C368.769519,1968.57398 367.875315,1966.88998 367.875315,1964.99998 C367.875315,1961.44898 371.023403,1958.61898 374.733941,1959.04198 C377.422678,1959.34798 379.650022,1961.44698 380.05323,1964.06998 C380.400296,1966.33098 379.456073,1968.39598 377.836094,1969.67298 C380.892312,1970.79798 383.212547,1973.27698 383.955675,1976.63598 C384.226182,1977.85698 383.221734,1978.99998 381.945758,1978.99998 M377.185857,1974.46398 C377.584982,1974.85498 377.584982,1975.48798 377.185857,1975.87898 L374,1978.99998 L371.834924,1976.87898 C371.435799,1976.48798 371.435799,1975.85498 371.834924,1975.46398 L371.834924,1975.46398 C372.233028,1975.07398 372.879183,1975.07398 373.278308,1975.46398 L374,1976.17198 L375.742473,1974.46398 C376.141598,1974.07398 376.787752,1974.07398 377.185857,1974.46398"
                              id="profile_round-[#1345]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <br />
                    <span>Profile Information</span>
                  </label>
                </li>
                <li title="UserPassword">
                  <label htmlFor="tab2" role="button">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM12.7502 10C12.7502 9.58579 12.4144 9.25 12.0002 9.25C11.586 9.25 11.2502 9.58579 11.2502 10V10.7012L10.6428 10.3505C10.2841 10.1434 9.8254 10.2663 9.61829 10.625C9.41119 10.9837 9.53409 11.4424 9.89281 11.6495L10.4997 11.9999L9.89258 12.3505C9.53386 12.5576 9.41095 13.0163 9.61806 13.375C9.82517 13.7337 10.2839 13.8566 10.6426 13.6495L11.2502 13.2987V14C11.2502 14.4142 11.586 14.75 12.0002 14.75C12.4144 14.75 12.7502 14.4142 12.7502 14V13.2993L13.3569 13.6495C13.7156 13.8566 14.1743 13.7337 14.3814 13.375C14.5885 13.0163 14.4656 12.5576 14.1069 12.3505L13.4997 11.9999L14.1067 11.6495C14.4654 11.4424 14.5883 10.9837 14.3812 10.625C14.1741 10.2663 13.7154 10.1434 13.3567 10.3505L12.7502 10.7006V10ZM6.73266 9.25C7.14687 9.25 7.48266 9.58579 7.48266 10V10.7006L8.0891 10.3505C8.44782 10.1434 8.90651 10.2663 9.11362 10.625C9.32073 10.9837 9.19782 11.4424 8.8391 11.6495L8.23217 11.9999L8.83934 12.3505C9.19806 12.5576 9.32096 13.0163 9.11386 13.375C8.90675 13.7337 8.44806 13.8566 8.08934 13.6495L7.48266 13.2993V14C7.48266 14.4142 7.14687 14.75 6.73266 14.75C6.31844 14.75 5.98266 14.4142 5.98266 14V13.2987L5.375 13.6495C5.01628 13.8566 4.55759 13.7337 4.35048 13.375C4.14337 13.0163 4.26628 12.5576 4.625 12.3505L5.23217 11.9999L4.62523 11.6495C4.26652 11.4424 4.14361 10.9837 4.35072 10.625C4.55782 10.2663 5.01652 10.1434 5.37523 10.3505L5.98266 10.7012V10C5.98266 9.58579 6.31844 9.25 6.73266 9.25ZM18.0181 10C18.0181 9.58579 17.6823 9.25 17.2681 9.25C16.8539 9.25 16.5181 9.58579 16.5181 10V10.7012L15.9106 10.3505C15.5519 10.1434 15.0932 10.2663 14.8861 10.625C14.679 10.9837 14.8019 11.4424 15.1606 11.6495L15.7676 11.9999L15.1604 12.3505C14.8017 12.5576 14.6788 13.0163 14.8859 13.375C15.093 13.7337 15.5517 13.8566 15.9104 13.6495L16.5181 13.2987V14C16.5181 14.4142 16.8539 14.75 17.2681 14.75C17.6823 14.75 18.0181 14.4142 18.0181 14V13.2993L18.6247 13.6495C18.9835 13.8566 19.4422 13.7337 19.6493 13.375C19.8564 13.0163 19.7335 12.5576 19.3747 12.3505L18.7676 11.9999L19.3745 11.6495C19.7332 11.4424 19.8561 10.9837 19.649 10.625C19.4419 10.2663 18.9832 10.1434 18.6245 10.3505L18.0181 10.7006V10Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                    <br />
                    <span>Delivery Contents</span>
                  </label>
                </li>
              </ul>
              <div className="slider">
                <div className="indicator"></div>
              </div>
              <div className="content">
                <section>
                  <div className="login-card">
                    <div className="login-main">
                      <form className="theme-form" onSubmit={submitHandler}>
                        <p className="error">
                          {formError && "Please fill all the fields"}
                        </p>
                        <div className="inline_form">
                          <div className="form-group">
                            <label className="col-form-label">First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              name="firstName"
                              placeholder="Murenzi"
                              onChange={handleValueChange}
                              value={inputValues.firstName}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Last Name</label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              placeholder="David"
                              onChange={handleValueChange}
                              value={inputValues.lastName}
                              required
                            />
                          </div>
                        </div>
                        <div className="inline_form">
                          <div className="form-group">
                            <label className="col-form-label">
                              Phone Number
                            </label>
                            <PhoneInput
                              placeholder="078*********"
                              defaultCountry="RW"
                              value={inputValues.phone_number}
                              onChange={(value) => {
                                setInputValues({
                                  ...inputValues,
                                  phone_number: value,
                                });
                              }}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="david@myotobox"
                              onChange={handleValueChange}
                              value={inputValues.email}
                              required
                            />
                          </div>
                        </div>
                        <div className="inline_form">
                          <div className="form-group">
                            <label className="col-form-label">Gender</label>
                            <select
                              className="select"
                              name="gender"
                              value={inputValues.gender}
                              onChange={handleValueChange}
                              required
                            >
                              <option>Select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Country</label>
                            <Select
                              placeholder="eg: Rwanda"
                              className="country-select"
                              name="country_id"
                              // isMulti
                              options={countryOptions}
                              value={selectedCountry}
                              onChange={handleCountryChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <button
                            className="btn btn-primary mt-3"
                            type="submit"
                          >
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
                              "Update Profile"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="login-card">
                    <div className="login-main">
                      <form className="theme-form" onSubmit={submitHandler}>
                        <p className="error">
                          {formError && "Please fill all the fields"}
                        </p>
                        <div className="inline_form">
                          <div className="form-group">
                            <label className="col-form-label">
                              Old Password
                            </label>
                            <div className="form-input position-relativ position-relative d-flex align-items-center input-container">
                              <input
                                className="form-control"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="*********"
                                onChange={handleValueChange}
                                value={inputValues.password}
                                required
                              />
                              <div
                                className="cursor-pointer grey-2-text"
                                onClick={passwordView}
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />

                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-form-label">
                              New Password
                            </label>
                            <div className="form-input position-relativ position-relative d-flex align-items-center input-container">
                              <input
                                className="form-control"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="*********"
                                onChange={handleValueChange}
                                value={inputValues.password}
                                required
                              />
                              <div
                                className="cursor-pointer grey-2-text"
                                onClick={passwordView}
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />

                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group mb-0">
                          <button
                            className="btn btn-primary mt-3"
                            type="submit"
                          >
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
                              "Update Password"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Profile;
