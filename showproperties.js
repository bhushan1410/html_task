const movie = {
  title: "a",
  releaseyear: 2023,
  rating: 3.5,
  director: "b",
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

let b = ["a", "b", "c", "d"];
b.push("e");
console.log(b);

console.log(b);
