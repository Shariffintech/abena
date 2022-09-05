import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (thunkAPI) => {
    try {
      const res = await fetch("/api/v1/categories");
      const categories = await res.json();

      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (categoryData, thunkAPI) => {
    try {
      const res = await fetch("/api/v1/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      const category = await res.json();
      return category;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "success";
      })
      .addCase(getCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
        state.status = "success";
      });

  
  },
});



export default categorySlice.reducer;
