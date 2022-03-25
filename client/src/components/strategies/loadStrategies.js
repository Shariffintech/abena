import React, { useEffect } from "react";
import Strategy from "./strategy";
import { useSelector, useDispatch } from "react-redux";
import { getStrategies } from "./strategySlice.js";
import "bulma/css/bulma.min.css";

const Strategies = () => {


  // pull strategies from the backend api

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStrategies())
  }, [dispatch])

  const strategies = useSelector(getStrategies);

  console.log(strategies)
  return (
    <div className="columns">
      <div className="column ">
        <h1 className="title">Strategies</h1>
        <Strategy />
      </div>
    </div>

  );
}


export default Strategies;