import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  // Create array with three elements:
  const photos = new Array(3);

  return (
    <div className="App">
      {/* Create an array named 'photos' with a length of 3 and fill it with undefined values.
      // This is done so that the array has actual 'slots' that can be iterated over.
      // The fill() method is necessary because new Array(3) creates an array with empty slots,
      // which are not considered as actual elements by the map() function. */}
      {photos.fill().map((_, index) => (
        <PhotoListItem
          key={index}
          username={sampleDataForPhotoListItem.username}
          imageSource={sampleDataForPhotoListItem.imageSource}
          id={sampleDataForPhotoListItem.id}
          location={sampleDataForPhotoListItem.location}
          profile={sampleDataForPhotoListItem.profile}
        />
      ))}
    </div>
  );
};

export default App;
