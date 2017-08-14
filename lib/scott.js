import {
  idleAnimation,
  movingAnimations,
  jumpingAnimations
} from '../animations/scottAnimations.js';
import MovingObject from './moving_objects.js';


export default class Scott extends MovingObject {
  constructor(options) {
    super(options);
    this.status = 'idle';
    this.rotate = 1;
    this.gravity = 9.81;
    this.yVel = 0;
    this.termYVel = 8;
    this.xYvel = 0;
  }

  update() {
    this.spritePicker += .15;
    if (this.yPos + this.height <= this.canvas.height - 100) {
      if (this.yVel < this.termYVel) {

      this.yVel += this.gravity;
    }
    this.yPos += this.yVel;
    } else {
      this.yVel = 0;
      this.status = 'idle';
    }
  }
  render() {
    this.ctx.save();
    let animation = idleAnimation;
    switch (this.status) {
      case "moving":
        animation = movingAnimations;
        break;
      case "idle":
        animation = idleAnimation;
        break;
      case "jumping":
        animation = jumpingAnimations;
        break;
      default:
        animation = idleAnimation;

    }
    this.ctx.translate(this.xPos +
      animation[Math.floor(this.spritePicker % 8)].width * 3 /
      2, this.yPos +
      animation[Math.floor(this.spritePicker % 8)].height
    );
    this.ctx.scale(this.rotate, 1);
    this.ctx.translate(-(this.xPos +
      animation[Math.floor(this.spritePicker % 8)].width * 3 /
      2), -(this.yPos +
      animation[Math.floor(this.spritePicker % 8)].height
    ));

    //debugging

    //
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);

    this.width = animation[Math.floor(this.spritePicker % 8)].width * 3;

    this.height = animation[Math.floor(this.spritePicker % 8)].height * 3;


    this.ctx.drawImage(
      this.image,
      animation[Math.floor(this.spritePicker % 8)].x,
      animation[Math.floor(this.spritePicker % 8)].y,
      animation[Math.floor(this.spritePicker % 8)].width,
      animation[Math.floor(this.spritePicker % 8)].height,
      this.xPos,
      this.yPos,
      animation[Math.floor(this.spritePicker % 8)].width * 3,
      animation[Math.floor(this.spritePicker % 8)].height * 3
    );

    this.ctx.restore();
  }

  move(direction) {
    switch (direction) {
      case 'up':
        this.status = 'jumping';
        this.yPos -= jumpingAnimations[Math.floor(this.spritePicker % 8)].height * .5;
        this.yVel -= this.gravity * .15;
        break;
      case 'down':
        this.yPos += 5;
        break;
      case 'left':
        this.rotate = -1;
        this.status = 'moving';
        this.xPos -= movingAnimations[Math.floor(this.spritePicker % 8)].width * .5;
        break;
      case 'right':
        this.status = 'moving';
        this.xPos += movingAnimations[Math.floor(this.spritePicker % 8)].width * .5;
        break;
      default:

    }
  }
}
