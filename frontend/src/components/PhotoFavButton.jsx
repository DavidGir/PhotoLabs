import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  // State to track whether the photo is liked or not:
  const [isLiked, setIsLiked] = useState(false);

  // Make handler for the click event:
  const clickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={clickLike}>
          <FavIcon selected={isLiked} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;