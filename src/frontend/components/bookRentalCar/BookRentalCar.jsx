import React, { useState } from "react";
import axiosInstance from "../../../../utils/AxiosInstance";
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
function BookRentalCar({ carDetails }) {
  const [inputValues, setInputValues] = useState({
    user_id: "",
    car_id: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    phone_number: "",
    car_delivery_choice: "",
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
      start_date: inputValues.start_date,
      start_time: inputValues.start_time,
      end_date: inputValues.end_date,
      end_time: inputValues.end_time,
      phone_number: inputValues.phone_number,
      car_delivery_choice: inputValues.car_delivery_choice,
    };
    // console.log(params);
    const submitData = async () => {
      try {
        const response = await axiosInstance.post(
          "/book-rental-car/create",
          params
        );
        
        const dataToSend = {
          user_name: selectedUser.name,
          start_date: inputValues.start_date,
          end_date: inputValues.end_date,
          rental_amount: response.data.result.rental_amount,
          car_name: carDetails.car_year + " " + carDetails.car_name_info,
          rental_days: response.data.result.rental_days,
        };
        navigate("/rental_confirmation", { state: { data: dataToSend } });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    submitData();
  };
  return (
    <div className="login-dark pt-3">
      <div className="login-main">
        <form className="theme-form" onSubmit={submitHandler}>
          <h2 className="heading-3_5 normal-case" data-qa="Heading">
            Rent This Car Today!
          </h2>
          <p className="error">{formError && "Please fill all the fields"}</p>
          <div className="row">
            <div className="col-md-6 form-group">
              <label className="col-form-label">Start Date</label>
              <input
                className="form-control"
                type="date"
                required=""
                placeholder=""
                name="start_date"
                onChange={handleFormInputs}
                value={inputValues.start_date}
              />
            </div>
            <div className="col-md-6 form-group">
              <label className="col-form-label">Start Time</label>
              <input
                className="form-control"
                type="time"
                required=""
                name="start_time"
                onChange={handleFormInputs}
                value={inputValues.start_time}
              />
            </div>
            <div className="col-md-6 form-group">
              <label className="col-form-label">End Date</label>
              <input
                className="form-control"
                type="date"
                required=""
                placeholder=""
                name="end_date"
                onChange={handleFormInputs}
                value={inputValues.end_date}
              />
            </div>
            <div className="col-md-6 form-group">
              <label className="col-form-label">End Time</label>
              <input
                className="form-control"
                type="time"
                required=""
                name="end_time"
                onChange={handleFormInputs}
                value={inputValues.end_time}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
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
            <div className="col-md-6 form-group">
              <label className="col-form-label">Delivery option</label>
              <select
                className="form-control"
                name="car_delivery_choice"
                onChange={handleFormInputs}
                value={inputValues.car_delivery_choice}
                style={{ padding: "0px" }}
              >
                <option>Choose an option</option>
                <option>Bring a car to me</option>
                <option>Find the car at our location</option>
              </select>
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
                "Rent This Car Today! "
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookRentalCar;
