import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {PlanetPanel} from '../src/widgets/planet-panel';

import React from 'react';

it('panel navigation', () => {
  render(<PlanetPanel />);

  expect(screen.getByText('3 days')).toBeVisible();
  let button = screen.getByText('Mars');
  fireEvent.click(button);

  expect(screen.getByText('9 months')).toBeVisible();
  button = screen.getByText('EUROPA');
  fireEvent.click(button);

  expect(screen.getByText('3 years')).toBeVisible();
  button = screen.getByText('TITAN');
  fireEvent.click(button);

  expect(screen.getByText('7 years')).toBeVisible();
});
