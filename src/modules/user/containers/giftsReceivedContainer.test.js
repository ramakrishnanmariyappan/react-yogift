import React from 'react';
import { GiftsReceivedContainer } from './giftsReceivedContainer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { giftTransact } from '../../../mockData/getMockData';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'react-dom';


configure({ adapter: new Adapter() });

describe('GiftsReceivedContainer_Component', () => {
    let wrapper;
    const props = {
        isLoggedIn: true,
        receivedCards: giftTransact,
        user: 'user',
        fetchReceivedCards: jest.fn(),
        redeemCard: jest.fn()
    }
    beforeEach(() => {
        wrapper = mount(<GiftsReceivedContainer {...props} />);

    });
    it('should call the handleRedeemCard method', () => {
        const row = {
            id: 12,
            senderEmail: 'email',
            receiverEmail: 'email',
            cardName: 'name',
            cardPoints: 12,
            cardShortDesc: 'desc',
            cardImage: '',
            cardIssueDate: '',
            cardExpiryDate: '',
        }
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'handleRedeemCard');
        instance.forceUpdate();
        instance.handleRedeemCard(row);
        expect(spy).toHaveBeenCalled();
    });
    it('should call the componentDidCatch method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'componentDidCatch');
        instance.forceUpdate();
        instance.componentDidCatch();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the receivedProps data length 0', () => {
        const instance = wrapper.instance();
        wrapper.setProps({ receivedCards: [] });
        wrapper.update();
        expect(instance.props.receivedCards.length).toEqual(0);
    });
    it('should call the isLoggedIn false', () => {
        const history = createMemoryHistory();
        history.push('/profile')
        const props1 = {
            isLoggedIn: false,
            receivedCards: giftTransact,
            user: 'user',
            fetchReceivedCards: jest.fn(),
            redeemCard: jest.fn()
        }
        const div = document.createElement('div');
        render(
            <MemoryRouter initialEntries={['/auth']}>
                <Router history={history}>
                    <GiftsReceivedContainer {...props1} />
                </Router>
            </MemoryRouter>, div);
    });
});
