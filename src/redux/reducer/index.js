import { combineReducers } from "redux";
import loginCheckReducer from "./loginReducers";
import reducer from "./productReducers";

export default combineReducers({
  login: loginCheckReducer,
  product: reducer,
});
