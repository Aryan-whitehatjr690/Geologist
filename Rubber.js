class Rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.radius=40;
        this.body=Bodies.circle(x,y,40,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        stroke("white");
        strokeWeight(3)
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
       
        
        
        pop();

    }
}
