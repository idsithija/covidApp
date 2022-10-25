const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_STRAT":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
