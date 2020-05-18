import React from 'react';
import DraggableDialog from './DraggableDialog';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('DraggableDialog_Component', () => {
  let wrapper, props;
  props = {
    getEmail: jest.fn()
  }
  beforeEach(() => {
    wrapper = mount(<DraggableDialog {...props} />)
  });
  it('should open Dialog box', () => {
    const instance = wrapper.instance();
    const button = wrapper.find('WithStyles(Button)').at(0);
    button.props().onClick();
    expect(instance.state.open).toEqual(true);
  });
  it('should open dialog with open true', () => {
   wrapper.setState({open: true});
   wrapper.instance().getDataEmail('test@test.com');
   expect(wrapper.instance().state.open).toEqual(false);
  });

});