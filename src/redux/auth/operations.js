import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const setAuthTok = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", user);
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.token}`;
      // console.log(response.data);
      setAuthTok(response.data.token);
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
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${response.data.token}`;
    // console.log(response.data);
    setAuthTok(response.data.token);
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
    return thunkAPI.rejectWithValue(error.message);
  }
});
<<<<<<< Updated upstream
export const refreshUser = createAsyncThunk("auth/refresh",
  async (_,thunkAPI) => {
    const authToken = thunkAPI.getState()
    const savedToken = authToken.auth.token
    setAuthTok(savedToken)
    const response = await axios.get("/users/current")
    return response.data
  }, {
    condition(_,thunkAPI) {
      const authToken = thunkAPI.getState()
      const savedToken = authToken.auth.token
      return savedToken !== null
    }
  }
)
=======

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxStetae = thunkAPI.getState();
    const savedToken = reduxStetae.auth.token;
    setAuthTok(savedToken);
    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxStetae = thunkAPI.getState();
      const savedToken = reduxStetae.auth.token;

      return savedToken !== null;
    },
  }
);
>>>>>>> Stashed changes
