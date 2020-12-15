class Holder{
    constructor(x,y,height){
        var opt={
            isStatic:true
        }
        this.width=60
        this.height=height
        this.body = Bodies.rectangle(x, y, 60, height,opt);
        World.add(world, this.body);
    }
    display()
    { 
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill(0)
        rect(0, 0, 500, 40);
        pop()
    }
  }