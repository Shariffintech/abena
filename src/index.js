import React from "react";
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import rootReducer from './app/reducer';
// import thunk from 'redux-thunk';

// const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

ReactDOM.render(
  
    <Router>
        <App />,
    </Router>,
      
  document.getElementById("root")
);
reportWebVitals(console.log);

