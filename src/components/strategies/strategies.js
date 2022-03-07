import React, { useState, useEffect } from "react";
import Strategy from './strategyCard';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import {Navbar} from 'react-bulma-components';

export default function Strategies(props) {


// set up a sort function for strategies by tier and category

const sortByTier = () => {
  if (this.tier < this.tier) {
    return -1;
  }
  if (this.tier > this.tier) {
    return 1;
  }
  return 0;
}

const sortByCategory = () => {
    if (this.category < this.category) {
        return -1;
    }
    if (this.category > this.category) {
        return 1;
    }
    return 0;
}




// to do add a button to edit the strategy
// to do add a button to add a new strategy, route to strategy form

// show strategies as carousels

    

    return (
        <div className="strategy-container">

        
            <h1>Strategies</h1>

            
            <Strategy
                name={props.name}
                reference={props.reference}
                description={props.description}
                tier={props.tier}
                category={props.category}
                strategy={props.id}
            />
        </div>
    )
}