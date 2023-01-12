import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from './views/Sessions/LogIn';
import HomeView from './views/home/HomeView';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
};

export default AppRouter;