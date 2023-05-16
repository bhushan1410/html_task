let time = new Date().getHours();
if (time < 10) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
