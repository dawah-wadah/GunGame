import Soldier from './soldier.js';
import Scott from './scott.js';

class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frames = frames;
    this.gameLoop = this.gameLoop.bind(this);
    this.soldier = new Soldier(this.canvas, this.ctx, 40, 40);
    this.scott = new Scott({
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

export default Game;
