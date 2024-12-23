// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// let uniqueFriends = new Set(myFriends);
////////////////////////////

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// // تحويل الـ Object إلى Map
// let myMap = new Map(Object.entries(myInfo));

// // طباعة محتوى الـ Map
// console.log(myMap);

// // طباعة عدد عناصر الـ Map
// console.log(myMap.size);

// // التحقق هل تحتوي الـ Map على مفتاح "role"
// console.log(myMap.has("role"));
//////////////////////////////////

// let theNumber = 100020003000;

// // // Needed Output
// // 123

// let arr = theNumber.toString().split("");
// let newSet = new Set(arr);
// newSet.delete("0");
// console.log(...newSet);

// let result = +[...new Set(theNumber.toString())]
//   .filter((n) => n !== "0")
//   .join("");

//////////////////////////////////
