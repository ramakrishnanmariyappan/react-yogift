import React from 'react';
import { GiftsSendContainer } from './giftsSendContainer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { giftTransact } from '../../../mockData/getMockData';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'react-dom';


configure({ adapter: new Adapter() });


describe('GiftsSendContainer_Component', () => {
    let wrapper;
    const props = {
        isLoggedIn: true,
        sentCards: giftTransact,
        user: 'user',
        fetchSentCards: jest.fn()
    }
    beforeEach(() => {
        wrapper = mount(<GiftsSendContainer {...props} />);

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
        wrapper.setProps({ sentCards: [] });
        wrapper.update();
        expect(instance.props.sentCards.length).toEqual(0);
    });
    it('should call the receivedProps data length 0', () => {
        const instance = wrapper.instance();
        wrapper.setProps({ sentCards: '' });
        wrapper.update();
        expect(instance.props.sentCards.length).toEqual(0);
    });
    it('should call the isLoggedIn false', () => {
        const history = createMemoryHistory();
        history.push('/profile')
        const props1 = {
            isLoggedIn: false,
        sentCards: giftTransact,
        user: 'user',
        fetchSentCards: jest.fn()
        }
        const div = document.createElement('div');
        render(
            <MemoryRouter initialEntries={['/auth']}>
                <Router history={history}>
                    <GiftsSendContainer {...props1} />
                </Router>
            </MemoryRouter>, div);
    });
});
