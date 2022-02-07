/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// console.log("Hi Batch #727!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Mai)
// const mai = document.querySelector("#mai");
// console.log(mai);
// with its tag type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);
// with its class (group)
const group = document.querySelector(".group");
// console.log(group);
// by nest selection (ul of the group)
const ul = group.querySelector("ul");
// console.log(ul);
// document.querySelector(".group ul");

// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
// console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Farmate FC)
const ulElement = document.querySelector(".group ul");
// console.log(ulElement);
ulElement.insertAdjacentHTML(
  "beforeend",
  "<li>Farmate <em>FC</em> 🐂</li>"
);

// same but more complex (add Ryota!!)
const kikoeyTeam = document.querySelector("#kikoey ul");
kikoeyTeam.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/76512208?v=4" alt="">
    <p>Ryota</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "lightgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
setInterval(() => {
  // group.classList.toggle("text-white");
}, 1000);

// Read/Write for inputs (change the value in the email input)
const mailInput = document.querySelector("#email");
// console.log(mailInput.value);
mailInput.value = "yann@lewagon.com";

// Read/Write the (inner) text and HTML content (FF RenRaku ⚽️ title)
const ffTrainEQTitle = document.querySelector("#ff-trainEQ h3");
console.log(ffTrainEQTitle.innerText);
console.log(ffTrainEQTitle.innerHTML);

ffTrainEQTitle.innerHTML = "Hello <em>everyone</em>";

// ////////
// Add event listeners
// ////////

// 1. Select an element
// const mai = document.querySelector("#mai");

// // 2. Listen to s click
// mai.addEventListener("click", (event) => {
//   // 3. Change the DOM
//   // event.currentTarget == the element that has been clicked
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select everyone's picture!
const imgs = document.querySelectorAll(".cards img");
// 2. Iterate over them
imgs.forEach((image) => {
  // 3. Listen to a click on each
  image.addEventListener("click", (event) => {
    // 4. Toggle selected
    event.currentTarget.classList.toggle("selected");
  });
});


/***/ })

/******/ });
//# sourceMappingURL=main.js.map