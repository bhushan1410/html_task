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
// evenNumber(arr);
// console.log(evenNumber(arr))

// reverse the string

// let str = "Hi , my name is Shubham";

//with in build function

// function reverseString(str){
//     return str.split(" ").reverse().join(" ")


// reverseString("hello");

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

//print odd numbe if they are on odd index

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


let arr = [3, 6, 10, 14, 8];
let highest = -Infinity; 
let secondHighest = -Infinity; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
        secondHighest = highest; 
        highest = arr[i]; 
    } else if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i]; 
    }
}
console.log(secondHighest);



















