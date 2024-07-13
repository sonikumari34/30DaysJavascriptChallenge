//  Day 1: Variables and Data types
//Task/Activites:
//Activity 1: variable Declartion

var num= 23;
console.log("value of num is :"+num);

let str="soni";
console.log("my name is " +str);

const constant= true;
console.log("value of the constant is :"+constant);

// Datatypes task 3:

let number=50;
let string= "String ";
let bool="true";
let obj={name:"soni",
    roll:34, 
    place:"patna",
    edducation:'bca'
}
let arr=[1,2,3,4,5,];
let undef;
let nul=null;
let func=function(){
    console.log("Function called"); 
};

console.log(`number:${number},type:${typeof number}`);
console.log(`string:${string},type:${typeof string}`);
console.log(`bool:${bool},type:${typeof bool}`);
console.log(`obj:${obj},type:${typeof obj}`);
console.log(`arr:${arr},type:${typeof arr}`);
console.log(`undef:${undef},type:${typeof undef}`);
console.log(`nul:${nul},type:${typeof nul}`);
console.log(`func${func},type:${typeof func}`);

// Task 4 Reassigning Variables

let val=40;
console.log("value of x is:"+val);
val=50;
console.log(" reassing value of x is:"+val);

//Task 5 understanding const:
//const c=100;
//console.log("value of c is:"+c);
//Task 6 re-Assigmnet intio constant value that is in c and observe the error:
//c=30;

//console.log(" reassing value of cis:"+c); //TypeError: Assignment to constant variable.

//Feature Request..........................*************************..................................
//task 1:
let  value=30;
let st="i am string data type";
let bol=false;
let object={
    name:"soni",
    hobbi:"reading",
    edu:"bca"
}
let array=["apple","rose","potato"];
let  date = new Date("2024-07-13");

console.log(`vaue:${value},type:${typeof value}`);
console.log(`st:${st},type:${typeof st}`);
console.log(`bol:${bol},type:${typeof bol}`);
console.log(`object:${object},type:${typeof object}`);
console.log(`array:${array},type:${typeof array}`);
console.log(`date:${date},type:${typeof date}`);

//task2:

let  y=10;
console.log("value of y is :"+y);

y=30;
console.log(" Reassign  value of y is:"+y);

let z=40;
console.log("value of z is:"+z);
y=z;
console.log("value of  y  is:"+y);//y=40
z=y;
console.log("value of z is:"+z);//z=40


const fixed=5000;
console.log("value of fixed is:"+fixed);

fixed=30;
console.log("Reasign in fixed:"+fixed); //Assignment to constant variable.




































 



