import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  loginCheck: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.loginCheck = true;
    },
    logout(state, action) {
      state.loginCheck = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
