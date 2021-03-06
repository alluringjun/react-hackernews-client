import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sort from './index';

describe('Search', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sort />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Sort />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});