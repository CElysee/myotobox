import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../../Routers/Routers";
import TopMenu from "../components/TopMenu/TopMenu";

function Layout() {
  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <TopMenu />
        <div className="page-body-wrapper">
          <Header />
          <Routers />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;