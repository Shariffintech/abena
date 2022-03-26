import React, { useEffect } from "react";
import Strategy from "./strategy";
import { useSelector, useDispatch } from "react-redux";
import { getStrategies } from "./strategySlice.js";
import "bulma/css/bulma.min.css";

const Strategies = () => {
  
  // // pull strategies from the backend api

  const dispatch = useDispatch();
  const strategy = useSelector((state) => state.strategy.strategies);

  useEffect(() => {
   dispatch(getStrategies());
  }, [dispatch])

  console.log(strategy);

  return (
    <div className="strategies-container">
      <div className="columns">
        {strategy.map((strategy) => (
          <Strategy key={strategy.id} strategy={strategy} />
        ))}
      </div>
    </div>
  );
};

export default Strategies;
