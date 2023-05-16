// import React from "react";


// export const api = {
//   getStrategies: async (thunkAPI) => {
//     try {
//       return fetch(`/api/v1/strategies`)
//         .then((res) => res.json())
//         .then((data) => {
//           thunkAPI.dispatch(addStrategies(data));
//         });
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   },

//   post: async (thunkAPI) => {
//     try {
//       return await fetch(`/api/v1/strategies`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(strategy),
//       }).then((res) => {
//         res.json().then((strategy) => thunkAPI.dispatch(addStrategy(strategy)));
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   },
// };
