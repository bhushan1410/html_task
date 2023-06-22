//program for checking anagram,anagram check if two strings are equal;

// function areAnagram(str1,str2){
   
//     let n1 = str1.length;
//     let n2 = str2.length;

//     if(n1 !== n2){
//         return false;
//     }
    
//     str1 = str1.split('').sort().join('');
//     str2 = str2.split('').sort().join('');

//     for(let i = 0; i<n1 ;i++){
//         if(str1[i] != str2[i]){
//             return false;
//         }
//     }
//     return true;
// }
// let str1 = 'abcd';
// let str2 = 'bcda';
//    if (areAnagram(str1,str2)){
//     console.log( "The two strings are anagram of each other")
//    }
//    else{
//     console.log("The two strings are not anagram of each other")
//    }
function convertDateFormat(dateString) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const parts = dateString.split('-');
    const day = parts[0];
    const monthIndex = Number.parseInt(parts[1]) - 1;
    const year = parts[2];
  
    const month = months[monthIndex];
  
    return `${day} ${month} ${year}`;
  }
  
  const inputDate = '22-06-2023';
  const formattedDate = convertDateFormat(inputDate);
  console.log(formattedDate);  // Output: 22 June 2023
  