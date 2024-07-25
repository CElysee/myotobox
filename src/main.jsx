import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./frontend/App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/Store.js";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// const APP = (
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(APP, rootElement);
// } else {
//   render(APP, rootElement);
// }
