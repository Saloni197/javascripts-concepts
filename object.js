function student(name,age,rollNo){
  return{
      name: name,
      age: age,
      rollNo: rollNo,
  };
}
let result = student("kavita",23,"MCA");
console.log(result.name);
console.log(result.age);
console.log(result.rollNo);