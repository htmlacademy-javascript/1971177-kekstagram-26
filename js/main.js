// Pick random number
const getRandomNumber = (from, to) => {
  const numbersArray = [];
  if (from < 0 || to < 0) {
    return null;
  } else if (from > to) {
    [from, to] = [to, from];
  }
  for (let i = from; i <= to; i++) {
    numbersArray.push(i);
  }
  return numbersArray[Math.floor(Math.random() * numbersArray.length)];
};

// eslint-disable-next-line no-console
console.log(getRandomNumber(10, 1));


// Pick random number - MDN example (short link - shorturl.at/eDFS4)
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return null;
  } else if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

// eslint-disable-next-line no-console
console.log(getRandomIntInclusive(-10, 1));


// Check string max length
const checkStringLength = (string, maxlength) => string.length <= maxlength;

// eslint-disable-next-line no-console
console.log(checkStringLength('Text string for count length', 10));

