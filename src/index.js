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
