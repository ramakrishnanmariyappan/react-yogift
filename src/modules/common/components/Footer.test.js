import React from 'react';
import { Footer } from './Footer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });
describe('FooterPage_Component', () => {
    let wrapper, props;
    props = {
        classes: {
            root: {
                position: "relative"  
            }
        }
    }
    beforeEach(() => {
        wrapper = shallow(
            <Footer {...props} />
        );
    });
    it("Footer page wrapper", () => {
        expect(wrapper.find('WithStyles(AppBar)').first().props().position).toEqual('static');
    });
});