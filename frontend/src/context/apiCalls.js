import axios from "axios";
import {
  adddiseaseFailure,
  adddiseaseStart,
  adddiseaseSuccess,
  addDoctorsFailure,
  addDoctorsStart,
  addDoctorsSuccess,
  addLocationFailure,
  addLocationStart,
  addLocationSuccess,
  addSupportFailure,
  addSupportStart,
  addSupportSuccess,
  addVaccineFailure,
  addVaccineListFailure,
  addVaccineListStart,
  addVaccineListSuccess,
  addVaccineStart,
  addVaccineSuccess,
  authFailure,
  authStart,
  authSuccess,
  getDiseasesFailure,
  getDiseasesStart,
  getDiseasesSuccess,
  getDoctorsFailure,
  getDoctorsStart,
  getDoctorsSuccess,
  getLocationsFailure,
  getLocationsStart,
  getLocationsSuccess,
  getSettingsFailure,
  getSettingsStart,
  getSettingsSuccess,
  getSummaryFailure,
  getSummaryStart,
  getSummarySuccess,
  getSupportsFailure,
  getSupportsStart,
  getSupportsSuccess,
  getUserFailure,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  getUserStart,
  getUserSuccess,
  getVaccineListFailure,
  getVaccineListStart,
  getVaccineListSuccess,
  getVaccinesFailure,
  getVaccinesStart,
  getVaccinesSuccess,
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

export const addDetailes = async (id, data, dispatch) => {
  dispatch(settingsStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/user/adddetailes/${id}`, data)
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

export const getSettings = async (id, dispatch) => {
  dispatch(getSettingsStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/user/getSettings`, id)
      .then((response) => {
        dispatch(getSettingsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getSettingsFailure(error));
        reject(error);
      });
  });
};

export const addDisease = async (data, dispatch) => {
  dispatch(adddiseaseStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/disease`, data)
      .then((response) => {
        dispatch(adddiseaseSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(adddiseaseFailure(error));
        reject(error);
      });
  });
};

export const getDiseases = async (dispatch) => {
  dispatch(getDiseasesStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/disease/getDisease`)
      .then((response) => {
        dispatch(getDiseasesSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getDiseasesFailure(error));
        reject(error);
      });
  });
};

export const getLocations = async (dispatch) => {
  dispatch(getLocationsStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/location/getLocations`)
      .then((response) => {
        dispatch(getLocationsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getLocationsFailure(error));
        reject(error);
      });
  });
};

export const addLocation = async (data, dispatch) => {
  dispatch(addLocationStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/location`, data)
      .then((response) => {
        dispatch(addLocationSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(addLocationFailure(error));
        reject(error);
      });
  });
};

export const addSupport = async (data, dispatch) => {
  dispatch(addSupportStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/support`, data)
      .then((response) => {
        dispatch(addSupportSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(addSupportFailure(error));
        reject(error);
      });
  });
};

export const getSupports = async (dispatch) => {
  dispatch(getSupportsStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/support/getSupport`)
      .then((response) => {
        dispatch(getSupportsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getSupportsFailure(error));
        reject(error);
      });
  });
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/user/users`)
      .then((response) => {
        dispatch(getUsersSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getUsersFailure(error));
        reject(error);
      });
  });
};

export const addVaccine = async (data, dispatch) => {
  dispatch(addVaccineStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/vaccine`, data)
      .then((response) => {
        dispatch(addVaccineSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(addVaccineFailure(error));
        reject(error);
      });
  });
};

export const getVaccines = async (id, dispatch) => {
  dispatch(getVaccinesStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/vaccine/user/${id}`)
      .then((response) => {
        dispatch(getVaccinesSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getVaccinesFailure(error));
        reject(error);
      });
  });
};

export const getUser = async (id, dispatch) => {
  dispatch(getUserStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/user/user/${id}`)
      .then((response) => {
        dispatch(getUserSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getUserFailure(error));
        reject(error);
      });
  });
};

export const getSummary = async (dispatch) => {
  dispatch(getSummaryStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((response) => {
        dispatch(getSummarySuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getSummaryFailure(error));
        reject(error);
      });
  });
};

export const getDoctors = async (dispatch) => {
  dispatch(getDoctorsStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/doctors/getDoctors`)
      .then((response) => {
        dispatch(getDoctorsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getDoctorsFailure(error));
        reject(error);
      });
  });
};

export const addDoctors = async (data, dispatch) => {
  dispatch(addDoctorsStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/doctors`, data)
      .then((response) => {
        dispatch(addDoctorsSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(addDoctorsFailure(error));
        reject(error);
      });
  });
};

export const getVaccineList = async (dispatch) => {
  dispatch(getVaccineListStart());
  return await new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/api/vaccineList/getVaccineList`)
      .then((response) => {
        dispatch(getVaccineListSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(getVaccineListFailure(error));
        reject(error);
      });
  });
};

export const addVaccineList = async (data, dispatch) => {
  dispatch(addVaccineListStart());
  return await new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/api/vaccineList`, data)
      .then((response) => {
        dispatch(addVaccineListSuccess(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(addVaccineListFailure(error));
        reject(error);
      });
  });
};
