// let number = 20;
//  let count = 0 ;
//  for(i = 1; i<number/2 ;i++){
//     if (number%i == 0){
//       count++;

//     }
//  } 
//  if (count==2) {
//     console.log("is prime");
//  }
//  else{
//     console.log("not prime");
//  }

// const concept = ["array","can","be","muted"];

// function Ar(srr){
//    srr[3]='Muated'
// }
//    Ar(concept);
//    console.log(concept);


// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both arrays have the number: ' + myArray[i]);
//     }
//   }
// }


for (let num = 1; num <= 20; num++) {
  let isPrime = true;
  
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;

      }
    }
    
    if (isPrime) {
      console.log(num);
    }
  }
}


