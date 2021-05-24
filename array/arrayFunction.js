// creating array
let students = ["kavita","neha","sakshi","mohit"]

//access array element
console.log(students[2]);
console.log(students[0]);

//array length
console.log(students.length);

//add element in the array at begining
console.log(students.push("gagan"));
console.log(students);

//add element in the array at the end
console.log(students.unshift("yash"));
console.log(students);

//use loop
for(let trainees in students){
    console.log(students[trainees]);
}



//remove element from begining of the array
console.log(students.pop());
console.log(students);

//remove element from the end of the array
console.log(students.shift());
console.log(students);


