//Day 7: Objects
//task/Activities

//Activity 1: Object Creation and Access
//task 1:

const book={
    title:"Atomic habiet",
    author:"marks",
    year:2024
};
console.log(book);

//task 2://Accessing the property of book
console.log(book.title);
console.log(book.author);

//Activity 2:Object Methods
//task 3:
 book.info=function myfun(){
    return  "the title of this book is: "+this.title+ " and the author of this book is: "+this.author;
};
   //person.name = function () {return this.firstName + " " + this.lastName; };
   console.log(book.info());
   console.log(book);
//task 4:
book.newyear=function(year){
   return this.year=2025;
}
console.log(book.newyear());
console.log(book);

//Activity:3 Nested objects
//task 5:
const library={
   name:"City Library",
   books:[
      {
         title:"Atomic Habits",
         author:"james Clear",
         year:"1997"
      },
      {
         title:"How to win friends & influence people",
         author:"Carnegie",
         year:"2020"
      },
      {
         title:"The Power of Subconsious Mind",
         author:"Murphy",
         year:"1995"
      }
   ]
    
};
console.log(library);
//task 6:
let Name=library.name;
let first_title=library.books[0].title;
let sec_title=library.books[1].title;
let third_title=library.books[2].title;
console.log("Name of the Library is:"+library.name);
console.log("First book title is:"+first_title);
console.log("Second book title is:"+sec_title);
console.log("Third book title is:"+third_title);
console.log("First book author is:"+library.books[0].author);
console.log("second book author is:"+library.books[1].author);
console.log("third book author is:"+library.books[2].author);

//Activity 4:The this keyword
//task 7:
library.books.forEach(book=>{
  book.getInfo=function(){
     return this.title+ " "+ this.year;
  };
});

library.books.forEach(book=>{
   console.log(book.getInfo());
});

//Activity:Object Iteration
//Task 8:
let Book = {
   title: "JavaScript: The Good Parts",
   author: "Douglas Crockford",
   year: 2008
 };
console.log(Book);
for(let key in Book){
   console.log(key+":"+Book[key]);
}
//Task 9:
let keys=Object.keys(Book);
console.log("keys in Book object are:"+keys);
let values=Object.values(Book);
console.log("values in Book Object are:"+values);
let obj=Object.entries(Book);
console.log(obj);
delete Book.year; //Removes Property from an Object
console.log(Book);

for(let key in Book){
   console.log(key + " " +Book[keys]);
}


