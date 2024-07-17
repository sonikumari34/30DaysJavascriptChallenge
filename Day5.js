//Day 5: Functions
//Activities:

//Activity 1:Function declartion

//Task 1:

function evenorodd(num){
    if(num%2===0){
        console.log(`${num} is a even number`);

    }else{
        console.log(`${num} is a odd number`);

    }

}
evenorodd(13);

//Task 2:

function square(num){
    return num*num;
}
square(10);
console.log(square(10));

//Activity:Function Expression
//task 3:
function maxNum(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(maxNum(12,66));
//task 4:
function conCat(){
    let s="Hello ";
    let p="World";
    return s+p;


}
console.log(conCat());

//Activity 3:Arrow Functions
//task 5:
let sum=(a,b)=> {
    return a+b;
}
console.log( "sum of two number is:"+sum(5,100));
   
//task 6:

const containsChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return true;
      }
    }
    return false;
};
  
  
  console.log(containsChar("soni", "s")); // true
  console.log(containsChar("Hello", "r")); // false

//Inbuilt function to find whether the char is present in string or not
const contains = (str, char) => str.includes(char);
console.log(contains("soni","p"));

//Activity 4:Function Parameters and default values
//Task 8:

function product(num,num2=8){
    return num*num2;
}
console.log(`product of two number is ${product(234,4)}`);
console.log(`product of two number is ${product(4)}`);

//task 8:
function greet(name,age=18){
  return   `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Anita",19));

//Activity 5:Higher-order Functions

//task 9:

function sayHello(){
    console.log("Hello!");
}
function repeatFun(fun,num){
    for(let i=1;i<=num;i++){
        fun();
    }

};
function sayHello(){
    console.log("Hello!");
};
repeatFun(sayHello,5);

//task 10;
const applyFunctions = (fn1, fn2, value) => {
    let  result1 = fn1(value);
    let result2 = fn2(result1);
    return result2;
  };
  
  
  let  addOne = (x) => x + 1;
  let  sq = (y) => y * y;
  
  const result = applyFunctions(addOne, sq, 7);
  console.log(result); 
  
