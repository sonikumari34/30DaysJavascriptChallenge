//Activity 5: Comparing LocalStoarge and SessionStorage

// task 9:Write a function that accepts a key and a value , and saves the value to both localStorage and sessionStorage .Retrieve and log the values from both storage mechanisma.

// Function to save data to both localStorage and sessionStorage
function myData(key, value) {
    // Save the value to localStorage
    localStorage.setItem(key, value);
    
    // Save the value to sessionStorage
    sessionStorage.setItem(key, value);
    
    // Retrieve the value from localStorage
    const localStorageData = localStorage.getItem(key);
    
    // Retrieve the value from sessionStorage
    const sessionStorageData = sessionStorage.getItem(key);
    
    // Log the retrieved values from both storage mechanisms
    console.log("My localStorage data:", localStorageData);
    console.log("My sessionStorage data:", sessionStorageData);
}

// Test the function with example key and value
let key = "name";
let value = "Vishal";
myData(key, value);