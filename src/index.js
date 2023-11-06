import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/plugins/nucleo/css/nucleo.css";
// import "./assets/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";
import "./assets/css/all.min.css";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
