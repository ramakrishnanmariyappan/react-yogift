import React from 'react';
import FormikComponent from './Formik';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
configure({ adapter: new Adapter() });
jest.mock('react-redux');
describe('Formik_Component', () => {
    let wrapper, store, useEffect;
    const props = {
        getEmailData: jest.fn(),
        handleClose: jest.fn(),
        closeDialog: jest.fn()
    }
    const mockStore = configureStore([thunk]);
    store = mockStore({});
    useDispatch.mockImplementation(() => store.dispatch);
    beforeEach(() => {
        const historyMock = { push: jest.fn(), location: { path: '/UsersList' } };
        wrapper = mount(
            <Router store={store}>
                <FormikComponent history={historyMock} {...props} />
            </Router>
        );
    });
    it('should call formik form', () => {
       const formik = wrapper.find('Formik').at(0);
       const spy = jest.spyOn(formik.props(), 'onSubmit');
       wrapper.update();
       formik.props().onSubmit({email: 'test@test.com'});
       expect(spy).toHaveBeenCalled();
    });
    it('should call formik form with invalid email', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'onSubmit');
        wrapper.update();
        formik.props().onSubmit({email: 'test.com'});
        expect(spy).toHaveBeenCalled();
     });
     it('should call formik form with validate method', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: 'test.com'});
        expect(spy).toHaveBeenCalled();
     });
     it('should call formik form with empty', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: ''});
        expect(spy).toHaveBeenCalled();
     });
     it('should call formik form with proper email', () => {
        const formik = wrapper.find('Formik').at(0);
        const spy = jest.spyOn(formik.props(), 'validate');
        wrapper.update();
        formik.props().validate({email: 'test@test.com'});
        expect(spy).toHaveBeenCalled();
     });
    it('should call handleClose method', () => {
        const button = wrapper.find('WithStyles(Button)').at(0);
        wrapper.update();
        button.props().onClick();
    })
});