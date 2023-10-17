import renderer from 'react-test-renderer';
import Technology from '../src/pages/Technology';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<Technology />).toJSON();
  expect(tree).toMatchSnapshot();
});
