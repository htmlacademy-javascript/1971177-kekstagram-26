//Import mockObject
import {generateMockObjects} from './mock-data.js';

//Get photos Array
const photosArray = generateMockObjects(12);

//Get element to add photos
const photosContainer = document.querySelector('.pictures');

//Get img template
const imageTemplate = document.querySelector('#picture').content;

//Create fragment
export const imageFragment = document.createDocumentFragment();

photosArray.forEach((photo) => {
  const photoElement = imageTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  imageFragment.appendChild(photoElement);
});

//Push fragment to section
photosContainer.appendChild(imageFragment);
