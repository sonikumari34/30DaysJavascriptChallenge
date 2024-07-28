//task 8:

function frequency(arr,target,i=0){
    let n=arr.length;
    if(i>=n){
        return 0;
    }
    let count=0;
    if(arr[i]==target){
        count++;

    }
  return  count+frequency(arr,target,i+1);
}
//test casese:
let arr=[1,2,4,6,4,2,6,2,2,4];
console.log(frequency(arr,2));
let arr2 = [1, 2, 4, 6, 4, 2, 6, 2];
console.log(frequency(arr2, 5)); // Expected output: 0
let arr3 = [3, 3, 3, 3, 3];
console.log(frequency(arr3, 3)); // Expected output: 5
console.log(frequency(arr3, 1)); // Expected output: 0
let arr4 = [7];
console.log(frequency(arr4, 7)); // Expected output: 1
console.log(frequency(arr4, 1)); // Expected output: 0
let arr6 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(frequency(arr6, 1)); // Expected output: 30
let arr7 = [0, -1, -1, 2, 3, -1, 4, 5, 2, -1];
console.log(frequency(arr7, -1)); // Expected output: 4
console.log(frequency(arr7, 2)); // Expected output: 2


