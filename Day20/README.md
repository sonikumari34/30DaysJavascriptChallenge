#LocalStorage and SessionStorage Guide
#Overview
Both localStorage and sessionStorage are Web Storage APIs used to store data on the client side. They allow web applications to store data in the browser, which can be useful for persisting information across sessions or within a single session.

##Differences
##localStorage:

Stores data with no expiration time.
Data persists even when the browser is closed and reopened.
Data is shared across different tabs and windows of the same origin.

##sessionStorage:

Stores data for the duration of the page session.
Data is lost when the page session ends (e.g., when the tab or window is closed).
Data is not shared across different tabs and windows.
##Basic Operations
1. **Storing Data
##localStorage:


localStorage.setItem('key', 'value');
##sessionStorage:


sessionStorage.setItem('key', 'value');
2. **Retrieving Data
localStorage:

const value = localStorage.getItem('key');
console.log(value);



3. **Removing Data
Remove Specific Item:

localStorage:


localStorage.removeItem('key');
sessionStorage:


sessionStorage.removeItem('key');
##Clear All Data:

localStorage:


localStorage.clear();
##sessionStorage:


sessionStorage.clear();