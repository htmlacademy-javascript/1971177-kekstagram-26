// Template names for comments
const authorNames = ['Александр', 'Матвей', 'Артем', 'Михаил', 'Иван', 'Тимофей', 'Кирилл', 'Дмитрий', 'Даниил', 'Мария',
  'Варвара', 'Виктория', 'Алиса', 'Ксения', 'Василиса', 'Милана', 'Ева', 'Александра'];

// Template text for comments
const commentTextTemplate = 'Всё отлично!\n' +
  'В целом всё неплохо. Но не всё.\n' +
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.\n' +
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.\n' +
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.\n' +
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

// Pick random number function
const getRandomNumber = (from, to) => {
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

// Check string max length function
const checkStringLength = (string, maxlength) => string.length <= maxlength;

// Get random item from array function
const getRandomItemFromArray = (names) => names[Math.floor(Math.random() * names.length)];

// Get string from text template function
const splitTextToStrings = (string) => (getRandomItemFromArray(string.split('\n')));

const getRandomComments = (amount) => {
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
const generateMockObjects = (amount) => {
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

generateMockObjects(25);
checkStringLength('some string', 1);
