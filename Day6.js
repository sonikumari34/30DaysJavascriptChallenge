//Day 6: Arrays
//Tasks/Activities:

//Activity 1:Array Creation and Access
//task 1:
let number=[1,2,3,4,5];
console.log(`Number from 1 to 5 are:${number}`);

//Task 2:
let name=["soni","kajal","anshu","vishal"];
console.log(`First element of array name is:${name[0]}`);
console.log(`Last element of array name is:${name[name.length-1]}`);
console.log("name in sorted order:"+name.sort());// Noted:sort() method works well for string value npt for number when array element are number then it reqire compare function
console.log("index of element"+name.indexOf("vishal"));

//Activity 2:Array Methods(Basic)
//task 3:
let arr=[2,3,6,7,8,9,2,1];
console.log("Elements of arr:"+arr);
//push() method add element to end of the array
arr.push(100);
console.log("new updated array is:"+arr);
//task 4:
arr.pop(); //pop() method remove last element from array 
console.log("Array arr after removing last element is:"+arr);
// task 5:
arr.shift();//shift() remove first element from array
console.log("Array arr after removing first element is:"+arr);

//task 6:
arr.unshift(10000000000); //unshift() method add new element at first index to the array
arr.unshift(20000000000);
console.log("Array arr after adding first element to the Array arr:"+arr);
console.log("Rverse array:"+arr.reverse());
console.log("sorted Array"+arr.sort(function(a,b){return a-b}));

//Activity 3:Array Iteration:
//task 7:
let numArray=[1,2,3,4,5,6,7,8,9,10];
function myfun(numArray){
   return   numArray*2;

}
const newArray=numArray.map(myfun); //map() creates a new array from calling a function for every array element.
console.log(newArray);

//Task 8:
let myArray=[3,2,5,7,8,6,7];
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
function evenArr(num){
    return num%2==0;
}
const newmyArray=myArray.filter(evenArr);
console.log("my even number Array :" + newmyArray);

//task 9:
let sumArr=[1,2,3,4,5,6,7,8,9,10,100];


const sum=sumArr.reduce((sum,current)=> sum+current,0);//call back fun
const newsum=sumArr.reduce(my,0);
function my(total,num){
    
    return total+num;
}
console.log("sum of element of Array:"+sum);
console.log("sum of element of Array:"+newsum);

//Activity 4:Array Iteration
//task 10:

/*let array=[1,3,4,5,2,7,1,8,1,9];
console.log("Here is the element of array:");
for(let i=0;i<array.length;i++){
    console.log(array[i]);
    
}; */
let array = [1, 3, 4, 5, 2, 7, 1, 8, 1, 9];
let result = "Here are the elements of the array: ";

for (let i = 0; i < array.length; i++) {
    //result += array[i] + (i < array.length - 1 ? ', ' :"" );
    result+=array[i];
    if(i<array.length-1){
        result+=', ';
    }
}

console.log(result);

//task 11:
console.log("Here are the elements of the array:");

array.forEach(element => {
    console.log(element);
    
});

//Activity 5:Multi-dimensional Arrays

//task 12:
let matrix=[[1,2,3,4],[4,5,6],[8,9,10]];
let ans="here is all element of matrix array:";
//console.log("elements of array:");
for(let i=0;i<matrix.length;i++){
    let row=matrix[i];
    for(let j=0;j<row.length;j++){
        //console.log(matrix[i][j]);
        ans+=matrix[i][j];
        if(i<matrix.length){
            ans+=', ';
        }
    }
}
console.log(ans);

//task 13:
console.log("specific element:");
console.log(matrix[0][3]);







