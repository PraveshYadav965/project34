class Pendulum{
    constructor(x,y, color){
        var options ={
            restitution: 1,
           friction: 0,
           density:0.8
        };
        this.body = Bodies.circle(x, y,30, options);
        this.x= x;
        this.y= y;
        this.color = color;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS)
        ellipse(0, 0, 30, 30);
        pop();
    }
}
