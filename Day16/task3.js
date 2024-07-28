//task 3:
function sum(arr, n, i) {
    if (i >= n) {
        return 0 ;
    }
    return arr[i] + sum(arr, n, i + 1);
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

console.log(sum(arr, n, 0)); // Output: 15


