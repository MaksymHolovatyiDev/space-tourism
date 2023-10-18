import {AnimatePresence} from 'framer-motion';
import {lazy} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {BaseRoutes} from 'shared';
import {RouteWrapper} from './lib';

const Home = lazy(() => import('./Home'));
const Destination = lazy(() => import('./Destination'));
const Crew = lazy(() => import('./Crew'));
const Technology = lazy(() => import('./Technology'));

export const Routing = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path={BaseRoutes.Home}
            element={
              <RouteWrapper>
                <Home />
              </RouteWrapper>
            }
          />
          <Route
            path={BaseRoutes.Destination}
            element={
              <RouteWrapper>
                <Destination />
              </RouteWrapper>
            }
          />
          <Route
            path={BaseRoutes.Crew}
            element={
              <RouteWrapper>
                <Crew />
              </RouteWrapper>
            }
          />
          <Route
            path={BaseRoutes.Technology}
            element={
              <RouteWrapper>
                <Technology />
              </RouteWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
