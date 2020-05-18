import React from 'react';
import UsersList from './usersList';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';

const UsersDetails = [{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@mindtree.com",
    "balance_points": 150
},
{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@mindtree.com",
    "balance_points": 150
}];
configure({ adapter: new Adapter() });
jest.mock('react-redux');
describe('UsersList_Component', () => {
    let wrapper, store, useEffect;
    const props = {
        UsersDetails: UsersDetails,
        usersDetails: jest.fn()
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({ users: { UsersDetails: UsersDetails } });
    useDispatch.mockImplementation(() => store.dispatch);
    useSelector.mockImplementation((selectorFn) => selectorFn({ users: { UsersDetails: UsersDetails } }));
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect(); // 2 times
    mockUseEffect(); //
    beforeEach(() => {
        const historyMock = { push: jest.fn(), location: { path: '/UsersList' } };
        wrapper = mount(
            <Router store={store}>
                <UsersList history={historyMock} {...props} />
            </Router>
        );
    });
    it("dispatch search action to store", () => {
        const actions = wrapper.instance().props.store.getState();
        expect(actions.users.UsersDetails.length).toEqual(2);
    });
});