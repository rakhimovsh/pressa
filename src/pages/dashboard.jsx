import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Dashboard;