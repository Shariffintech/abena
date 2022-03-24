import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import {api} from '../services/api';

const initialState = {
    strategies: [],
    loading: false,
};

export const getStrategies = createAsyncThunk(
  "strategies/getStrategies",
  async (thunkAPI) => {
      try {
        return fetch(`http://localhost:3001/api/v1/strategies`)
          .then((res) => res.json());
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
  }
);

export const addStrategy = createAsyncThunk(
  "strategies/addStrategy",
  async (thunkAPI) => {
    try {
      return await axios
        .post(`http://localhost:3000/api/v1/strategies`)
        .then((res) => res.json());
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchStrategyByStatus = createAsyncThunk(
  'strategies/fetchStrategyByStatus',
  async () => {
    return await fetch(`http://localhost:3000/api/v1/strategies/status/${status}`).then((res) =>
      res.json()
    );
  }
)

// add default status to each strategy "not reviewed"

const strategySlice = createSlice({
  name: "strategies",
  initialState: { strategies: [], status: null },
  reducers: {
    addName: (state, action) => {
      return { ...state, addTitle: [...action.payload] };
    },
    addCategory: (state, action) => {
      return { ...state, addCategory: [...action.payload] };
    },
    addTier: (state, action) => {
      return { ...state, addTier: [...action.payload] };
    },
    addReference: (state, action) => {
      return { ...state, addReference: [...action.payload] };
    },
    addDescription: (state, action) => {
      return { ...state, addDescription: [...action.payload] };
    },
  },
  extraReducers: {
    [getStrategies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getStrategies.fulfilled]: (state, action) => {
      state.strategies = action.payload;
      state.status = "succeeded";
    },
    [getStrategies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { addName, addDescription, addReference, addCategory, addTier } =
  strategySlice.actions;

export default strategySlice.reducer;
