import React from 'react'
import { Outlet } from 'react-router';
import NavBar from '../page/shared/NavBar';
import Footer from '../page/shared/Footer';

const Main = () => {
  return (
    <div className="font-barlow dark:bg-blue-gray-900  duration-100">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default Main