import { useReducer } from 'react';
import photos from '../mocks/photos';

// Define the initial state that will be used by the reducer function:
const initialState = {
  // List of favorite photos:
  favorites: [],
  // Currently selected photo when modal is open:
  selectedPhoto: null,
  // Photos similar to the selected photo:
  similarPhotos: [],
  // All photos data from mock data:
  photos:[...photos]
};

// Action types that will be used by the reducer function and application:
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Reducer function to handle state changes based on actions:
const reducer = function(state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favorites: [...state.favorites, action.payload]
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favorites: state.favorites.filter(photo => photo.id !== action.payload)
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS: {
    const similarPhotoObjects = Object.values(action.payload.similarPhotos).map(photo => ({
      ...photo,
      isFavorited: state.favorites.some(favPhoto => favPhoto.id === photo.id)
    }));
    return {
      ...state,
      selectedPhoto: action.payload,
      similarPhotos: similarPhotoObjects
    };
  }
  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      selectedPhoto: null
    };
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

// Custom hook to manage application data using useReducer:
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Display actions for adding/removing favorites, displaying photo details and closing the modal:
  const addFavorite = photo => dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
  const removeFavorite = photoId => dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  const displayPhotoDetails = photo => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: photo });
  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_MODAL });

  // Function which checks if a photo has been favorited or not:
  const isPhotoFavorited = photoId => state.favorites.some(favPhoto => favPhoto.id === photoId);

  // Selector function to derive photos with favorited status:
  const selectPhotosWithFavoritedStatus = () => {
    return state.photos.map(photo => ({
      ...photo,
      isFavorited: isPhotoFavorited(photo.id)
    }));
  };

  // Return state, actions handlers and expose function:
  return {
    state: {
      ...state,
      photosWithFavoritedStatus: selectPhotosWithFavoritedStatus()
    },
    actions: {
      addFavorite,
      removeFavorite,
      displayPhotoDetails,
      closeModal
    },
    isPhotoFavorited
  };
};

export default useApplicationData;