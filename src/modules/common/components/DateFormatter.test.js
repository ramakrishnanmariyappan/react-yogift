import React from 'react';
import { DateFormatter } from './DateFormatter';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('DatePicker_Component', () => {
    it('should call the DateFormatter', () => {
        const data = new Date('Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)');
        const date = DateFormatter(data);
        expect(date).toEqual('2019-05-19');
    });
});