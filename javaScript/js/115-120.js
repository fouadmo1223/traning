// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// let [a,,,,e]= myNumbers;

// console.log(a * e); // 5

///////////////////////////////////

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here

// let [a,b,c,[d,e,[f,g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

////////////////////////////////////////////////////////

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring

// let allFreiends = [...arr1, ...arr2, ...arr3];
// // Write Your Destructuring Assignment Here
// let [c, , , , , , , a, b] = allFreiends;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed

////////////////////////////////////////////

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// let { age: a, working: w, country: c, hobbies } = member;
// let [h1, h2, h3] = hobbies;

// // Write Your Destructuring Assignment Here

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

//////////////////////////
// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // استخدم الـ destructuring هنا بناءً على القيمة المختارة
// let { title, age, available, skills } = myFriends[chosen - 1];

// // طباعة النتائج بناءً على قيمة available
// console.log(title);
// console.log(age);
// console.log(available ? "Available" : "Not Available");
// console.log(skills[1]);
