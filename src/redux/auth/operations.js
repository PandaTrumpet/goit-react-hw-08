import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", user);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", user);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    axios.defaults.headers.common["Authorization"] = "";
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
