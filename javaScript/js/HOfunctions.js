// let myNumbers = [1, 2, 3, 4, 5, 6];
// let sumOfNumbers = myNumbers.map((number) => number * 2);
// console.log(sumOfNumbers);

// let swappingCases = "elZERo";
// let Numbers = [1, -10, -20, 15, 100, -30];
// let text = "Elz123er4o";

// let myarr = swappingCases.split("");

// let newArr = myarr
//   .map(function (el) {
//     if (el.toUpperCase() == el) {
//       el = el.toLowerCase();
//     } else {
//       el = el.toUpperCase();
//     }
//     return el;
//   })
//   .join("");

// let invertedNumbers = Numbers.map((number) => -number);

// text = text.split("");
// let ignoreNumbers = text
//   .map(function (el) {
//     if (isNaN(el)) {
//       return el;
//     }
//   })
//   .join("");

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let text = mix
//   .map(function (char) {
//     if (isNaN(char)) return char;
//   })
//   .join("");

// Elzero

// let myString = "EElllzzzzzzzeroo";

// let text = myString
//   .split("")
//   .filter(function (char, index, arr) {
//     return index == arr.indexOf(char);
//   })
//   .join("");

// // Elzero

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArr = myArray
//   .reduce(function (acc, curr) {
//     return `${acc}${curr}`;
//   })
//   .split("")
//   .filter((el) => el != ",")
//   .join("");
// Elzero

// ######################################

// let imgs = document.images;
// console.log(imgs);
// Array.from(imgs).forEach(function (img) {
//   img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img.alt = "Elzero Logo";
// });

// let inputelment = document.querySelector(".money");
// inputelment.oninput = (event) => {
//   let value = event.target.value;

//   document.querySelector(".dollar").textContent = value;
//   document.querySelector(".egy").textContent = (value * 15.6).toFixed(2);
// };

// document.forms[0].onsubmit = (event) => {
//   event.preventDefault();
//   let text = false;
//   let number = false;
//   let textValue = document.querySelector(".text").value;
//   let numberValue = document.querySelector(".number").value;
//   let selection = document.querySelector(".selection").value;
//   if (numberValue > 0) {
//     number = true;
//   }
//   if (textValue.length > 0) {
//     text = true;
//   }
//   let divsOrSecs = "";
//   if (number && text) {
//     document.querySelector(".results").innerHTML = "";
//     if (selection == 1) {
//       for (let i = 0; i < numberValue; i++) {
//         divsOrSecs += `<div class='col-3 text-center'><div class="box  bg-success  fs-4 p-2" title="Element" id="id-${i}">${textValue}</div></div>`;
//       }
//       document.querySelector(".results").innerHTML = divsOrSecs;
//     } else {
//       for (let i = 0; i < numberValue; i++) {
//         divsOrSecs += `<div class='col-3 text-center'><section class="box  bg-success  fs-4 p-2" title="Element" id="id-${i}">${textValue}</section></div>`;
//       }
//       document.querySelector(".results").innerHTML = divsOrSecs;
//     }
//   }
// };
