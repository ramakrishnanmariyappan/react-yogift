import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG } from "../actions/login-types";

const INITIAL_STATE = {
  loginStatus: false,
  detailsObject: '',
  openDialog: false
}
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        loginStatus: true,
        detailsObject: action.payload
      };
      break;
    case OPEN_DIALOG:
      state = {
        ...state,
        openDialog: action.payload
      }
      break;
    case LOGIN_USER_DETAILS:
      state = {
        ...state,
        loginStatus: true,
        detailsObject: action.payload
      }
      break;
    case LOGOUT:
      state = {
        ...state,
        loginStatus: false,
        detailsObject: {}
      };
      break;

    default:
      state = {
        ...state
      };
      break;
  }
  return state;
};

export default loginReducer;
