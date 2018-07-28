import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let app = mount(<App />)

  it('Renders the App title', () => {
    // console.log(app.debug())
    expect(app.find('h2').text()).toEqual('Note to Self')
  });

  it('Renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes')
  });

  describe('When rendering the form', () => {

    it('Creates a form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('Renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('Renders a submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit')
    })

  })

});
