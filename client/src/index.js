import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import rootReducer from './app/reducer';
// import thunk from 'redux-thunk';

// const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
    </React.StrictMode>,
      
  document.getElementById("root")
);
reportWebVitals(console.log);

