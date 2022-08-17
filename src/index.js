import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
