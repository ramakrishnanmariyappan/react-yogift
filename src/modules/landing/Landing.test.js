import React from 'react';
import toJson from 'enzyme-to-json';
import Landing from './Landing';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Landing_Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Landing />);
    });
    it('should call the component', () => {
        console.log('wrapper landing', wrapper);
    });
});