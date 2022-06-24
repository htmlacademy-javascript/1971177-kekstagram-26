import {getRandomNumber} from './random-number.js';
import {commentTextTemplate, getRandomItemFromArray, splitTextToStrings} from './text-template.js';
import {authorNames} from './author-names.js';

export const getRandomComments = (amount) => {

  // empty array for comments generator
  const comments = [];
  // Generate comments
  for (let comment = 0; comment < amount; comment++) {
    // Generate comments object
    const commentObject = {
      id: comment,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: splitTextToStrings(commentTextTemplate),
      name: getRandomItemFromArray(authorNames)
    };
    comments.push(commentObject);
  }
  return comments;
};
