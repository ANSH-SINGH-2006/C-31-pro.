class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

      
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
      
      

    }
    
    display(){
        var pos =this.body.position;
        
        
        circle(pos.x,pos.y,this.radius);
      }


    }