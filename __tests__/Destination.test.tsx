import renderer from 'react-test-renderer';
import Destination from '../src/pages/Destination';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<Destination />).toJSON();
  expect(tree).toMatchSnapshot();
});
