import {idleAnimation} from '../animations/scottAnimations.js';
import MovingObject from './moving_objects.js';


export default class Scott extends MovingObject {
  constructor(options) {
    super(options);
    this.status = 'idle';
  }

  update(){
    this.spritePicker += .2;
  }
  render(){
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
        this.xPos -= 1;
        break;
      case 'right':
        this.xPos += 1;
        break;
      default:

    }
  }
}
