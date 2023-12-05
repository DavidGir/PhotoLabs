import { useReducer, useEffect } from 'react';
import axios from 'axios';

// Define the initial state that will be used by the reducer function:
const initialState = {
  // List of favorite photos:
  favorites: [],
  // Currently selected photo when modal is open:
  selectedPhoto: null,
  // Photos similar to the selected photo:
  similarPhotos: [],
  // All photos data from API:
  photoData: [],
  // All topics data from API:
  topicData: [],
  // State for the favorites modal:
  showFavoritesModal: false
};

// Action types that will be used by the reducer function and application:
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_FAVORITES_MODAL: 'TOGGLE_FAVORITES_MODAL'
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
    // The API returns 'similar_photos' which causes ESlint errors; transform and rename to 'similarPhotos':
    const similarPhotos = action.payload.similar_photos.map(photo => ({
      ...photo,
      isFavorited: state.favorites.some(favPhoto => favPhoto.id === photo.id)
    }));
    return {
      ...state,
      selectedPhoto: action.payload,
      similarPhotos
    };
  }
  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      selectedPhoto: null
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload
    };
  case ACTIONS.TOGGLE_FAVORITES_MODAL:
    return {
      ...state,
      // Toggling modal visibility:
      showFavoritesModal: !state.showFavoritesModal
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
  const toggleFavoritesModal = () => dispatch({ type: ACTIONS.TOGGLE_FAVORITES_MODAL});

  // useEffect func for fetching photoData through API:
  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  // useEffect func for fetching topicData through API:
  useEffect(() => {
    axios.get('/api/topics')
      .then(response => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  // Function which checks if a photo has been favorited or not:
  const isPhotoFavorited = photoId => state.favorites.some(favPhoto => favPhoto.id === photoId);

  // Selector function to derive photos with favorited status:
  const selectPhotosWithFavoritedStatus = () => {
    return state.photoData.map(photo => ({
      ...photo,
      isFavorited: isPhotoFavorited(photo.id)
    }));
  };

  // Function that fetches photos based on the topic ID:
  const getPhotosByTopic = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then(response => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => console.error('Error fetching photos by topic:', error));
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
      closeModal,
      toggleFavoritesModal
    },
    isPhotoFavorited,
    getPhotosByTopic
  };
};

export default useApplicationData;