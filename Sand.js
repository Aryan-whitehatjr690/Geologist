class Sand{
    constructor(x,y,radius){
        var options={
            restitution:1.3,
            friction:5,
            density:1
        }
        this.radius=5;
        this.body=Bodies.circle(x,y,5,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        stroke("black");
        strokeWeight(3)
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
       
        
        
        pop();

    }
}