import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "../thunk";
const initialState = {
  news: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        // Add user to the state array
        state.news.push(action.payload);
      })
      .addCase(getNews.pending, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
