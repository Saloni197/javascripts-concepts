var arr1 = ["This","is","about"];
var arr2 = ["javascript","practice"]

console.log("\n",arr1);
console.log("\n",arr2);

//concatination of two arrays
console.log("\n concatination")
let arr3 = arr1.concat(arr2);
console.log(arr3);
let arr4 = [].concat(arr1,arr2)//another way
console.log(arr4);

//join is used to convert array into string 
console.log("\n Join")
let str = arr3.join(" ");
console.log(str);

//split is used to convert string into array
console.log("\n Split")
let arr5 = str.split(" ")
console.log(arr5); 