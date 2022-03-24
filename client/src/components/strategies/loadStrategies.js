import React from "react";
import "bulma/css/bulma.min.css";
import Strategy from "./strategy";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
// import { getStrategies } from "../../actions/actions";

export default function Strategies() {

  const {strategies, isLoading} = useSelector(state => state.strategy);
  // to do show strategies as animated carousels with framer


// pull strategies from the backend api

  // useEffect(() => {
  //   const fetchStrategies = async () => {
  //     const response = await getStrategies()
  //       .then((response) => {
  //         setStrategies(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // }, []);


  // const props = [
  //   {
  //     id: 1,
  //     name: "Strategy 1",
  //     description: "Description 1",
  //     reference: "Reference 1",
  //     status: "Not Reviewed",
  //     tier: "1",
  //     category: "Category 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Strategy 2",
  //     description: "Description 2",
  //     reference: "Reference 2",
  //     status: "Not Reviewed",
  //     tier: "2",
  //     category: "Category 2",
  //   },

  //   {
  //     id: 3,
  //     name: "Strategy 3",
  //     description: "Description 3",
  //     status: "Not Reviewed",
  //     tier: "3",
  //     category: "Category 3",
  //   }
  // ];

  
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
