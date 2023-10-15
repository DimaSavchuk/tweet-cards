import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './usersOperations';
import { handleFulfilled, handlePending, handleRejected } from './constants';

const initialState = {
  users: [],
  isLoading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, handlePending)
      .addCase(getAllUsers.fulfilled, handleFulfilled)
      .addCase(getAllUsers.rejected, handleRejected);
  },
});

export default usersSlice.reducer;
