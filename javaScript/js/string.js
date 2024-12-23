let userName = "Elzero";

// Extract 'e' using different methods
console.log(userName.charAt(1)); // e (using charAt method)
console.log(userName[1]); // e (using bracket notation)
console.log(userName.slice(1, 2)); // e (using slice method)
console.log(userName.substring(1, 2)); // e (using substring method)
console.log(userName.substr(1, 1)); // e (using substr method)

// Concatenate 'e' three times to form 'eee'
console.log(userName[1].repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word[3] === letterE); // True
console.log(word[word.length - 1].toLowerCase() === letterO.toLowerCase()); // True
