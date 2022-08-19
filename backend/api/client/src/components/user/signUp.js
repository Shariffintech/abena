// import React from "react";
// import { Link } from "react-router-dom";
// import "bulma/css/bulma.min.css";
// import { Navbar } from "react-bulma-components";

// const Signup = () => {
//   const [customerSignUp, setCustomerSignUp] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     passwordConfirmation: "",
//     phone: "",
//     school_name: "",
//     school_address: "",
//     school_city: "",
//     school_state: "",
//     school_zip: "",
//     school_phone: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCustomerSignUp({ ...customerSignUp, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(customerSignUp);
//   };

//   return (
//     <div className="container">
//       <div className="columns">
//         <div className="column is-half is-offset-one-quarter">
//           <div className="card">
//             <div className="card-content">
//               <div className="media">
//                 <div className="media-content">
//                   <p className="title is-4">Sign up</p>
//                 </div>
//               </div>
//               <div className="content">
//                 <form onSubmit={handleSubmit}>
//                   <div className="field">
//                     <label className="label">First Name</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="firstName"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Last Name</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="lastName"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Email</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="email"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Password</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="password"
//                         name="password"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Confirm Password</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="password"
//                         name="passwordConfirmation"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Phone</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="phone"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School Name</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_name"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School Address</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_address"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School City</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_city"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School State</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_state"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School Zip</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_zip"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">School Phone</label>
//                     <div className="control">
//                       <input
//                         className="input"
//                         type="text"
//                         name="school_phone"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <div className="control">
//                       <button className="button is-primary">Submit</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
