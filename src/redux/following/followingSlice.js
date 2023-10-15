import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const followingStatusSlice = createSlice({
  name: "followingStatus",
  initialState,
  reducers: {
    changeFollowingStatus(state, action) {
      const { userId, isFollowing } = action.payload;
      state[userId] = isFollowing;
    },
  },
});

export const { changeFollowingStatus } = followingStatusSlice.actions;

export default followingStatusSlice.reducer;
