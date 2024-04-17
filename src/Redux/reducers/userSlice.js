import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    addList: (state, action) => {
      state.list.push(action.payload);
      console.log("action called", state.list);
    },
    addCard: (state, action) => {
      console.log("action", action, state.list);

      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
            if (item.hasOwnProperty("children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
  },
});

export const { loginSuccess, logout, addList, addCard } = userSlice.actions;

export default userSlice.reducer;
