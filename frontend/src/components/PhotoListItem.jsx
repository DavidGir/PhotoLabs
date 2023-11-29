import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" id={props.id}>
      <img
        src={props.imageSource}
        alt={`Photo by ${props.username}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={props.profile}
          alt={`${props.username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo__list user-info">
          <h3>{props.username}</h3>
          <p className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
