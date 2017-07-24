class Soldier {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = 'res/22056.png';
    this.render = this.render.bind(this);
  }

  update(){

  }

  render(){
    this.ctx.drawImage(
      this.image,
      5, 1956, 68, 2007-1956, this.x, this.y,100, 100
    );
  }
}

export default Soldier;
