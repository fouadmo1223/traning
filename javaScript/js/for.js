// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i = i + start) {
//   if (i == exclude) {
//     continue;
//   }
//   console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--) {
//   if (i < stop) {
//     break;
//   }
//   i == 10 ? console.log(`${i}`) : console.log(`0${i}`);
// }

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].startsWith(letter.toUpperCase())) {
//     continue;
//   }
//   console.log(`${i} => ${friends[i]}`);
// }

// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}

console.log(result);
