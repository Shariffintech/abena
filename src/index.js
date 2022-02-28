import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({ reducer: rootReducer });

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
reportWebVitals();

// const Root = ({ store }) => (

//   <Provider store={store}>
//     <Router>
//       <Route path="/" component={App}/>
//       <Route path="/students" component={Student}/>
//       <Route path="/Strategy" component={Strategy}/>
//     </Router>
//   </Provider>
// );

// Root.propTypes = {
//   store: PropTypes.object
// }

// export default Root;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
