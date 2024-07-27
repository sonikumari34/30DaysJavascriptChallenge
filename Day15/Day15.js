//Day 15:Closures
//tasks/Activities
//Activity 1:Understanding Closures

//task 1:
function outer(){
    let  name="soni";
     function inner(){
      console.log(name);
     }
     inner();
     return inner;
}
outer();  // Call outer, which returns the inner function
//task 2:

function counter(){
     let count=0;   //private variable
    function add(){
        count=count+1;
        return count;
    }
    add();
    return add;
}
const Counter=counter();
console.log("counterer:");
console.log(Counter());
console.log(Counter());
console.log(Counter());
console.log(Counter());

//Activity :2 practical Closures
//task:3
function createUniqueIdGenerator(){
    let lastId=0;
    return function(){
        lastId+=1;
        return lastId;
    }

}
const generateUniqueId=createUniqueIdGenerator();
console.log("Unigue ids:");
console.log(generateUniqueId());  // Output: 1
console.log(generateUniqueId());  // Output: 2
console.log(generateUniqueId());
//task 3:
function diplayName(name){
       
     return   function(){
        return `Hello,${name}!`;
     };
       
}
const greet=diplayName('soni');
console.log(greet());
const greet2=diplayName('Rekha');
console.log(greet2());
//Activity 3:Closures in loops
//task 5:
function createFunctionArray(size) {
    const functionArray = [];

    for (let i = 0; i < size; i++) {
        functionArray.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functionArray;
}

const functions = createFunctionArray(5);

console.log("Function array:");
functions.forEach((fn, index) => {
    console.log(`Calling function ${index}:`);
    fn();  // This will log the correct index
});
//Activity 4:Module pattern
//task 6: 
function createItemManager(num){
    const items=[];
    function addItem(item){
        items.push(item);
        console.log(`Item added:${item}`);
    }

    //remove item method
    function removeItem(item){
        const index=items.indexOf(item);
        if(index>-1){
            items.splice(index, 1);
            console.log(`Item removed:${item}`);
        }else{
            console.log(`Item not found:${item}`);
        }
    }
    function listItems(){
        console.log(`Items in the collections:`);
        items.forEach(item=>console.log(item));
    }
    return {
        addItem,
        removeItem,
        listItems
    };
}
const manager=createItemManager();
manager.addItem('Apple');
manager.addItem('Banana');
manager.addItem('orange');
manager.listItems();
manager.removeItem('Apple');
manager.listItems();
manager.removeItem('orange');

//Memoization:
//task 7:
function memoize1(fn){
    const cache=new Map();
    return function(n){
        if(cache.has(n)){
            console.log(`Fething  from cache for input :${n}`);
            return cache.get(n);
        }
        console.log(`Compution result for:${n}`);
        const result =fn(n);
        cache.set(n,result);
        return result;
    }
}
//

function add(n){
    let  sum=0;
    sum+n;
    
}
const  memoizefn=memoize1(add);
console.log(memoizefn(5));
console.log(memoizefn(10));

//task 8:
function memoize(fn){
    const cache=new Map();
    return function(n){
        if(cache.has(n)){
            console.log(`Fetching from cahche for input :${n}`);
            return cache.get(n);
        }
        console.log(`Computing result for input:${n}`);
        const result=fn(n);
        cache.set(n,result);
        return result;
    }
}
function factorial(n){
    if(n==0||n==1){
        return 1;
    }
  return  n* factorial(n-1);
}
const memoizeFact=memoize(factorial);
console.log(memoizeFact(5));
console.log(memoizeFact(4));