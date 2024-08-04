// task 4: Write a script to remove an item from localStroage.Log the localStroage content befor and after removal.


const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// Define the data to be stored
const myData = {
    name: "Soni Kumari",
    email: "sonikumari@gmail.com",
    education: "BCA 2nd year student!",
    location: "Patna"
};

// Store the data in localStorage
localStorage.setItem('myDatakey', JSON.stringify(myData));

// Retrieve the data from localStorage
const myRetrievedData = localStorage.getItem('myDatakey');

// Parse the retrieved data to convert it back to an object
const Data = JSON.parse(myRetrievedData);

// Log the data before removal
console.log('My localStorage data before removal:', Data);

console.log('Complete localStorage before removal:', localStorage);



localStorage.removeItem('myDatakey');

const myDataAfterRemoval  = localStorage.getItem('myDatakey');

console.log('My localStorage data after removal:',myDataAfterRemoval);

console.log('Complete localStorage after removal:', localStorage);

