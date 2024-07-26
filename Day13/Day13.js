//const addTwoNumber=require('./Activity1');
import { addTwoNumber } from "./modules/task1.js";
import{person} from "./modules/task2.js"
import math  from "./modules/task3.js";
import generateTable from "./modules/task4.js";
import *as utils from "./modules/task5.js";
//task 1:
let num1=10;
let num2=20;
const sum=addTwoNumber(num1,num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// task 2:
person.method();

// task 3:
const n=10;
const n2=5;
console.log(`using name default export: `);
console.log(`subtraction:${math.subtract(n,n2)}`);
console.log(`multiply :${math.multiply(n,n2)}`);
console.log(`Division :${math.divide(n,n2)}`);

//task 4:
const number=5;
 const table=generateTable(number);
//console.log(table);
console.log(`Multiplication Table for ${number}:\n${table}`);

//task 5:
console.log(`Constants:`);
console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);
console.log(`String Manipulations:`);
console.log(`Uppercase: ${utils.toUpperCase("hello")}`);
console.log(`Lowercase: ${utils.toLowerCase("WORLD")}`);
const numbers = [1, 2, 3, 4, 5];
console.log(`Array Operations:`);
console.log(`Max: ${utils.findMax(numbers)}`);
console.log(`Min: ${utils.findMin(numbers)}`);

//task 6:


