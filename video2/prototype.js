let stu1 = {
    name: "kavita",
    class: "MCA",
    isstudy() {
        console.log(`${this.name} studying in ${this.class}`);
    }
   };
   let stu2 = {
     name: "Mehak",
     __proto__: stu1
   };
   
//    stu2.class = "MBA";
   
   console.log(stu1.isstudy()); 
   console.log(stu2.isstudy()); 
   console.log(stu2.class);
   console.log(stu1.class);
   
   //not access inherited properties
   console.log(Object.keys(stu2));
   
   //access inherited properties also
   for(let prop in stu2){
       console.log(prop);
   }
   console.log(stu2.hasOwnProperty('class')); //print false b/c class is not own property of stu2