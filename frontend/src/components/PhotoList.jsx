import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, addFavorite, removeFavorite, openModal, isPhotoFavorited } = props;
  
  return (
    <ul className="photo-list">
      {photos.map(photo => (
       
        <PhotoListItem
          key={photo.id}
          photo={photo}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          openModal={openModal}
          isFavorited={isPhotoFavorited(photo.id)}
        />
       
      ))}
    </ul>
  );
};

export default PhotoList;
