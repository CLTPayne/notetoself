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
    });

  });

  describe('When creating a note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('Updates the text in state', () => {
      expect(app.state().text).toEqual(testNote)
    });

    describe('On submitting the new note', () => {

      beforeEach(() => {
        app.find('.btn').at(0).simulate('click')
      });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click')
      });

      it('Adds the new note to state', () => {
        expect(app.state().notes[0].text).toEqual(testNote)
      });

      describe('And remounts the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />)
        });

        it('Reads the stored note cookies', () => {
          expect(app2.state().notes).toEqual([{ text: testNote }])
        })
      })

      describe('On clicking the clear button', () => {

        beforeEach(() => {
          app.find('.btn').at(1).simulate('click')
        });

        it('Clears the notes in state', () => {
          expect(app.state().notes).toEqual([])
        })
      })

    })
  })

});
