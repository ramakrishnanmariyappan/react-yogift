import React from 'react';
import toJson from 'enzyme-to-json';
import Profile from './profile';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Profile_Component', () => {
    let wrapper, store;
    beforeEach(() => {
        const props = {
            email: 'test1@test.com',
            firstName: 'test',
            lastName: 'name',
            socialProfileLink: '',
            picture: 'picture'
        }
        wrapper = shallow(<Profile detailsObject={{props}} />)
    });
    it('should handle the wrapper', () => {
        expect(wrapper).not.toBeNull();
    });
    it('should update the props', () => {
        wrapper.setProps({
            detailsObject: {
                email: 'test@test.com',
                firstName: 'test',
                lastName: 'name',
                socialProfileLink: 'link',
                picture: 'picture',
                balance_points: 112
            }
        }
        );
        expect(wrapper).not.toBeNull();
    });
});