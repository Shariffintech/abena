import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import strategyReducer from '../components/strategies/strategySlice';
import studentReducer  from '../components/students/studentSlice';
import notesReducer from '../components/notes/notesSlice';


const rootReducer = combineReducers({
    strategy: strategyReducer,
    student: studentReducer,
    notes: notesReducer,
    
}

);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
})

})

