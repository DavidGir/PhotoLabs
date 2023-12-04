import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  // Using custom hook to get state, actions and funcs:
  const { state, actions, isPhotoFavorited, getPhotosByTopic } = useApplicationData();

  // Destructuring state and actions for easier access
  const { photosWithFavoritedStatus, selectedPhoto, similarPhotos, topicData } = state;
  const { addFavorite, removeFavorite, displayPhotoDetails, closeModal } = actions;

  // Function to be called when a topic is clicked:
  const handleTopicClick = (topicId) => {
    // This will trigger fetching photos for the selected topic:
    getPhotosByTopic(topicId);
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        favorites={state.favorites}
        topics={topicData}
        onTopicClick={handleTopicClick}
      />
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
