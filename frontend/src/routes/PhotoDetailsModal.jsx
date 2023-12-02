import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  const { photo, closeModal, similarPhotos, addFavorite, removeFavorite, isPhotoFavorited } = props;

  // Checks if the main photo is favorited:
  const isMainPhotoFavorited = isPhotoFavorited(photo.id);

  return (
    <div className="photo-details-modal">
      {/* Close button for the modal */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Large main picture */}
      <div className="photo-details-modal__image">
        <PhotoFavButton
          photo={photo}
          isPhotoFavorited={isMainPhotoFavorited}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
        <img className="photo-details-modal__image" src={photo.urls.regular} alt={`Photo by ${photo.user.username}`}
        />
        
      </div>
      
      {/* Photographer profile and details */}
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={`${photo.user.username}'s profile`}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div>{photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Photos List */}
      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        <PhotoList
          photos={similarPhotos}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isPhotoFavorited={isPhotoFavorited}
        />
      </div>

    </div>

    
  );
};

export default PhotoDetailsModal;
