import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  // State to track whether the photo is liked or not:
  const { photo, isFavorited, addFavorite, removeFavorite } = props;

  // Make handler for the click event:
  const toggleFavorite = () => (isFavorited ? removeFavorite(photo.id) : addFavorite(photo));

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={toggleFavorite}>
          <FavIcon selected={isFavorited} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;