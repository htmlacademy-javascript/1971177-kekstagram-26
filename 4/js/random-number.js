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
