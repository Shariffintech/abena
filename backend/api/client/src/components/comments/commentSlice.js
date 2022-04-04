import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (strategies, thunkAPI) => {
    try {
      return fetch(
        `http://localhost:3000/api/v1/strategies/${strategies.id}/comments`
      ).then((res) => res.json());
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (comment, thunkAPI) => {
    try {
      return await fetch(
        `http://localhost:3000/api/v1/strategies/${comment.strategies_id}/comments/${comment.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(comment),
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((comment) => thunkAPI.dispatch(addComment(comment)));
        } else {
          res.json().then((err) => console.error(err));
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComments: (state, { payload }) => {
      state.comments.push(payload);
    },
    deleteComments: (state, { payload }) => {
      state.comments.splice(payload, 1);
    },
    updateComments: (state, { payload }) => {
      state.comments[payload.index] = payload.note;
    },
    deleteProp(state, { payload }) {
      delete state[payload.prop];
    },
  },
});

export const { addComments, deleteComments, updateComments, deleteProp } =
  commentsSlice.actions;

export const setComments = (comments) => ({ comments: comments });

export default commentsSlice.reducer;
