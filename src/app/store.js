import { createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import {abenaApi} from '../services/api';

import {configureStore} from '@reduxjs/toolkit';
// import { strategySlice } from './strategySlice';

const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id) => {
        const response = await abenaApi.get(`/strategies/${id}`);
        return response.data;
    }
);

const fetchStrategyByStatus = createAsyncThunk(
    'strategy/fetchStrategyByStatus'
)






// export const store = configureStore({
//     reducer:{
//         strategySlice: strategySlice
        
//     }
// })