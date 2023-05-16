let hours = new Date().getHours();
if (hours < 19) {
  greeting = "good day";
} else {
  greeting = "good evening";
}
console.log(greeting);
