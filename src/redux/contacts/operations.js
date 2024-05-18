import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { setAuthTok } from "../auth/operations";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// const setAuthTok = (token) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.token}`;
      // setAuthTok(response.data.token);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.token}`;
      // console.log(response.data.token);
      // setAuthTok(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.token}`;
      // setAuthTok(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
