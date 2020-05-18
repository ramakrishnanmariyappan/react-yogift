import usersReducer from './usersReducer';
import { RECEIVED_CARDS, SENT_CARDS, USER_DETAILS, REDEEM_CARD, UPDATE_BALANCE, UPDATE_TRANSACT, USERS_DETAILS } from '../actions/user-types';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
let INITIAL_STATE = {
    cards: [],
    UserDetails: []
};
configure({ adapter: new Adapter() });

describe('User_Reducer', () => {
    it('should test the initial state of reducer', () => {
        expect(usersReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE)
    });
    it('should handle RECEIVED_CARDS', () => {
        const cards = {
            type: RECEIVED_CARDS,
            payload: ['card1']
        }
        expect(usersReducer(INITIAL_STATE, cards).cards.length).toEqual(1);
    });
    it('should handle SENT_CARDS', () => {
        const cards = {
            type: SENT_CARDS,
            payload:['card2']
        }
        expect(usersReducer(INITIAL_STATE, cards).cards.length).toEqual(1);
    });
    it('should handle USER_DETAILS', () => {
        const user = {
            type: USER_DETAILS,
            payload: ['userdetails']
        }
        expect(usersReducer(INITIAL_STATE, user).UserDetails.length).toEqual(1);
    });
    it('should handle REDEEM_CARD', () => {
        const INITIAL_STATE_WITH_CARDS = {
            cards: [{
                id: 12,
                cardName: 'card1',
                isRedeemed: false
            }],
            UserDetails: []
        };
        const redeem = {
            type: REDEEM_CARD,
            payload:{
                id: 12,
                cardName: 'card12',
                isRedeemed: true
            }
        }
        expect(usersReducer(INITIAL_STATE_WITH_CARDS, redeem).cards[0].isRedeemed).toEqual(true);
    });
    it('should handle REDEEM_CARD is false', () => {
        const INITIAL_STATE_WITH_CARDS = {
            cards: [{
                id: 12,
                cardName: 'card1',
                isRedeemed: false
            }],
            UserDetails: []
        };
        const redeem = {
            type: REDEEM_CARD,
            payload:{
                id: 11,
                cardName: 'card12',
                isRedeemed: true
            }
        }
        expect(usersReducer(INITIAL_STATE_WITH_CARDS, redeem).cards[0].isRedeemed).toEqual(false);
    });
    it('should handle UPDATE_BALANCE', () => {
        const cards = {
            type: UPDATE_BALANCE,
            payload:'userDetails12'
        }
        expect(usersReducer(INITIAL_STATE, cards).UserDetails).toEqual('userDetails12');
    });
    it('should handle UPDATE_TRANSACT', () => {
        const user = {
            type: UPDATE_TRANSACT,
            payload: ['transact']
        }
        expect(usersReducer(INITIAL_STATE, user).cards.length).toEqual(1);
    });
    it('should handle USERS_DETAILS', () => {
        const user = {
            type: USERS_DETAILS,
            payload: ['userdetails', 'userdetails1']
        }
        expect(usersReducer(INITIAL_STATE, user).UsersDetails.length).toEqual(2);
    });

});