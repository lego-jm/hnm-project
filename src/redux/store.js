import { configureStore } from "@reduxjs/toolkit";
import loginCheckReducer from "./reducer/loginReducers";
import reducer from "./reducer/productReducers";

const store = configureStore({
  reducer: {
    login: loginCheckReducer,
    product: reducer,
  },
});

export default store;
