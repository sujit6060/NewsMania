import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("news/getnews", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=e6c6c106a5724f68b06c2398e87bdc2c"
  );
  return response.data.articles;
});
