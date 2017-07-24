class Soldier {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.image = 'res/22056.png';
  }

  update(){

  }

  render(){
    this.ctx.drawImage(
      this.image,
      5, 1956, 68, 2007-1956, 80, 80,100, 200
    );
  }
}
