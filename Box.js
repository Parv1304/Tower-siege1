class Box {
  constructor(x, y, width, height)
  {
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display()
  {
    var pos =this.body.position;
    rectMode(CENTER);
    fill("#67D1EA");
    strokeWeight(3.5);
    rect(pos.x,pos.y,this.width,this.height);
  }
}