class Polygon {
  constructor(x, y , diameter) {

  // var options = {
   // isStatic : false,      
   //'restitution':0,
   //'friction': 1,
   // 'density': 0.1
    //}

    this.diameter = diameter;

    this.body = Bodies.circle(x, y, 50);
    this.diameter = 50;
    this.image = loadImage("Picture/polygon.png");
    World.add(world, this.body);
 }

display(){
  var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,50,50);
    pop();
 }
} 