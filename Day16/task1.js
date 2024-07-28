//Day 16 Recursion
//Tasks/Activities:

//task 1: //calculate factorial of a number 
function fact(num){
    if(num==1){
        return 1;
    }
  return num* fact(num-1);
}
let num=8;

console.log(`Factorial of  ${num} is = ${fact(num)}`);



