import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos } = props;
  
  return (
    <ul className="photo-list">
      {photos.map(item => (
       
        <PhotoListItem
          key={item.id}
          id={item.id}
          location={{ city: item.location.city, country: item.location.country }}
          imageSource={item.urls.regular}
          username={item.user.username}
          profile={item.user.profile}
        />
       
      ))}
    </ul>
  );
};

export default PhotoList;
