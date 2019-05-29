function Dog(){
    this.name = "Husky";
    this.stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
};