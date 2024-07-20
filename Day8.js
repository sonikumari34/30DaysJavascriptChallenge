//Day 8:ES6+Features
//Activity 1:Template Literals
//task 1:
let name="anita";
let age='19';

let str=`Hello my name is ${name} and I am ${age} years old.`;
console.log(str);

//task 2

let multistr=`Hello my name is soni and
             I am learning javascript through
             30days js Challenge given
            my Hitesh sir he is a Youtuber and a tech of god`;
console.log(multistr);

//Activity 2:Destructing
//task 3:
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
let [num1,num2]=arr;
console.log(num1);
console.log(num2);
let [first, , , , , , , ,last]=arr;
let [f1 ,...rest]=arr;
console.log(first);
console.log(last);
console.log(f1)
console.log(rest);

//task 4
let book={
    title:"Master your emotion",
    author:"Dale Carnegie",
    year:2024
}
console.log(book);
let {title,author}=book;

console.log(`title:${title} , author:${author}`);

//Spread and Rest Operators
//task 5:
let Arr=[1,2,3,4,5];
console.log(Arr);
let newArr= [...Arr, 6,7,8,9,10];
console.log(newArr);

console.log("sum of  numbers are:");
function myfun(...args){
    let sum=0;

   for(let i of args)  sum+=i;
   return sum;
}
 let mysum=myfun(1,2,3,45,67,89,100);
 console.log(mysum);
 
 //Activity :Deafult Parameters
 //task 7:
 function product(num1,num2=1){
   return num1*num2;
 }
 console.log(`Product of two number is:${product(20,10)}`);
 console.log(`product of two number without second parameter: ${product(90)}`);

 //Activity 5:Enhanced Object Literals
 //task 8:

 const Name="vishal";
 const Age=15;

 const info={
    Name,
    Age,
    greet(){
        console.log(`Hello my name is ${this.Name} and I am ${this.Age} years old.`);
    },
    myBirth(){
        this.Age +=1;
        console.log(`Happy BirthDay! I am now ${this.Age} years old.`);
    }
 };
 console.log(info);
 info.greet();
 info.myBirth();

 // task 9:
 const name1="firstname";
 const  name2="lastname";
 const age3="age";
 const per={
    [name1]:"John",
    [name2]:"doe",
    [age3]:25
 };
 console.log(per);







