import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import store from "./store";
import WeatherContainer from "./components/WeatherContainer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
