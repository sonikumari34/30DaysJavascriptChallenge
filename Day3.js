//Day 3:control Structures
//Tasks/Activities:

//Activity 1: if-else Statements
//Task 1:
let number=30;
if(number>0){
    console.log(`number:${number} is positive`);

}else if(number<0){
    console.log(`number:${number} is negative`);

    
}else{
    console.log(`number:${number} is zero`);

}
//Task 2:
let age=18;

if(age>=18){
    console.log(`You are eligible to vote `);
}else{
    console.log("You are not eligible to vote");
}

//Activity 2:Nested if-else Statements
//Task 3:
//let num1= Number(prompt("enter  value num1"));
//let num2= Number(prompt("enter  value num2"));
//let num3=Number(prompt("enter  value num3"));
let num1=30;
let num2=40;
let num3=60;

if(num1>num2 && num1>num3){
    console.log(`num1 that is ${num1} is greater number from num2:${num2} and num3:${num3}`);

}else if(num2>num1 &&num2>num3){
    console.log(`num2 that is ${num2} is greater number from num1:${num1} and num3:${num3}`);

}else{
    console.log(`num3 that is ${num3} is greater number from num1:${num1} and num2:${num2}`);

}

//Activity 3:switch case
//Task 4:
let dayNumber=6;

switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a number (1-7) to get the corresponding day of the week");

}

//task 5:

let marks=80;

switch(true){
    case (marks>=90 && marks<=100):
        console.log("your grade is A");
        break;
    case (marks>=80 && marks<=89):
        console.log("your grade is B");
        break;
    case (marks>=70 && marks<=80):
        console.log("your grade is C");
        break;
    case (marks>=60 && marks<=70):
        console.log("your grade is D");
        break;
    case (marks>=40 && marks<=50):
            console.log("your grade is F");
            break;
    default:
        console.log("your marks is low from grade system");
}
//Activity 4:Conditional(ternary)Operator
//Task 6:
let num=21;
let result=num%2===0?`even number:${num} `:`odd number:${num}`;
console.log(result);

// Activity 5:Combining Conditions 
//Task 7:

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

//Feature Request:




