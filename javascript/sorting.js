const points = [40, 130, 10, 240, 20];
// console.log(points);

// function myfunction() {
//   var point = points.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(point);
// }
// myfunction();

//alternative method :

let temp;
for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {
    if (points[i] > points[j]) {
      temp = points[i];
      points[i] = points[j];
      points[j] = temp;
    }
  }
}

for (let index = 0; index < points.length; index++) {
  console.log(points[index]);
}
