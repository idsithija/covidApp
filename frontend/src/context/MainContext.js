import { createContext, useReducer, useEffect } from "react";
import MainReducer from "./MainReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const MainContext = createContext(INITIAL_STATE);

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <MainContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
