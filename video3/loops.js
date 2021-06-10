let obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5
}
for(let prop in obj){
    console.log(`key in obj is : ${prop} and having value : ${obj[prop]}`);
}

const array1 = ['a', 'b', 'c','d','e'];
// for(let element of array1){
//     console.log(`${element}`)
// }


//array1.forEach((element) => console.log(element));