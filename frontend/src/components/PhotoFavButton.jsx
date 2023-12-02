import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  // State to track whether the photo is liked or not:
  const { photo, isPhotoFavorited, addFavorite, removeFavorite } = props;

  // Make handler for the click event:
  const toggleFavorite = (event) => {
    // Prevent triggering modal open:
    event.stopPropagation();
    return isPhotoFavorited ? removeFavorite(photo.id) : addFavorite(photo);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={toggleFavorite}>
          <FavIcon selected={isPhotoFavorited} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;