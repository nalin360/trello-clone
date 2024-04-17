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
    deleteList: (state, action) => {
      console.log("called", state)
      const itemIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.list.splice(itemIndex, 1)
      }
      //   const filteredList = state.list.filter((list) => {
      //     return list.id !== action.payload;
      //   });
      //   state.list = filteredList;
    },
    deleteChildList: (state, action) => {
      const { id, parentId } = action.payload
      const itemIndex = state.list.findIndex(
        (item) => item.id === parentId
      );
      if (itemIndex !== -1) {
        const childItemIndex = state.list[itemIndex].children.findIndex(
          (item) => item.id === id
        );
        if (childItemIndex !== -1) {
          state.list[itemIndex].children.splice(childItemIndex, 1)
        }
      }

    }
  },
});

export const {
  loginSuccess,
  logout,
  addList,
  addCard,
  deleteChildList,
  deleteList } = userSlice.actions;

export default userSlice.reducer;
