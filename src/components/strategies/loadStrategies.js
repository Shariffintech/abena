import React from "react";
import "bulma/css/bulma.min.css";
import Strategy from "./strategy";
import { getStrategies } from "../../actions/actions";

export default function Strategies(props) {
  // show strategies as carousels with framer

  // to do map all strategies to a strategy card

  const strategies = [
    {
      id: 1,
      name: "Strategy 1",
      description: "Description 1",
      reference: "Reference 1",
      status: "Not Reviewed",
      tier: "1",
      category: "Category 1",
    },
    {
      id: 2,
      name: "Strategy 2",
      description: "Description 2",
      reference: "Reference 2",
      status: "Not Reviewed",
      tier: "2",
      category: "Category 2",
    },

    {
      id: 3,
      name: "Strategy 3",
      description: "Description 3",
      status: "Not Reviewed",
      tier: "3",
      category: "Category 3",
    },
  ];
  return (
    <section>
      {strategies.map((strategy) => (
        <Strategy
          name={strategy.name}
          description={strategy.description}
          tier={strategy.tier}
          category={strategy.category}
          reference={strategy.reference}
          createdAt={strategy.createdAt}
          status={strategy.status}
          id={strategy.id}
        />
      ))}
    </section>
  );
}
