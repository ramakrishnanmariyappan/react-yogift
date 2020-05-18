import React from 'react';
import GiftsList from './GiftsList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('GiftsList Component', () => {
    let wrapper;
    beforeEach(() => {
        const handleClickCard = jest.fn();
        const handleUpdateClick = jest.fn();
        const props = {
            giftCards: '',
            giftCardsFiltered: [],
            userDetails: {
                email: 'test@test.com'
            }
        }
        wrapper = shallow(
                <GiftsList
                    {...props}
                    handleClickCard={handleClickCard}
                    handleUpdateClick={handleUpdateClick}
                />
        );

    });
    it('should find component', () => {
        expect(wrapper).not.toBeNull()
    });
})
