// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   students: [],
//   loading: false,
// };

// export const getStudents = createAsyncThunk(
//   "students/getStudents",
//   async (thunkAPI) => {
//     try {
//       return fetch(`/api/v1/classrooms/${classroom.id}/students/${student.id}`).then((res) =>
//         res.json()
//       );
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

// export const addStudent = createAsyncThunk(
//   "students/addStudent",
//   async (thunkAPI) => {
//     try {
//       return await fetch(`/api/v1/classrooms/${classroom.id}/students`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(student),
//       }).then((res) => {
//         res.json().then((student) => thunkAPI.dispatch(addStudent(student)));
//       });
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

// export const studentSlice = createSlice({
//   name: "students",
//   initialState: {
//     students: [],
//   },
//   reducers: {
//     setStudents: (state, action) => {
//       return { ...state, students: [...action.payload] };
//     },
//   },
// });

// export const { setStudents } = studentSlice.actions;

// export default studentSlice.reducer;
