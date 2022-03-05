import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createStrategy, updateStrategy } from '../../actions/actions';

import {useForm} from 'react-hook-form';
// bulma for styling

export default function strategyForm() {

    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const onSubmit = data => console.log(data);
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

// class strategiesForm extends Component {
//   state = {
//     name: this.props.name ? this.props.name : ""
//   }

//   handleChange = e => {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     if(this.props.id){
//       // dispatch an action to edit Strategy
//       this.props.updateStrategy({...this.state, id: this.props.id})
//       this.props.toggleEdit()
//     } else {
//       this.props.createStrategy(this.state)
//     }
    
//     this.setState({name: ""})
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type="text" 
//           placeholder='name' 
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//         <input type="submit" value={this.props.id ? "Edit" : "Create"} />
//       </form>
//     )
//   }
// }

// export default connect(null, { createStrategy, updateStrategy })(strategiesForm);