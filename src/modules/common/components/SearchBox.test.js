import React from 'react';
import SearchBoxComponent from './SearchBox';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { useSelector, useDispatch, Provider } from 'react-redux';
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
describe('SearchBox_Component', () => {
    let wrapper, store, useEffect;
    const props = {
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({});
    beforeEach(() => {
        const historyMock = { push: jest.fn(), location: { path: '/UsersList' } };
        wrapper = mount(
            <Router store={store}>
                <SearchBoxComponent history={historyMock} {...props} />
            </Router>
        );
    });
    it("dispatch search action to store", () => {
        const instance = wrapper.instance();
        const text = wrapper.find('TextField').at(0);
        text.props().onChange({target:{value: 'Amazon'}});
        // expect(instance.state.value).toEqual('Amazon');
    });
	it("clear search action to store", () => {
		console.log('wrapper', wrapper.debug());
        const instance = wrapper.instance();
        const text = wrapper.find('IconButton').at(0);
        text.props().onClick({target:{value: ''}});
        // expect(instance.state.value).toEqual('Amazon');
    });
});