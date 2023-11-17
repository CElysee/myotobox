import React from "react";

function Dashboard() {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h-100">
                <div className="row mb-3 pb-1">
                  <div className="col-12">
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                      <div className="flex-grow-1">
                        <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                        <p className="text-muted mb-0 pt-2">
                          Here's what's happening with your store today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-3">
                    <div className="card card-animate">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                              {" "}
                              Total Earnings
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="text-success fs-14 mb-0">
                              <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                              +16.24 %
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                          <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                              $
                              <span
                                className="counter-value"
                                data-target="559.25"
                              >
                                559.25
                              </span>
                              k{" "}
                            </h4>
                            <a href="" className="">
                              View net earnings
                            </a>
                          </div>
                          <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-primary-subtle rounded fs-3">
                              <i className="bx bx-dollar-circle text-primary"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-3">
                    <div className="card card-animate">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                              Orders
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="text-danger fs-14 mb-0">
                              <i className="ri-arrow-right-down-line fs-13 align-middle"></i>{" "}
                              -3.57 %
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                          <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                              <span
                                className="counter-value"
                                data-target="36894"
                              >
                                36894
                              </span>
                            </h4>
                            <a href="" className="">
                              View all orders
                            </a>
                          </div>
                          <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-info-subtle rounded fs-3">
                              <i className="bx bx-shopping-bag text-info"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-3">
                    <div className="card card-animate">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                              Customers
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="text-success fs-14 mb-0">
                              <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                              +29.08 %
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                          <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                              <span
                                className="counter-value"
                                data-target="183.35"
                              >
                                183.35
                              </span>
                              M{" "}
                            </h4>
                            <a href="" className="">
                              See details
                            </a>
                          </div>
                          <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-primary-subtle rounded fs-3">
                              <i className="bx bx-user-circle text-primary"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-3">
                    <div className="card card-animate">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1 overflow-hidden">
                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                              {" "}
                              My Balance
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                          <div>
                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                              $
                              <span
                                className="counter-value"
                                data-target="165.89"
                              >
                                165.89
                              </span>
                              k{" "}
                            </h4>
                            <a href="" className="">
                              Withdraw money
                            </a>
                          </div>
                          <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-info-subtle rounded fs-3">
                              <i className="bx bx-wallet text-info"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card card-animate">
                      <div className="card-body">
                        <div className="card-header border-0 align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Revenue
                          </h4>
                          <div style={{ display: "flex", gap: "0.5em" }}>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              6M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>

                        <div className="card-header p-0 border-0 bg-light-subtle">
                          <div className="row g-0 text-center">
                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  <span
                                    className="counter-value"
                                    data-target="7585"
                                  >
                                    7585
                                  </span>
                                </h5>
                                <p className="text-muted mb-0">Orders</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  $
                                  <span
                                    className="counter-value"
                                    data-target="22.89"
                                  >
                                    22.89
                                  </span>
                                  k
                                </h5>
                                <p className="text-muted mb-0">Earnings</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0">
                                <h5 className="mb-1">
                                  <span
                                    className="counter-value"
                                    data-target="367"
                                  >
                                    367
                                  </span>
                                </h5>
                                <p className="text-muted mb-0">Refunds</p>
                              </div>
                            </div>

                            <div className="col-6 col-sm-3">
                              <div className="p-3 border border-dashed border-start-0 border-end-0">
                                <h5 className="mb-1 text-success">
                                  <span
                                    className="counter-value"
                                    data-target="18.92"
                                  >
                                    18.92
                                  </span>
                                  %
                                </h5>
                                <p className="text-muted mb-0">
                                  Conversation Ratio
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body p-0 pb-2">
                          <div className="w-100">
                            <div
                              id="customer_impression_charts"
                              data-colors='["--vz-info", "--vz-primary", "--vz-danger"]'
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">
                          Daily Cars for sales Transactions
                        </h4>
                      </div>

                      <div className="card-body">
                        <div className="table-responsive table-card">
                          <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-sm bg-light rounded p-1 me-2">
                                      <img
                                        src="/assets/images/products/img-2.png"
                                        alt=""
                                        className="img-fluid d-block"
                                      />
                                    </div>
                                    <div>
                                    <span className="text-muted">
                                        Model Name
                                      </span>
                                      <h5 className="fs-14 my-1">
                                        <a
                                          href="apps-ecommerce-product-details.html"
                                          className="text-reset"
                                        >
                                          Bentwood Chair
                                        </a>
                                      </h5>
                                      
                                    </div>
                                  </div>
                                </td>
                                <td>
                                <span className="text-muted">Price</span>
                                  <h5 className="fs-14 my-1 fw-normal">
                                    $85.20
                                  </h5>
                                 
                                </td>
                                <td>
                                <span className="text-muted">Unique ID</span>
                                  <h5 className="fs-14 my-1 fw-normal">35</h5>
                                  
                                </td>
                                <td>
                                  <h5 className="fs-14 my-1 fw-normal">
                                    $2982
                                  </h5>
                                  <span className="text-muted">Amount</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">
                          Daily Cars for rent Transactions
                        </h4>
                      </div>

                      <div className="card-body">
                        <div className="table-responsive table-card">
                          <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-sm bg-light rounded p-1 me-2">
                                      <img
                                        src="/assets/images/products/img-2.png"
                                        alt=""
                                        className="img-fluid d-block"
                                      />
                                    </div>
                                    <div>
                                    <span className="text-muted">
                                        Model Name
                                      </span>
                                      <h5 className="fs-14 my-1">
                                        <a
                                          href="apps-ecommerce-product-details.html"
                                          className="text-reset"
                                        >
                                          Bentwood Chair
                                        </a>
                                      </h5>
                                      
                                    </div>
                                  </div>
                                </td>
                                <td>
                                <span className="text-muted">Price</span>
                                  <h5 className="fs-14 my-1 fw-normal">
                                    $85.20
                                  </h5>
                                 
                                </td>
                                <td>
                                <span className="text-muted">Unique ID</span>
                                  <h5 className="fs-14 my-1 fw-normal">35</h5>
                                  
                                </td>
                                <td>
                                  <h5 className="fs-14 my-1 fw-normal">
                                    $2982
                                  </h5>
                                  <span className="text-muted">Amount</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
  );
}

export default Dashboard;
