import { useState } from 'react';
import photos from '../mocks/photos';

const useApplicationData = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const addFavorite = (newFavorite) => {
    setFavorites(prev => [...prev, newFavorite]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(prev => prev.filter(photo => photo.id !== photoId));
  };

  const isPhotoFavorited = (photoId) => {
    return favorites.some(favPhoto => favPhoto.id === photoId);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    const similarPhotoObjects = Object.values(photo.similarPhotos).map(photo => ({
      ...photo,
      isFavorited: isPhotoFavorited(photo.id)
    }));
    setSimilarPhotos(similarPhotoObjects);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // Add favorited status as a key/ property to photos object:
  const photosWithFavoritedStatus = photos.map(photo => ({
    ...photo,
    isFavorited: isPhotoFavorited(photo.id)
  }));

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