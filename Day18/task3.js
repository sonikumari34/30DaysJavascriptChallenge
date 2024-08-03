// task 3: Quick sort Algorithms

function    quickSort(arr,low,high){
    if(low<high){
       let   partitionIndex=partition(arr,low,high);
        
        quickSort(arr,low,partitionIndex-1);

        quickSort(arr,partitionIndex+1,high);
    }
        
}

function  partition(arr,low ,high){
    let pivot = arr[low];
   let   i=low;
   let j=high;

   while(i<j){
    while(arr[i]<=pivot && i<high) {
        i++;
    }
    while(arr[j]>pivot && j>low){
        j--;
    }
    if(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
   }
   let temp=arr[low];
   arr[low]= arr[j];
   arr[j]=temp;
   return j;

}
let arr=[4,5,6,2,9,1,7,4];
let low= 0;
let high =arr.length - 1 ;
quickSort(arr,low,high)
console.log("Soted array :"+ arr);