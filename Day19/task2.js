// task 2:
//Wite a regular  expression  to matches all digit in a string.log the mathes

const text = "The year is 2024, and the time is 14:30. I have 5 apples and 3 oranges.";

// Create a regular expression to match all digits
const regex = /\d+/g;  // \d+ matches one or more digits; 'g' flag for global search

// Use the match method to find all matches
const matches = text.match(regex);
if(matches){
    matches.forEach(match => console.log(match));
}else{
    console.log("No matches found.");
}

//Matching Single Digits 
const text2 = "The year is 2024, and the time is 14:30. I have 5 apples and 3 oranges.";

// Create a regular expression to match single digits
const regex2 = /\d/g; // \d matches a single digit; 'g' flag for global search

// Use the match method to find all matches
const matches2 = text2.match(regex);

// Log the matches
console.log("Matches for single digit:");
if (matches2) {
    
    matches2.forEach(match => console.log(match)); // Print each match
} else {
    console.log("No matches found.");
}





