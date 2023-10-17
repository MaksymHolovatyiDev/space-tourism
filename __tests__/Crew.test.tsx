import renderer from 'react-test-renderer';
import Crew from '../src/pages/Crew';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<Crew />).toJSON();
  expect(tree).toMatchSnapshot();
});
