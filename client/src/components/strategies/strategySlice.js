import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    strategies: [],
    loading: false,
};

export const getStrategies = createAsyncThunk('strategies/getStrategies', async () => {
    try {
        return fetch('http://127.0.0.1:3000/api/v1/strategies').then((res) => 
        res.json()
         )
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
  });

export const addStrategy = createAsyncThunk(
  "strategies/addStrategy",
  async (thunkAPI) => {
    try {
      return await fetch(`http://localhost:3001/api/v1/strategies`),{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
        .then((res) => res.json());
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// add default status to each strategy "not reviewed"

const strategySlice = createSlice({
  name: 'strategies',
  initialState: { 
    strategies: [], 
    status: null 
  },
  reducers: {
    getAll: (state, action) => {
      return { ...state, strategies: [...action.payload] };
    }
  },
  extraReducers: {
    [getStrategies.pending]: (state) => {
      state.status = "loading";
    },
    [getStrategies.fulfilled]: (state, action) => {
      state.strategies = action.payload;
      state.status = "succeess";
    },
    [getStrategies.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { getAll } = strategySlice.actions;

const selectStrategies = (state) => state.strategies.strategies;

export default strategySlice.reducer;
