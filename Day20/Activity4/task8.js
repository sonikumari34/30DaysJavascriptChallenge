// Create an object to store
const myObj = {
    myName: "soni kumari",
    education: "bca",
    age: 18
};

// Save the object to sessionStorage by converting it to a JSON string
sessionStorage.setItem('myObjkey', JSON.stringify(myObj));

// Retrieve and parse the object from sessionStorage
const getData = sessionStorage.getItem('myObjkey');
const retrieved = JSON.parse(getData);

// Log the object before removal
console.log("My data before removal:", retrieved);

// Log sessionStorage content before removal
console.log("My sessionStorage data before removal:", sessionStorage.getItem('myObjkey'));

// Remove the item from sessionStorage
sessionStorage.removeItem('myObjkey');

// Log the result of removal (will be `undefined` since removeItem does not return a value)
console.log("Data after removal:", sessionStorage.getItem('myObjkey'));

// Log sessionStorage content after removal
console.log("My sessionStorage data after removal:", sessionStorage.getItem('myObjkey'));
