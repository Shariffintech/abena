import {createSlice} from 'redux-toolkit';

export const strategySlice = createSlice({
    name: 'strategies',
    initialState:{
        xxxx: [],
    },
    reducers:{
        setStrategyPerCategory:(state, action) => {
            return {...state, strategyPerCategory: [...action.payload]};
        }
    }
});

export const {setStrategyPerCategory} = strategySlice.actions;

export default strategySlice.reducer;