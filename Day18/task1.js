                                              //Day 18: Alogrithms
//task 1:
//Implement Bubble sort algorithm to sort an Array

function fun(arr){
    for(let i=arr.length;i>=0;i--){
        let swap=0;
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]){
              let  temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              swap=1;
            }
        }
        if(swap==0){
            break;

        }
        console.log("run\n");
    }
    return arr;
}
//let arr =[5,2,7,1,8,3];
let arr=[1,2,3,4,5,6]   //tc=O(n)  best case
console.log(`sorted Array are:${fun(arr)}`);


