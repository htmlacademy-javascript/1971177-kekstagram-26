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


//Check string max length
const checkStringLength = (string, maxlength) => string.length <= maxlength;

// eslint-disable-next-line no-console
console.log(checkStringLength('Text string for count length', 10));

