import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addBetaUser = createAsyncThunk(
  "betaUsers/addBetaUser",
  async (betaUserData, thunkAPI) => {
    try {
      const res = await fetch("/api/v1/betaUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(betaUserData),
      });
      const betaUser = await res.json();
      return betaUser;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const betaUserSlice = createSlice({
  name: "betaUsers",
  initialState: {
    betaUsers: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBetaUser.fulfilled, (state, action) => {
        state.betaUsers.push(action.payload);
        state.status = "success";
      })
      .addCase(addBetaUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addBetaUser.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default betaUserSlice.reducer;
