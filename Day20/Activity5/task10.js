// task 10: Write a function that clears all data from both localStorage and sessionStorage .verify that both storages are empty.

function clearStore(){

   // Clearing all  Data from localStorage
    localStorage.clear();

    //Clearing  all Data from sessionStorage
    sessionStorage.clear();
}


clearStore(); // calling function