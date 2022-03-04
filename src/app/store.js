import {configureStore} from '@reduxjs/toolkit';
import { strategySlice } from './strategySlice';

export const store = configureStore({
    reducer:{
        strategySlice: strategySlice
        
    }
})