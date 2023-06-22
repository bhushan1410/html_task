// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function () {
//   return 0.7 - Math.random();
// });
// console.log(points);

let points = [5, 23, 6, 34];
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));

