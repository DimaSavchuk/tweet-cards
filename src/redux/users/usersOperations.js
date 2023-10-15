import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_ENDPOINT, BASE_URL } from '../../helpers/const';

axios.defaults.baseURL = BASE_URL;

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_ENDPOINT);

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
