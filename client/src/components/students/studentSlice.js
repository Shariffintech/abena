import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
    },
    reducers: {
        setStudents: (state, action) => {
            return { ...state, students: [...action.payload] };
        }
    }
});


export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;