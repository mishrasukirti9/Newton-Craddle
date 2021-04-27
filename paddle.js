class Paddle{
    constructor(x,y){
        var options ={
            isStatic : true
        }
     this.body=Bodies.rectangle(x,y,800,10,options);
     this.Width=300;
     this.Height=10;
     this.x=x;
     this.y=y;
     World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("blue")
        rect(this.x,this.y,this.Width,this.Height);
     pop();
    }

}