import React from 'react';
import Tours from '../../components/Tours/Tours';
import Banner from '../../components/Banner/Banner';
import Reviews from '../../components/Reviews/Reviews';
import Benefit from '../../components/Benefit/Benefit';
import Sidebar from '../../components/Sidebar/Sidebar';
const Home = () => {
  return (
    <>
      <Banner />
      <Tours />
      <Benefit />
      <Sidebar />
      <Reviews />
    </>
  );
};

export default Home;
