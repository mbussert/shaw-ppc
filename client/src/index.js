import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
