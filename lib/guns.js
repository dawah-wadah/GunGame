import MovingObject from './moving_objects';
import { gunSprites } from '../animations/gunsSprites.js';


class Gun extends MovingObject {
  constructor(options) {
    super(options);
  }


  update(){

  }

  render(){
    this.ctx.drawImage(
      this.image,
      gunSprites.pistol.x,
      gunSprites.pistol.y,
      gunSprites.pistol.width,
      gunSprites.pistol.height,
      this.xPos,
      this.yPos,
      gunSprites.pistol.width * 1,
      gunSprites.pistol.height * 1
    );
  }
}

export default Gun;
