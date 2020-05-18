import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { LOGIN, LOGOUT, LOGIN_USER_DETAILS, OPEN_DIALOG } from "./login-types";
import { login, logout, createUser, loginUser, openDialog, loginGoogleUser } from './login-index';
import axiosWrapper from '../apis/axiosCreate';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login_Actions', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should handle login action', async () => {
        const data = { email: 'test@test.com', password: 'sdssd' }
        store.dispatch(login(data));
        expect(store.getActions()[0]).toEqual({
            type: LOGIN,
            payload: data
        });
    });
    it('should handle logout action', async () => {
        store.dispatch(logout());
        expect(store.getActions()[0]).toEqual({
            type: LOGOUT,
            payload: null
        });
    });
    it('should handle openDialog action', async () => {
        store.dispatch(openDialog(true));
        expect(store.getActions()[0]).toEqual({
            type: OPEN_DIALOG,
            payload: true
        });
    });
    it('should handle createUser action', async () => {
        axiosWrapper.post = jest.fn().mockImplementation(() => Promise.resolve({ userDetails: 'user1' }));
        const dispatch = jest.fn().mockImplementation(args => { });
        const response = createUser({ user: 'user1' });
        await response(dispatch);
    });
    it('should handle loginUser action', async () => {
        const user = [{
            email: 'test@test.com',
            password: 'sasa'
        }];
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({data: user}));
        const dispatch = jest.fn().mockImplementation();
        const response = loginUser(user);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: LOGIN_USER_DETAILS,
            payload: {data: user}
        });
    }); 
    it('should handle loginUser action throw error', async () => {
        const user = {
            email: 'test@test.com',
            password: 'sasa'
        }
        const errorMessage = 'Network Error';

        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.reject(new Error(errorMessage)));
        const dispatch = jest.fn().mockImplementation();
        const response = loginUser(user);
        try {
            await response(dispatch);
        } catch (e) {
            expect(e.message).toEqual(errorMessage)
        }
    });
    it('should handle openDialog action', async () => {
        store.dispatch(loginGoogleUser('login'));
        expect(store.getActions()[0]).toEqual({
            type: LOGIN_USER_DETAILS,
            payload: 'login'
        });
    });
});