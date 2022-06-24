// Elements generator function
import {getRandomNumber} from './random-number.js';
import {getRandomComments} from './random-comment.js';

export const generateMockObjects = (amount) => {
  // empty array for objects
  const photos = [];
  // Generate basic object information
  for (let item = 1; item <= amount; item++) {
    // Generate basic object
    const photoDescription = {
      id: item,
      url: `photos/${item}.jpg`,
      description: 'Some photo description',
      likes: getRandomNumber(15, 200)
    };

    // Add comments array to basic object
    photoDescription.comments = getRandomComments(getRandomNumber(1, 5));
    // Push final object to array
    photos.push(photoDescription);
  }
  return photos;
};
