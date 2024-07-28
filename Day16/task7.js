//task 7:

function binarySearch(arr,target,left=0,right=arr.length-1){
    
    if(left>right){
        return -1;
    }
    let mid=Math.floor(left+right)/2;

    if(target===arr[mid]){
        return mid;

    }
    else if(target>arr[mid]){
        return   binarySearch(arr,target,mid+1,right);

    }else{
        return   binarySearch(arr,target,left,mid-1);

    }
   
    
    
}

let arr=[1,2,3,4,5,6,7];
console.log(binarySearch(arr,3));