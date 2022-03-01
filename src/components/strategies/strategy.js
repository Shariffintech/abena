import React, { useState } from "react";

export default function Strategy() {
  const [count, setCount] = useState(0);

  // to do refactor to a function component, add state using hooks
  // to do add a button to delete the strategy
  // to do add a button to edit the strategy
  // to do add a button to add a new strategy

  // to do add drag able strategy cards to page via react
 
    return (
      <div className="strategyCard">
        <h3>{this.props.name}</h3>
        <p>{this.props.tier}</p>
        <p>{this.props.category}</p>
        <p>{this.props.description}</p>
        <p>{this.props.reference}</p>

        {/* todo add counter button for did you learn something new on landing page with animation */}
        <p>{this.state.likes}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="like-btn btn-primary"
        >
          ❤️
        </button>
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
