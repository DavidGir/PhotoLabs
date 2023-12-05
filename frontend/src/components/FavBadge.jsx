import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { favorites, toggleFavoritesModal } = props;
  console.log(favorites);
  return (
    <div className='fav-badge'>
      <button onClick={toggleFavoritesModal}>
        <FavIcon displayAlert={favorites.length > 0}/>
        {favorites.length > 0 && (
          <span className="fav-badge__count">{favorites.length}</span>
        )}
      </button>
    </div>
  );
};

export default FavBadge;