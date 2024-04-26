import { createSlice, configureStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    addUsers(state, action) {
      state.users = action.payload;
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});
export const usersActions = usersSlice.actions;

export default store;
