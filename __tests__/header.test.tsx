import {fireEvent, render, screen} from '@testing-library/react';
import {Header} from '../src/entities/header';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {BaseRoutes} from '../src/shared';

it('navigation', () => {
  expect(window.location.pathname).toBe(BaseRoutes.Home);
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  let button = screen.getByText('Destination');
  fireEvent.click(button);

  expect(window.location.pathname).toBe(BaseRoutes.Destination);

  button = screen.getByText('Crew');
  fireEvent.click(button);

  expect(window.location.pathname).toBe(BaseRoutes.Crew);

  button = screen.getByText('Technology');
  fireEvent.click(button);

  expect(window.location.pathname).toBe(BaseRoutes.Technology);

  button = screen.getByText('Home');
  fireEvent.click(button);

  expect(window.location.pathname).toBe(BaseRoutes.Home);
});
