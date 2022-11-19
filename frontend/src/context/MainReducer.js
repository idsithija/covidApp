const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_START":
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
    case "REGISTER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "SETTINGS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "SETTINGS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "SETTINGS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_DISEASE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_DISEASE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_DISEASE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_DISEASE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_DISEASE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_DISEASE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_SUPPORT_STRAT":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_SUPPORT_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_SUPPORT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_SUPPORTS_STRAT":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_SUPPORTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_SUPPORTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_SETTINGS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_SETTINGS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_SETTINGS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_USERS_STRAT":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_USERS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_VACCINE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_VACCINE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_VACCINE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_VACCINE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_VACCINE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_VACCINE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_USER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_LOCATIONS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_LOCATIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_LOCATIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_LOCATION_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_LOCATION_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_LOCATION_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_SUMMARY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_SUMMARY_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_SUMMARY_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_DOCTORS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_DOCTORS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_DOCTORS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_DOCTORS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_DOCTORS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_DOCTORS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_VACCINE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "GET_VACCINE_LIST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "GET_VACCINE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_VACCINE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_VACCINE_LIST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "ADD_VACCINE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_TICKET_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_TICKET_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case "DELETE_TICKET_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
