import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./services/store";
import { Provider } from "react-redux";
// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import rootReducer from './app/reducer';
// import thunk from 'redux-thunk';

// const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
console.log("index.css");
ReactDOM.render(
  <Provider store={store}>
  
    <Router>
        <App />
    </Router>

  </Provider>,
      
  document.getElementById("root")
);
reportWebVitals(console.log);

