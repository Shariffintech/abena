import React, { useState } from "react";

export default function Strategy() {
  const [count, setCount] = useState(0);

  // if they are changing at the same time make the seperate
  // use memo research

  // to do refactor to a function component, add state using hooks
  // to do add a button to delete the strategy
  // to do add a button to edit the strategy
  // to do add a button to add a new strategy
  // to do use bulma for carousels

  // add ability to search for strategy by tier, category

  // add toggle to turn on strategy and turn off strategy (use state)
  // when strategy is turned on it is applied to the student

  // to do add drag able strategy cards to page via react

  // handleClick = () => {};

  // toggleStrategy = () => {};

  console.log("this renders")
  return (
    <div className="strategyCard">
      
      <h3>{this.props.name}</h3>
      <p>{this.props.tier}</p>
      <p>{this.props.category}</p>
      <p>{this.props.description}</p>
      <p>{this.props.reference}</p>

      {/* todo add counter button for did you learn something new on landing page with animation */}
      <p>{this.state.likes}</p>
      <span role="img">
      <button
        onClick={() => setCount(count + 1)}
        className="like-btn btn-primary"
      ><span role="img" aria-label="heart">
        ❤️
        </span>
      </button>
      </span>
    </div>
  );
}

Strategy.defaultProps = {
  name: null,
  reference: null,
  description: null,
  tier: 1,
  category: "Academic",
};
