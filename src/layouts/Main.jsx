import React from 'react'
import { Outlet } from 'react-router';
import NavBar from '../page/shared/NavBar';
import Footer from '../page/shared/Footer';

const Main = () => {
  return (
    <div className="font-barlow dark:bg-blue-gray-900  duration-100">
      <NavBar />
      <div className="mx-auto max-w-7xl px-7 lg:px-2 mt-10 mb-10 min-h-[calc(100vh-720px)]"></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main