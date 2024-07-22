import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <div className="" id="sidebar-wrapper">
      <a
        href="#"
        style={{ color: "#F1DEC9" }}
        className="d-block p-3 text-center text-decoration-none logo mb-4"
        title="Company Name"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <i className="bi bi-bootstrap-fill" style={{ fontSize: "27px" }}></i>
      </a>

      <ul className="nav flex-column mb-auto text-center dashboard-menu">
        <li className="nav-item">
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu text-dark py-2"
                : "nav-link text-dark py-2"
            }
            aria-current="page"
            title="Home"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i className="fa-solid fa-house" style={{ fontSize: "27px" }}></i>
            <span className="dashboard-menu-text">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/profile"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu text-dark py-2 rounded-0"
                : "nav-link text-dark py-2 rounded-0"
            }
            title="Dashboard"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i className="fa-solid fa-user" style={{ fontSize: "27px" }}></i>
            <span className="dashboard-menu-text">User profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/booked_test_drive"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu py-2 text-dark rounded-0"
                : "nav-link py-2 text-dark rounded-0"
            }
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i className="fa-solid fa-cars" style={{ fontSize: "27px" }}></i>
            <span className="dashboard-menu-text">Booked test drive</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/booked_rentals"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu py-2 text-dark rounded-0"
                : "nav-link py-2 text-dark rounded-0"
            }
            title="Products"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i
              className="fa-solid fa-car-side"
              style={{ fontSize: "27px" }}
            ></i>
            <span className="dashboard-menu-text">Booked rental</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/import-on-orders"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu py-2 text-dark rounded-0"
                : "nav-link py-2 text-dark rounded-0"
            }
            title="Customers"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i className="fa-solid fa-ship" style={{ fontSize: "27px" }}></i>
            <span className="dashboard-menu-text">Import on order</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/tax_calculated"
            className={({ isActive }) =>
              isActive
                ? "nav-link active-menu py-2 text-dark rounded-0"
                : "nav-link py-2 text-dark rounded-0"
            }
            title="Customers"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            end
          >
            <i
              className="fa-solid fa-calculator"
              style={{ fontSize: "27px" }}
            ></i>
            <span className="dashboard-menu-text">Tax calculator</span>
          </NavLink>
        </li>
      </ul>
      <div className="dropdown border-top position-absolute bottom-0">
        <a
          href="#"
          style={{ color: "#333" }}
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
