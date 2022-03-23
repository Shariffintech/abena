import {createSlice} from '@reduxjs/toolkit';
import {abenaApi} from '../services/api';
import {strategySlice} from '../services/slices/strategySlice';
import {studentSlice} from '../services/slices/studentSlice';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
    },
    reducers: {
        setNotes: (state, action) => {
            return {...state, notes: [...action.payload]};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(strategySlice.actions.setStrategyPerCategory.fulfilled, (state, action) => {
            state.notes.push(action.payload);
        });
    }
})

export const {setNotes} = notesSlice.actions;

export default notesSlice.reducer;
