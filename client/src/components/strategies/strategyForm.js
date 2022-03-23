import React from 'react';
import 'bulma/css/bulma.min.css';
import {useForm} from 'react-hook-form';
import {addStrategy, getStrategies, deleteStrategy, editStrategy} from '../../actions/actions';

export default function strategyForm() {

    const {register, handleSubmit, formState:{errors}} = useForm()

     // add in review, approved, and rejected statuses for each submitted strategy

     useForm({
        defaultValues: {
            status: "not reviewed",
            tier: "1",
            category: "",
            title: "",
            description: "",
            url: "",
            image: "",
            comments: "",
            user_id: "",
            classroom_id: "",
            id: ""
        }
     })

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
// }

    // add in a way to sort by status
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" ref={register} placeholder="Title"/>
            <input type="text" name="tier" ref={register} placeholder="Tier"/>
            <input type="text" name="category" ref={register} placeholder="Category"/>
            <input type="text" name="description" ref={register} placeholder="Description"/>
            <input type="text" name="reference" ref={register} placeholder="Reference"/>
            <input type="text" name="status" ref={register} placeholder="Status"/>
        </form>
    )
}

// export default connect(null, { createStrategy, updateStrategy })(strategiesForm);