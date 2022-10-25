import axios from "axios";
import { authFailure, authStart, authSuccess } from "./MainAction";

export const auth = async (data, dispatch) => {
  dispatch(authStart());
  return await new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/auth/login", data)
      .then((response) => {
        dispatch(authSuccess(response.data));
        resolve(response);
      })
      .catch((error) => {
        dispatch(authFailure());
        reject(error);
      });
  });
};
