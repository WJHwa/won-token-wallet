import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-bootstrap/Navbar";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

axios.defaults.withCredentials = true;
reportWebVitals();
