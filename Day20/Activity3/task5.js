// Activity: Understanding SessionStorage

//task 5: Write a script to save a string value to sessionStorage and retrive it. Log the retrived value.

const  key="name";
const value ="soni";
 sessionStorage.setItem(key,value);
const getData=sessionStorage.getItem(key);
 console.log("My sessionData:"+getData);
