import { createSlice, configureStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    addUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users = [...state.users, action.payload];
    },
    editUser(state, action) {
      state.users = state.users.map((user) =>
        user.id === action.payload.editingUserID ? { ...user, ...action.payload.editedUser } : user
      );
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
