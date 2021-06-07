let obj ={
    'Name': "Kavita",
    'Class' : "MCA",
    'Roll No' : 1234,
    'Studying' : true, 
    'Clg' : "KUK"
};
console.log(obj)

//value
let str = JSON.stringify(obj);
console.log(1, str);

//value,replacer
let str1 = JSON.stringify(obj , ["Class","Clg","Roll No"]);
console.log(2,str1);
//or 
function replace(key , val){
    if(typeof val === 'string') return undefined;
    else return val;
}
let str2 = JSON.stringify(obj,replace);
console.log(3,str2);

//value,replacer,space
 str = JSON.stringify(obj,null,'\t\t');
console.log(4,str);







