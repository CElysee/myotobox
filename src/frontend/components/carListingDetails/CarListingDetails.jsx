import React from "react";
import {
  formatAmount,
  formatNumber,
  formatDate,
} from "../../../../utils/Helpers";

function CarListingDetails({ carDetails, carFeatures }) {
  return (
    <div className="md:pr-5 col-12 col-md-8 col-lg-8">
      <h2 className="heading-3_5 normal-case" data-qa="Heading">
        Vehicle Overview
      </h2>
      <div className="row pt-3 vehicle_info">
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 24 24"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {carDetails.car_location}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-speedometer2"
              viewBox="0 0 24 24"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
              <path
                fillRule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
              />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {formatAmount(carDetails.car_mileage)} Kms
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <div
              style={{
                backgroundColor: "#4A4645",
                borderRadius: "50%",
                border: "1px solid #E5E5E5",
              }}
              className="h-[25px] min-w-[25px]"
            ></div>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              Exterior: {carDetails.car_exterior_color}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              fill="#000000"
              height="24"
              width="24"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 240.235 240.235"
              xmlSpace="preserve"
            >
              <path
                d="M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436
	c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761
	c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69
	c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618
	c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981
	c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97
	C217.214,15.205,215.407,10.016,211.744,6.089z"
              />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              Interior: {carDetails.car_interior_color}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-fuel-pump"
              viewBox="0 0 24 24"
            >
              <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z" />
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8V2Z" />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              Fuel Type: {carDetails.car_fuel_type}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
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
                  d="m 8 1.003906 c -2.050781 0 -4.097656 0.78125 -5.65625 2.339844 c -3.117188 3.117188 -3.117188 8.195312 0 11.3125 c 0.390625 0.390625 1.023438 0.390625 1.414062 0 c 0.390626 -0.390625 0.390626 -1.023438 0 -1.414062 c -2.351562 -2.351563 -2.351562 -6.132813 0 -8.484376 c 2.351563 -2.351562 6.132813 -2.351562 8.484376 0 c 1.972656 1.972657 2.289062 4.953126 0.953124 7.246094 c -0.257812 0.445313 -0.574218 0.859375 -0.953124 1.238282 c -0.390626 0.390624 -0.390626 1.023437 0 1.414062 c 0.390624 0.390625 1.023437 0.390625 1.414062 0 c 3.117188 -3.117188 3.117188 -8.195312 0 -11.3125 c -1.558594 -1.558594 -3.605469 -2.339844 -5.65625 -2.339844 z m 5.195312 11 l -0.363281 -1.363281 l -2.832031 -1.636719 c 0 -0.714844 -0.382812 -1.371094 -1 -1.730468 c -0.957031 -0.550782 -2.179688 -0.222657 -2.730469 0.730468 c -0.554687 0.957032 -0.226562 2.183594 0.730469 2.734375 c 0.617188 0.355469 1.378906 0.351563 1.996094 -0.003906 l 2.835937 1.636719 z m 0 0"
                  fill="#000000"
                />{" "}
                <path
                  d="m 12 9 c -0.003906 1.058594 -0.429688 2.074219 -1.179688 2.820312 l 2.128907 2.128907 c 1.3125 -1.3125 2.050781 -3.09375 2.050781 -4.949219 z m 0 0"
                  fill="#000000"
                  fillOpacity="0.34902"
                />{" "}
              </g>
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {carDetails.car_fuel_consumption} Km/l
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                d="M12 6V13M12 18V16"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 18V11M4 6V8"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 6V8C20 9.88562 20 10.8284 19.4142 11.4142C18.8284 12 17.8856 12 16 12H10M4 12H6"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18 15V14.25C17.5858 14.25 17.25 14.5858 17.25 15H18ZM17.25 22C17.25 22.4142 17.5858 22.75 18 22.75C18.4142 22.75 18.75 22.4142 18.75 22H17.25ZM21.3604 22.3916C21.5766 22.7449 22.0384 22.8559 22.3916 22.6396C22.7449 22.4234 22.8559 21.9616 22.6396 21.6084L21.3604 22.3916ZM18 15.75H20.2857V14.25H18V15.75ZM18.75 18.5V15H17.25V18.5H18.75ZM21.25 16.75C21.25 17.3169 20.8038 17.75 20.2857 17.75V19.25C21.6612 19.25 22.75 18.1161 22.75 16.75H21.25ZM20.2857 15.75C20.8038 15.75 21.25 16.1831 21.25 16.75H22.75C22.75 15.3839 21.6612 14.25 20.2857 14.25V15.75ZM20.2857 17.75H19.8571V19.25H20.2857V17.75ZM19.8571 17.75H18V19.25H19.8571V17.75ZM19.2175 18.8916L21.3604 22.3916L22.6396 21.6084L20.4968 18.1084L19.2175 18.8916ZM17.25 18.5V22H18.75V18.5H17.25Z"
                fill="#000"
              />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {carDetails.car_transmission}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              fill="#000000"
              height="24"
              width="24"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M400.478,181.112c30.765,0,55.795-25.029,55.795-55.794V55.794C456.273,25.029,431.243,0,400.478,0
			c-30.765,0-55.794,25.029-55.794,55.794V73.9h-177.37V55.794C167.315,25.029,142.286,0,111.522,0
			C80.757,0,55.727,25.029,55.727,55.794v69.524c0,30.765,25.03,55.794,55.795,55.794c30.765,0,55.794-25.029,55.794-55.794v-18.107
			h72.029v152.625h-27.764c-9.198,0-16.655,7.457-16.655,16.655v90.891c0,9.198,7.457,16.655,16.655,16.655h27.764v15.199h-72.029
			v-12.555c0-30.765-25.029-55.794-55.794-55.794c-30.765,0-55.795,25.029-55.795,55.794v69.524
			c0,30.765,25.03,55.794,55.795,55.794c30.765,0,55.794-25.029,55.794-55.794v-12.555h177.37v12.555
			c0,30.765,25.029,55.794,55.794,55.794s55.795-25.029,55.795-55.794v-69.524c0-30.765-25.03-55.794-55.795-55.794
			c-30.765,0-55.794,25.029-55.794,55.794v12.555h-72.029v-15.199h29.817c9.198,0,16.655-7.457,16.655-16.655v-90.891
			c0-9.198-7.457-16.655-16.655-16.655h-29.817V107.211h72.029v18.107C344.685,156.083,369.713,181.112,400.478,181.112z
			 M377.996,55.794c0-12.397,10.085-22.483,22.483-22.483c12.397,0,22.484,10.085,22.484,22.483v69.524
			c0,12.397-10.087,22.483-22.484,22.483c-12.397,0-22.483-10.085-22.483-22.483V55.794z M134.004,125.318
			c0,12.397-10.085,22.483-22.483,22.483s-22.484-10.085-22.484-22.483V55.794c0-12.397,10.087-22.483,22.484-22.483
			s22.483,10.085,22.483,22.483V125.318z M134.004,456.206c0,12.397-10.085,22.483-22.483,22.483s-22.484-10.085-22.484-22.483
			v-69.524c0-12.397,10.087-22.483,22.484-22.483s22.483,10.085,22.483,22.483V456.206z M377.996,386.682
			c0-12.397,10.085-22.483,22.483-22.483c12.397,0,22.484,10.085,22.484,22.483v69.524c0,12.397-10.087,22.483-22.484,22.483
			c-12.397,0-22.483-10.085-22.483-22.483V386.682z M285.816,293.147v57.58h-57.579v-57.58H285.816z"
                  />
                </g>
              </g>
            </svg>

            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {carDetails.car_drive_train}
            </h3>
          </div>
        </div>
        <div className="mb-3 lg:mb-4 col-12 col-lg-6">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16H12.01M12 11V13M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M6 8V16H8L10 19H18V10L16 8H6Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3
              className="heading-base flex items-center mx-3"
              data-qa="Heading"
            >
              {carDetails.car_engine_capacity}
            </h3>
          </div>
        </div>
      </div>
      <div className="mb-4" data-test="unifiedVinStockDetailsSection">
        <div className="row flex w-full flex-wrap">
          <div className="col-12 col-lg-4">
            <h3 className="heading-base mt-3" data-qa="Heading">
              <p className="font-bold">Listed:</p>
              <p data-test="listedDays">{formatDate(carDetails.created_at)}</p>
            </h3>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="heading-base mt-3" data-qa="Heading">
              <p className="font-bold">VIN:</p>
              <p data-test="vinNumber"> {carDetails.car_vin_number}</p>
            </h3>
          </div>
          <div className="col-12 col-lg-4">
            <h3 className="heading-base mt-3 lg:ml-3" data-qa="Heading">
              <p className="font-bold">Stock Number:</p>
              <p data-test="stockNumber">{carDetails.stock_number}</p>
            </h3>
          </div>
        </div>
      </div>
      <div
        className="py-4 lg:py-5 border-t border-t-[#E5E5E5]"
        data-test="vdpConditionHistory"
      >
        <h2 className="heading-3_5 normal-case" data-qa="Heading">
          Vehicle History Report
        </h2>
        <div className="row md:flex">
          <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
            <h3 className="heading-base" data-qa="Heading">
              <strong>Control Technique</strong>
              <div className="heading-base mt-1" data-qa="Heading">
                {carDetails.car_control_technique}
              </div>
            </h3>
          </div>
          <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
            <h3 className="heading-base" data-qa="Heading">
              <strong>Insurance</strong>
              <div className="heading-base mt-1" data-qa="Heading">
                {carDetails.car_insurance}
              </div>
            </h3>
          </div>
          <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
            <h3 className="heading-base" data-qa="Heading">
              <strong>Listed By</strong>
              <div className="heading-base mt-1" data-qa="Heading">
                {carDetails.car_renter_name}
              </div>
            </h3>
          </div>
          <div className="pl-3 md:pl-3 mt-4 border-l-2 border-l col-6">
            <h3 className="heading-base" data-qa="Heading">
              <strong>Plate</strong>
              <div className="heading-base mt-1" data-qa="Heading">
                {carDetails.car_registration_number}
              </div>
            </h3>
          </div>
        </div>
      </div>
      <div className="border-t pb-5 pt-5" data-test="vdpFeaturesSection">
        <h2 className="heading-3_5 normal-case" data-qa="Heading">
          Standard Features
        </h2>
        <div className="row">
          {carFeatures.map((feature, index) => (
            <div
              data-test="vdpPopularFeatureItem"
              className="mb-2-5 flex lg:mb-3 lg:pr-2 col-12 col-lg-4"
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 24 24"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <h3 className="heading-base text-base" data-qa="Heading">
                {feature.feature_name}
              </h3>
            </div>
          ))}
        </div>
        <div className="border-t pt-3 mt-5">
          <h2 className="heading-3_5 normal-case" data-qa="Heading">
            MyOtobox's Note
          </h2>
          <div className="seller-note-body">
            <div
              dangerouslySetInnerHTML={{
                __html: carDetails.inspection_note,
              }}
            />
          </div>
        </div>
        <div className="row pl-1 text-sm"></div>
      </div>
    </div>
  );
}

export default CarListingDetails;
