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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(1);




document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 700;
  canvas.height = 736;
  const frames = 0;
  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](canvas, ctx, frames);
  game.gameLoop();

  // document.addEventListener('keypress', (e) => {
  //   console.log(e.keyCode);
  //   switch (e.keyCode) {
  //     case 32:
  //
  //     switch (game.currentState) {
  //       case 'Splash':
  //       game.currentState = 'Running';
  //       game.bird.jump();
  //
  //         break;
  //       case 'Running':
  //       game.bird.jump();
  //
  //         break;
  //       case 'GameOver':
  //       game.currentState = 'Splash';
  //       game.reset();
  //         break;
  //       default:
  //     }
  //     break;
  //     case 112:
  //     game.pauseGame();
  //     break;
  //     default:
  //     console.log('this is not the key you are looking for');
  //   }
  // });

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__soldier_js__ = __webpack_require__(2);


class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx= ctx;
    this.frames = frames;
    this.gameLoop = this.gameLoop.bind(this);
    this.soldier = new __WEBPACK_IMPORTED_MODULE_0__soldier_js__["a" /* default */](this.canvas, this.ctx, 40, 40);
  }

  update(){

  }


  _collided(objA, objB) {
  let a = objA.xPos < objB.xPos + objB.width - 5;
  let b = objA.xPos + objA.width - 5 > objB.xPos;
  let c = objA.yPos < objB.yPos + objB.height;
  let d = objA.height + objA.yPos > objB.yPos;
  if (a && b && (c && d)) {
    return true;
  }
}

gameLoop() {
  this.frames++;
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  this.soldier.render();

  if (this.currentState !== 'Paused') {
    this.gameID = window.requestAnimationFrame(this.gameLoop);
  } else {
    window.cancelAnimationFrame(this.gameID);
  }
}
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Soldier {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = 'res/22056.png';
    this.render = this.render.bind(this);
  }

  update(){

  }

  render(){
    this.ctx.drawImage(
      this.image,
      5, 1956, 68, 2007-1956, this.x, this.y,100, 100
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Soldier);


/***/ })
/******/ ]);
//# sourceMappingURL=gunGame.js.map