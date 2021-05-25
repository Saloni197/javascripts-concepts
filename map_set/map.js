//create an empty map
const myMap = new Map();
const key1 = 'Mapstring',
      key2 = {} ,
      key3 = function() {};
      key4 = {};

//set map values 
myMap.set(key1,"this is string");
myMap.set(key2,"this is blank object");
myMap.set(key4,"this is blank object");
myMap.set(key3,"this is empty function");      
console.log(myMap);

//get values frfom MAp
let value = myMap.get(key2);
console.log(value);

//size of map
console.log(myMap.size);

//delete key3
console.log(myMap.delete(key4));
console.log(myMap.size);

//loop for...of
for(let[key,value] of myMap){
    console.log(key,value);
}

//get only keys
for(let key of myMap.keys()){
    console.log(key);
}

//get only values 
for(let value of myMap.values()){
    console.log(value);
}

//loop forEach
myMap.forEach((key,value)=>{
    console.log(key);
    console.log(value);
})

//convert map to an array
let myArr = Array.from(myMap);
console.log(myArr);

//convert key&values in to array
let myArrKey = Array.from(myMap.keys());
console.log(myArrKey);

let myArrVal = Array.from(myMap.values());
console.log(myArrVal);
