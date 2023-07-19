   //even numbers in an array

// let arr = [3,6,10,14,8];
// function evenNumber(arr){
//     let evenNumbers = [];
//     for( let i = 0 ; i<arr.length ;i++){
//         if(arr[i] % 2 == 0){
//             evenNumbers.push(arr[i]);
//         }
//     } 
//     return evenNumbers;
// }
// this.evenNumber(arr);
// console.log(evenNumber(arr))

// reverse the string

// const str = "hello";
// const reverseStr = str.split('').reverse().join('');
// console.log(reverseStr)

// function reverseString(str){  
//     let newString = " ";
//     for( let i = str.length-1 ; i >= 0 ;i--){
//              newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString("Hi,my name is Shubham"))

//print even number if they are on even index

// let arr = [5 ,6 ,10 ,3 ,4 , 21];

// function EvenNumber(arr){
//     for (let i = 0 ; i <=arr.length ;i++){
//         if((arr[i]%2 ===0)&& i %2 === 0){
//             console.log(arr[i])
//         }
//     }
// }
// EvenNumber(arr);  

//print odd number if they are on odd index

// function Oddnumber(arr){
//     for(let i= 0 ; i <arr.length ;i++){
//         if (arr[i] % 2 !== 0 && i % 2 !== 0){
//             console.log(arr[i])
//         }
//     }
// }
// Oddnumber(arr);

//find max number in array

// let arr = [3, 6, 10, 14, 8];
// let MaximumNumber = arr[0];

// for(let i = 1; i <arr.length; i++){
//     if(arr[i]>MaximumNumber){
//         MaximumNumber = arr[i]
//     }
// }
// console.log(MaximumNumber);

// find if number is divisible

// function divident(number,div){
//     if(number % div === 0){
//         console.log(`${number/div}`)
//     }
//     else {
//         console.log(`not divisible`)
//     }
// }
// divident (20,5);
// divident(4 ,5);

// second highest number

// let arr = [3, 6, 10, 14, 8];
// let highest = -Infinity; 
// let secondHighest = -Infinity; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//         secondHighest = highest; 
//         highest = arr[i]; 
//     } else if (arr[i] > secondHighest && arr[i] < highest) {
//         secondHighest = arr[i];                     
//     }
// }
// console.log(secondHighest);  
   
// seprate element from array

// const numbers = [45,6,4,3,34];                   
// let txt = " ";
// numbers.forEach(myfunction);
// console.log(txt);

// function myfunction(value){
//     txt += value+ " ";
// }

//fibonacci numbers 

// function fibonacci(n){
//     let series = [0,1];
//     for(let i=2 ;i<n ;i++){
//         let nextNum = series[i-1]+series[i-2];
//         series.push(nextNum)
//     }
//      return series;
// }
// let n = 10;
// console.log(fibonacci(n))


   // console.log(Math.pow(2,3))
   // console.log(Math.floor(3.4))
   // console.log(Math.sqrt(49))  
   // console.log(Math.abs(-4.7))
   // console.log(Math.min(4,6,7,8))
   // console.log(Boolean(32>4))
   // console.log(Math.pow(4,2))
   // console.log("john".constructor)

