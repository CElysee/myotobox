import React, { useState } from "react";
import axiosInstance from "../../../../utils/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import RiseLoader from "react-spinners/RiseLoader";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#e55812",
  paddingRight: "10px",
};
function BookATestDrive() {
  const [inputValues, setInputValues] = useState({
    user_id: "",
    car_id: "",
    date: "",
    time: "",
    phone_number: "",
    location_choice: "",
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [color, setColor] = useState("#fff");
  const urlParams = useParams();
  const navigate = useNavigate();

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const selectedUser = useSelector(selectUser);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const params = {
      user_id: selectedUser.userId,
      car_id: urlParams.stock,
      date: inputValues.date,
      time: inputValues.time,
      phone_number: inputValues.phone_number,
      location_choice: inputValues.location_choice,
    };
    console.log(params);
    const submitData = async () => {
      try {
        const response = await axiosInstance.post("/book-a-test-drive/create", params);
        console.log(response.data);
        navigate("/booking_message")
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    submitData();
  };
  return (
    <div className="login-card-book login-dark mt-4">
      <div>
        <div className="login-main">
          <form className="theme-form" onSubmit={submitHandler}>
            <h2 className="heading-3_5 normal-case" data-qa="Heading">
              Book a Test Drive
            </h2>
            <p className="error">{formError && "Please fill all the fields"}</p>
            <div className="form-group">
              <label className="col-form-label">Test Drive Date</label>
              <input
                className="form-control"
                type="date"
                required=""
                placeholder=""
                name="date"
                onChange={handleFormInputs}
                value={inputValues.date}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Test Drive Time</label>
              <input
                className="form-control"
                type="time"
                required=""
                name="time"
                onChange={handleFormInputs}
                value={inputValues.time}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone Number</label>
              <input
                className="form-control"
                type="number"
                required=""
                placeholder="078********"
                name="phone_number"
                onChange={handleFormInputs}
                value={inputValues.phone_number}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Location option</label>
              <select
                className="form-control"
                name="location_choice"
                onChange={handleFormInputs}
                value={inputValues.location_choice}
              >
                <option>Choose an option</option>
                <option>Bring a car to you (15,000)</option>
                <option>Find the car at our location</option>
              </select>
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
                  "Book Test Drive"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookATestDrive;
