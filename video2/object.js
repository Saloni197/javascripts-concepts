let obj ={
    'Name': "Kavita",
    'Class' : "MCA",
    'Roll No' : 1234,
    'Studying' : true, 
    'Clg' : "KUK"
};

 let Key = Object.keys(obj);
 console.log("\n",Key);

 let Value = Object.values(obj);
 console.log("\n",Value);

 let Entries = Object.entries(obj);
 console.log("\n",Entries);
console.log("\n",Entries[3][1]);

for(let prop in obj){
    console.log(prop);
}