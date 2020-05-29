import React from 'react';
import { Header } from './Header';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import history from "../../common/components/history";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

configure({ adapter: new Adapter() });
describe('Header_Component', () => {
    let wrapper;
    const props = {
        isLoggedIn: true,
        userDetails: 'userDetails',
        openDialog: jest.fn(),
        logout: jest.fn(),
        classes: {
            root: {
                flexGrow: 1,
                flexShrink: 1,
                width: '100%'
            },
            grow: {
                flexGrow: 1
            },
            toolBar: {
                background: "#32567e"
            }
        }
    }
    beforeEach(() => {
        const initialState = {
            login : {
                isLoggedIn: true,
                userDetails: 'userDetails'
            }
          };
          const store = mockStore(initialState);
        wrapper = shallow(<Header {...props} store={store} />);
    });
    it('should call the goTolanding method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(history, 'push');
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(0);
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the giftsReceived method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(history, 'push');
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(1);
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the giftsSend method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(history, 'push');
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(2);
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the usersList method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(history, 'push');
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(3);
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the myProfile method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(history, 'push');
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(4);
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleLoginFunc method', () => {
        const instance = wrapper.instance();
		wrapper.setProps({ isLoggedIn: false } );
        instance.forceUpdate();
        const button = wrapper.find('WithStyles(Button)').at(0);
        button.props().onClick();
    });
    it('should call the logOut method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'logOut');
        instance.forceUpdate();
        instance.logOut();
        expect(spy).toHaveBeenCalled();
    });
});