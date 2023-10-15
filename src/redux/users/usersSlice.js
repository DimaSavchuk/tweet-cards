import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './constants';
import { getUsers } from './usersOperations';

const initialState = {
  users: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, handleFulfilled)
      .addCase(getUsers.rejected, handleRejected);
  },
});

export default usersSlice.reducer;
