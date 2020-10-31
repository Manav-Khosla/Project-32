class Polygon{
    constructor(x, y, radius){
        var options = {
          isStatic: false,
          restitution:1.0,
          friction:1.0,
          density:1.0
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        ellipseMode(CENTER);
        fill(0, 255, 0)
        ellipse(0,0,this.radius*2, this.radius*2);
        pop()
    }}