import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD, USERS_DETAILS } from "./user-types";
import { fetchReceivedCards, fetchSentCards, userDetails, redeemCard, updateTransact, updateUserBalance, usersDetails } from './user-index';
import axiosWrapper from '../apis/axiosCreate';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('User_Actions', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should handle fetchReceivedCards action', async () => {
        const cards = {
            id: 12,
            cardName: 'card1'
        }
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ data: cards }));
        const dispatch = jest.fn().mockImplementation();
        const response = fetchReceivedCards('test@test.com');
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: RECEIVED_CARDS,
            payload: cards
        });
    });
    it('should handle fetchSentCards action', async () => {
        const cards = {
            id: 12,
            cardName: 'card1'
        }
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ data: cards }));
        const dispatch = jest.fn().mockImplementation();
        const response = fetchSentCards('test@test.com');
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: SENT_CARDS,
            payload: cards
        });
    });
    it('should handle userDetails action', async () => {
        const user = {
            user: 'user12'
        }
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ data: user }));
        const dispatch = jest.fn().mockImplementation();
        const response = userDetails(12);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: USER_DETAILS,
            payload: user
        });
    });
    it('should handle redeemCard action', async () => {
        const redeem = {
            card: 'card12'
        }
        axiosWrapper.delete = jest.fn().mockImplementation(() => Promise.resolve({ data: redeem }));
        axiosWrapper.post = jest.fn().mockImplementation(() => Promise.resolve({ data: redeem }));
        const dispatch = jest.fn().mockImplementation();
        const response = redeemCard(12, 123);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: REDEEM_CARD,
            payload: redeem
        });
    });
    it('should handle usersDetails action', async () => {
        const users = [
            {
                user: 'user12'
            },
            {
                user: 'user13'
            }
        ]
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ data: users }));
        const dispatch = jest.fn().mockImplementation();
        const response = usersDetails();
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: USERS_DETAILS,
            payload: users
        });
    });
    it('should handle updateUserBalance action', async () => {
        const user = {
            email: 'test@test.com',
            password: 'sasa'
        }
        axiosWrapper.patch = jest.fn().mockImplementation(() => Promise.resolve(user));
        const dispatch = jest.fn().mockImplementation();
        const response = updateUserBalance(user);
        await response(dispatch);
        // expect(dispatch).toHaveBeenCalledWith({
        //     type: LOGIN_USER_DETAILS,
        //     payload: user
        // });
    });
    it('should handle updateUserBalance action throw error', async () => {
        const errorMessage = 'Network Error';

        axiosWrapper.patch = jest.fn().mockImplementation(() => Promise.reject(new Error(errorMessage)));
        const dispatch = jest.fn().mockImplementation();
        const response = updateUserBalance(12, 234);
        try {
            await response(dispatch);
        } catch (e) {
            expect(e.message).toEqual(errorMessage)
        }
    });
    it('should handle updateTransact action', async () => {
        const user = {
            email: 'test@test.com',
            password: 'sasa'
        }
        axiosWrapper.post = jest.fn().mockImplementation(() => Promise.resolve(user));
        const dispatch = jest.fn().mockImplementation();
        const response = updateTransact(user);
        await response(dispatch);
        // expect(dispatch).toHaveBeenCalledWith({
        //     type: LOGIN_USER_DETAILS,
        //     payload: user
        // });
    });
    it('should handle updateTransact action throw error', async () => {
        const errorMessage = 'Network Error';

        axiosWrapper.post = jest.fn().mockImplementation(() => Promise.reject(new Error(errorMessage)));
        const dispatch = jest.fn().mockImplementation();
        const response = updateTransact(12, 234);
        try {
            await response(dispatch);
        } catch (e) {
            expect(e.message).toEqual(errorMessage)
        }
    });
});