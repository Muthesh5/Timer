class Rope
{
    constructor(body1,body2,xOffset)
  {
    var options=
    {
        bodyA:body1,
        bodyB:body2,
        stiffness:1,
        angularstiffness:1,
        length:220,
        pointB:{x:xOffset, y:0}
    }
    this.xOffset=xOffset;
    this.rope= Constraint.create(options);
    World.add(world,this.rope);
  }

  display()
  {
      fill(255)
      var posA= this.rope.bodyA.position;
      var posB =this.rope.bodyB.position;
      push()
      strokeWeight(3.5)
      stroke(255)
      line(posA.x,posA.y,posB.x+this.xOffset,posB.y)
  }
}

