import React from "react";
import "bulma/css/bulma.min.css";
import Strategy from "./strategy";
import {useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import{ getStrategies } from "./strategySlice.js";


export default function Strategies() {

  const {strategies} = useSelector(state => state.strategy);

  // to do show strategies as animated carousels with framer
  // to do: add counter button for did you learn something new on landing page with animation
  // to do: when strategy is turned on it is applied to the student

// pull strategies from the backend api
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStrategies());
  }, []);


  
  return (
    <section>
      {strategies.map((props) => (
        <Strategy
          name={props.name}
          description={props.description}
          tier={props.tier}
          category={props.category}
          reference={props.reference}
          createdAt={props.createdAt}
          status={props.status}
          id={props.id}
        />
      ))}
    </section>
  );
}
