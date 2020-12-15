class Ball {
    constructor(x,y,r) {
      var opt = {
          'restitution':1.3,
          'friction':0,
          'density':0.2,
          'slop':1,
          'inertia':Infinity
      }
      this.x=x
      this.y=y
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r/2,opt)
      World.add(world,this.body)
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER);
      fill(0);
      strokeWeight(2)
      stroke("white")
      ellipse(0, 0, this.r, this.r);
      pop()
    }
  }
