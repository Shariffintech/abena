import { configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import {abenaApi} from '../services/api';
import { strategySlice } from '../components/strategies/strategySlice';
import { studentSlice } from '../components/students/studentSlice';


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


// Later, dispatch the thunk as needed in the app


export const store = configureStore({
    reducer:{
        strategySlice: strategySlice,
        studentSlice: studentSlice
        
    }
})