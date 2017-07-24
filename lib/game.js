import Soldier from './soldier.js';

class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx= ctx;
    this.frames = frames;
    this.gameLoop = this.gameLoop.bind(this);
    this.soldier = new Soldier(this.canvas, this.ctx, 40, 40);
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

export default Game;
