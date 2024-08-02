// Function to merge two sorted arrays
 /*function mergeSortedArrays(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = []; // New array to hold merged results
    let k = 0; // Iterator for result array

    // Copy elements from arr1 to result
    for (let i = 0; i < len1; i++) {
        result[k++] = arr1[i];
        
    }

    // Copy elements from arr2 to result
    for (let i = 0; i < len2; i++) {
        result[k++] = arr2[i];
    }

    return result;
} 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(`Merged Array: ${mergeSortedArrays(arr1, arr2)}`);   */

/* *********************************************************MERGE SORT APPLICATION********************************************************************** */

// Applying merge sort Alogrithm


function mergeArr(arr1,arr2){
    let len1=arr1.length;
    let len2=arr2.length;
    let i=0;
    let j=0;
    let result=[];
    
    //Merge elements from both array
    while(i<len1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]);
        }
    }
    // Copy any remaining elements from arr1
    while(i<len1){
        result.push(arr1[i++]);
    }
    // Copy any remaining elements from arr2
    while(j<len2){
        result.push(arr2[j++]);
    }

    return result;
} 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(`Merged Array: ${mergeArr(arr1, arr2)}`); 
