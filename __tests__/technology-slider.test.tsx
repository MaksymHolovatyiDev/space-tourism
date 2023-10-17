import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {TechnologyList} from '../src/widgets/technology-list';

import React from 'react';

it('panel navigation', () => {
  render(<TechnologyList />);

  expect(screen.getByText('LAUNCH VEHICLE')).toBeVisible();
  let button = screen.getAllByRole('button')[1];
  fireEvent.click(button);

  expect(screen.getByText('SPACEPORT')).toBeVisible();
  button = screen.getAllByRole('button')[2];
  fireEvent.click(button);

  expect(screen.getByText('SPACE CAPSULE')).toBeVisible();
});
