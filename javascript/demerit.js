checkspeed(130);
function checkspeed(speed) {
  const speedlimit = 70;
  const kmperpoints = 5;

  if (speed <= speedlimit) console.log("ok");
  else {
    const points = Math.floor((speed - speedlimit) / kmperpoints);

    if (points >= 12) console.log("license suspended");
    else console.log("points", points);
  }
}
//   Math.floor()
// if with no curly braces
