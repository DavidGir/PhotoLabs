import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites(prevFavorites => [...prevFavorites, photo]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(prevFavorites => prevFavorites.filter(photo => photo.id !== photoId));
  };
  
  return (
    <div className="home-route">
      <TopNavigationBar
        favorites={favorites}
        topics={topics}
      />
      <PhotoList
        photos={photos}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default HomeRoute;
