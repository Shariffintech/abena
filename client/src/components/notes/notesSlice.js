import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
    },
    reducers: {
        addNotes: (state,{payload}) => {
            state.notes.push(payload);
        },
        deleteNotes: (state,{payload}) => {
            state.notes.splice(payload,1);
        },
        updateNotes: (state,{payload}) => {
            state.notes[payload.index] = payload.note;
        },
        deleteProp(state,{payload}) {
            delete state[payload.prop];
        }

    },
})


export const {addNotes,deleteNotes,updateNotes,deleteProp} = notesSlice.actions;

export const setNotes = (notes) => ({ notes: notes });

export default notesSlice.reducer;
