import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    wishlist: [],
  },
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateUserWishList: (state, action) => {
      state.user.wishlist = action.payload.user;
    },
  },
});

export const { login, logout, updateUserWishList } = userSlice.actions;
export default userSlice.reducer;
