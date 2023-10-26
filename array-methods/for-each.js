const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => console.log(value));

values.forEach((value, index, array) => {
  const reversedIndex = array.length - 1 - index;
  console.log(array[reversedIndex]);
});
