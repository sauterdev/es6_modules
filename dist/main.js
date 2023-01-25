/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor(id, make, model, year){\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\n\r\n\r\n\r\nconst form = document.getElementById(\"submitForm\");\r\nconst makeInput = document.getElementById(\"makeInput\");\r\nconst modelInput = document.getElementById(\"modelInput\");\r\nconst yearInput = document.getElementById(\"yearInput\");\r\nconst carMake = document.querySelector(\"#car-make\");\r\nconst carModel = document.querySelector(\"#car-model\");\r\nconst carYear = document.querySelector(\"#car-year\");\r\nconst removeButton = document.querySelector(\".removeBtn\");\r\nconst addButton = document.getElementById(\"submitBtn\")\r\nconst wishListUL = document.querySelector(\"#wishUL\");\r\n// addButton.addEventListener(`click`, myWishlist.addCar);\r\n\r\nfunction showCarDetails(car) {\r\n   carMake.textContent = car.make;\r\n    carModel.textContent = car.model;\r\n    carYear.textContent = car.year;\r\n    removeButton.disabled = false;\r\n    removeButton.addEventListener (`click`, removeCar)\r\n    \r\n    removeButton.setAttribute(\"data-carID\", car.id);\r\n   }\r\n   \r\n   function updateDOMlist() {\r\n      wishListUL.innerHTML = \"\";\r\n      myWishlist.list.forEach((car) => {\r\n         const newLi = document.createElement(`li`);\r\n         newLi.textContent = `${car.make} ${car.model}`;\r\n         newLi.addEventListener(\"click\", () => {\r\n            showCarDetails(car);\r\n         });\r\n         wishListUL.appendChild(newLi);\r\n      })\r\n   }\r\n   \r\n   function addCar(event) {\r\n      event.preventDefault();\r\n      myWishlist.add(makeInput.value, modelInput.value, yearInput.value)\r\n      \r\n      updateDOMlist();\r\n   }\r\n   \r\n   function removeCar() {\r\n    const carId = Number(removeButton.getAttribute(\"data-carID\"));\r\n    myWishlist.remove(carId);\r\n    updateDOMlist();\r\n    carMake.textContent = \"\";\r\n    carModel.textContent = \"\";\r\n    carYear.textContent = \"\";\r\n    removeButton.disabled = true;\r\n   }\r\n   \r\n   let myWishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n   addButton.addEventListener(`click`, addCar);\r\n   \r\n   \r\n   \r\n   \r\n   \r\n   \r\n   \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass Wishlist {\r\n    list = [];\r\n    nextId = 0;\r\n\r\n    add = (make, model, year) => {\r\n        let newCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n        this.list.push(newCar);\r\n    }\r\n\r\n    remove = (carId) => {\r\n       this.list.forEach((ele, index) => {\r\n        if (ele.id === carId) {\r\n            this.list.splice(index, 1);\r\n        }\r\n       }) \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;