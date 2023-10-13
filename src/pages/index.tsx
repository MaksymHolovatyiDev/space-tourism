import {Header} from 'entities/header';
import {lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {BaseRoutes} from 'shared/Routes';

const Home = lazy(() => import('./Home'));
const Destination = lazy(() => import('./Destination'));
const Crew = lazy(() => import('./Crew'));
const Technology = lazy(() => import('./Technology'));

export const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={BaseRoutes.Home} element={<Home />} />
        <Route path={BaseRoutes.Destination} element={<Destination />} />
        <Route path={BaseRoutes.Crew} element={<Crew />} />
        <Route path={BaseRoutes.Technology} element={<Technology />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
