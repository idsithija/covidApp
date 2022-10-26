import axios from "axios";
import {
  authFailure,
  authStart,
  authSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  settingsFailure,
  settingsStart,
  settingsSuccess,
} from "./MainAction";

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

export const register = async (data, dispatch) => {
  dispatch(registerStart());
  return await new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/auth", data)
      .then((response) => {
        dispatch(registerSuccess(response.data));
        resolve(response);
      })
      .catch((error) => {
        dispatch(registerFailure());
        reject(error);
      });
  });
};

export const settings = async (data, dispatch) => {
  dispatch(settingsStart());
  return await new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3001/api/user/settings", data)
      .then((response) => {
        dispatch(settingsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(settingsFailure(error));
        reject(error);
      });
  });
};
