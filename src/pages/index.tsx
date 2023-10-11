import {Header} from 'entities/header';
import {lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

const Home = lazy(() => import('./Home'));

export const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
