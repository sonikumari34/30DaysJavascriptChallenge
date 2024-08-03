// Day 19 Regular Expressions

// Tasks / Activities:

// Activity 1: Basic Regular Expressions 

// Task 1: Write a regular expression to match a simple pattern (e.g. , match all occurances of the word " javaScript " in a string). Log the matches .

const string = "javascript is awesome  language. I love to code in JAVASCRIPT.  ";

/*g stand for "global" ,meaning it will find all mathces in the string ,not just first.
 i stand for "case-insensitive it will match "javascript", "JAVASCRIPT" etc.*/

const regex= /javascript/gi; 

//const matches = string.match(regex); finds all matches of the regular expression in the given string. 
const matches = string.match(regex);

if(matches){
    matches.forEach(match => console.log(match));

}
else{
    console.log("No matches found."); 
}

let text = "\nIs th\nis it?";
let result = text.match(/^is/m);  //Do a multiline search for "is" at the beginning of each line in a string:
if(result){
    result.forEach(match => console.log("Result is:"+match));

}
else{
    console.log("No result  found."); 
}

// Define the multiline string to search within
const string1 = `First line
Second line with JavaScript
Third line
JavaScript on the fourth line.`;

// Create a regular expression to match lines containing "JavaScript"
const regex2 = /^.*JavaScript.*$/gm; // ^ asserts position at the start of a line, .* matches any character (except for line terminators), and $ asserts position at the end of a line; 'g' for global search, 'm' for multiline mode

// Use the match method to find all matches of the regex in the string
const matches2 = string1.match(regex2);

// Check if there are any matches and log each match to the console
if (matches2) {
    matches2.forEach(match => console.log(match)); // Print each matching line
} else {
    console.log("No matches found."); // Inform if no matches are found
}

let text2 = "aaaabb"; 
let result2= text2.match(/(aa)(bb)/d);

if (result2) {
    result2.forEach(match => console.log(match)); // Print each matching line
} else {
    console.log("No matches found."); // Inform if no matches are found
}

