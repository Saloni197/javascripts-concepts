function* generater() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let generator = generater();
  
  // for(let value of generator) {
  //   console.log(value); 
  // }

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());