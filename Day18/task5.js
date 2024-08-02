//Binary Search

function BinarySearch(arr,target){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=(left+right)/2;
        if(target===arr[mid]){
            return mid;
        }
        else if(target<arr[mid]){
            right=mid-1;

        }
        else{
            left=mid+1;
        }

    }
    return -1;

}
let arr=[1,2,3,4,5,7,8];
let target=20;
console.log(`Target is at index: ${BinarySearch(arr,target)}`);
