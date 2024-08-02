//linear search

function linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;

}
let arr=[4,5,2,6,1,7];
let target=7;
console.log(`Target is at index: ${linear(arr,target)}`);