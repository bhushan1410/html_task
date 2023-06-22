// showprimes(50);

// function showprimes(limit) {
//   for (let number = 2; number < limit; number++)
//     if (isprime(number))
//      console.log(number);
// }
// function isprime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) 
//     return false;
//   return true;
// }

//alternative method

// function isPrime(number) {
//   if (number < 2) {
//       return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//           return false;
//       }
//   }
//   return true;
// }
// for (let i = 2; i <= 50; i++) {
//   if (isPrime(i)) {
//       console.log(i);
//   }
// }


function isprime(number){
  if(number<2){
    return false;
  }
   for(let i = 2 ; i<= Math.sqrt(number);i++){
       if(number%i === 0){
        return false
       }
   }
     return true;
}
  for(let i = 2 ;i <= 50 ;i++){
    if(isprime(i)){
      console.log(i)
    }
  }
