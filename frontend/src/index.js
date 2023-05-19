import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n/config';
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import Main from "./layouts/Main";
import Dashboard from "./containers/Main/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>}>
            <Route path="/" exact element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
