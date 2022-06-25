// Template names for comments
export const authorNames = ['Александр', 'Матвей', 'Артем', 'Михаил', 'Иван', 'Тимофей', 'Кирилл', 'Дмитрий', 'Даниил', 'Мария',
  'Варвара', 'Виктория', 'Алиса', 'Ксения', 'Василиса', 'Милана', 'Ева', 'Александра'];

// Template text for comments
export const commentTextTemplate = 'Всё отлично!\n' +
  'В целом всё неплохо. Но не всё.\n' +
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.\n' +
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.\n' +
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.\n' +
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';


// Pick random number function
export const getRandomNumber = (from, to) => {

  const numbers = [];
  if (from < 0 || to < 0) {
    return null;
  } else if (from > to) {
    [from, to] = [to, from];
  }
  for (let i = from; i <= to; i++) {
    numbers.push(i);
  }
  return numbers[Math.floor(Math.random() * numbers.length)];
};

// Get random item from array function
export const getRandomItemFromArray = (names) => names[Math.floor(Math.random() * names.length)];

// Get string from text template function
export const splitTextToStrings = (string) => (getRandomItemFromArray(string.split('\n')));

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

// Elements generator function
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
