import {idleAnimation,
  movingAnimations} from '../animations/scottAnimations.js';
import MovingObject from './moving_objects.js';


export default class Scott extends MovingObject {
  constructor(options) {
    super(options);
    this.status = 'idle';
    this.rotate = 1;
  }

  update(){
    this.spritePicker += .2;
  }
  render(){
    this.ctx.save();
    this.ctx.translate(this.xPos + this.width / 2, this.yPos + this.height / 2);
    this.ctx.scale(this.rotate, 1);
    this.ctx.translate(-(this.xPos + this.width / 2), -(this.yPos + this.height / 2));
     if (this.status === 'moving') {

      this.ctx.drawImage(
        this.image,
        movingAnimations[Math.floor(this.spritePicker % 8)].x,
        movingAnimations[Math.floor(this.spritePicker % 8)].y,
        movingAnimations[Math.floor(this.spritePicker % 8)].width,
        movingAnimations[Math.floor(this.spritePicker % 8)].height,
        this.xPos,
        this.yPos,
        movingAnimations[Math.floor(this.spritePicker % 8)].width * 3,
        movingAnimations[Math.floor(this.spritePicker % 8)].height * 3
      );

    } else {

    this.ctx.drawImage(
      this.image,
      idleAnimation[Math.floor(this.spritePicker % 8)].x,
      idleAnimation[Math.floor(this.spritePicker % 8)].y,
      idleAnimation[Math.floor(this.spritePicker % 8)].width,
      idleAnimation[Math.floor(this.spritePicker % 8)].height,
      this.xPos,
      this.yPos,
      idleAnimation[Math.floor(this.spritePicker % 8)].width * 3,
      idleAnimation[Math.floor(this.spritePicker % 8)].height * 3
    );
  }
  this.ctx.restore();
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
      this.rotate = -1;
        this.xPos -= movingAnimations[Math.floor(this.spritePicker % 8)].width * .5;
        break;
      case 'right':
      this.xPos += movingAnimations[Math.floor(this.spritePicker % 8)].width * .5;
        break;
      default:

    }
  }
}