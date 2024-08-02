
function insert(arr){
    for(let  i=0;i<arr.length;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
            j--;
        }
    }
    return arr;
}
let arr=[3,2,1,6,2,9,3,2];
console.log(`Sorted Array is:${insert(arr)} `);
