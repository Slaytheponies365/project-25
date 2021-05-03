class Garbage {
    constructor(x,y,r){
        var garbage_features = {
            isStatic : false,
            restitution : 1
          }
          this.garbage = Bodies.circle(x,y,r,garbage_features)
          World.add(world,this.garbage)
          this.r = r

          this.trash = loadImage ("paper.png")
    }

    display(){
        push()
        translate(this.garbage.position.x,this.garbage.position.y)
        rotate(this.garbage.angle)
        imageMode(CENTER)
        image (this.trash,0,0,50,50)
        pop()
    }
}