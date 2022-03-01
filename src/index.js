import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from './reducers/reducer'
import thunk from 'redux-thunk';

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);

