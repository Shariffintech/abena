import React, { useEffect, useRef , useState } from "react";
import Strategy from "./strategy";
import { useSelector, useDispatch } from "react-redux";
import { getStrategies } from "./strategySlice.js";
import { motion } from "framer-motion";
import "bulma/css/bulma.min.css";

const Strategies = () => {
  // // pull strategies from the backend api
  // const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const carousel = useRef();
  const dispatch = useDispatch();
  const strategy = useSelector((state) => state.strategy.strategies);

  useEffect(() => {
    dispatch(getStrategies());
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    // setWidth(carousel.current.scrollWidth+carousel.current.offsetWidth+1000);
  }, [dispatch]);

  return (
    <motion.div className="columns carousel">
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 2000 }}
        ref={carousel}
        className="inner-carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="strategies-container">
          <div className="columns ">
            {strategy.map((strategy) => {
              return (
                <motion.div className="item">
                  <Strategy
                    key={strategy.id}
                    name={strategy.name}
                    description={strategy.description}
                    reference={strategy.reference}
                    category={strategy.category}
                    tier={strategy.tier}
                    count={count}
                  />

                  <input
                    type="integer"
                    placeholder="Add a count value"
                    onChange={(e) => setCount(e.target.value)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Strategies;
