import React from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from './components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
