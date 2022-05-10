import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ClusteredContext } from "./Context/ClustredContext/ClustredContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ClusteredContext>
        <App />
      </ClusteredContext>
    </Router>
  </React.StrictMode>
);
