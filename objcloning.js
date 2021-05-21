let student1 = {
    name: "Ishika",
    age: 20
  };
  
  let student2 = {}; 
  for (let key in student1) {
    student2[key] = student1[key];
  }
  student2.name = "Kavita";
  student2.age = 23; 
  
  console.log( student1.name );
  console.log(student2.name);
  console.log( student1.age );
  console.log(student2.age);
