import React from 'react';
import LoginFormikComponent from './loginForm';
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
describe('LoginFormik_Component', () => {
    let wrapper, store, useEffect;
    const props = {
        dialogClose: jest.fn(),
        handleChange: jest.fn(),
        errorData: jest.fn()
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({});
    useDispatch.mockImplementation(() => store.dispatch);
    beforeEach(() => {
        const historyMock = { push: jest.fn(), location: { path: '/UsersList' } };
        wrapper = mount(
            <Router store={store}>
                <LoginFormikComponent history={historyMock} {...props} />
            </Router>
        );
    });
    it('should call formik form', () => {
       const formik = wrapper.find('Formik').at(0);
       const spy = jest.spyOn(formik.props(), 'onSubmit');
       wrapper.update();
       formik.props().onSubmit({email: 'test@test.com', password: '12'});
       expect(spy).toHaveBeenCalled();
    });
     it('should call formik form with validate method', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: 'test.com', password: ''});
        expect(spy).toHaveBeenCalled();
     });
     it('should call formik form with empty', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: '', password: 'we'});
        expect(spy).toHaveBeenCalled();
     });
     it('should call formik form with proper email', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: 'test@test.com', password: 'ewe'});
        expect(spy).toHaveBeenCalled();
     });
    it('should call handleClose method', () => {
        const button = wrapper.find('WithStyles(Button)').at(0);
        button.props().onClick();
    })
    it('should call login function', () => {
        const google = wrapper.find('#GoogleLogin').at(0);
        google.props().onSuccess({profileObj: 'profile'});
    });
    it('should call responseGoogle function', () => {
        const google = wrapper.find('#GoogleLogin').at(0);
        google.props().onFailure({profileObj: 'profile'});
    });
});