class Ball{
    constructor(x,y,width,height){
        var options = {
           
            density : 1.0,
            frictionAir:0.05 

        }
        this.width = width;
        this.height = height;
        this.x= x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
       
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill('blue');
        ellipse(0,0,this.width,this.height);

        
        
        pop();
    }
}