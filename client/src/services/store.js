import { createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import {abenaApi} from '../services/api';

// import {configureStore} from '@reduxjs/toolkit';
// import { strategySlice } from './strategySlice';

// createAsyncThunk accepts three parameters: a string action type value, a payloadCreator callback, and an options object.
// For example, a type argument of 'users/requestStatus' will generate these action types:

// pending: 'users/requestStatus/pending'
// fulfilled: 'users/requestStatus/fulfilled'
// rejected: 'users/requestStatus/rejected'

const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (id, thunkAPI) => {
        const response = await abenaApi.get(`/users/${id}`);
        return response.data;
    }
);

const fetchStrategyByStatus = createAsyncThunk(
    'strategy/fetchStrategyByStatus', 
    async (status, thunkAPI) => {
        const response = await abenaApi.get(`/strategies/${id}`);
        return response.data;
    }
)

const submitReqStrategy = createAsyncThunk(
    'strategy/submitReqStrategy',
    async(requestStrategy, thunkAPI)=> {
        const response = await abenaApi.post(`/strategies`);
        return response.data;
    }

)

const usersSlice = createSlice({
    name: 'users',
    initialState: {entities:[], loading: 'idle'},
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
          // Add user to the state array
          state.entities.push(action.payload)
        })
      },


})

const strategySlice = createSlice({
    name: 'strategy',
    initialState: {entities: ['not reviewed'], loading:'idle'},
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchStrategyByStatus.fullfilled, (state,action) =>{
            state.entities.push(action.payload)
        })
    }

})



// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123))




// export const store = configureStore({
//     reducer:{
//         strategySlice: strategySlice
        
//     }
// })