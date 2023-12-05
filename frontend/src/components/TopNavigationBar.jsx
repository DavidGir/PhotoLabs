import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = (props) => {
  const { topics, favorites, onTopicClick, onToggleDarkMode, isDarkMode, toggleFavoritesModal } = props;
  
  // Styling state to create flashing camera:
  const [isFlashing, setIsFlashing] = useState(false);
  // Handle click on camera to toggle dark mode and flash state:
  const handleCameraClick = () => {
    onToggleDarkMode();
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 1000);
  };

  const handleFavoritesClick = () => {
    if (favorites.length > 0) {
      toggleFavoritesModal();
    } else {
      alert('You have no favorite photos yet!');
    }
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
        <button onClick={handleCameraClick} className="icon-button">
          <FontAwesomeIcon
            icon={faCamera}
            className={`icon ${isDarkMode ? 'icon-on' : 'icon-off'} ${isFlashing ? 'icon-flash' : ''}`}
          />
        </button>
      </span>
      <TopicList topics={topics} onTopicClick={onTopicClick}/>
      <FavBadge favorites={favorites} toggleFavoritesModal={() => handleFavoritesClick()}/>
    </div>
  );
};

export default TopNavigationBar;