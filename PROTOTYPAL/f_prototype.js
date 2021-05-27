let animal = {
  eats: "true",
  speak: "true"
};
function Cat(name){
    this.name = name;
}
Cat.prototype = animal;
let cat = new Cat("Cute Cat");
console.log(cat);
console.log(cat.eats);
console.log(cat.speak);