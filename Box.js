class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<2){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body);
        //ush();
        this.Visibility=this.Visibility-5;
        //tint(255, this.Visibility);
        //rect(this.body.position.x, this.body.position.y, 50, 50);
        //pop();      }
    }
  }
  score(){
    if(this.Visibility < 0 && this.Visibility >-105){
      score++;
    }
  }
  };
  