import {idleAnimation,
  movingAnimations,
jumpingAnimations} from '../animations/scottAnimations.js';
import MovingObject from './moving_objects.js';


export default class Scott extends MovingObject {
  constructor(options) {
    super(options);
    this.status = 'idle';
    this.rotate = 1;
  }

  update(){
    this.spritePicker += .15;
  }
  render(){
    this.ctx.save();
    this.ctx.translate(this.xPos +
      movingAnimations[Math.floor(this.spritePicker % 8)].width * 3
       / 2, this.yPos +
      movingAnimations[Math.floor(this.spritePicker % 8)].height
    );
    this.ctx.scale(this.rotate, 1);
    this.ctx.translate(-(this.xPos +
      movingAnimations[Math.floor(this.spritePicker % 8)].width * 3
       / 2), -(this.yPos +
      movingAnimations[Math.floor(this.spritePicker % 8)].height
    ));

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

    } else if (this.status === 'idle'){

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
  } else if (this.status === 'jumping') {
    this.ctx.drawImage(
      this.image,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].x,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].y,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].width,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].height,
      this.xPos,
      this.yPos,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].width * 3,
      jumpingAnimations[Math.floor(this.spritePicker % 8)].height * 3
    );

  }
  this.ctx.restore();
  }

  move(direction){
    switch (direction) {
      case 'up':
      this.status = 'jumping';
      this.yPos -= jumpingAnimations[Math.floor(this.spritePicker % 8)].height * .5;
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
