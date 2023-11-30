import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { favorites } = props;
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favorites.length > 0}/>
      {favorites.length > 0 && (
        <span className="fav-badge__count">{favorites.length}</span>
      )}
    </div>
  );
};

export default FavBadge;