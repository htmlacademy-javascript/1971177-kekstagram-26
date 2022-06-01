// Pick random number
const numbersArray = [];

const randomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return ('Number can be only >= 0');
  } else if (to < from) {
    return ('Number TO cant be lower than FROM');
  }
  for (let i = from; i <= to; i++) {
    numbersArray.push(i);
  }
  const Number = numbersArray[Math.floor(Math.random() * numbersArray.length)];
  return (`Random number: ${Number}`);
};

// eslint-disable-next-line no-console
console.log(randomNumber(37, 1000));


//Check string max length
const stringLength = (string, maxlength) => {
  if (string.length > maxlength) {
    return (`Too long text: ${string.length}, maximum characters: ${maxlength}`);
  }
  return (`Text length: ${string.length}, characters left: ${maxlength - string.length}`);
};

// eslint-disable-next-line no-console
console.log(stringLength('Text string for count length', 30));

