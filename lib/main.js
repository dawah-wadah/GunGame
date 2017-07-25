import Game from './game.js';



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 736;
  const frames = 0;
  const game = new Game(canvas, ctx, frames);
  game.start();

});
