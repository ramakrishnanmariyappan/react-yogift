import React from 'react';
import { ProfileContainer } from './profileContainers';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';


configure({ adapter: new Adapter() });

describe('ProfileContainer_Component', () => {
    let wrapper, store;
    const props = {
        isLoggedIn: true,
        detailsObject: 'detailsObject',
        user: {
            balance_points: 23
        },
        userDetails: jest.fn()
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({
        login: {
            loginStatus: true,
            detailsObject: 'detailsObject'
        },
        users: jest.fn()
    });
    beforeEach(() => {
        wrapper = mount(<ProfileContainer {...props} />);
    });
    it('should call the componentDidMount method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'componentDidMount');
        instance.forceUpdate();
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the isLoggedIn false', () => {
        const history = createMemoryHistory();
        history.push('/profile')
        const props1 = {
            isLoggedIn: false,
            detailsObject: 'detailsObject',
            user: {
                balance_points: 23
            },
            userDetails: jest.fn()
        }
        const div = document.createElement('div');
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/auth']}>
                    <Router history={history}>
                        <ProfileContainer />
                    </Router>
                </MemoryRouter>
            </Provider>,
            div);
    });
});
