import React from 'react';
import toJson from 'enzyme-to-json';
import GiftsReceived from './giftsReceived';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { giftTransact } from '../../../mockData/getMockData';

configure({ adapter: new Adapter() });

describe('GiftReceived_Component', () => {
    let wrapper;
    const props = {
        data: giftTransact,
        redeemCard: jest.fn()
    }
    beforeEach(() => {
        wrapper = mount(<GiftsReceived {...props} />);
    });
    it('should call the component', () => {
        const button = wrapper.find('WithStyles(Button)').first();
        let spy = jest.spyOn(props, 'redeemCard');
        button.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});