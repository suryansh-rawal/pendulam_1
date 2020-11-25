class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/steel_rod.jpg");
    this.body.isStatic=true;
  }

};
