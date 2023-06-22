const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 8;
}
console.log(numbers2);
