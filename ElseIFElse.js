let hours = new Date().getHours();
if (hours < 13) {
  greeting = "good morning";
} else if (hours < 20) {
  greeting = "good Evening";
} else {
  greeting = "good night";
}
console.log(greeting);
