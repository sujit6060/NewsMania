import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("news/getnews", async () => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=zwPWSlMYX5hmqNvBIFVFZkpwd1l9KTWQ"
  );
  return response.data.results;
});
