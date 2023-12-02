import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  // Using custom hook to get state and actions:
  const { state, actions, isPhotoFavorited } = useApplicationData();

  // Destructuring state and actions for easier access
  const { photosWithFavoritedStatus, selectedPhoto, similarPhotos } = state;
  const { addFavorite, removeFavorite, displayPhotoDetails, closeModal } = actions;

  return (
    <div className="home-route">
      <TopNavigationBar favorites={state.favorites} topics={topics} />
      <PhotoList
        photos={photosWithFavoritedStatus}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        openModal={displayPhotoDetails}
        isPhotoFavorited={isPhotoFavorited}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={closeModal}
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
