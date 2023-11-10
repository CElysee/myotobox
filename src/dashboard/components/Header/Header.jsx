import React, { useState } from "react";
// import Logo from "";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const nav_links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/BuyCars",
      display: "Buy",
    },
    {
      path: "/RentCars",
      display: "Rent",
    },
    {
      path: "/ImportOnOrder",
      display: "Import on order",
    },
    {
      path: "/myotobox",
      display: "Tax calculator",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/sign-up");
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const MenuItem = ({ to, display }) => {
    // const isActive = activeIndex === nav_links.indexOf(children);
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
      <li
        className={isActive ? "nav-item active" : "nav-item"}
        onClick={() => {
          setActiveIndex(i);
        }}
      >
        <Link to={to} className="nav-link">
          {display}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="sidebar-wrapper" data-sidebar-layout="stroke-svg">
        <div>
          <div className="logo-wrapper">
            <a href="index.html">
              <img
                className="img-fluid for-light"
                src="../assets/images/logo/logo.png"
                alt=""
              />
              <img
                className="img-fluid for-dark"
                src="../assets/images/logo/logo_dark.png"
                alt=""
              />
            </a>
            <div className="back-btn">
              <i className="fa fa-angle-left"></i>
            </div>
            <div className="toggle-sidebar">
              <i
                className="status_toggle middle sidebar-toggle"
                data-feather="grid"
              >
                {" "}
              </i>
            </div>
          </div>
          <div className="logo-icon-wrapper">
            <a href="index.html">
              <img
                className="img-fluid"
                src="../assets/images/logo/logo-icon.png"
                alt=""
              />
            </a>
          </div>
          <nav className="sidebar-main">
            <div className="left-arrow" id="left-arrow">
              <i data-feather="arrow-left"></i>
            </div>
            <div id="sidebar-menu">
              <ul className="sidebar-links" id="simple-bar">
                <li className="back-btn">
                  <a href="index.html">
                    <img
                      className="img-fluid"
                      src="../assets/images/logo/logo-icon.png"
                      alt=""
                    />
                  </a>
                  <div className="mobile-back text-end">
                    <span>Back</span>
                    <i
                      className="fa fa-angle-right ps-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </li>
                <li className="pin-title sidebar-main-title">
                  <div>
                    <h6>Pinned</h6>
                  </div>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6 className="lan-1">General</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <label className="badge badge-light-primary">8</label>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-home"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-home"></use>
                    </svg>
                    <span className="lan-3">Dashboard </span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a className="lan-4" href="index.html">
                        Default
                      </a>
                    </li>
                    <li>
                      <a className="lan-5" href="dashboard-02.html">
                        Ecommerce
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-03.html">
                        Online course
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-04.html">
                        Crypto
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-05.html">
                        Social
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-06.html">
                        NFT
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-07.html">
                        School management
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://admin.pixelstrap.com/cuba/template/dashboard-08.html">
                        POS
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-widget"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-widget"></use>
                    </svg>
                    <span className="lan-6">Widgets</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/general-widget.html">
                        General
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-widget.html">
                        Chart
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-layout"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-layout"></use>
                    </svg>
                    <span className="lan-7">Page layout</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/box-layout.html">
                        Boxed
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/layout-rtl.html">
                        RTL
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/layout-dark.html">
                        Dark Layout
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/hide-on-scroll.html">
                        Hide Nav Scroll
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/footer-light.html">
                        Footer Light
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/footer-dark.html">
                        Footer Dark
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/footer-fixed.html">
                        Footer Fixed
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6 className="lan-8">Applications</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"> </i>
                  <label className="badge badge-light-secondary">New</label>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-project"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-project"></use>
                    </svg>
                    <span>Project </span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/projects.html">
                        Project List
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/projectcreate.html">
                        Create new
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/file-manager.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-file"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-file"></use>
                    </svg>
                    <span>File manager</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <label className="badge badge-light-danger">Latest </label>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/kanban.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-board"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-board"></use>
                    </svg>
                    <span>kanban Board</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-ecommerce"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-ecommerce"></use>
                    </svg>
                    <span>Ecommerce</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/add-products.html">
                        Add Products
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/product.html">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/category.html">
                        Category page
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/product-page.html">
                        Product page
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/list-products.html">
                        Product list
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/payment-details.html">
                        Payment Details
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/order-history.html">
                        Order History
                      </a>
                    </li>
                    <li>
                      <a className="submenu-title" href="#">
                        Invoices
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-1.html">
                            Invoice-1
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-2.html">
                            Invoice-2
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-3.html">
                            Invoice-3
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-4.html">
                            Invoice-4
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-5.html">
                            Invoice-5
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/invoice-template.html">
                            Invoice-6
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/list-wish.html">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/pricing.html">
                        Pricing{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="letter-box.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-email"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-email"></use>
                    </svg>
                    <span>Letter Box</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-chat"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-chat"></use>
                    </svg>
                    <span>Chat</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/private-chat.html">
                        Private Chat
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/group-chat.html">
                        Group Chat
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-user"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-user"></use>
                    </svg>
                    <span>Users</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/user-profile.html">
                        Users Profile
                      </a>
                    </li>
                    <li>
                      <a href="edit-profile.html">Users Edit</a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/user-cards.html">
                        Users Cards
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/bookmark.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-bookmark"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-bookmark">
                        {" "}
                      </use>
                    </svg>
                    <span>Bookmarks</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/contacts.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-contact"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-contact">
                        {" "}
                      </use>
                    </svg>
                    <span>Contacts</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="task.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-task"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-task">
                        {" "}
                      </use>
                    </svg>
                    <span>Tasks</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/calendar-basic.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-calendar"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-calender"></use>
                    </svg>
                    <span>Calendar</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/social-app.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-social"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-social">
                        {" "}
                      </use>
                    </svg>
                    <span>Social App</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/to-do.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-to-do"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-to-do">
                        {" "}
                      </use>
                    </svg>
                    <span>To-Do</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/search.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-search"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-search">
                        {" "}
                      </use>
                    </svg>
                    <span>Search Result</span>
                  </a>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6>Forms & Table</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-form"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-form">
                        {" "}
                      </use>
                    </svg>
                    <span>Forms</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a className="submenu-title" href="#">
                        Form Controls
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/form-validation.html">
                            Form Validation
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/base-input.html">
                            Base Inputs
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/radio-checkbox-control.html">
                            Checkbox & Radio
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/input-group.html">
                            Input Groups
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="https://admin.pixelstrap.com/cuba/template/input-mask.html">
                            Input Mask
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/megaoptions.html">
                            Mega Options
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="submenu-title" href="#">
                        Form Widgets
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/datepicker.html">
                            Datepicker
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/touchspin.html">
                            Touchspin
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/select2.html">
                            Select2
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/switch.html">
                            Switch
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/typeahead.html">
                            Typeahead
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/clipboard.html">
                            Clipboard
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="submenu-title" href="#">
                        Form layout
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/form-wizard.html">
                            Form Wizard 1
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/form-wizard-two.html">
                            Form Wizard 2
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/two-factor.html">
                            Two Factor
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-table"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-table"></use>
                    </svg>
                    <span>Tables</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a className="submenu-title" href="#">
                        Bootstrap Tables
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/bootstrap-basic-table.html">
                            Basic Tables
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/table-components.html">
                            Table components
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="submenu-title" href="#">
                        Data Tables
                        <span className="sub-arrow">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </a>
                      <ul className="nav-sub-childmenu submenu-content">
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/datatable-basic-init.html">
                            Basic Init
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="https://admin.pixelstrap.com/cuba/template/datatable-advance.html">
                            Advance Init{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/datatable-API.html">
                            API
                          </a>
                        </li>
                        <li>
                          <a href="https://admin.pixelstrap.com/cuba/template/datatable-data-source.html">
                            Data Sources
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/datatable-ext-autofill.html">
                        Ex. Data Tables
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/jsgrid-table.html">
                        Js Grid Table{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6>Components</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-ui-kits"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-ui-kits"></use>
                    </svg>
                    <span>Ui Kits</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/typography.html">
                        Typography
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/avatars.html">
                        Avatars
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/helper-classes.html">
                        helper classes
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/grid.html">
                        Grid
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tag-pills.html">
                        Tag & pills
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/progress-bar.html">
                        Progress
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/modal.html">
                        Modal
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/alert.html">
                        Alert
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/popover.html">
                        Popover
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tooltip.html">
                        Tooltip
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dropdown.html">
                        Dropdown
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/according.html">
                        Accordion
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tab-bootstrap.html">
                        Tabs
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/list.html">
                        Lists
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-bonus-kit"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-bonus-kit"></use>
                    </svg>
                    <span>Bonus Ui</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/scrollable.html">
                        Scrollable
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tree.html">
                        Tree view
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/toasts.html">
                        Toasts
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/rating.html">
                        Rating
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dropzone.html">
                        dropzone
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tour.html">
                        Tour
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/sweet-alert2.html">
                        SweetAlert2
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/modal-animated.html">
                        Animated Modal
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/owl-carousel.html">
                        Owl Carousel
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/ribbons.html">
                        Ribbons
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/pagination.html">
                        Pagination
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/breadcrumb.html">
                        Breadcrumb
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/range-slider.html">
                        Range Slider
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/image-cropper.html">
                        Image cropper
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/basic-card.html">
                        Basic Card
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/creative-card.html">
                        Creative Card
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/dragable-card.html">
                        Draggable Card
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/timeline-v-1.html">
                        Timeline{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-animation"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-animation"></use>
                    </svg>
                    <span>Animation</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/animate.html">
                        Animate
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/scroll-reval.html">
                        Scroll Reveal
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/AOS.html">
                        AOS animation
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/tilt.html">
                        Tilt Animation
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/wow.html">
                        Wow Animation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-icons"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-icons"></use>
                    </svg>
                    <span>Icons</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/flag-icon.html">
                        Flag icon
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/font-awesome.html">
                        Fontawesome Icon
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/ico-icon.html">
                        Ico Icon
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/themify-icon.html">
                        Themify Icon
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/feather-icon.html">
                        Feather icon
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/whether-icon.html">
                        Whether Icon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-button"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-botton"></use>
                    </svg>
                    <span>Buttons</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/buttons.html">
                        Default Style
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/buttons-flat.html">
                        Flat Style
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/buttons-edge.html">
                        Edge Style
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/raised-button.html">
                        Raised Style
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/button-group.html">
                        Button Group
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-charts"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-charts"></use>
                    </svg>
                    <span>Charts</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/echarts.html">
                        Echarts
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-apex.html">
                        Apex Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-google.html">
                        Google Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-sparkline.html">
                        Sparkline chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-flot.html">
                        Flot Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-knob.html">
                        Knob Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-morris.html">
                        Morris Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chartjs.html">
                        Chatjs Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chartist.html">
                        Chartist Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/chart-peity.html">
                        Peity Chart
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6>Pages</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/landing-page.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-landing-page"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-landing-page"></use>
                    </svg>
                    <span>Landing page</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/sample-page.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-sample-page"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-sample-page"></use>
                    </svg>
                    <span>Sample page</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/internationalization.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-internationalization"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-internationalization"></use>
                    </svg>
                    <span>Internationalization</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/starter-kit/index.html"
                    target="_blank"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-starter-kit"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-starter-kit"></use>
                    </svg>
                    <span>Starter kit</span>
                  </a>
                </li>
                <li className="mega-menu sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-others"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-others"></use>
                    </svg>
                    <span>Others</span>
                  </a>
                  <div className="mega-menu-container menu-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="submenu-title">
                              <h5>Error Page</h5>
                            </div>
                            <ul className="submenu-content opensubmegamenu">
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-400.html">
                                  Error 400
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-401.html">
                                  Error 401
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-403.html">
                                  Error 403
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-404.html">
                                  Error 404
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-500.html">
                                  Error 500
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/error-503.html">
                                  Error 503
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="submenu-title">
                              <h5> Authentication</h5>
                            </div>
                            <ul className="submenu-content opensubmegamenu">
                              <li>
                                <a href="login.html" target="_blank">
                                  Login Simple
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/login_one.html"
                                  target="_blank"
                                >
                                  Login with bg image
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/login_two.html"
                                  target="_blank"
                                >
                                  Login with image two{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/login-bs-validation.html"
                                  target="_blank"
                                >
                                  Login With validation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/login-bs-tt-validation.html"
                                  target="_blank"
                                >
                                  Login with tooltip
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/login-sa-validation.html"
                                  target="_blank"
                                >
                                  Login with sweetalert
                                </a>
                              </li>
                              <li>
                                <a href="sign-up.html" target="_blank">
                                  Register Simple
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/sign-up-one.html"
                                  target="_blank"
                                >
                                  Register with Bg Image{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/sign-up-two.html"
                                  target="_blank"
                                >
                                  Register with image two
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://admin.pixelstrap.com/cuba/template/sign-up-wizard.html"
                                  target="_blank"
                                >
                                  Register wizard
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/unlock.html">
                                  Unlock User
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/forget-password.html">
                                  Forget Password
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/reset-password.html">
                                  Reset Password
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/maintenance.html">
                                  Maintenance
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="submenu-title">
                              <h5>Coming Soon</h5>
                            </div>
                            <ul className="submenu-content opensubmegamenu">
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/comingsoon.html">
                                  Coming Simple
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/comingsoon-bg-video.html">
                                  Coming with Bg video
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/comingsoon-bg-img.html">
                                  Coming with Bg Image
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="submenu-title">
                              <h5>Email templates</h5>
                            </div>
                            <ul className="submenu-content opensubmegamenu">
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/basic-template.html">
                                  Basic Email
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/email-header.html">
                                  Basic With Header
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/template-email.html">
                                  Ecomerce Template
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/template-email-2.html">
                                  Email Template 2
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/ecommerce-templates.html">
                                  Ecommerce Email
                                </a>
                              </li>
                              <li>
                                <a href="https://admin.pixelstrap.com/cuba/template/email-order-success.html">
                                  Order Success
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6>Miscellaneous</h6>
                  </div>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-gallery"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-gallery"></use>
                    </svg>
                    <span>Gallery</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/gallery.html">
                        Gallery Grid
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/gallery-with-description.html">
                        Gallery Grid Desc
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/gallery-masonry.html">
                        Masonry Gallery
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/masonry-gallery-with-disc.html">
                        Masonry with Desc
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/gallery-hover.html">
                        Hover Effects
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-blog"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-blog"></use>
                    </svg>
                    <span>Blog</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/blog.html">
                        Blog Details
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/blog-single.html">
                        Blog Single
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/add-post.html">
                        Add Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/faq.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-faq"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-faq"></use>
                    </svg>
                    <span>FAQ</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-job-search"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-job-search"></use>
                    </svg>
                    <span>Job Search</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/job-cards-view.html">
                        Cards view
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/job-list-view.html">
                        List View
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/job-details.html">
                        Job Details
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/job-apply.html">
                        Apply
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-learning"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-learning"></use>
                    </svg>
                    <span>Learning</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/learning-list-view.html">
                        Learning List
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/learning-detailed.html">
                        Detailed Course
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-maps"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-maps"></use>
                    </svg>
                    <span>Maps</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/map-js.html">
                        Maps JS
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/vector-map.html">
                        Vector Maps
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a className="sidebar-link sidebar-title" href="#">
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-editors"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-editors"></use>
                    </svg>
                    <span>Editors</span>
                  </a>
                  <ul className="sidebar-submenu">
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/quilleditor.html">
                        Quill editor
                      </a>
                    </li>
                    <li>
                      <a href="https://admin.pixelstrap.com/cuba/template/ace-code-editor.html">
                        ACE code editor{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/knowledgebase.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-knowledgebase"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-knowledgebase"></use>
                    </svg>
                    <span>Knowledgebase</span>
                  </a>
                </li>
                <li className="sidebar-list">
                  <i className="fa fa-thumb-tack"></i>
                  <a
                    className="sidebar-link sidebar-title link-nav"
                    href="https://admin.pixelstrap.com/cuba/template/support-ticket.html"
                  >
                    <svg className="stroke-icon">
                      <use href="../assets/svg/icon-sprite.svg#stroke-support-tickets"></use>
                    </svg>
                    <svg className="fill-icon">
                      <use href="../assets/svg/icon-sprite.svg#fill-support-tickets"></use>
                    </svg>
                    <span>Support Ticket</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-arrow" id="right-arrow">
              <i data-feather="arrow-right"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
