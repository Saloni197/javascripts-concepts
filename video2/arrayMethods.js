//two ways of creating array
//first method
var fruits  = ["Apple","Banana","Mango","Orange"];
console.log('\n', fruits);

//second method
var Veg = new Array("Tomato","Potato","Onion","cpsicum","Pear");
console.log('\n',Veg);

//find lenght of an array
console.log("\n //length")
console.log(Veg.length);

//find the element from index
console.log(" \n //from index")
console.log(fruits[3]);
console.log(Veg[0]);

//add element at the end and begining of the array
console.log("\n //add elements")
console.log(fruits);
fruits.push("Fig");       //end
fruits.unshift("Date");   //begining
console.log(fruits);

//remove element from end and begining in the array
console.log("\n //remove elements")
console.log(Veg);
Veg.pop();  //end
Veg.shift(); //begining
console.log(Veg);

//add and remove element using single splice function 
console.log("\n //splice function")
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);

fruits.splice(0,1,"watermelon");
console.log(fruits);

//reverse the elements of array
console.log("\n //reverse")
fruits.reverse();
console.log(fruits);

//sort the array
console.log("\n //sort array")
Veg.sort();
console.log(Veg);
console.log(fruits);

//find index of the array
console.log("\n //index of array")
console.log(Veg);
console.log(Veg.indexOf("Potato"));

//index from last
console.log("\n //index from last")
Veg.push("Potato");
console.log(Veg)
console.log(Veg.lastIndexOf("Potato"));








