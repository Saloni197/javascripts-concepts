var myMap = new Map();

myMap.set(1,"Apple");
myMap.set(2,"Banana");
myMap.set(3,"Orange");
myMap.set(4,"Date");
console.log (myMap);

// for(let key of myMap.keys()){
//  for(let value of myMap.values()){
//     console.log(value);
// }   console.log(key);
// }

// 

// for(let [keyy,valuee] of myMap){
//     console.log(`keys is : ${keyy} and values is : ${valuee}`);
// }
//  myMap.forEach((v,k) => console.log(`${k} in keys ${v}`) )

 myMap.delete(3)
 console.log(myMap);