import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG, LOGIN_ERROR, CLOSE_ERROR } from "./login-types";
import axiosWrapper from "../apis/axiosCreate";
export const login = object => {
  return {
    type: LOGIN,
    payload: object
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  };
};

export const createUser = userDetails => async dispatch => {
  await axiosWrapper.post(`/users`, userDetails);
};

export const loginUser = (credential) => async (dispatch) => {
  const response = await axiosWrapper.get(`/users?email=${credential.email}&password=${credential.password}`)
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: true
      })
    });
  if (response && response.data.length > 0) {
    localStorage.setItem('auth', JSON.stringify(response.data[0]));
    dispatch({
      type: LOGIN_USER_DETAILS,
      payload: response.data[0]
    })
  } else {
    dispatch({
      type: LOGIN_ERROR,
      payload: true
    })
  }
}
export const openDialog = (open) => (dispatch) => {
  dispatch({
    type: OPEN_DIALOG,
    payload: open
  })
}
export const loginGoogleUser = (response) => (dispatch) => {
  dispatch({
    type: LOGIN_USER_DETAILS,
    payload: response
  })
}
export const closeError = () => (dispatch) => {
  dispatch({
    type: CLOSE_ERROR,
    payload: false
  })
}