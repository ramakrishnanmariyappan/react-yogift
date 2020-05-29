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
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });
jest.mock('./Styles.less', () => ({}))
function Loading({ error }) {
  if (error) {
    return (
      <div>
    <h2 style={{
      height: '40px',
      background: '#b3d9f7',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'middle',
      paddingTop: '5px',
      fontSize: '20px',
      fontWeight: '500'
    }}>
      Oh nooess! Something went wrong. Try re-loading!
      </h2>
      </div>
      )
  } else {
    return <LinearProgress color="secondary" />;
  }
}

describe('App_Component', () => {
    let store, wrapper;
    const mockStore = configureStore([thunk]);
    store = mockStore({ login: { loginStatus: true, detailsObject: 'user' } });
	beforeEach(() => {
		wrapper = shallow(
            <Provider store={store}>
                <LocalizeProvider>
                    <Suspense fallback={<Loading/>}>
					<MemoryRouter initialEntries={[ '/giftCards' ]}>
                        <App />
						</MemoryRouter>
                    </Suspense>
                </LocalizeProvider>
            </Provider>, {suspenseFallback: true}
        );
	});
    it('rendered lazily', async () => {
        
        console.log('wrapper', wrapper.debug());
        await GiftsListContainer;
        await ProfileContainers;
        await GiftShowContainer;
        await GiftsSendContainer;
        await GiftsReceivedContainer;
        await AddUpdateForm;
        await ErrorPage;
        await UsersList;
        // expect(root).toMatchSnapshot();
    });
	it('should call Loading', () => {
		const loading = wrapper.find('Route').at(0);
	});
});