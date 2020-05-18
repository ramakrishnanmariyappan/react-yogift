import loginReducer from './loginReducer';
import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG } from "../actions/login-types";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
let INITIAL_STATE = {
    loginStatus: false,
    detailsObject: '',
    openDialog: false
};
configure({ adapter: new Adapter() });

describe('Login_Reducer', () => {

    it('should test the initial state of reducer', () => {
        expect(loginReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE)
    });
    it('should handle LOGIN', () => {
        const login_data = {
            type: LOGIN,
            payload: 'user1'
        }
        expect(loginReducer(INITIAL_STATE, login_data).detailsObject).toBe('user1')
    });
    it('should handle Logout', () => {
        const logout = {
            type: LOGOUT,
            payload: {}
        }
        expect(loginReducer(INITIAL_STATE, logout).detailsObject).toEqual({});
    });
    it('should handle OPEN_DIALOG', () => {
        const openDialog = {
            type: OPEN_DIALOG,
            payload: true
        }
        expect(loginReducer(INITIAL_STATE, openDialog).openDialog).toEqual(true);
    });
    it('should handle LOGIN_USER_DETAILS', () => {
        const loginUser = {
            type: LOGIN_USER_DETAILS,
            payload: 'user2'
        }
        expect(loginReducer(INITIAL_STATE, loginUser).detailsObject).toEqual('user2');
    });

});