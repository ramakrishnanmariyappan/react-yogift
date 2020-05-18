import React from 'react';
import createBrowserHistory from './history';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('DatePicker_Component', () => {
    let wrapper, props;
    beforeEach(() => {
        wrapper = mount(<createBrowserHistory {...props}/>)
    });
    it('should call the DatePickers', () => {
        expect(wrapper).not.toBeNull();
    });
});