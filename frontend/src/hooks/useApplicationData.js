import { useState } from 'react';
import photos from '../mocks/photos';

const useApplicationData = () => {
  // State to track user's favorite photos:
  const [favorites, setFavorites] = useState([]);

  // State to track the currently selected photo for display in modal:
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // State to track similar photos of the selected photo:
  const [similarPhotos, setSimilarPhotos] = useState([]);

  // Function to add a photo to favorites:
  const addFavorite = (newFavorite) => {
    setFavorites(prev => [...prev, newFavorite]);
  };

  // Function to remove a photo from favorites:
  const removeFavorite = (photoId) => {
    setFavorites(prev => prev.filter(photo => photo.id !== photoId));
  };

  // Function to check if a photo is in favorites:
  const isPhotoFavorited = (photoId) => {
    return favorites.some(favPhoto => favPhoto.id === photoId);
  };

  // Function to open the modal and display the selected photo
  // Also sets similar photos for the selected photo within the modal:
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    const similarPhotoObjects = Object.values(photo.similarPhotos).map(photo => ({
      ...photo,
      isFavorited: isPhotoFavorited(photo.id)
    }));
    setSimilarPhotos(similarPhotoObjects);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // Adding favorited status as a property to each photo in the photos array
  // This will allow for easy tracking of whether a photo is favorited or not:
  const photosWithFavoritedStatus = photos.map(photo => ({
    ...photo,
    isFavorited: isPhotoFavorited(photo.id)
  }));

  // Exposing the state and actions for use in components:
  return {
    state: {
      favorites,
      selectedPhoto,
      similarPhotos,
      photosWithFavoritedStatus
    },
    actions: {
      addFavorite,
      removeFavorite,
      openModal,
      closeModal,
      isPhotoFavorited
    }
  };
};

export default useApplicationData;