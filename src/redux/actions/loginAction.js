import { loginActions } from "../reducer/loginReducers";

function login(id, password) {
  return (dispatch, getState) => {
    dispatch(loginActions.login({ id, password }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch(loginActions.logout());
  };
}

export const loginCheck = { login };
export const logoutCheck = { logout };
