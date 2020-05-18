import giftsReducer from './giftsReducer';
import {
    FETCH_CARDS,
    FETCH_CARD,
    FETCH_CARD_FILTER,
    UPDATE_CARD_COUNT,
    ADMIN_ADD_CARD,
    ADMIN_UPDATE_CARD,
    DEBONCE_DATA
} from '../actions/gift-types';
import { getGiftCardData } from '../mockData/getMockData';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
let INITIAL_STATE = {
    giftCards: [],
    giftCardsFiltered: [],
    giftCard: {},
    debonceData: ''
};
configure({ adapter: new Adapter() });

describe('GiftsReducer_Component', () => {

    it('should test the initial state of reducer', () => {
        expect(giftsReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE)
    });
    it('should handle FETCH_CARD', () => {
        const fetch_card = {
            type: FETCH_CARD,
            payload: {
                data: getGiftCardData
            }
        }
        expect(giftsReducer(INITIAL_STATE, fetch_card).giftCard).toBe(getGiftCardData)
    });
    it('should handle FETCH_CARDS', () => {
        const fetch_cards = {
            type: FETCH_CARDS,
            payload: {
                data: [getGiftCardData]
            }
        }
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCards.length).toEqual(1);
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCardsFiltered.length).toEqual(1)
    });
    it('should handle ADMIN_ADD_CARD', () => {
        const fetch_cards = {
            type: ADMIN_ADD_CARD,
            payload: [getGiftCardData]
        }
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCards.length).toEqual(1);
    });
    it('should handle ADMIN_UPDATE_CARD', () => {
        const fetch_cards = {
            type: ADMIN_UPDATE_CARD,
            payload: {
                data: getGiftCardData,
            }
        }
        INITIAL_STATE.giftCards = [getGiftCardData];
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCards.length).toEqual(1);
    });
    it('should handle ADMIN_UPDATE_CARD else part', () => {
        const fetch_cards = {
            type: ADMIN_UPDATE_CARD,
            payload: {
                data: [getGiftCardData],
            }
        }
        INITIAL_STATE.giftCards = [getGiftCardData];
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCards.length).toEqual(1);
    });
    it('should handle FETCH_CARD_FILTER', () => {
        const fetch_cards = {
            type: FETCH_CARD_FILTER,
            payload: [getGiftCardData]
        }
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCardsFiltered.length).toEqual(1);
    });
    it('should handle UPDATE_CARD_COUNT', () => {
        const fetch_cards = {
            type: UPDATE_CARD_COUNT,
            payload: getGiftCardData
        }
        expect(giftsReducer(INITIAL_STATE, fetch_cards).giftCard.cardCount).toEqual(95);
    });
    it('should handle UPDATE_CARD_COUNT', () => {
        const debonce_data = {
            type: DEBONCE_DATA,
            payload: 'Amazon'
        }
        expect(giftsReducer(INITIAL_STATE, debonce_data).debonceData).toEqual('Amazon');
    });
});

