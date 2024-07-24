//  Day 12: Error Handeling
//Tasks/Activities:
//Activity 1:Basic Error Handeling with try-catch
//Task 1:
function throwError(){
    throw new Error("an intentional error occured");
}

function handelError(){
    try{
        throwError();
    }catch(error){
console.log("caught an error:"+error.message);
    }
}
handelError();
//task 2:
function myFun(){
    let a=10;
    let b=0;
    try{
        if(b==0){
            throw new Error("Division by zero");
        }
        let c=a/b;
        console.log(c);
        
    }
    catch{
       console.log("try to divide with 0");
    }
    finally{
        console.log("I am always excuted");
    }
}
myFun();

//Activity 3:Finally block
//task 3:
function parseJson(jsonString){
    try{
        // Attempt to parse the JSON string
        let parseData=JSON.parse(jsonString);
        console.log("json parsed successfully:",parseData);
    }catch(error){
        // Handle any errors that occur during parsing
        console.log("Failed to parse Json:",error.message);

    }finally{
        // This block will always be executed
        console.log("Parsing attempt completed");
    }
}
let validJson = '{"name": "John", "age": 30}';
parseJson(validJson);
let invalidJson = '{"name": "John", "age": 30';
parseJson(invalidJson);

//Activity  3:Custom Error Objects
//task 4:
//Define a custom error class
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }
}

//function that throws a custom error
function validateUser(user){
    if(!user.name){
        throw new ValidationError("user name is required");
    }
    if(!user.email){
        throw new ValidationError("user email is required");
    }
    return true;
}

try{
    let user={
        name:"soni"
       // email:"test@example.com"
       };
    validateUser(user);
}catch(error){
    if(error instanceof ValidationError){
        console.log("validation error:",error.message);
    }else{
        console.log("unknown error:",error);
    }
}
finally{
    console.log("validation attempt finished");
}
//task 5:
// Define a custom error class for validation errors
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Function to validate user input
function userValidation(string) {
    if (string === "") {
        throw new CustomError("Empty string entered. Please enter a valid string.");
    }
    return true;
}

// Use try-catch to handle the custom error
try {
    let string = "soni"; // Change this to "" to test the error case
    userValidation(string);
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Custom error:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
} finally {
    console.log("Completed validation!");
}

//Activity 4:Error handeling in promises
//task 6:
const fetchData =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Data fetched successfully!");
        }else{
            reject("Failed to fetch data.");
        }
    },2000);
})
fetchData
.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log("error");

})

//  task 7:
async function fetchProducts(){
    try{
        const response=await fetch( 
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

        );
        if(!response.ok){
            throw new Error(`HTTP error:${response.status}`);

        }
        const data=await response.json();
        console.log(data[0].name);
    }catch(error){
        console.log(`could not get products: ${error}`);
    }
}
fetchProducts(); 
//task 8:

//"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

 const fetchPromise1=fetch( "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", );
fetchPromise1.then((response)=>{
    console.log(`${response.url}:  ${response.status}`);
}).catch((error)=>{
    console.log(`Failed to fetch:${error}`);
}); 

//task 9:
async function fetchPro(){
    try{
        const response= await fetch( "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",);
        if(!response.ok){
            throw new Error(`HTTP error:${response.status}`);
        }
        const data=await response.json();
        console.log(data[4].name);
    }catch(error){
        console.log(`could not get product:${error}`);
    }
}
fetchPro();

