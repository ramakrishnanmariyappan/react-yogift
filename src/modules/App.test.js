import React, { Suspense } from 'react';
import toJson from 'enzyme-to-json';
import App, { GiftsListContainer, ProfileContainers, GiftShowContainer, GiftsSendContainer, GiftsReceivedContainer, AddUpdateForm, ErrorPage, UsersList } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { Router } from "react-router-dom";
import history from "./common/components/history";
import { create } from 'react-test-renderer';
import { LocalizeProvider } from "react-localize-redux";
import ErrorBoundary from "./common/components/errorBoundary";
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });
jest.mock('./Styles.less', () => ({}))
// jest.mock('./LazyComponent1', () => require('./Component1'));
// jest.mock('./LazyComponent2', () => require('./Component2'));

describe('App_Component', () => {
    let store;
    const mockStore = configureStore([thunk]);
    store = mockStore({ login: { loginStatus: true, detailsObject: 'user' } });
    it('rendered lazily', async () => {
        const root = create(
            <Provider store={store}>
                <LocalizeProvider>
                    <Suspense fallback={<div>loading...</div>}>
                        <App />
                    </Suspense>
                </LocalizeProvider>
            </Provider>
        );

        await GiftsListContainer;
        await ProfileContainers;
        await GiftShowContainer;
        await GiftsSendContainer;
        await GiftsReceivedContainer;
        await AddUpdateForm;
        await ErrorPage;
        await UsersList;

        // expect(root).toMatchSnapshot();
    })
});
// describe('Authendication Component', () => {
//     let wrapper, store;
//     beforeEach(() => {
//         const initialState = {
//             isLoggedIn: false,
//             userDetails: 'admin'
//         };
//         const mockStore = configureStore();
//         store = mockStore({ login: initialState });
//         wrapper = shallow(
//             <Provider store={store}>
//                 <Router history={history}>
//                     <App />
//                 </Router>
//             </Provider>
//         );

//     });
//     it('should find the child component', () => {
//         // console.log(wrapper)
//         let instance1 = wrapper.dive().dive().dive().instance();
//     });
// })