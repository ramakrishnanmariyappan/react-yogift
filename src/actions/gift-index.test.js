import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, ADMIN_ADD_CARD, UPDATE_CARD_COUNT, ADMIN_UPDATE_CARD, DEBONCE_DATA } from './gift-types';
import { fetchCards, fetchCard, adminUpdateCard, fetchCardFilter, adminAddCard, updateCardCount, searchdebounceData } from './gift-index'
import { getGiftCardData } from '../mockData/getMockData';
import axiosWrapper from '../apis/axiosCreate';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Gift_Actions', () => {
    let store;
    beforeEach(() => {
        store = mockStore();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should handle fetchCards action', async () => {
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ card: 'carddata' }));
        const dispatch = jest.fn().mockImplementation(args => { });
        const response = fetchCards();
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: FETCH_CARDS,
            payload: { card: 'carddata' }
        });
    });
    it('should handle fetchCard action', async () => {
        axiosWrapper.get = jest.fn().mockImplementation(() => Promise.resolve({ card: 'carddata' }));
        const dispatch = jest.fn().mockImplementation(args => { });
        const response = fetchCard();
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: FETCH_CARD,
            payload: { card: 'carddata' }
        });
    });
    it('should handle adminUpdateCard action', async () => {
         axiosWrapper.patch = jest.fn().mockImplementation(() => Promise.resolve(getGiftCardData));
        const dispatch = jest.fn().mockImplementation();
        const response = adminUpdateCard(1,getGiftCardData);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: ADMIN_UPDATE_CARD,
            payload: getGiftCardData
        });
    });
    it('should handle fetchCardFilter action', async () => {
        store.dispatch(fetchCardFilter(getGiftCardData));
        expect(store.getActions()[0]).toEqual({
            type: FETCH_CARD_FILTER,
            payload: getGiftCardData
        });
    });
    it('should handle adminAddCard action', async () => {
         const object = {
            "id": Math.floor(Math.random() * 101),
            "cardName": "Amazon Gift ",
            "cardPoints": "1200",
            "cardCategory": "Ecommerce",
            "cardRetailer": "Amazon",
            "cardIssueDate": "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
            "cardExpiryDate": "2019-06-29T00:00:00.000Z",
            "cardCount": 95,
            "cardImage": "image.png",
            "cardVendor": "amazon",
            "cardShortDesc": "10% OFF",
            "cardLongDesc": "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
            "cardComments": []
        }
        axiosWrapper.post = jest.fn().mockImplementation(() => Promise.resolve({card: 'carddata'}));
        const dispatch = jest.fn().mockImplementation(args => {});
        const response = adminAddCard(object);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: ADMIN_ADD_CARD,
            payload: {card: 'carddata'}
        });
    });
    it('should handle updateCardCount action', async () => {
        axiosWrapper.patch = jest.fn().mockImplementation(() => Promise.resolve({data:getGiftCardData}));
        const dispatch = jest.fn().mockImplementation(args => {});
        const response = updateCardCount(1, 65);
        await response(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: UPDATE_CARD_COUNT,
            payload: getGiftCardData
        });
    });
    it('should handle searchdebounceData action', async () => {
        store.dispatch(searchdebounceData('Amazon'));
        expect(store.getActions()[0]).toEqual({
            type: DEBONCE_DATA,
            payload: 'Amazon'
        });
    });
});
