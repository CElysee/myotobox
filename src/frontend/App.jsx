import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Layout from "./layout/Layout";
import Router from "../routers/Routers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
