import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import FavoritesModal from '../components/FavoritesModal';

const HomeRoute = (props) => {
  // Using custom hook to get state, actions and funcs:
  const { state, actions, isPhotoFavorited, getPhotosByTopic } = useApplicationData();

  // Destructuring state and actions for easier access
  const { photosWithFavoritedStatus, selectedPhoto, similarPhotos, topicData, showFavoritesModal } = state;
  const { addFavorite, removeFavorite, displayPhotoDetails, closeModal, toggleFavoritesModal } = actions;
  // Props passed down from App root component:
  const { toggleDarkMode, isDarkMode } = props;

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
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        toggleFavoritesModal={toggleFavoritesModal}
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
      {showFavoritesModal && (
        <FavoritesModal
          favorites={state.favorites}
          // toggleFavoritesModal to close the Favorites Modal
          closeModal={toggleFavoritesModal}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
    </div>
  );
};

export default HomeRoute;
