//Day 2: Operators

//Activity 1:Arethmetic Operations

let a = 20;
let b = 30;

console.log("Sum of a and b = " + (a + b));
console.log("Difference of a and b = " + (a - b));
console.log("Product of a and b = " + (a * b));
console.log("Division of a and b = " + (a / b));
console.log("Remainder of a and b = " + (a % b));

//Activity 2: Assignment Operators
a+=10;
console.log("value of a is ="+a);
b-=5;
console.log("value of b is ="+b);

let  x=40;
console.log("value of x is ="+ x);
//Addition Assignment Operator (+=):
x+=10; //50
console.log("value of x  after adding 10 is ="+ x);
//Subtraction Assignment Operator (-=):
x-=20; //50-20=30
console.log("value of x after subtracting 20 is ="+ x);
//Multiplication Assignment Operator (*=):
x*=2; //30*2=60
console.log("value of x  after multiplying 2 is ="+ x);
//Division Assignment Operator (/=):
x/=10; //60/10=6
console.log("value of x after divided by 10 is ="+ x);
//Exponentiation Assignment Operator (**=):
x**=3;
console.log("value of x to the power 3 is ="+ x);
//Remainder Assignment Operator (%=):
x%=2; //6%2=0
console.log("value of x after x%2 is ="+ x);


//Bitwise AND Assignment Operator (&=):
let y= 30;
console.log("value of y is ="+ y);
y&=3;
console.log("value of y  after perfoming AND is ="+ y);
//Bitwise OR Assignment Operator (|=):
y/=2;
console.log("value of y after perfoming OR is ="+ y);

//Bitwise XOR Assignment Operator (^=):
y^=4;
console.log("value of y  after perfoming XOR is ="+ y);


let xor=5;// 0101 in binary 
console.log("value of xor is ="+ xor);
//Left Shift Assignment Operator (<<=):
xor <<= 1;   // x is now 10 (1010 in binary)
console.log("value of xor is ="+ xor);
xor>>=1;//Right Shift Assignment Operator (>>=):
console.log("value of xor is ="+ xor);
let ABC=-5;
console.log("value of ABC is ="+ ABC);

ABC>>>=1; // Unsigned Right Shift Assignment Operator (>>>=):

console.log("value of ABC is ="+ ABC);

//Activity 3:Comparison operators

let A=20;
let B=30;
console.log("A is greater then B:"+(A>B));
console.log("A is less then B:"+(A<B));
console.log("B is greater then A:"+(B>A));
console.log("B is less then A:"+(B<A));
console.log("B is less then equal A:"+(B<=A));
console.log("A is less then  equal B:"+(A<=B));
console.log("A is greater then equal B:"+(A>=B));
console.log("B is greater then  equal A:"+(B>=A));
console.log("A is not equal to B:"+(B!=A));

let S=10;
let P='10';
console.log("s is equal to p :"+(S==P));//Checks if the values of two operands are equal  (return true)
console.log("S is equal to P:"+(S===P));//Checks if the values and types of two operands are equal(false)
console.log("S is not equal to P:"+(S!=P)); //false;
console.log("S is not equal to P:"+(S!==P));//true;

//Activity 4: Logical Operators

let num1=5;
let num2=2;
let num3=10;

if(num1>num2 && num1>num3){
    console.log("num1 is greater");

}else if(num2>num1 && num2>num3){
    console.log("num2 is greater");


}else{
    console.log("num3 is greater");

}
let number= 10;
 console.log(number>0 && number>5);
 console.log(number<0 || number>0);
 console.log(number==10 ||number==0);
 console.log(number==20 ||number==0);
 console.log(number !=100 );
 

 //Activity 5: ternary Operator

 let year=2024;
 let Year=year>=2024?'yes, current year':'not current year';
 console.log(Year);
 let yt="subscribe";

 let chai=yt==="subscribe"?'yes u can learn from chaicode':'Please subscribe it first';
 console.log(chai);

 //Feature Request:

 

 let  val=100;
 
 let result=val%2===0?'even':'odd';
 console.log(result);

 const str="soni";

 let name=str==="soni"?'my name is soni':"no this not my name";
 console.log(name);


















































