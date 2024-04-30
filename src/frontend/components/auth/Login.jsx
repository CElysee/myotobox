import React, { useState } from "react";
import axiosInstance from "../../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../features/userSlice";
import { useDispatch } from "react-redux";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function Login({ isAboutToBook }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");
  const [formError, setFormError] = useState(false);

  const dispatch = useDispatch();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
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

        // console.log(response.data);
        dispatch(login(response.data));
        isAboutToBook(false);
        notify("Login Successfully", "success");
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
  return (
    <div className="login-card-book login-dark mt-4">
      <div>
        <div className="login-main">
          <form className="theme-form" onSubmit={submitHandler}>
            <h4>Sign In and Book a Test Drive</h4>
            <p className="error">{formError && "Please fill all the fields"}</p>
            <div className="form-group">
              <label className="col-form-label">Email Address</label>
              <input
                className="form-control"
                type="email"
                required=""
                placeholder="test@gmail.com"
                onChange={emailChangeHandler}
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Password</label>

              <div className="form-input position-relativ position-relative d-flex align-items-center input-container">
                <input
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  name="login[password]"
                  required=""
                  placeholder="*********"
                  onChange={passwordChangeHandler}
                  value={password}
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
                  " Sign in"
                )}
              </button>
            </div>
            <p className="mt-4 mb-0 text-center">
              Don't have account?
              <a className="ms-2" href="sign-up.html">
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
