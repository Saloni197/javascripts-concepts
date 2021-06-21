const fs = require('fs')
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// } 
// const bookJson = JSON.stringify(book);
// fs.writeFileSync('json1.json',bookJson);


const dataBuffer = fs.readFileSync('json1.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
data.age = 40;
console.log(data.age)

const useJson = JSON.stringify(data);
fs.writeFileSync('json1.json',useJson);
