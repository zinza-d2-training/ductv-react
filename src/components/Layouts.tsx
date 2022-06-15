import * as React from 'react';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layouts;
