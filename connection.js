class connection {
     constructor(a,b){
var s = {
    bodyA:a,bodyB:b,length:90,stiffness:0.1}
this.line=Matter.Constraint.create(s)
World.add(world,this.line)
     }
display()
{
    line(this.line.bodyA.position.x,this.line.bodyA.position.y,this.line.bodyB.position.x,this.line.bodyB.position.y)
}
     }