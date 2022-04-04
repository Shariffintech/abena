import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStrategies = createAsyncThunk(
  "strategies/getStrategies",
  async (thunkAPI) => {
    try {
      const res = await fetch("/api/v1/strategies");
      const strategies = await res.json();

      return strategies;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addStrategy = createAsyncThunk(
  "strategies/addStrategy",
  async (strategyData, thunkAPI) => {
    try {
      const res = await fetch("/api/v1/strategies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(strategyData),
      });
      const strategy = await res.json();
      return strategy;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// add default status to each strategy "not reviewed"

const strategySlice = createSlice({
  name: "strategies",
  initialState: {
    strategies: [],
    status: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getStrategies.fulfilled, (state, action) => {
        state.strategies = action.payload;
        state.status = "success";
      })
      .addCase(getStrategies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStrategies.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addStrategy.fulfilled, (state, action) => {
        state.strategies.push(action.payload);
        state.status = "success";
      });

    // [getStrategies.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [getStrategies.fulfilled]: (state, action) => {
    //   state.strategies = action.payload;
    //   state.status = "success";

    // },
    // [getStrategies.rejected]: (state) => {
    //   state.status = "failed";
    // },
  },
});

// export const selectStrategies = ({strategies}) => strategies

export default strategySlice.reducer;
