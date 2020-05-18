import React from 'react';
import { AddUpdateForm } from './addUpdateForm';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { getGiftCardData } from '../../../mockData/getMockData';

const userDetails = {
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@mindtree.com",
    "balance_points": 5000
};
const response = () => Promise.resolve('userDetails');
configure({ adapter: new Adapter() });

describe('AddUpdateForm_Component', () => {
    let wrapper;
    const props = {
        match: {
            params: {
                id: 1
            }
        },
        giftCards: [getGiftCardData],
        user: userDetails,
        isLoggedIn: true,
        adminAddCard: jest.fn(() => response()),
        adminUpdateCard: jest.fn(() => response())
    }
    beforeEach(() => {
        wrapper = mount(<AddUpdateForm {...props} />);
    });
    it('should call clearInput method', () => {
        const button = wrapper.find('WithStyles(Button)').at(0);
        button.props().onClick();
    });
    it('should call addupdateCard method', () => {
        const button = wrapper.find('WithStyles(Button)').at(1);
        button.props().onClick();
    });
    it('should call addupdateCard method addpart', () => {
        const button = wrapper.find('WithStyles(Button)').at(1);
        wrapper.setProps({match: { params: ''}});
        wrapper.update();
        button.props().onClick();
    });
    it('should call handleCardNameChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(0);
        inputComponent.props().handleInputChange({target: { value: 'value'}});
    });
    it('should call handleCardNameChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(0);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardPointsChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(1);
        inputComponent.props().handleInputChange({target: {value: 100}});
    });
    it('should call handleCardPointsChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(1);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardCategoryChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(2);
        inputComponent.props().handleInputChange({target: { value: 'value'}});
    });
    it('should call handleCardCategoryChange method with else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(2);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardRetailerChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(3);
        inputComponent.props().handleInputChange({target: { value: 'value'}});
    });
    it('should call handleCardRetailerChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(3);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardExpiryDateChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(4);
        inputComponent.props().handleInputChange({target: { value: '12/04/2020'}});
    });
    it('should call handleCardExpiryDateChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(4);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardCountChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(5);
        inputComponent.props().handleInputChange({target: { value: 200 }});
    });
    it('should call handleCardCountChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(5);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardImageChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(6);
        inputComponent.props().handleInputChange({target: { value: 'http:/image.png'}});
    });
    it('should call handleCardImageChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(6);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardVendorChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(7);
        inputComponent.props().handleInputChange({target: { value: 'desc'}});
    });
    it('should call handleCardVendorChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(7);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardShortDescChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(8);
        inputComponent.props().handleInputChange({target: { value: 'val'}});
    });
    it('should call handleCardShortDescChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(8);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    it('should call handleCardLongDescChange method', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(9);
        inputComponent.props().handleInputChange({target: { value: 'vale'}});
    });
    it('should call handleCardLongDescChange method else part', () => {
        const inputComponent = wrapper.find('InputTypeComponent').at(9);
        inputComponent.props().handleInputChange({target: { value: ''}});
    });
    
});