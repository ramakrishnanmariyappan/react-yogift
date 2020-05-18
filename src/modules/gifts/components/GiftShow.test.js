import React from 'react';
import toJson from 'enzyme-to-json';
import GiftShow from './GiftShow';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('GiftShow_Component', () => {
    let wrapper, store;
    beforeEach(() => {
        const data = {
                "id": 1,
                "cardName": "Amazon Gift ",
                "cardPoints": "1200",
                "cardCategory": "Ecommerce",
                "cardRetailer": "Amazon",
                "cardIssueDate": "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
                "cardExpiryDate": "2019-06-29T00:00:00.000Z",
                "cardCount": 95,
                "cardImage": "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
                "cardVendor": "amazon",
                "cardShortDesc": "10% OFF",
                "cardLongDesc": "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
                "cardComments": [
                  {
                    "id": 1,
                    "first_name": "Sebastian",
                    "last_name": "Eschweiler",
                    "email": "sebastian@mindtree.com",
                    "rating": 4,
                    "comment": "Great gift card. Happy to gift!",
                    "commented_on": "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
                  }
                ]
        }
         const email = 'test@test.com'
         const getEmail = jest.fn()
        const props = {
            data: data,
            ...getEmail(email)
        }
        wrapper = shallow(
                <GiftShow 
                {...props}
                />
        );

    })
    it('renders without crashing given the required props', () => {
        console.log('giftshow', wrapper.props());
    });
})