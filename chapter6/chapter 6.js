// EXERCISE 1
class vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(other){
        return new vec(this.x+other.x, this.y+other.y);
    }
    minus(other){
        return new vec(this.x-other.x, this.y-other.y);
    }
    get length(){
         return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
console.log(new vec(1, 5).plus (new vec (6, 7)));
console.log(new vec(4, 9).minus(new vec(5, 10)));
console.log(new vec(6, 8).length);
