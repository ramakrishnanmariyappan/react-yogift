import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG, LOGIN_ERROR, CLOSE_ERROR } from "../actions/login-types";

const INITIAL_STATE = {
  loginStatus: false,
  detailsObject: '',
  openDialog: false,
  errorData: false
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

    case LOGIN_ERROR:
      state = {
        ...state,
        errorData: action.payload
      }
      break;
    case CLOSE_ERROR:
      state = {
        ...state,
        errorData: action.payload
      }
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
