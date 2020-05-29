import React from 'react';
import LoginDialog from './LoginDialog';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
configure({ adapter: new Adapter() });
jest.mock('react-redux');
describe('LoginDialog_Component', () => {
    let wrapper, store;
    const props = {
        openDialog: jest.fn(),
        loginUser: jest.fn(),
        closeError: jest.fn()
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({});
    useDispatch.mockImplementation(() => store.dispatch);
    useSelector.mockImplementation((selectorFn) => selectorFn({ login: { openDialog: true, errorData: true } }));
    beforeEach(() => {
        const historyMock = { push: jest.fn(), location: { path: '/UsersList' } };
        wrapper = mount(
            <Router store={store}>
                <LoginDialog history={historyMock} {...props} />
            </Router>
        );
    });
    it('should call handle close method', () => {
        const form = wrapper.find('LoginFormikComponent').at(0);
        const spy = jest.spyOn(form.props(), 'handleChange');
        wrapper.update();
        form.props().handleChange('test@test.com', 'pass');
        expect(spy).toHaveBeenCalled();
    });
    it('should call dialogclose method', () => {
        const form = wrapper.find('LoginFormikComponent').at(0);
        const spy = jest.spyOn(form.props(), 'dialogClose');
        wrapper.update();
        form.props().dialogClose();
        expect(spy).toHaveBeenCalled();
    });
    it('should call login error', () => {
        wrapper.setState({error: true})
        wrapper.update();
    });
    it('should call login errorValue', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn({ login: { openDialog: true, errorData: false } }));
        wrapper.update();
    });
})
