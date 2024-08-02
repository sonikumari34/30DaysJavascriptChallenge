//task 2:Selection sort:

function Selection_Sort(arr){
   for(let i=0;i<arr.length-1;i++){
    let min=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
    }
    let temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp;

   }
   return arr;
}
let arr=[3,2,1,6,2,9,3,2];
console.log(`Sorted Array is:${Selection_Sort(arr)} `);
