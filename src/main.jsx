import React from "react";
import ReactDOM from "react-dom/client";
// import App from './frontend/FrontendApp.jsx'
// import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./frontend/App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
