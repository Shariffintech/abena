import React, { useEffect, useState, useRef } from "react";
import Strategy from "./strategy";
import { useSelector, useDispatch } from "react-redux";
import { getStrategies } from "./strategySlice.js";
import {motion, useAnimation} from 'framer-motion';



import "bulma/css/bulma.min.css";


const Strategies = () => {
  // // pull strategies from the backend api
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const dispatch = useDispatch();
  const strategy = useSelector((state) => state.strategy.strategies);

  useEffect(() => {
    dispatch(getStrategies());
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth+carousel.current.offsetWidth+1000);
  }, [dispatch]);



  
  return (
 
    <motion.div
      className="columns carousel"
    >
    <motion.div drag="x" dragConstraints={{ left: -1000, right: 1000 }}  ref={carousel} className="inner-carousel" whileTap={{cursor:"grabbing"}}>
        <div className="strategies-container">
          <div className="columns ">
            {strategy.map((strategy) => {
              <motion.div
              className="card"
           
           
              />
              return (
              <motion.div className="item">
                <Strategy
                  key={strategy.id}
                  name={strategy.name}
                  description={strategy.description}
                  reference={strategy.reference}
                  category={strategy.category}
                  tier={strategy.tier}
                />
              </motion.div>
            )
})}
          </div>
        </div>
      </motion.div>
    </motion.div>

  );
};

export default Strategies;
