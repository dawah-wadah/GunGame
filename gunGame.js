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
  game.start();

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scott_js__ = __webpack_require__(3);



class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frames = frames;
    this.gameLoop = this.gameLoop.bind(this);
    this.soldier = new __WEBPACK_IMPORTED_MODULE_0__soldier_js__["a" /* default */](this.canvas, this.ctx, 40, 40);
    this.scott = new __WEBPACK_IMPORTED_MODULE_1__scott_js__["a" /* default */]({
      xPos: 20,
      yPos: 30,
      width: 50,
      height: 100,
      canvas: this.canvas,
      ctx: this.ctx,
      src: 'res/scott.png',
      spritePicker: 0
    });
    this.keys = {
      37: {
        down: false,
        action: () => this.scott.move('left')
      },
      38: {
        down: false,
        action: () => this.scott.move('up')
      },
      39: {
        down: false,
        action: () => this.scott.move('right')
      },
      40: {
        down: false,
        action: () => this.scott.move('down')
      },

      65: {
        down: false,
        action: () => this.scott.move('left')
      },
      68: {
        down: false,
        action: () => this.scott.move('right')
      },
      83: {
        down: false,
        action: () => this.scott.move('down')
      },
      87: {
        down: false,
        action: () => this.scott.move('up')
      },
    };
    this.start = this.start.bind(this);
  }

  update() {
    for (var key in this.keys) {
      if (this.keys[key].down) {
        this.keys[key].action();
      }
    }
  }

  start() {
    document.addEventListener('keydown', e => {
      if (this.keys[e.keyCode]) {
        this.keys[e.keyCode].down = true;
      }
    });

    document.addEventListener('keyup', e => {
      if (this.keys[e.keyCode]) {
        this.keys[e.keyCode].down = false;
        this.scott.status = 'idle';
      }
    });

    document.addEventListener('keypress', e => {
      if (e.keyCode === 32) {
        this.tank.fireBullet();
      }
    });
    this.gameLoop();
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
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.scott.update();
    this.update();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.scott.render();
    this.gameID = window.requestAnimationFrame(this.gameLoop);
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moving_objects_js__ = __webpack_require__(5);




class Scott extends __WEBPACK_IMPORTED_MODULE_1__moving_objects_js__["a" /* default */] {
  constructor(options) {
    super(options);
    this.status = 'idle';
  }

  update(){
    this.spritePicker += .2;
  }
  render(){
    if (this.status === 'moving') {

      this.ctx.drawImage(
        this.image,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].x,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].y,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].width,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].height,
        this.xPos,
        this.yPos,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].width * 3,
        __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].height * 3
      );

    } else {

    this.ctx.drawImage(
      this.image,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].x,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].y,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].width,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].height,
      this.xPos,
      this.yPos,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].width * 3,
      __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["a" /* idleAnimation */][Math.floor(this.spritePicker % 8)].height * 3
    );
  }
  }

  move(direction){
    this.status = 'moving';
    switch (direction) {
      case 'up':
        this.yPos -= 1;
        break;
      case 'down':
        this.yPos += 1;
        break;
      case 'left':
        this.xPos -= __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].width * .5;
        break;
      case 'right':
      this.xPos += __WEBPACK_IMPORTED_MODULE_0__animations_scottAnimations_js__["b" /* movingAnimations */][Math.floor(this.spritePicker % 8)].width * .5;
        break;
      default:

    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scott;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const idleAnimation = {
  0: {
    x: 32,
    y: 92,
    width: 37,
    height: 58,
  },
  1: {
    x: 73,
    y: 92,
    width: 37,
    height: 56,
  },
  2: {
    x: 116,
    y: 92,
    width: 37,
    height: 53,
  },
  3: {
    x: 156,
    y: 92,
    width: 37,
    height: 56,
  },
  4: {
    x: 196,
    y: 92,
    width: 37,
    height: 58,
  },
  5: {
    x: 236,
    y: 92,
    width: 37,
    height: 56,
  },
  6: {
    x: 275,
    y: 92,
    width: 37,
    height: 53,
  },
  7: {
    x: 317,
    y: 92,
    width: 37,
    height: 56,
  },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = idleAnimation;


const movingAnimations = {
  0: {
    x: 32,
    y: 92,
    width: 37,
    height: 58,
  },
  1: {
    x: 77,
    y: 178,
    width: 42,
    height: 59,
  },
  2: {
    x: 121,
    y: 178,
    width: 52,
    height: 50,
  },
  3: {
    x: 177,
    y: 178,
    width: 46,
    height: 51,
  },
  4: {
    x: 226,
    y: 178,
    width: 40,
    height: 50,
  },
  5: {
    x: 267,
    y: 178,
    width: 42,
    height: 58,
  },
  6: {
    x: 312,
    y: 178,
    width: 50,
    height: 51,
  },
  7: {
    x: 370,
    y: 178,
    width: 46,
    height: 52,
  },
};
/* harmony export (immutable) */ __webpack_exports__["b"] = movingAnimations;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MovingObject {
  constructor(options) {
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.width = options.width;
    this.height = options.height;
    this.canvas = options.canvas;
    this.ctx = options.ctx;
    this.image = new Image();
    this.image.src = options.src;
    this.spritePicker = 0;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MovingObject;



/***/ })
/******/ ]);
//# sourceMappingURL=gunGame.js.map