export const authStart = () => ({
  type: "AUTH_STRAT",
});

export const authSuccess = (data) => ({
  payload: data,
  type: "AUTH_SUCCESS",
});

export const authFailure = () => ({
  type: "AUTH_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const registerStart = () => ({
  type: "REGISTER_START",
});

export const registerSuccess = () => ({
  type: "REGISTER_SUCCESS",
});

export const registerFailure = () => ({
  type: "REGISTER_FAILURE",
});

export const settingsStart = () => ({
  type: "SETTINGS_START",
});

export const settingsSuccess = () => ({
  type: "SETTINGS_SUCCESS",
});

export const settingsFailure = () => ({
  type: "SETTINGS_FAILURE",
});

export const getSettingsStart = () => ({
  type: "GET_SETTINGS_START",
});

export const getSettingsSuccess = () => ({
  type: "GET_SETTINGS_SUCCESS",
});

export const getSettingsFailure = () => ({
  type: "GET_SETTINGS_FAILURE",
});
