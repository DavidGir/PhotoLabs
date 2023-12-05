import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/FavoritesModal.scss';
import PhotoListItem from "./PhotoListItem";

const FavoritesModal = (props) => {
  const { favorites, closeModal, addFavorite, removeFavorite } = props;
  
  return (
    <div className="favorites-modal">
      {/* Close button for the modal */}
      <button className="favorites-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <h1 className="favorites-title">📸 Your Favorites 📸</h1>
      <div className="favorites-modal__grid">
        {/* Map over favorites to display them */}
        {favorites.map(photo => (
          <div key={photo.id} className="favorite-photo">
            <PhotoListItem
              photo={photo}
              isPhotoFavorited={() => true}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesModal;
