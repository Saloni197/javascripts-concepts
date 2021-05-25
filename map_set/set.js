//create set 
let mySet = new Set();


//add values
mySet.add("val1");
mySet.add("val2");
mySet.add("val3");
mySet.add("val4");
mySet.add("val4");//REPEATION IS NOT ALLOWED IN SET
mySet.add("val5");
console.log(mySet);

//size of set
console.log(mySet.size);

//check weather a value is in set or not
console.log(mySet.has("val3"));

//remove value
console.log(mySet.delete("val5"));
console.log(mySet.size);

//for...of loop
for(let item of mySet){
    console.log(item)
}

//forEach loop
mySet.forEach((item2)=>{
    console.log(item2);
})

// convert into array
let myArr = Array.from(mySet);
console.log(myArr);






