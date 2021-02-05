class Chain {
  constructor(bodyA,bodyB, pointB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:pointB,
        length:500,
        stiffness:1
                
  }
  this.chain=Matter.Constraint.create(options);
  World.add(world, this.chain);
  }
  display(){
 var pointA=this.chain.bodyA.position;  
 var pointBx=this.chain.bodyB.position.x  + this.chain.pointB.x;  
 var pointBy=this.chain.bodyB.position.y + this.chain.pointB.y; 
 push(); 
stroke(255);
 strokeWeight(5);
 
 line(pointA.x, pointA.y, pointBx, pointBy);
 pop();
  }

}
