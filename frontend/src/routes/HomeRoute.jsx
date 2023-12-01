import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  // Add state to track currently selected photo for modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const addFavorite = (photo) => {
    setFavorites(prevFavorites => [...prevFavorites, photo]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(prevFavorites => prevFavorites.filter(photo => photo.id !== photoId));
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
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
        openModal={openModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};

export default HomeRoute;
