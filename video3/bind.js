var student1 = {
    id : 23456,
    name : "Kavita",
    classs : "MCA",
    getInfo : function(){
              console.log(`
                      student's id  is ${this.id} 
                      Name is ${this.name}
                      and studied in ${this.classs}`);
             }      
};

var student2 = {
    id : 67895,
    name : "Mehak",
    Class : "MBA"
};


student1.getInfo();

//student1.getInfo.bind(student2) ();


student1.getInfo.call(student2);

//student1.getInfo.apply(student2);
