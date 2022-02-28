import React,  {Component} from "react";

export default class Strategy extends Component {


    constructor(props){
    super(props)
        this.state = {
            strategy: [],
        }  
    }


    // todo add counter button for did you learn something new on landing page with animation

    // to do add drag able strategy cards to page via react spring

    render(){
        return(
            <div>
            <button onClick={this.state}>

        
            </button>
                
            </div>
        )
    }

}

Strategy.defaultProps = {
    name: null,
    reference: null,
    description: null,
    tier: 1,
    category: 'Academic'
}