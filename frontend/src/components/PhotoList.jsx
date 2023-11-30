import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, addFavorite, removeFavorite, favorites } = props;
  
  return (
    <ul className="photo-list">
      {photos.map(photo => (
       
        <PhotoListItem
          key={photo.id}
          photo={photo}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
       
      ))}
    </ul>
  );
};

export default PhotoList;
