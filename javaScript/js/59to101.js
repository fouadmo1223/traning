// window.onload = function () {
//     let allLinks = document.querySelectorAll(".open");
//     allLinks.forEach(function (link) {
//       if (link.textContent == "Elzero") {
//         link.click();
//       }
//     });
//     console.log(allLinks);
//   };

//  /////////////////////////////////////////////////////////////////////
//  Add and remove Class

// let mainBox = document.querySelector(".classes-contain");
// function checkIfEmptyOrNot() {
//   if (mainBox.children.length == 0) {
//     mainBox.innerHTML = "";
//     mainBox.innerHTML = `<div class="w-fit  p-3 empty">
//               <span class="fs-5">There Is No Classes </span>
//             </div>`;
//   }
// }
// document.onload = checkIfEmptyOrNot();

// let addClass = document.querySelector(".add");
// let removeClass = document.querySelector(".remove");
// addClass.onblur = function () {
//   if (mainBox.children.length == 1) {
//     let elm = mainBox.children[0];
//     if (elm.classList.contains("empty")) {
//       mainBox.innerHTML = "";
//     }
//   }
//   if (addClass.value.length > 0 && addClass.value != "") {
//     let ArrClasses = addClass.value.split(" ");
//     ArrClasses.forEach((element) => {
//       if (element != "") {
//         mainBox.innerHTML += `<div class="w-fit rounded-2 p-3 classes ${element}" >
//                     <span>${element}</span>
//                   </div>`;
//       }
//     });
//     addClass.value = "";
//   }
// };

// removeClass.onblur = function () {
//   if (removeClass.value.length > 0 && removeClass.value != "") {
//     if (mainBox.children.length == 1) {
//       let elm = mainBox.children[0];
//       if (!elm.classList.contains("empty")) {
//         if (elm.classList.contains(removeClass.value)) {
//           mainBox.innerHTML = "";
//           checkIfEmptyOrNot();
//         }
//       }
//       removeClass.value = "";
//     } else {
//       let arrRemove = removeClass.value.split(" ");
//       let allClasses = mainBox.children;
//       console.log(arrRemove);
//       console.log(allClasses);
//       arrRemove.forEach(function (elm) {
//         {
//           if (elm != "") {
//             for (let i = allClasses.length - 1; i >= 0; i--) {
//               if (allClasses[i].classList.contains(elm)) {
//                 allClasses[i].remove();
//               }
//             }
//             checkIfEmptyOrNot();
//             removeClass.value = "";
//           }
//         }
//       });
//     }
//   }
// };
///////////////////////////////////////////////////////////////////////

// let div = document.querySelectorAll("div")[0];
// document.getElementsByTagName("p")[0].remove();
// let stratElement = document.createElement("div");
// stratElement.title = "Start Element";
// stratElement.classList.add("start");
// stratElement.setAttribute("data-value", "Start");
// stratElement.textContent = "Start";
// div.before(stratElement);
// let endElement = stratElement.cloneNode(true);
// endElement.title = "End Element";
// endElement.classList.add("end");
// endElement.classList.remove("start");
// endElement.setAttribute("data-value", "End");
// endElement.textContent = "End";
// div.after(endElement);
//////////////////////

// console.log(document.querySelectorAll("div")[0].childNodes[4].data.trim());
/////////////////////////////////////////////////////////////////
// document.onclick = (e) => {
//   console.log(`this is ${e.target.tagName}`);
// };
