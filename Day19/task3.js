// Activity 2: Character classes and    Quantifiers

//task 3:
//Write a regular expression to match all words in a string that start with a capital letter.Log the matches.

const text = "Alice went to the Wonderland and met Bob, who loves JavaScript. The weather was nice.";

// Create a regular expression to match words starting with a capital letter
const regex=/\b[A-Z][a-zA-Z]*\b/g;

//use the matches method to find all mathces
const matches = text.match(regex);

//Log the matches
if(matches){
    matches.forEach(match => console.log(match));  
}else{
    console.log("No matches found.");
}

