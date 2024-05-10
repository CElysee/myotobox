import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import axiosInstance from "../../../../utils/axiosInstance";
import "react-toastify/dist/ReactToastify.css";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import OtpInput from "react-otp-input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const [formError, setFormError] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
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
  })
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
      country_id: selectedOption,
    });
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordView = () => {
    setShowPassword(!showPassword);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email != "" || password != "") {
      setFormError(false);
      setLoading(true);
      const formData = new FormData();
      // Append some data to the FormData
      formData.append("username", email);
      formData.append("password", password);

      try {
        const response = await axiosInstance.post("/auth/login", formData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const role = response.data.role;
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("user_role", response.data.role);
        localStorage.setItem("userId", response.data.userId);

        notify("Login Successfully", "success");
        switch (role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "mentee":
            navigate("/mentee/dashboard");
            break;
          case "mentor":
            navigate("/mentor/dashboard");
            break;
          default:
            navigate("/signIn");
        }
      } catch (error) {
        console.error(error);
        notify(error.response.data.detail, "error");
      } finally {
        setLoading(false);
      }
    } else {
      notify("Please fill all the fields", "error");
      setFormError(true);
    }
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
  const handleValueChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNames(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };
  const sendOtp = async (e) => {
    e.preventDefault();
    if (names != "" && phoneNumber.length >= 10) {
      setOtpSent(true);
      setFormError(false);
    } else {
      notify("Please fill all fields", "error");
      setFormError(true);
    }
  };
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "80px" }}>
        <ToastContainer autoClose={1500} />
        <div className="row">
          <div
            className="col-md-7"
            style={{
              backgroundImage: `url("/assets/images/login_1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              display: "block",
            }}
          ></div>
          <div className="col-md-5 p-0">
            <div className="login-card login-dark">
              <div>
                <div className="login-main">
                  <form className="theme-form" onSubmit={submitHandler}>
                    <h4>
                      Join MyOtobox today and start exploring cars for sale and
                      rent.
                    </h4>
                    <p className="error">
                      {formError && "Please fill all the fields"}
                    </p>
                    <div className="inline_form">
                      <div className="form-group">
                        <label className="col-form-label">First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          required=""
                          placeholder="Murenzi David"
                          onChange={handleValueChange}
                          value={names}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          required=""
                          placeholder="Murenzi David"
                          onChange={handleValueChange}
                          value={names}
                        />
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-group">
                        <label className="col-form-label">Phone Number</label>
                        <PhoneInput
                          placeholder="078*********"
                          defaultCountry="RW"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="name"
                          required=""
                          placeholder="Murenzi David"
                          onChange={handleValueChange}
                          value={names}
                        />
                      </div>
                    </div>
                    <div className="inline_form">
                      <div className="form-group">
                        <label className="col-form-label">Gender</label>
                        <select className="select" name="price_range">
                          <option>Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Country</label>
                        <Select
                          placeholder="eg: Rwanda"
                          name="country_id"
                          // isMulti
                          options={countryOptions}
                          value={selectedCountry}
                          onChange={handleCountryChange}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block w-100 mt-3"
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
                          "Sign Up"
                        )}
                      </button>
                    </div>

                    <h6 className="text-muted mt-4 or">Follow us</h6>
                    <div
                      className="social mt-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="btn-showcase">
                        <a
                          className="btn btn-light"
                          href="https://www.linkedin.com/login"
                        >
                          <svg
                            fill="#ffc300"
                            width="20px"
                            height="20px"
                            viewBox="0 0 1920 1920"
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
                                d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                                fillRule="evenodd"
                              />{" "}
                            </g>
                          </svg>
                          LinkedIn{" "}
                        </a>
                      </div>
                      <div className="btn-showcase">
                        <a
                          className="btn btn-light"
                          href="https://twitter.com/login?lang=en"
                        >
                          <svg
                            width="20px"
                            height="20px"
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
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z"
                                fill="#ffc300"
                              />{" "}
                            </g>
                          </svg>
                          twitter
                        </a>
                      </div>
                      <div className="btn-showcase">
                        <a
                          className="btn btn-light"
                          href="https://www.facebook.com/"
                        >
                          <svg
                            fill="#ffc300"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                            width="20px"
                            height="20px"
                            viewBox="0 0 14.906 32"
                            stroke="#ffc300"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z" />{" "}
                            </g>
                          </svg>
                          facebook
                        </a>
                      </div>
                    </div>
                    <p className="mt-4 mb-0 text-center">
                      Have an account?
                      <Link to={"/login"} className="ms-2" href="sign-up.html">
                        Sign In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
