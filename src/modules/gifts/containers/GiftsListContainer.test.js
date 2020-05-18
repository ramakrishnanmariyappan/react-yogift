import React from 'react';
import { GiftsListContainer } from './GiftsListContainer';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { mount, configure } from 'enzyme';
import { getGiftCardData } from '../../../mockData/getMockData';
import thunk from 'redux-thunk';

const userDetails = {
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@mindtree.com",
    "balance_points": 150
};
configure({ adapter: new Adapter() });
const error = { message: "some error" };
const errorResponse = () => Promise.reject(error);

describe('GiftsListContainer_Component', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
        useSelector: jest.fn(),
        useDispatch: () => mockDispatch
      }));
    // useDispatch.mockImplementation(() => store.dispatch);
    // useSelector.mockImplementation((selectorFn) => selectorFn({ gifts: { debonceData: debonceData } }));
    let wrapper, store;
    const props = {
        giftCards: [getGiftCardData],
        giftCardsFiltered: [getGiftCardData],
        userDetails: userDetails,
        debonceData: 'Amazon Gift',
        fetchCards: jest.fn(),
        fetchCard: jest.fn(),
        fetchCardFilter: jest.fn(),
        searchdebounceData: jest.fn('Amazon Gift ')
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({
        gifts: {
            debonceData: 'Amazon Gift',
            giftCards: [getGiftCardData],
            giftCardsFiltered: [getGiftCardData],
        },
        users: {
            userDetails: userDetails
        },
        fetchCards: jest.fn(),
        fetchCard: jest.fn(),
        fetchCardFilter: jest.fn(),
        searchdebounceData: jest.fn('Amazon Gift ')
    });
    beforeEach(() => {

        wrapper = mount(
            <Provider store={store}>
                <GiftsListContainer {...props} />);
            </Provider>).find('GiftsListContainer').at(0)
    });
    it('should call componentDidMount method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'componentDidMount');
        instance.forceUpdate();
        instance.componentDidMount();
        expect(spy).toHaveBeenCalled()
    });
    it('should call componentDidCatch method', () => {
        const wrapper1 = mount(<GiftsListContainer {...props} fetchCardFilter={jest.fn(() => errorResponse())} />);
        const instance = wrapper1.instance();
        const spy = jest.spyOn(instance, 'componentDidCatch');
        instance.forceUpdate();
        instance.componentDidCatch();
        expect(spy).toHaveBeenCalled()
    });
    it('should call handleChangePage method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'handleChangePage');
        instance.forceUpdate();
        instance.handleChangePage({ target: 'value' }, 'page');
        expect(spy).toHaveBeenCalled()
    });
    it('should call handleChangeRowsPerPage method', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'handleChangeRowsPerPage');
        instance.forceUpdate();
        instance.handleChangeRowsPerPage({ target: 'value' }, 'page');
        expect(spy).toHaveBeenCalled()
    });
    it('should call the handleSortButtonClick with sort value=None', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Points', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Points' });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Count', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Count' });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Validity', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Validity' });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });


    it('should call the handleSortButtonClick with sort value=Points with sort order false', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Points', sortOrder: false });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Count with sort order false', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Count', sortOrder: false });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Validity with sort order false', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Validity', sortOrder: false });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=Validity with sort order false with filtervalue !All', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'Validity', sortOrder: false, filterValue: '' });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the handleSortButtonClick with sort value=val with sort order false with filtervalue !All', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(IconButton)').at(0);
        wrapper.setState({ sortByValue: 'val', sortOrder: false, filterValue: '' });
        let spy = jest.spyOn(instance, 'onChangeSort');
        button.props().onClick();
        expect(spy).toHaveBeenCalled();
    });
    it('should call the onChangeRetailer method', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(WithFormControlContext(Select))').at(0);
        button.props().onChange({ "target": { "value": "All" } });
        expect(instance.state.filterValue).toEqual('All');
    });
    it('should call the onChangeRetailer method !All', () => {
        const instance = wrapper.instance();
        const button = wrapper.find('WithStyles(WithFormControlContext(Select))').at(0);
        button.props().onChange({ "target": { "value": "Val" } });
        expect(instance.state.filterValue).toEqual('Val');
    });
});