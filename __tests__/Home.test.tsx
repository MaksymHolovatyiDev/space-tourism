import renderer from 'react-test-renderer';
import Home from '../src/pages/Home';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
