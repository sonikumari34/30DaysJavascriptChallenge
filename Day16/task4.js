// task 4 :

function findMax(arr,n){
    if(n===1){
        return arr[0] ;
    }
    return  Math.max(arr[n-1],findMax(arr,n-1));

}
let arr1=[1];
let arr = [1, 2, 100, 4, 5];
let n1 = arr1.length;
console.log(findMax(arr1, n1)); 
let n = arr.length;
console.log(findMax(arr, n)); 
