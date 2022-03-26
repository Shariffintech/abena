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

  return (
    <div className="strategies-container">
      <div className="columns">
        {strategy.map((strategy) => (
          <Strategy 
          key={strategy.id} 
          name={strategy.name}
          description={strategy.description}
          reference={strategy.reference}
          category={strategy.category}
          tier={strategy.tier}

          />
        ))}
      </div>
    </div>
  );
};

export default Strategies;
