import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import  store  from "./redux/redux_store";
import { Provider } from "react-redux";


  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );




reportWebVitals();