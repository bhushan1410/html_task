
let arr =[0,1,2,3,4,5]
function evennumber(arr){
    // for(let i = 0; i<arr.length; i++ ){
    //     if((arr[i]%2 === 0)&& i%2 ===0){
    //         console.log(arr[i])
    //     }
    // }/3


   return  arr.map((temp) => temp % 2 == 0)



}
console.log(evennumber(arr));

