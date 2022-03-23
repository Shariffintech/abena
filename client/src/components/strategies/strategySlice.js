import { createSlice } from "redux-toolkit";

export const strategySlice = createSlice({
  name: "strategies",
  initialState: {
    strategies: [],
  },
  reducers: {
    setStrategyPerCategory: (state, action) => {
      return { ...state, strategyPerCategory: [...action.payload] };
    },
    setStrategyPerStatus: (state, action) => {
      return { ...state, strategyPerStatus: [...action.payload] };
    },
    setStrategyPerTier: (state, action) => {
      return { ...state, strategyPerTier: [...action.payload] };
    },
    setStrategyPerReference: (state, action) => {
      return { ...state, strategyPerReference: [...action.payload] };
    },
    setStrategyPerStudent: (state, action) => {
      return { ...state, strategyPerStudent: [...action.payload] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStrategyByStatus.fulfilled, (state, action) => {
      state.strategies.push(action.payload);
    });
  },
});

export const { setStrategyPerCategory } = strategySlice.actions;

export default strategySlice.reducer;
