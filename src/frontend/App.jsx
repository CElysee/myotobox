import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Layout from "./layout/Layout";
import Router from "../routers/Routers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Router />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
