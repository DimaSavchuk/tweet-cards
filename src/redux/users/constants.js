export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.users = action.payload;
};

export const handleRejected = (state) => {
  state.isLoading = false;
};
