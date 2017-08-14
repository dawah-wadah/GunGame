import {
  mkAnimations
} from '../animations/mkAnimations.js';
import MovingObject from './moving_objects.js';

export default class Snake extends MovingObject {
  constructor(options) {
    super(options);
    this.direction = 'down';
    this.status = 'idle';

    this.gravity = 9.81;

    this.yVel = 0;

    this.termYVel = 8;

    this.xYvel = 0;

  }

  update() {
    this.spritePicker += .05;
  }

  render() {
    this.ctx.save();
    let animation = mkAnimations.down;
    switch (this.direction) {
      case 'up':
        animation = mkAnimations.up;
        break;
      case 'down':
        animation = mkAnimations.down;
        break;
      case 'left':
        animation = mkAnimations.left;
        break;
      case 'right':
        animation = mkAnimations.right;
        break;
      default:

    }
    // //debugging
    //
    // //
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);

    this.width = animation[Math.floor(this.spritePicker % 3)].width * 3;

    this.height = animation[Math.floor(this.spritePicker % 3)].height * 3;


    this.ctx.drawImage(
      this.image,
      animation[Math.floor(this.spritePicker % 3)].x,
      animation[Math.floor(this.spritePicker % 3)].y,
      animation[Math.floor(this.spritePicker % 3)].width,
      animation[Math.floor(this.spritePicker % 3)].height,
      this.xPos,
      this.yPos,
      animation[Math.floor(this.spritePicker % 3)].width * 3,
      animation[Math.floor(this.spritePicker % 3)].height * 3
    );

    this.ctx.restore();
  }

  move(direction) {
    this.spritePicker += .20;
    switch (direction) {
      case 'up':
        this.direction = 'up';
        this.yPos -= mkAnimations.up[Math.floor(this.spritePicker % 3)].height * .5;
        break;
      case 'down':
        this.direction = 'down';
        this.yPos += 5;
        break;
      case 'left':
        this.direction = 'left';
        this.xPos -= mkAnimations.left[Math.floor(this.spritePicker % 3)].width * .5;
        break;
      case 'right':
        this.direction = 'right';
        this.xPos += mkAnimations.right[Math.floor(this.spritePicker % 3)].width * .5;
        break;
      default:

    }
  }
};
