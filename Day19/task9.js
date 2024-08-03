// task 9:Write a regular expression  to validate a simple password(must include at least one uppercase letter,one lowercase letter,one digit,one special character).Log wheather the password is valid .
function validatePassword(password){
    // Check for at least one uppercase letter
    const hasUpperCae = /[A-Z]/.test(password);


    // Check for at least one lowercase letter
    const hasLowerCase = /[a-z]/.test(password);

    // Check for at least one digit
    const hasDigit = /\d/.test(password);

     // Check for at least one special character
    const hasSpecialChar = /[@$!%*?#&]/.test(password);
    
    if(hasUpperCae && hasLowerCase && hasDigit && hasSpecialChar){
        console.log("Password is valid");
    }else{
        console.log("Password is invalid");
    }


}

// Test cases
validatePassword("Password1@"); // Password is valid
validatePassword("password1@"); // Password is invalid (no uppercase letter)
validatePassword("PASSWORD1@"); // Password is invalid (no lowercase letter)
validatePassword("Password@");  // Password is invalid (no digit)
validatePassword("Password1");  // Password is invalid (no special character)


function validatePassword2(password) {
    // Regular expression to check for at least one uppercase letter, one lowercase letter, one digit, and one special character
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    // Test the password against the regular expression
    if (regex.test(password)) {
        console.log("Password is valid");
    } else {
        console.log("Password is invalid");
    }
}

// Test cases
validatePassword2("Password1@"); // Password is valid
validatePassword2("password1@"); // Password is invalid (no uppercase letter)
validatePassword2("PASSWORD1@"); // Password is invalid (no lowercase letter)
validatePassword2("Password@");  // Password is invalid (no digit)
validatePassword2("Password1");  // Password is invalid (no special character)
