//task 2:
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let nminus1 = fib(n - 1);
    let nminus2 = fib(n - 2);
    return nminus1 + nminus2;
}
console.log(fib(0)); 
console.log(fib(1)); 
console.log(fib(2)); 
console.log(fib(3));
console.log(fib(10));  // Output: 5
