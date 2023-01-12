import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AppRouter from './AppRouter';
import NavBar from "./components/navBar/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
    );
};
export default App;