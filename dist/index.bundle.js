/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\nconst menuBars = $('#menu-bars');\r\nconst overlay =$('#overlay');\r\nconst nav1 = $('#nav-1');\r\nconst nav2 = $('#nav-2');\r\nconst nav3 = $('#nav-3');\r\nconst nav4 = $('#nav-4');\r\nconst nav5 = $('#nav-5');\r\n\r\nconst navItems = [nav1, nav2, nav3, nav4, nav5];\r\n\r\n// Control Navigation Animation\r\nfunction navAnimation(direction1, direction2) {\r\n  navItems.forEach((nav, i) => {\r\n    if (nav.hasClass(`slide-${direction1}-${i + 1}`)) {\r\n      nav.removeClass(`slide-${direction1}-${i + 1}`)\r\n      nav.addClass( `slide-${direction2}-${i + 1}`);\r\n    }\r\n  });\r\n}\r\n\r\nfunction toggleNav() {\r\n  // Toggle: Menu Bars Open/Closed\r\n  menuBars.toggleClass('change');\r\n  // Toggle: Menu Active\r\n  overlay.toggleClass('overlay-active');\r\n  if (overlay.hasClass('overlay-active')) {\r\n    // Animate In - Overlay\r\n    overlay.removeClass('overlay-slide-left');\r\n    overlay.addClass( 'overlay-slide-right');\r\n    // Animate In - Nav Items\r\n    navAnimation('out', 'in');\r\n  } else {\r\n    // Animate Out - Overlay\r\n    overlay.removeClass('overlay-slide-right');\r\n    overlay.addClass( 'overlay-slide-left');\r\n    // Animate Out - Nav Items\r\n    navAnimation('in', 'out');\r\n  }\r\n}\r\n\r\n// Event Listeners\r\nmenuBars.click(toggleNav)\r\nnavItems.forEach((nav) => {\r\n  nav.click( toggleNav);\r\n});\r\n\n\n//# sourceURL=webpack://animated-navigation/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;