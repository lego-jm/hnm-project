const initialState = {
  id: "",
  password: "",
  loginCheck: false,
};

function loginCheckReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        loginCheck: true,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loginCheck: false,
      };

    default:
      return { ...state };
  }
}

export default loginCheckReducer;
