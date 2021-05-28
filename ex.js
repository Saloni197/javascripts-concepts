// let abc = 4 > 1;
// console.log(abc);


// let user = {
//     name: "ram",
//     surname: "shyam"
//   };
//   user.age = 25;  //add a key
//   for (let prop in user) {
//     console.log( user[prop] ); 
//   }




// 
const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}