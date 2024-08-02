/**
 * Counts the occurrences of each character in a string.
 * @param {string} str - The input string.
 * @return {Map} A map with characters as keys and their counts as values.
 */
function countCharacterOccurrences(str) {
    const charCount = new Map();

    for (const char of str) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    return charCount;
}

const string = "banana";
console.log(countCharacterOccurrences(string));