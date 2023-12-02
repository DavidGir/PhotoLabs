import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { photo, addFavorite, removeFavorite, openModal, isPhotoFavorited } = props;

  // Handle click only if openModal is provided
  const handleClick = () => {
    if (openModal) {
      openModal(photo);
    }
  };

  return (
    <div className="photo-list__item" id={photo.id} onClick={handleClick}>
      <PhotoFavButton
        photo={photo}
        isPhotoFavorited={isPhotoFavorited}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
      <img
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.username}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={photo.user.profile}
          alt={`${photo.user.username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo__list user-info">
          <h3>{photo.user.name}</h3>
          <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
