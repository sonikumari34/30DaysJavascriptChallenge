//Day 4:Loops
//Tasks/Activites:

//Activity 1:For Loop
//Task 1:
console.log("number from 1 to 10:");
for(let i=1;i<=10;i++){
   console.log(i);
}

//Task 2:
console.log("Table of 5 are here:");
for(let i=1;i<=10;i++){
    console.log(i*5);
}

//Activity 2:while Loop
//task :3
let sum=0;
let i=1;
console.log("sum of number from 1 to 10 are:");
while(i<=10){
    sum+=i
    i++;
}
console.log( sum);

//task 4:
let j=10;
console.log("numbers from 10 to 1 are:");
while(j>=1){
    console.log(j);
    j--;

}

//Activity 3:Do..while Loop
//task 5:

let k=1;
console.log("Number from 1 to 5 are:");
do{
    console.log(k);
    k++;

}while(k<=5);

let number =5;
let it=1;
let fact=1;
console.log(`factorial of number ${number} is = `);
do{
    fact*=it;
    it++;



}while(it<=number)
    console.log(fact);

//Activity 4:Nested Loops
//task 7:

for(let i=1;i<=5;i++){
    let star='';
    for(let j=1;j<=i;j++){
     star+='*';
      
    }
    console.log(star);
}
//Activity 5:Loop constrol statements
//task 8:
console.log("Number from 1 to 10 but 5 is not present:");
for(let i=1;i<=10;i++){
    if(i===5) continue;
    console.log(i);
}
//task 9:
let num=1;
console.log("Numbers are:");
while(num<=10){
    if(num===7)break;
    console.log(num);
    num++;
    
}