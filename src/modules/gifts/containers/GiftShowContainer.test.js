import React from 'react';
import { GiftShowContainer } from './GiftShowContainer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { getGiftCardData } from '../../../mockData/getMockData';

const userDetails = {
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@mindtree.com",
    "balance_points": 5000
};
const response = () => Promise.resolve('userDetails');
const error = { message: "some error" };
const errorResponse = () => Promise.reject(error);
configure({ adapter: new Adapter() });

describe('GiftShowContainer_Component', () => {
    let wrapper;
    const props = {
        match: {
            params: {
                id: 12
            }
        },
        gift: getGiftCardData,
        login: {
            id: 12,
            email: 'test@test.com'
        },
        user: userDetails,
        isLoggedIn: true,
        fetchCard: jest.fn(),
        userDetails: jest.fn(() => response()),
        updateUserBalance: jest.fn(() => response()),
        updateTransact: jest.fn(() => response()),
        updateCardCount: jest.fn(() => response())
    }
    beforeEach(() => {
        wrapper = mount(<GiftShowContainer {...props} />);
    });
    it('should call componentDidMount method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'componentDidMount');
        instance.forceUpdate();
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled()
    });
    it('should call componentDidCatch method', () => {
        const wrapper1 = mount(<GiftShowContainer {...props} userDetails={jest.fn(() => errorResponse())} />);
        const instance = wrapper1.instance();
        const spy = jest.spyOn(instance, 'componentDidCatch');
        instance.forceUpdate();
        instance.componentDidCatch();
        expect(spy).toHaveBeenCalled()
    });
    it('should call GridShow method', () => {
        const instance = wrapper.instance();
        const GiftShow = wrapper.find('GiftShow');
        GiftShow.props().getEmail('test@test.com');
        const spy = jest.spyOn(instance, 'componentDidCatch');
        instance.forceUpdate();
        instance.componentDidCatch();
        expect(spy).toHaveBeenCalled()
        expect(instance.state.showSuccessSnackBar).toEqual(false);
    });
    it('should call balance points below cardPoints', () => {
        const instance = wrapper.instance();
        const GiftShow = wrapper.find('GiftShow');
        GiftShow.props().getEmail('test@test.com');
        const spy = jest.spyOn(instance, 'componentDidCatch');
        wrapper.setProps({users: { user: { balance_points: 1200 } }})
        instance.forceUpdate();
        instance.componentDidCatch();
        expect(spy).toHaveBeenCalled()
        expect(instance.state.showSuccessSnackBar).toEqual(false);
    });
});