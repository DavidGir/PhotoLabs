import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const { state, actions } = useApplicationData();
  const { photosWithFavoritedStatus, selectedPhoto, similarPhotos } = state;
  const { addFavorite, removeFavorite, openModal, closeModal, isPhotoFavorited } = actions;

  return (
    <div className="home-route">
      <TopNavigationBar favorites={state.favorites} topics={topics} />
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
