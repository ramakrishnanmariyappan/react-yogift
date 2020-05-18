import React from 'react';
import ErrorPage from './ErrorPage';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });
describe('ErrorPage_Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
                <ErrorPage />
        );
    });
    it("Error page contain Page not found error", () => {
       expect(wrapper.find('img').first().props().alt).toEqual('404: Page not found');
    });
});