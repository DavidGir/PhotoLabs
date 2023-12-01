import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  // Add state to track currently selected photo for modal:
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [similarPhotos, setSimilarPhotos] = useState([]);

  const addFavorite = (newFavorite) => {
    setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(prevFavorites => prevFavorites.filter(photo => photo.id !== photoId));
  };

  // Function to check if a photo is favorited:
  const isPhotoFavorited = (photoId) => favorites.some(favPhoto => favPhoto.id === photoId);

  // Add isFavorited property to each photo:
  const photosWithFavoritedStatus = photos.map(photo => ({
    ...photo,
    isFavorited: isPhotoFavorited(photo.id)
  }));
  
  const openModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);

    // Extract similar photo objects from the selected photo's similarPhotos and add isFavorited property to them:
    const similarPhotoObjects = Object.values(selectedPhoto.similarPhotos).map(photo => ({
      ...photo,
      isFavorited: isPhotoFavorited(photo.id)
    }));
    setSimilarPhotos(similarPhotoObjects);
  };
  
  return (
    <div className="home-route">
      <TopNavigationBar
        favorites={favorites}
        topics={topics}
      />
      <PhotoList
        photos={photosWithFavoritedStatus}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        openModal={openModal}
        isPhotoFavorited={isPhotoFavorited}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={() => setSelectedPhoto(null)}
          similarPhotos={similarPhotos}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isPhotoFavorited={isPhotoFavorited}
        />
      )}
    </div>
  );
};

export default HomeRoute;
