function Mouse(name){
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.isDead = function(){
    this.isDead = true;
}
module.exports = Mouse;