import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG } from "./login-types";
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
      console.log(err)
    });
  if (response && response.data.length > 0) {
    localStorage.setItem('auth', JSON.stringify(response.data[0]));
    dispatch({
      type: LOGIN_USER_DETAILS,
      payload: response
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