var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Husky');
var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');

try{
    cat.eat(dog);
} catch(error){
    console.log('Error while cat eating a dog');
}



cat.eat(mouse);
console.log(cat);