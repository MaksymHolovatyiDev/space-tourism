import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {CrewSlider} from '../src/widgets/crew-slider';

import React from 'react';

it('panel navigation', () => {
  render(<CrewSlider />);

  expect(screen.getByText('Douglas Hurley')).toBeVisible();
  let button = screen.getAllByRole('button')[1];
  fireEvent.click(button);

  expect(screen.getByText('MARK SHUTTLEWORTH')).toBeVisible();
  button = screen.getAllByRole('button')[2];
  fireEvent.click(button);

  expect(screen.getByText('Victor Glover')).toBeVisible();
  button = screen.getAllByRole('button')[3];
  fireEvent.click(button);

  expect(screen.getByText('Anousheh Ansari')).toBeVisible();
});
