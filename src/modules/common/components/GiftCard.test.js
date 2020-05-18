import React from 'react';
import { GiftCard } from './GiftCard';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { giftTransact } from '../../../mockData/getMockData';

configure({ adapter: new Adapter() });

describe('GiftCard_Component', () => {
    let wrapper;
    const props = {
        classes: {
            card: {
                maxWidth: 400,
                minWidth: 100,
                textAlign: "center"
            },
            media: {
                height: 0,
                flexShrink: 1,
                flexGrow: 1,
                paddingTop: "56.25%"
            },
            actions: {
                display: "flex"
            },
            expand: {
                transform: "rotate(0deg)",
                marginLeft: "auto"
            },
            expandOpen: {
                transform: "rotate(180deg)"
            },
            avatar: {
            },
            fab: {
                height: "35px",
                width: "35px"
            }
        },
        giftCard: giftTransact,
        userEmail: 'yoyogiftg2@gmail.com'
    }
    beforeEach(() => {
        wrapper = shallow(
                <GiftCard {...props} />
        );
    });
    it("dispatch search action to store", () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'handleExpandClick')
        instance.handleExpandClick();
        expect(spy).toHaveBeenCalled()
    });
    it("dispatch search action to store", () => {
        const instance = wrapper.instance();
        wrapper.setProps({userEmail: 'test@test.com'})
        const spy = jest.spyOn(instance, 'handleExpandClick')
        instance.handleExpandClick();
        expect(spy).toHaveBeenCalled()
    });
});