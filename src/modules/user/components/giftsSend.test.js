import React from 'react';
import toJson from 'enzyme-to-json';
import GiftsSend from './giftsSend';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { giftTransact } from '../../../mockData/getMockData';

configure({ adapter: new Adapter() });

describe('giftsSend_Component', () => {
    let wrapper, store;
    const props = {
        data: giftTransact
    }
    beforeEach(() => { 
        wrapper = mount(<GiftsSend {...props} />);
    });
    it('should handle the wrapper', () => {
        expect(wrapper.props().data.length).toEqual(2);
    })
});