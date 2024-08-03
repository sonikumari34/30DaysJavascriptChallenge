//task 10: write a regular expression to validate URL.Log whether the URL is valid.

const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

// Test URLs
const urls = [
    "http://example.com",
    "https://www.example.com/path/to/resource?query=123#fragment",
    "ftp://ftp.example.com/file",
    "example.com", // Invalid because it lacks a scheme
    "http://256.256.256.256", // Invalid because the IP address is out of range
    "http://example", // Invalid because the domain lacks a top-level domain
];

// Validate URLs
urls.forEach(url => {
    const isValid = urlRegex.test(url);
    console.log(`URL: ${url} - ${isValid ? 'Valid' : 'Invalid'}`);
});
