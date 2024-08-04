//Day 20 :LocalStorage and SessionStorage
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');


//task 1:write  a script to save a string in localstorage ans retrive it .log retrived value 
const key ="mystring";
const value = " Hello, localStorage";
localStorage.setItem(key,value);
const retriveValue=localStorage.getItem(key);

console.log("Retrived value:",retriveValue);