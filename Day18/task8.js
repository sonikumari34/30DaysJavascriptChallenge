//Rotate array by k position:

function Rotatetoleft(arr,n,k){
    if(n==0){
        return;
    }
    k=k%n;
    if(k>n){
        return;
    }
    let temp=[k];
    for(let i=0;i<k;i++){
        temp[i]=arr[i];
    }
    for(let i=0;i<n-k;i++){
      arr[i]=arr[i+k];
    }
   // let s=0;
    for(let i=n-k;i<n;i++){
        arr[i]=temp[i-n+k];
    }
    return arr;
}
let n=7;
let arr=[1,2,3,4,5,6,7];
let k=2;
//console.log(`Roataed array:${Rotatetoleft(arr,n,k)}`)

//*****************************************************Reverse Approach**************************************************** 

function reverse(arr,start,end){
    while(start<=end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr;
    

}
let arr2=[1,2,3,4,5,6];
let n2=arr.length;
let d=2;
console.log(reverse( arr2,0,d-1));
console.log(reverse(arr2,d,n2-1));
console.log(`reversed arrays : ${reverse(arr,0,n2-1)}`);




