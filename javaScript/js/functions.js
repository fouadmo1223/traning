// function sayHello(theName, theGender) {
//   // Your Code Here
//   if (theGender == "Male") {
//     console.log(`Hello Mr ${theName}`);
//   } else if (theGender == "Female") {
//     console.log(`Hello Miss ${theName}`);
//   } else {
//     console.log(`Hello  ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// ##################################################################################################

// function calculate(firstNum, secondNum, operation) {
//   // Your Code Here
//   if (firstNum == undefined) {
//     console.log("First Number Not Found");
//   } else if (secondNum == undefined) {
//     console.log("Second Number Not Found");
//   } else if (operation == undefined || operation == "add") {
//     console.log(firstNum + secondNum);
//   } else if (operation == "subtract") {
//     console.log(firstNum - secondNum);
//   } else if (operation == "multiply") {
//     console.log(firstNum * secondNum);
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

// ##################################################################################################

// function ageInTime(theAge) {
//   if (theAge < 10 || theAge > 100) {
//     console.log("Age Out Of Range"); //
//   } else {
//     console.log(`${theAge * 12} Months`);
//     console.log(`${theAge * 12 * 4} weeks`);
//     console.log(`${theAge * 365} days`);
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// ##################################################################################################

// function checkStatus(a, b, c) {
//   // Your Code Here
//   if (typeof a === "string") {
//     if (typeof b == "number") {
//       if (c == true) {
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${a}, Your Age Is ${b}, You Are not Available For Hire`
//         );
//       }
//     } else {
//       if (b == true) {
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${a}, Your Age Is ${c}, You Are not Available For Hire`
//         );
//       }
//     }
//   } else if (typeof b === "string") {
//     if (typeof a == "number") {
//       if (c == true) {
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${b}, Your Age Is ${a}, You Are not Available For Hire`
//         );
//       }
//     } else {
//       if (a == true) {
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${b}, Your Age Is ${c}, You Are not Available For Hire`
//         );
//       }
//     }
//   } else if (typeof c === "string") {
//     if (typeof b == "number") {
//       if (a == true) {
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${c}, Your Age Is ${b}, You Are not Available For Hire`
//         );
//       }
//     } else {
//       if (b == true) {
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`);
//       } else {
//         console.log(
//           `Hello ${c}, Your Age Is ${a}, You Are not Available For Hire`
//         );
//       }
//     }
//   }
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ##################################################################################################

// function createSelectBox(start, end) {
//   let selectBox = document.createElement("select");
//   let options = "";
//   for (let i = start; i < end; i++) {
//     options += `<option value="${i}">${i}</option>`;
//   }
//   selectBox.innerHTML = options;
//   document.body.append(selectBox);
// }
// createSelectBox(2000, 2021);

// ##################################################################################################

// function multiply(...nums) {
//   let res = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] != "number") {
//       continue;
//     } else {
//       res *= parseInt(nums[i]);
//     }
//   }
//   console.log(res);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
