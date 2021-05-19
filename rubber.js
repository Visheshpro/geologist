class Rubber{

    constructor(x,y,radius){

    var options={
restitution:0.3,
density:0.3,
friction:5
        }
    
    this.body = Bodies.circle(x, y, radius, options)
    World.add(world, this.body)
    this.radius = 2*radius
    

    }
    
    display(){

    push()
    fill ("blue")
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode(CENTER)
    circle(0,0,this.radius)
    pop()

    }
    }