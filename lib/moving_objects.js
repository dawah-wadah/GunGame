export default class MovingObject {
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
